// var elListMovie = document.querySelector('.list-movie');
// var elMovieCardTemplate = document.querySelector('#movie-card-template').content;
// var elMovieFragment = document.createDocumentFragment();

// for (var movie of kinolar) {
//   var elMovieItem = elMovieCardTemplate.cloneNode(true);

//   elMovieItem.querySelector('.card-title').textContent = movie.title;
//   elMovieItem.querySelector('.badge').textContent = movie.year;
//   elMovieItem.querySelector('.genre').textContent = movie.genres.join(', ');
//   elMovieItem.querySelector('.cast').textContent = movie.cast.join(', ');



//   elMovieFragment.appendChild(elMovieItem);
// }

// elListMovie.appendChild(elMovieFragment);


// Pokemon

var elListPokemons = document.querySelector('.list-pokemons');
var elPokemonCardTemplate = document.querySelector('#pokemons-card-template').content;
var pokemons = pokemons
var elPocemonFragment = document.createDocumentFragment();

for (var pokemon of pokemons) {
  var elPocemonsItem = elPokemonCardTemplate.cloneNode(true);

  elPocemonsItem.querySelector('.pokemon-img').src = pokemon.img;
  elPocemonsItem.querySelector('.pokemon-title').textContent = pokemon.name;
  elPocemonsItem.querySelector('.pokemon-number').textContent = pokemon.num;
 
  elPocemonFragment.appendChild(elPocemonsItem);
}

elListPokemons.appendChild(elPocemonFragment);



