import React from 'react';

import { Link }from "react-router-dom"
import colorType from './types'
import{ Container } from './style.js';

function Card({ pokemon }) {
  return (
    <Container>
     <div className="container">
       <div className="card">        
        <div className="button_info">{pokemon.id}          
        </div>          
         <h2 className="id_card_middle">{pokemon.name}</h2>
          <div className="imgBx">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} /></div>
             <div className="contentBx">
              <h3>{pokemon.name}</h3>
                
             </div>
                <div className="type_area"> 
                   <div className="type">
                           {pokemon.types.map(type => {
                              return (
                                <span className="types_form" style={{ backgroundColor: colorType[type.type.name] }}>
                                {(type.type.name).split(' ').map(l => l.charAt(0).toUpperCase()+ l.substring(1)).join(' ')}
                                </span>
                        )
                    })
                }      
                </div> 
             </div>
          </div>
      </div>            
  </Container> 
    );
}

export default Card;