/*
Using the data.json you will create a list of pokemons.
We've created the necessary components for you, now it's
up to you to pass the props properly (😅) to these
components. Begin with the Pokemon's names, and continue on
with their types. Don't forget the key! Read more here:
https://reactjs.org/docs/lists-and-keys.html
*/

/*Extra!
Feel free to create more components, such as header/footer,
or why not include some more data from the array? */
import { Pokemon } from "./components/Pokemon";
import data from "./data.json";




export const App = () => {
  const pokemonData = data.pokemons;
  console.log(pokemonData)
  
  const renderPokemon = () => 
    pokemonData.map(
      ({id, name, weight, height, weeknesses, types, category}) => (
      <Pokemon
      key={id}
      name={name}
      weight={weight}
      height={height}
      types={types}
      weeknesses={weeknesses}
      category={category}
      />
    )
  );

  const testRender = renderPokemon();
  
  return (
    <div className="App">
      {testRender}
    </div>
  );
};
