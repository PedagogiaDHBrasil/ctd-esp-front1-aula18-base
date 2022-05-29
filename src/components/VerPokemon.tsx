import { FC, useEffect } from "react";
import PropTypes from "prop-types";
import { useQuery } from "react-query";
import { getPokemon } from "../queries/pokemon.queries";
import { useSelector } from "react-redux";
import { IRootState } from "../store/store";
import { Pokemon } from "../types/pokemon.types";

type VerPokemonDetalheProps = {
  pokemonSelecionado: Pokemon;
};

const VerPokemonDetalhe: FC<VerPokemonDetalheProps> = ({
  pokemonSelecionado,
}: VerPokemonDetalheProps) => {
  const {
    data: pokemon,
    isLoading,
    refetch,
  } = useQuery("obterPokemon", () => getPokemon(pokemonSelecionado.name));

  useEffect(() => {
    if (pokemonSelecionado) {
      refetch();
    }
  }, [refetch, pokemonSelecionado, pokemonSelecionado?.name]);
  if (isLoading) return <div>Carregando Pokémon...</div>;

  return pokemon ? (
    <div className="verPokemon">
      <h4>Pokemon: {pokemon.name}</h4>
      <h5>#{pokemon.id}</h5>
      <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
    </div>
  ) : null;
};

const VerPokemon = () => {
  // Usamos useQuery para pegar o pokemon que vem do redux
  const pokemonSelecionado = useSelector<IRootState, Pokemon | null>(
    (state) => state.pokemon.pokemonSelecionado
  );
  if (!pokemonSelecionado) return <div className="verPokemon" />;
  //
  return <VerPokemonDetalhe pokemonSelecionado={pokemonSelecionado} />;
};

VerPokemon.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

export default VerPokemon;
