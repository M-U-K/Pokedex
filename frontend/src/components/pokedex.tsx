import { useState } from "react";
import PokemonDisplay from "./pokemonDisplay";
import PokemonInfo from "./pokemonInfo";
import SearchBar from "./searchBar";
import { useFetchPokemon } from "../hooks/useFetchPokemon";

export default function Pokedex() {
  const [query, setQuery] = useState("25");
  const { data, loading, error } = useFetchPokemon(query);

  return (
    <div className="w-full max-w-[900px] max-h-full aspect-square bg-[url('/pokedex-bg.png')] bg-cover bg-no-repeat m-[1%] flex items-center justify-center">
      <div className="w-[90%] max-w-[720px] bg-[#D9D9D9] rounded-xl2 shadow-md flex flex-col items-center pt-[2%] gap-4 border-black border-[0.2vw] px-4 pb-4 translate-y-[5%]">
        {loading && (
          <p className="text-black font-pikafont text-[clamp(12px,1.8vw,24px)]">
            Chargement...
          </p>
        )}
        {!loading && error && (
          <p className="text-red-500 font-pikafont text-[clamp(12px,1.8vw,24px)]">
            Erreur
          </p>
        )}
        {data && (
          <>
            <PokemonDisplay pokemon={data} />
            <PokemonInfo pokemon={data} />
          </>
        )}

        <div className="w-full mt-auto">
          <SearchBar onSearch={setQuery} />
        </div>
      </div>
    </div>
  );
}
