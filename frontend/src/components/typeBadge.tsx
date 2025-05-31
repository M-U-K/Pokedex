interface Props {
  type: string;
}

export default function TypeBadge({ type }: Props) {
  return (
    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800 capitalize">
      {type}
    </span>
  );
}
