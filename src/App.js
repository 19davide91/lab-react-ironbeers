import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ListBeers from "./Pages/ListBeers";
import NewBeer from "./Pages/NewBeer";
import RandomBeer from "./Pages/RandomBeer";
import SingleBeer from "./Pages/SingleBeer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<ListBeers />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/beers/:_id" element={<SingleBeer />} />
      </Routes>
    </div>
  );
}

export default App;
