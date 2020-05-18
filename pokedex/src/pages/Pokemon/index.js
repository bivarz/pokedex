import React, { useEffect, useState } from 'react';
import api from '../../services/api.js'
import { Link } from 'react-router-dom'
import { Container } from './style'
import colorTypes from './colors'



function Pokemon({ match }) {

  const [poke, setPoke] = useState({
    sprites:{},
    stats:[],
    abilites:[]
  }); 
  const pokeImage = poke.sprites.front_default
  const [image, setImage] = useState([pokeImage]);
  


  const [loading, setLoading] = useState(true) 
  const pokeParams = match.params.id
  

useEffect(()=>{ 

  async function fecthPokemon(){
      const results = await api.get(`${pokeParams}`);  
      setPoke(results.data)   
      setLoading(false)
      
  } 
  fecthPokemon(); 
  setImage(poke.sprites.front_default)  
},[])

useEffect(()=>{ 
 setImage([poke.sprites.front_default])
},[poke])




function handleChangeImageBack(){
  setImage([poke.sprites.back_default])
}

function handleChangeImageFront(){
  setImage([poke.sprites.front_default])
}  



console.log(poke.abilities)

return(
  
  <div>
  {loading ? <h1 style={{ textAlign: 'center', color:'gray' }}>Loading...</h1> : (
   
    <Container >
    <div className="top"> 
      <h2>#{poke.id}</h2>
      <h2>{(poke.name).split(' ').map((l) => l.charAt(0).toUpperCase() + l.substring(1)).join(' ')}</h2>
      <div className="type">
         {poke.types.map((type) => (
                <span key={poke.stats.stat} className="types_form" style={{ backgroundColor: colorTypes[type.type.name] }}>
                  { (type.type.name).split(' ').map((l) => l.charAt(0).toUpperCase() + l.substring(1)).join(' ')}
                </span>
              ))}
            </div>   
          </div>
    <div className="all_info">    
      <div className="image_content">
        <div>
        <img src={image} alt={poke.name}/>
         <div className="turn">
           <button onClick={handleChangeImageFront}>Front</button>
           <button onClick={handleChangeImageBack}>Back</button> 
          </div>         
      </div>
      </div>
      <span className="stats">
        <div>   
          <h3>Stats</h3><br/>
          {poke.stats.map(s => (
           <span key={s.stat.name}>{ `${(s.stat.name).split(' ').map((l) => l.charAt(0).toUpperCase() + l.substring(1)).join(' ')}:  ${s.base_stat}`}<br/></span>     
           ))}
         </div>  
      </span>      
      <span className="bu">        
          <div className="bu_top">  
           <div className="w">
              <h3>Weight</h3>
              <p>{`${poke.weight/10}`} Kg</p>
           </div>  
           <div className="h">
              <h3>Height</h3>
              <p>{`${poke.height*10}`} cm</p> 
            </div>
            <div className="abilites">
            <h3>Abilites</h3>
             {poke.abilities.map(s => (
           <span key={s.ability.name}>{ `${(s.ability.name).split(' ').map((l) => l.charAt(0).toUpperCase() + l.substring(1)).join(' ')}`}<br/></span>     
           ))}    
            </div>
          </div>                       
        </span>
      </div> 
   
    </Container> 
   
   )}
  </div>
 )
};


export default Pokemon;
