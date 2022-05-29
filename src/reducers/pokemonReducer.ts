import {
  BuscarPokemonType,
  SelecionarPokemonType,
} from "../actions/pokemonActions";
import { Pokemon } from "../types/pokemon.types";

export type PokemonState = {
  procurar: string;
  pokemonSelecionado: Pokemon | null;
};

const pokemonReducer = (
  state = {} as PokemonState,
  action: SelecionarPokemonType | BuscarPokemonType
) => {
  switch (action.type) {
    case "BUSCAR_POKEMON":
      return { ...state, procurar: action.payload.name };
    case "SELECIONAR_POKEMON":
      return { ...state, pokemonSelecionado: action.payload.pokemon };
    default:
      return state;
  }
};
export default pokemonReducer;
