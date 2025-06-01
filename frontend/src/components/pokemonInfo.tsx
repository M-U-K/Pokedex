import type { Pokemon } from "../types/pokemon";

interface Props {
  pokemon: Pokemon;
}

export default function PokemonInfo({ pokemon }: Props) {
  return (
    <div className="text-black px-4 py-3 w-full max-w-[90%] flex flex-col gap-10 mt-5  ">
      <div className="flex justify-between w-full">
        <span className="font-pikafont text-[clamp(1px,2vw,18px)]">
          Name: {pokemon.name}
        </span>
        <span className="font-pikafont text-[clamp(1px,2vw,18px)]">
          Height: {pokemon.height}
        </span>
      </div>
      <div className="flex justify-between w-full">
        <span className="font-pikafont text-[clamp(1px,2vw,18px)]">
          Type: {pokemon.types.join(",")}
        </span>
        <span className="font-pikafont text-[clamp(1px,2vw,18px)]">
          Weight: {pokemon.weight}
        </span>
      </div>
    </div>
  );
}
