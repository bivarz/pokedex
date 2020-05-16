
//Get All pokemons in Api Array
export async function getAllPokemons(url) {
 return new Promise((resolve,reject)=>{
   fetch(url).then(res=> res.json()).then(data=>{ resolve(data)})
 })
}

//Get ONE pokemons in object inside Array,[{name:pokemon, url:.../pokemon}]
export async function getOnePokemon({url}){
  return new Promise((resolve,reject)=>{
    fetch(url).then(res=> res.json()).then(data=>{ resolve(data)})
  })
}

