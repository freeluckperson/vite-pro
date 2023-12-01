import { useEffect, useState } from "react";

// import React, { useEffect, useState } from 'react';

const PokemonCards = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=6')
      .then(response => response.json())
      .then(data => {
        console.log(data.results)
        return setPokemonList(data.results)
      });
  }, []);

  return (
    <>
      {pokemonList.map(pokemon => (
        <div className="col-md-4 mt-4" key={pokemon.name} >
          <div className="card h-100">
            <img
              className="card-img-top"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`}
              alt={pokemon.name}
            />
            <div className="card-body">
              <h3 className="card-title text-xl font-bold">{pokemon.name}</h3>
              <p className="card-text">{pokemon.url}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

// export default PokemonCards;



function App() {
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(({ products }) => setFilter(products))
      .catch(error => console.log(error.message))
  }, [])

  return (
    <>
      <h1 className="text-bg-danger text-center">Card Layout</h1>
      <div className="container-sm">
        <div className="row">
          {filter?.map((product, index) => (
            <div key={index} className="col-md-3 mt-4">
              <div className="card h-100">
                <img className="card-img-top" height={250} src={product.thumbnail} alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{product.title.substring(0, 6)}...</h5>
                  <p className="card-text">{product.price} $</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="row">
          <PokemonCards />
        </div>
      </div >
    </>
  );

}

export default App
