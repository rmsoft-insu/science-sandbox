import { getQueryClient } from "@/lib/get-query-client";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { PokemonInfo } from "./_components/pokemon-info";
import { getPokemon } from "./_components/get-pokemon";

const PrefetchExamplePage = () => {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(getPokemon);

  return (
    <>
      <h1>Pokemon Info</h1>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <PokemonInfo />
      </HydrationBoundary>
    </>
  );
};

export default PrefetchExamplePage;
