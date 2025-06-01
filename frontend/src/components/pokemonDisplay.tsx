import type { Pokemon } from "../types/pokemon";

interface Props {
  pokemon: Pokemon;
}

export default function PokemonDisplay({ pokemon }: Props) {
  return (
    <div className="bg-[#848484] rounded-xl2 w-2/4 aspect-square p-1 relative flex items-center justify-center">
      <p className="absolute top-2 left-2 font-pikafont text-[clamp(1px,3vw,32px)]">
        n:{pokemon.id}
      </p>
      <img
        src={pokemon.image}
        alt={pokemon.name}
        className="w-full object-contain"
      />
    </div>
  );
}
