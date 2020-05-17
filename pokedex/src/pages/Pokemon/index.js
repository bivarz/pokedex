import React, { useEffect, useState } from 'react';
import api from '../../services/api.js'
import { Container } from './style'
import colorTypes from './colors'


function Pokemon({ match }) {

  const [poke, setPoke] = useState({
    sprites:{},
    stats:[]
  }); 
  const pokeImage = poke.sprites.front_default
  const [image, setImage] = useState([pokeImage]);


  const [loading, setLoading] = useState(true) 
  const pokeParams = match.params.id
  

useEffect((primary)=>{ 

  async function fecthPokemon(){
      const results = await api.get(`${pokeParams}`);  
      setPoke(results.data)   
      setLoading(false)
      
  } 
  fecthPokemon(); 
  setImage(poke.sprites.front_default)  
},[])

useEffect(()=>{ 
  handleChangeImageFront();  
},[])


function handleChangeImageBack(){
  setImage([poke.sprites.back_default])
}

function handleChangeImageFront(){
  setImage([poke.sprites.front_default])
}  


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
      <div className="bu">     
      
      </div>
    </div>
    </Container> 
   
   )}
  </div>
 )
};


export default Pokemon;
