import { fileURLToPath } from "node:url";

const allowed = new Set([
  "Intros",
  "Intro",
  "Video",
  "Lyrics",
  "Line",
  "Placard",
  "Note",
]);

const allowedList = [...allowed].join(", ");

function check(node, context) {
  const name = node.name;
  if (!name || !/^[A-Z]/.test(name) || allowed.has(name)) return;

  const file = context.fileURL
    ? fileURLToPath(context.fileURL).replace(`${process.cwd()}/`, "")
    : "an MDX file";
  const hint = name === "Lyric" ? " Did you mean <Line>?" : "";

  throw new Error(
    `Unknown content component <${name}> in ${file}. ` +
      `Allowed components: ${allowedList}.${hint}`,
  );
}

/**
 * Satteri mdast plugin: fail the build with a readable message when an MDX
 * content file uses a component that the page does not provide.
 */
export const validateContentComponents = {
  name: "validate-content-components",
  mdxJsxFlowElement(node, context) {
    check(node, context);
  },
  mdxJsxTextElement(node, context) {
    check(node, context);
  },
};
