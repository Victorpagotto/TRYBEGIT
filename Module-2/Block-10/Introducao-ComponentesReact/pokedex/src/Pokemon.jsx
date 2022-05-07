import React from "react";
import './pokemon.css';
import propTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const pokemon = this.props.pokemon;
    return (
      <div className="poke_container">
        <div className="poke_info">
          <ul className="info_list">
          <li className="info">Name: {pokemon.name}</li>
          <li className="info">Type: {pokemon.type}</li>
          <li className="info">Average Weight: {`${pokemon.averageWeight.value}${pokemon.averageWeight.measurementUnit}`}</li>
          </ul>
        </div>
        <div className="poke_image">
          <img src={pokemon.image} alt={`${pokemon.name}'s illustration.`} className='pokemon_image' />
        </div>
      </div>
    )
  }
}

Pokemon.propTypes = {
  pokemon: propTypes.shape({
    name: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    averageWeight: propTypes.exact({
      value: propTypes.number.isRequired,
      measurementUnit: propTypes.string.isRequired,
    }),
  }),
}

export default Pokemon;