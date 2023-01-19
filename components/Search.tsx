import axios from "axios";

import {useState} from "react";
//import "../styles/global.css";
//import RecipeTile from "./RecipeTile";

function Search() {
  const [query, setquery] = useState("");
  //const [recipes, setrecipes] = useState([]);

  const YOUR_APP_ID = `789a307d`;
  const YOUR_APP_KEY = "6d9c105c98aedc19063493259682c12c 	—";

  const url = ` https://cors-anywhere.vercel.com/https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

  const getRecipeInfo = async () => {
    const result = await axios.get(url);
    // setrecipes(result.data.hits);
    console.log(result.data.hits);
  };

  const onSubmit = (e: {preventDefault: () => void}) => {
    e.preventDefault();
    getRecipeInfo();
  };

  return (
    <div className="app">
      <h1 onClick={getRecipeInfo}>Food Recipe Plaza 🍔</h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          className="app__input"
          type="text"
          placeholder="enter ingridient"
          autoComplete="Off"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input className="app__submit" type="submit" value="Search" />
      </form>

      {/* <div className="app__recipes">
        {recipes !== [] &&
          recipes.map((recipe) => {
            return <RecipeTile recipe={recipe} />;
          })}
      </div> */}
    </div>
  );
}

export default Search;
