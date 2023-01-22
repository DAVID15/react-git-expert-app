import React from "react";
import {useState} from "react";
import {AddCategory, GifGrid} from "./components";

const GifExpertApp = () => {

    //para refrescar el html                     //siempre hay que inicializar
    const [categories, setCategories] = useState([ 'One Punch' ]);

    //funcion añadir una nueva categoria
    const onAddCategory = (newCategory) => {
        //...categories = todo lo que contenga el array
        //setCategories([event, ...categories]);

        //verificamos que si existe el valor que no lo meta en el array
        //con el return salimos de la funcion y no la seguimos ejecutando
        if(categories.includes(newCategory)) return;

        setCategories(categories.concat(newCategory));      
    }

    return (
        <>
            {/*titulo*/}
            <h1>GifExpertApp</h1>
            
            {/*input*/}
            <AddCategory 
                /*Se pueden mandar funciones entre componentes
                   aqui estamos mandando setCategories para añadir una
                   nueva categoria desde el componente AddCategory
                */
                //onAddCategory = {setCategories} 
                
                /*lo normal en react es el componente mande 
                  directamente el valor o proceso realizado                 
                */
                onNewCategory = { (event) => onAddCategory(event) }
            />
            
            {/*lista*/}
            {
                /*map(function callback(currentValue, index, array)*/
                categories.map((category, i) => (
                    /*la key siempre es obligatorio. Tiene que ser unica de toda la lista*/
                    /*<div key={ category } >
                        <h3>{ category }</h3>
                        <li>{ category }</li>
                    </div>*/

                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }    
                 
        </> 
    )
}

export {
    GifExpertApp
}