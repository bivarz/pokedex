import React from 'react';

import { Link } from 'react-router-dom'

import { Container } from './style.js';

function Card({ pokemon }) {
  const colorType= {
    bug: '#b1c12e',
    dragon: '#755edf',
    fairy: '#f4b1f4',
    fire: '#e73b0c',
    ghost: '#6060b2',
    ground: '#d3b357',
    normal: '#c8c4bc',
    psychic: '#ed4882',
    steel: '#b5b5c3',
    dark: '#333333',
    electric: '#fcbc17',
    fighting: '#823551',
    flying: '#a3b3f7',
    grass: '#74c236',
    ice: '#a3e7fd',
    poison: '#934594',
    rock: '#b9a156',
    water: '#3295f6'
  }
  return (
    <Container> 
       <Link to={`/pokemon/${pokemon.id}`}>
      <div className="container">
        <div className="card">
          <div className="button_info">
            {pokemon.id}            
          </div>
          <h2 className="id_card_middle">{pokemon.name}</h2>
          <div className="imgBx">
        
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          
          </div>
          <div className="contentBx">
            <h3>{pokemon.name}</h3>

          </div>
          <div className="type_area">
            <div className="type">
              {pokemon.types.map((type) => (
                <span  className="types_form" style={{ backgroundColor: colorType[type.type.name] }}>
                  { (type.type.name).split(' ').map((l) => l.charAt(0).toUpperCase() + l.substring(1)).join(' ')}
               
                </span>
              ))}
            </div>
          
          </div>
        </div>
      </div>
      </Link>
    </Container>
  );
}

export default Card;
