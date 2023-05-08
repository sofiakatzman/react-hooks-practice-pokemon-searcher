import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({singlepokemon}) {

  const [view, setView] = useState(true) // true = front, false = back

  const handleFlip = () => {
    setView(!view)
  }

  return (
    <Card>
      <div>
        <div className="image">
          <img alt="oh no!" src={view ? singlepokemon.sprites.front : singlepokemon.sprites.back} onClick={handleFlip}/>
        </div>
        <div className="content">
          <div className="header">{singlepokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {singlepokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
