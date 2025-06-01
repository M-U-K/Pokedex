import { useState, useEffect } from "react";
import type { Pokemon } from "../types/pokemon";

export function useFetchPokemon(query: string) {
  const [data, setData] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query || isNaN(Number(query)) || Number(query) <= 0) return;

    const controller = new AbortController();
    setError(null);
    setData(null);
    setLoading(true);

    fetch(`http://localhost:3000/pokemon/${query}`, {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error("Erreur API");
        return res.json();
      })
      .then(setData)
      .catch((e: Error) => {
        if (e.name !== "AbortError") setError(e.message);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [query]);

  return { data, loading, error };
}
