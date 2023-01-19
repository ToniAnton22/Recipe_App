/* eslint-disable react/jsx-key */

import {useEffect, useState} from "react";

function Popular() {
  useEffect(()=>{
    getPopular();
  },[]);
  const [popular,setPopular]=useState([]);
  const getPopular=async()=>{
    const api=await fetch(`https://api.spoonacular.com/recipes/random?apiKey=aeaeaf5cc3c3406dae1f877eccab04a7&number=9`);
    const data=await api.json();
    console.log(data);
    setPopular(data.recipes);
  };


  
  return (
    <div >
      {popular.map((recipe)=>{
        return(
          <div >
            <h3>Popular picks</h3>
            {popular.map((recipe)=>{
              return(
                <div className="min-h-full   overflow-hidden">
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title}/>
                </div>
              );
           })}            
          </div>
        );
      })}
    </div>
  );
}

export default Popular