// src/components/PokemonCard.tsx
import type { Pokemon } from "../types/pokemon";
import TypeBadge from "./typeBadge";

interface Props {
  pokemon: Pokemon;
}

export default function PokemonCard({ pokemon }: Props) {
  return (
    <div className="bg-white p-4 rounded shadow text-center">
      <img src={pokemon.image} alt={pokemon.name} className="mx-auto w-40" />
      <h2 className="text-xl font-bold mt-2 capitalize">{pokemon.name}</h2>
      <p>Poids : {pokemon.weight} kg</p>
      <div className="flex justify-center gap-2 mt-2">
        {pokemon.types.map((type) => (
          <TypeBadge key={type} type={type} />
        ))}
      </div>
    </div>
  );
}
