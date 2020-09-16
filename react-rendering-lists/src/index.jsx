import React from 'react';
import ReactDOM from 'react-dom';

function ListItem(props) {
  return <li>{props.pokemon}</li>;
}

function PokemonList(props) {
  const pokeNames = props.names;
  const listItems = pokeNames.map(obj => {
    return <ListItem key={obj.number} pokemon={obj.name} />;
  });
  return (
    <ul>{listItems}</ul>
  );
}

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

// Tim's solution
// const element = (
//   <ul>
//     {
//       pokedex.map(pokemon => {
//         return <li key={pokemon.number}>{pokemon.name}</li>;
//       })
//     }
//   </ul>
// );

ReactDOM.render(<PokemonList names={pokedex} />, document.getElementById('root'));

// Tim's solution
// ReactDOM.render(element, document.getElementById('root'));
