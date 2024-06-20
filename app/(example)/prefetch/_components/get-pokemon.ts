export const getPokemon = {
  queryKey: ["pokemon"],
  queryFn: async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    return response.json();
  },
};
