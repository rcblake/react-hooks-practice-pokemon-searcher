import { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const [sprite, setSprite] = useState(pokemon.sprites.front);
  const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

  const handleSpriteClick = (e) => {
    setSprite(
      e.target.src === pokemon.sprites.front
        ? pokemon.sprites.back
        : pokemon.sprites.front
    );
  };

  return (
    <Card>
      <div onClick={handleSpriteClick}>
        <div className="image">
          <img src={sprite} alt={name} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
