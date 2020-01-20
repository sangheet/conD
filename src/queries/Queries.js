import React from 'react';
import { gql } from "apollo-boost";
import { Query } from "react-apollo";



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
          if (loading) return <div className="mainContent"><img src="loader.gif" width="400px" height="400px" /></div>;
          if (error) return <div className="mainContent">Ocurrió un error conectando a base de datos, intente nuevamente por favor!</div>;
  
          return data.edificios.map(edificio => {
            return <div className="mainContent"><div className="listItem" key={edificio.id}>{edificio.nameEdificio}<div className="deleteButton"></div></div></div>;
          });
        }}
      </Query>
    );
  };

  export {GetEdificiosQuery};