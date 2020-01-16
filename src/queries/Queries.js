import React from 'react';
import { gql } from "apollo-boost";
import { Query } from "react-apollo";


const GetCharactersQuery = () => {
    return (
      <Query
        query={gql`{
         characters {
                    results{
                            id
                            name
                            image
                            }
                    }
          
        }`}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Cargando registros...</p>;
          if (error) return <div className="mainContent">Ocurrió un error conectando a base de datos, intente nuevamente por favor!</div>;
  
          return data.characters.results.map(character => {
            return <table><tbody><tr><td><img src={character.image} alt={character.name} width="20px"height="20px"/></td><td key={character.id}>{character.name}</td><td key={character.id+character.id}>ID: {character.id}</td></tr></tbody></table>;
          });
        }}
      </Query>
    );
  };

  const GetEdificiosQuery = () => {
    return (
      <Query
        query={gql`{
         
         edificios{
          id
          nameEdificio
    }
  
         }
          
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Cargando registros...</p>;
          if (error) return <div className="mainContent">Ocurrió un error conectando a base de datos, intente nuevamente por favor!</div>;
  
          return data.edificios.map(edificio => {
            return <ul><li key={edificio.id}>{edificio.nameEdificio}</li></ul>;
          });
        }}
      </Query>
    );
  };

  export {GetCharactersQuery ,GetEdificiosQuery};