import React,{ useState, useEffect} from "react";

import { Container } from './styles'




export default function Main(){
 const [pokemons, setPokemons] = useState([]);
 const [nextPokemons, setnextPokemons] = useState([]);


useEffect(()=>{
    fetchItems();
},[]);



const fetchItems = async() =>{
  const data = await fetch(
    'https://pokeapi.co/api/v2/pokemon/'
  );
  const items = await data.json();

 setPokemons(items.results)  
}

 
    return (
    <Container>
    <ul>
    {pokemons.map(item => (
      <h3 key={item.name}>{item.name} = {item.url}</h3>))}
    </ul>

    <button>
       prev
    </button>
    <button>
     next
    </button>
    </Container>

  );
    }

