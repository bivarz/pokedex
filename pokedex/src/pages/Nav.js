import React from 'react';

import { Link } from 'react-router-dom'
import {FaHome } from 'react-icons/fa'
import {  Nav, Button } from './styles'
import pokeReact from '../assets/pokeReact.png'


export default function Main(){
  return (
   <Nav>
    <h1>
    <img src={pokeReact} alt=""/>
    </h1>
   
    <Link to="/">
    <Button>
    <FaHome color="#ffffff" size={25} />
    </Button>
  
    </Link>
    </Nav>

  )

}
