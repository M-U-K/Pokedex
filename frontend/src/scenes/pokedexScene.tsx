import { useState } from "react";
import { useFetchPokemon } from "../hooks/useFetchPokemon";
import PokemonCard from "../components/pokemonCard";

export default function PokedexScene() {
  const [query, setQuery] = useState("25");
  const { data, loading, error } = useFetchPokemon(query);

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <input
        type="text"
        placeholder="Nom ou ID"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mb-6 p-2 w-64 rounded border"
      />

      {loading && <p>Chargement…</p>}
      {error && <p className="text-red-500">{error}</p>}
      {data && <PokemonCard pokemon={data} />}
    </div>
  );
}
