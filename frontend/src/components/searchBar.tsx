interface Props {
  onSearch: (value: string) => void;
}

export default function SearchBar({ onSearch }: Props) {
  return (
    <div className="w-full bg-white rounded-full px-4 py-2 flex items-center gap-3 shadow-inner">
      <label
        htmlFor="search-input"
        className="text-black  font-pikafont text-[clamp(1px,3vw,28px)] whitespace-nowrap"
      >
        Search :
      </label>
      <input
        id="search-input"
        type="text"
        placeholder="Enter an ID"
        onChange={(e) => onSearch(e.target.value)}
        className="flex-1 outline-none text-black  font-pikafont bg-transparent text-[clamp(1px,3vw,28px)]"
      />
    </div>
  );
}
