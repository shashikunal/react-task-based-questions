import React, { useEffect, useState, useRef } from 'react';
import './pokedex.css';

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const pokeContainerRef = useRef();

  const pokemonCount = 150;
  const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5',
  };

  const mainTypes = Object.keys(colors);

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonData = [];
      for (let i = 1; i <= pokemonCount; i++) {
        const pokemon = await getPokemon(i);
        pokemonData.push(pokemon);
      }
      setPokemons(pokemonData);
    };

    fetchPokemons();
  }, []);

  const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };

  const PokemonCard = ({ pokemon, type, color }) => {
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const id = pokemon.id.toString().padStart(3, '0');

    return (
      <div className="pokemon" style={{ backgroundColor: color }}>
        <div className="imgContainer">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            alt={name}
          />
        </div>
        <div className="info">
          <span className="number">#{id}</span>
          <h3 className="name">{name}</h3>
          <small className="type">
            Type: <span>{type}</span>
          </small>
        </div>
      </div>
    );
  };

  return (
    <div className="app">
      <h1 className="heading">Pokedex</h1>
      <div className="pokeContainer" ref={pokeContainerRef}>
        {pokemons.map((pokemon) => {
          const pokeTypes = pokemon.types.map((type) => type.type.name);
          const type = mainTypes.find((type) => pokeTypes.includes(type));
          const color = colors[type];
          return <PokemonCard key={pokemon.id} pokemon={pokemon} type={type} color={color} />;
        })}
      </div>
    </div>
  );
};

export default Pokedex;
