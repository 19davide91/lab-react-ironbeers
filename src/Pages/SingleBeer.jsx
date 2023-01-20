import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function SingleBeer() {
  const [beer, setBeer] = useState(null);
  const { _id } = useParams();
  console.log("ID:", _id);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${_id}`)
      .then((response) => setBeer(response.data));
  }, [_id]);

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

export default SingleBeer;
