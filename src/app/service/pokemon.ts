import type { IGetPokemonResponse, IPokemon } from "../@types/pokemon";
import { api } from "./http-client";

async function getPokemons(): Promise<IPokemon[]> {
  const { data } = await api.get<IGetPokemonResponse>("/pokemons.json");

  return data.results;
}

export const pokemonService = {
  getPokemons,
};
