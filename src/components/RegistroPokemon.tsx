import { useState } from "react";
import { PokemonWithProps } from "../types/pokemon.types";

const RegistroPokemon = () => {
  const [pokemons, setPokemons] = useState<PokemonWithProps[]>([
    {
      id: 4,
      name: "Charmander",
      url: "",
      sprites: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        other: { home: { front_default: "" } },
      },
    },
  ]);
  const onSelectPokemon = (pokemon: PokemonWithProps) => {
    // TODO selecionar pokemon
  };

  return (
    <div className="listar">
      <h3>Historial</h3>
      {pokemons &&
        pokemons.map((pokemon: PokemonWithProps) => (
          <div
            style={{ display: "flex", cursor: "pointer" }}
            onClick={() => onSelectPokemon(pokemon)}
          >
            <img src={pokemon.sprites.front_default} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p>{pokemon.name}</p>
              <small>#{pokemon.id}</small>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RegistroPokemon;
