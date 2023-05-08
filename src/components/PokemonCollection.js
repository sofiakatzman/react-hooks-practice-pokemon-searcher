import React, { useState } from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon}) {
  return (
    <> 
    <h1>Hello From Pokemon Collection</h1>
      <Card.Group itemsPerRow={6}>
          {pokemon.map(each => {
        return (<PokemonCard singlepokemon={each} key={each.id}/>)
      })}
    </Card.Group>
    </>
  );
}

export default PokemonCollection;
