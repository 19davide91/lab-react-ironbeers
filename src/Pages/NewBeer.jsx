import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";

function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [first_brewed, setFirst_brewed] = useState("");
  const [brewers_tips, setBrewers_tips] = useState("");
  const [description, setDescription] = useState("");
  const [attenuation_level, setAttenuation_level] = useState(0);
  const [contributed_by, setContributed_by] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const addBeer = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    };

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", addBeer)
      .then(() => {
        navigate("/beers");
      });
  };

  return (
    <div>
      <NavLink to="/">
        <button>Home</button>
      </NavLink>
      <h3>Add New Beer</h3>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <label>Tagline</label>
        <input
          type="text"
          name="tagline"
          value={tagline}
          onChange={(event) => setTagline(event.target.value)}
        />
        <br />
        <label>First Brewed</label>
        <input
          type="text"
          name="first_brewed"
          value={first_brewed}
          onChange={(event) => setFirst_brewed(event.target.value)}
        />
        <br />
        <label>Brewers Tips</label>
        <input
          type="text"
          name="brewers_tips"
          value={brewers_tips}
          onChange={(event) => setBrewers_tips(event.target.value)}
        />
        <br />
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <br />
        <label>Attenuation Level</label>
        <input
          type="number"
          name="attenuation_level"
          value={attenuation_level}
          onChange={(event) => setAttenuation_level(Number(event.target.value))}
        />
        <br />
        <label>Contributed By</label>
        <input
          type="text"
          name="contributed_by"
          value={contributed_by}
          onChange={(event) => setContributed_by(event.target.value)}
        />
        <h1>
          <button type="submit">Add a new beer to the list</button>
        </h1>
      </form>
    </div>
  );
}

export default NewBeer;
