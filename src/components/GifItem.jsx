import React from 'react';
import propTypes from 'prop-types';

export const GifItem = ( { title, url, id } ) => {
  return (
    <div className='card'>
        <img src={ url } alt={ title } />
        <p>{ title }</p>
    </div>
  )
}

//estamos indicando que son obligatorios
GifItem.propTypes = {
  title: propTypes.string.isRequired,
  url: propTypes.string.isRequired,
}
