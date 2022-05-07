import React from "react";
import './pokedex.css';
import Pokemon from "./Pokemon";
import pokemons from "./data";

class Pokedex extends React.Component {
  render() {
    return (
      <section className="pokedex">
        {pokemons.map((pokemon) => {
          return <Pokemon pokemon={pokemon} key={pokemon.name} />
        })}
      </section>
    )
  }
}

export default Pokedex