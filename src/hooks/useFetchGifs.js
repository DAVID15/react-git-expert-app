

import React, { useEffect, useState } from 'react'
import { getGifs } from '../herlpers/getGifs';

//un hook es solo una funcion que regresa algo
export const useFetchGifs = ( category ) => {
    const [images, setImages] = useState([]);
    const [isLoading, setLoading] = useState([]);


    const getImages = async() => {
      const newImages = await getGifs( category );
      setImages(newImages);
      setLoading(false);
    }

    /*useEffect indicar que solo se ejecute 1 vez*/
    useEffect( () => {
      getImages();
    }, []);

    //esto es un objeto que retorna
    return {
      images: images,
      isLoading: isLoading
    }
}
