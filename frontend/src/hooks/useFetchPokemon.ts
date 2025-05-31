import { useState, useEffect } from "react";
import type { Pokemon } from "../types/pokemon";

export function useFetchPokemon(query: string) {
  const [data, setData] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query) return;
    setLoading(true);

    fetch(`http://localhost:3000/pokemon/${query}`)
      .then((res) => {
        if (!res.ok) throw new Error("Erreur API");
        return res.json();
      })
      .then(setData)
      .catch((e: Error) => setError(e.message))
      .finally(() => setLoading(false));
  }, [query]);

  return { data, loading, error };
}
