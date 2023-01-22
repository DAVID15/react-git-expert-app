//con nuevo fichero indicamos rafc

import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ( {category} ) => {

  //esto es un hook creado por nosotros
  const { images, isLoading } = useFetchGifs( category );
  
  return (
    <>
        <h3>{category}</h3>

        {
          /*es un if en react*/
          isLoading && (<h2>Cargando...</h2>)
        }

        <div className="card-grid">
          {
            //sin destructuracion
            /*images.map( (img, i) => (
              <li key={ img.id }>{ img.title }</li>
            ))*/

            //con destructuracion
            /*images.map( ({id, title}) => (
              <li key={ id }>{ title }</li>
            ))*/

            /*lo movemos a un nuevo componente*/
            images.map( (image) => (
              <GifItem 
                key={ image.id } 
                { ...image }//con esto estamos pasando todas las propiedades de image
              />
            ))
          }
        </div>
    </>
  )

}