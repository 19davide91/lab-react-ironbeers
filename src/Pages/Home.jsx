import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h3>
        <Link to={"/beers"}> All Beers</Link>
      </h3>
      <h3>
        <Link to={"/random-beer"}> Random Beer</Link>
      </h3>
      <h3>
        <Link to={"/new-beer"}> New Beer</Link>
      </h3>
    </div>
  );
}

export default Home;
