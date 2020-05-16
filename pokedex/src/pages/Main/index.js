import React,{ useState, useEffect} from "react";
import {getAllPokemons, getOnePokemon} from  './getPokemons'

import { Container } from './styles'


function Main(){


  const [poke, setPoke] = useState([])
  const [nPoke, setnPoke] = useState([])
  const [nextPageUrl, setnextPageUrl] = useState('')
  const [prevPageUrl, setprevPageUrl] = useState('')
  const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'



 useEffect (()=>{
      async function getData(){
        const response = await getAllPokemons(baseUrl);
        setnextPageUrl(response.next);
        setprevPageUrl(response.prev);
      }
       getData();
  },[])
  


  return(
    <Container> 
    <ul>
    
   </ul>
   </Container>
  );
}



export default Main;