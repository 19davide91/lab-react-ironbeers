import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function ListBeer() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => setBeers(response.data));
  }, []);

  return (
    <div>
      <NavLink to="/">
        <button>Home</button>
      </NavLink>
      <>
        {beers.map((beer) => {
          return (
            <div key={beer.name}>
              <img height={"100 px"} src={beer.image_url} alt={"beer_image"} />
              <h2>
                <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
              </h2>
              <h3>{beer.tagline}</h3>
              <p>Created by: {beer.contributed_by}</p>
            </div>
          );
        })}
      </>
    </div>
  );
}

export default ListBeer;
