import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemon, setPokemon] = useState([])
  const [filteredPoke, setFilteredPoke] = useState(null)


  useEffect(()=> {
    fetch("http://localhost:3001/pokemon")
    .then(r => r.json())
    .then(data => setPokemon(data))
  }, [])

  const handleSearch = (search) => {
    //makes sure that if the search bar is empty all pokemon are rendered 
    if (search === "") {
      setFilteredPoke(null)
    }
    const found = pokemon.filter(each => each.name.toLowerCase().includes(search.toLowerCase()))
    setFilteredPoke(found)
    }
  
  const handleAdd = (name, hp, front, back) => {

    let data =   {
      name: name,
      hp: hp,
      sprites: {
        front: front,
        back: back
      }
    }

    console.log(data)
    
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),  
    })

  }  

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleAdd={handleAdd}/>
      <br />
      <Search handleSearch={handleSearch}/>
      <br />
      <PokemonCollection pokemon={filteredPoke ? filteredPoke : pokemon}/>
    </Container>
  );
}

export default PokemonPage;
