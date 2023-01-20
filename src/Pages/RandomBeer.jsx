import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function RandomBeer() {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((response) => setBeer(response.data));
  }, []);

  return (
    <div>
      <NavLink to="/">
        <button>Home</button>
      </NavLink>

      {beer === null && <p>Loading details...</p>}
      {beer !== null && (
        <div>
          <img height={"100 px"} src={beer.image_url} alt={"beer_image"} />
          <h2>{beer.name}</h2>
          <h3>{beer.tagline}</h3>
          <p>{beer.first_brewed}</p>
          <p>{beer.attenuation_level}</p>
          <p>{beer.description}</p>
          <p>{beer.contributed_by}</p>
        </div>
      )}
    </div>
  );
}

export default RandomBeer;
