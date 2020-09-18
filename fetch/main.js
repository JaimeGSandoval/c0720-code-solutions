/* eslint-disable no-console */

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

fetch('https://pokeapi.co/api/v2/pokemon/7')
  .then(response => response.json())
  .then(pokimon => console.log(pokimon))
  .catch(error => console.error(error));
