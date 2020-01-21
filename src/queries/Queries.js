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
          stateEdificio
          userCreated
    }
  
         }
          
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <div className="mainContent"><img src="loader.gif" alt="Cargando..." width="400px" height="400px" /></div>;
          if (error) return <div className="mainContent">Ocurrió un error conectando a base de datos, intente nuevamente por favor!<br/><img src="error.png" width="80%" alt="Error"/></div>;
          
          function checkStatus(value) {
            if (value === 2) {
              return ("listItem unActive");
            } else {
              return("listItem");
            }
          }

          return data.edificios.map(edificio => {
            return <div key={edificio.id} className={checkStatus(edificio.stateEdificio)} > <div className="itemTitle">{edificio.nameEdificio}</div>  <div className="details">Creado por: {edificio.userCreated} </div> <div className="deleteButton"></div><div className="editButton"></div></div>;
          });
        }}
      </Query>
    );
  };

  


 
  export {GetEdificiosQuery};