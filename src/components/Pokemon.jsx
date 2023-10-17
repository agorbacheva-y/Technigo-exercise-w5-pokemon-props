// Destructure pokemon props here :)
/*
"name": "Bulbasaur",
"id": 1,
"height": 0.7,
"weight": 6.9,
"types": ["grass", "poison"],
"weeknesses": ["fire", "psychic", "flying", "ice"],
"category": "seed"
*/
import { Type } from "./Type"

export const Pokemon = ({name, height, weight, types, weeknesses, category}) => {
  console.log(weeknesses.toString());
  return (<div>
    <p>Name: {name}</p>
    <p>Weight: {weight}</p>
    <p>Height: {height}</p>
    <p>Category: {category}</p>
    
    <Type types={types}/>
    <p>weeknesses: {weeknesses.toString()}</p>
    
  </div>);
};

Type.defaultProps = {
  types: "No type",
};