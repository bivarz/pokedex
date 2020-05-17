import React,{ useState, useEffect} from "react";

import {getAllPokemons, getOnePokemon} from  '../../services/getPokemons'
import Card from '../../pages/Card/Card'
import { Container, Button } from './styles'
import { FaArrowCircleRight ,FaArrowCircleLeft} from 'react-icons/fa'


function Main(){


  const [poke, setPoke] = useState([]);
  const [nextPageUrl, setnextPageUrl] = useState('');
  const [prevPageUrl, setprevPageUrl] = useState('');
  const [loading, setLoading] = useState(true)
  const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'



 useEffect (()=>{
      async function getData(){
        const response = await getAllPokemons(baseUrl);
   
        setnextPageUrl(response.next); 
        setprevPageUrl(response.prev);
        await loadPokemon(response.results);
        setLoading(false);
      }
       getData();
  },[])
  
  const loadPokemon = async(data) => {
    const poke = await Promise.all(data.map(async pokemon =>{
      const pokemonStore = await getOnePokemon(pokemon);
        return pokemonStore
    }))
    setPoke(poke);
  }

  const next = async()=>{
    let data = await getAllPokemons(nextPageUrl);
    await loadPokemon(data.results);
    setLoading(false);
    setnextPageUrl(data.next);
    setprevPageUrl(data.previous);
  }
  const prev = async()=>{
    let data = await getAllPokemons(prevPageUrl);
    await loadPokemon(data.results);
    setLoading(false);
    setnextPageUrl(data.next);
    setprevPageUrl(data.previous);
  }


console.log(poke);

  return(
   
    
    <div>
      {loading ? <h1 style={{ textAlign: 'center' }}>Loading...</h1> : (
       
        <Container >
          <div className="button_area">
            <Button onClick={prev}>
            <FaArrowCircleLeft />
            </Button>
            <h1>Pokémons</h1>
            <Button  onClick={next}>
            <FaArrowCircleRight />
            </Button>
          </div>
          <div className="card_content">
          <div className="card">
          
            {poke.map((pokemon) => {
              return <Card key={pokemon.name} pokemon={pokemon} />
            })}
          </div>
          <div className="button_area">
            <Button onClick={prev}>
            <FaArrowCircleLeft />
            </Button>
           
            <Button  onClick={next}>
            <FaArrowCircleRight />
            </Button>
          </div>
          </div>
        </Container> 
       
      )}
    </div>
 
  );
}



export default Main;