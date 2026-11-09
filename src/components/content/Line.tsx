type LineProps = {
  vi?: string;
  en?: string;
};

export default function Line({ vi, en }: LineProps) {
  if (!vi || !en) {
    throw new Error("<Line> needs both a vi and an en attribute.");
  }

  return (
    <li className="lyric">
      <span className="lyric-vi" lang="vi">
        {vi}
      </span>
      <span className="lyric-en" lang="en">
        {en}
      </span>
    </li>
  );
}
