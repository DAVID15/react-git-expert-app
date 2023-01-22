import { useState } from "react";
                    
                    //aqui nos traemos las propertis 
const AddCategory = ( props ) => {

    const [inputValue, setinputValue] = useState('');    
    
    //los parametros se pueden desestructurar para no tener que 
    //poner event.target.valuey cambiarlo por target.value
    //para eso hay que indicar 
    //const onInputChange = ({target})
    const onInputChange = (event) => {
        setinputValue(event.target.value);
    }

    const onSubmit = (event) => {
        //con esto indicamos al form que no se refresque cuando 
        //confirmamos con enter, por defecto el form siempre se refresca
        event.preventDefault();
        
        //validaciones
        //con el return nos salimos de la funcion y no se sigue ejecutando
        if (inputValue.trim().length < 1) return;
        
        //añadimos la categoria utilizando las propertires y llamando
        //a la properti que le pasamos
        props.onNewCategory( inputValue.trim() ); 
        
        //despues de pulsar enter se limpia el input
        setinputValue('');
    }

    return (
        <>
            <form onSubmit={ (event) => onSubmit(event) }>
                
                <input 
                    type="text" 
                    placeholder="Buscar gifs" 
                    value={ inputValue } 
                    onChange={ (event) => onInputChange(event) }       
                />

            </form>
        </>
    )
}

export {
    AddCategory
}

