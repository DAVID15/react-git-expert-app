import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory />', () => { 
    
    test('debe de cambiar el valor de la caja de texto', () => { 
        
        render( <AddCategory onNewCategory = { () => {} } /> );  
        
        //para disparar un evento tenemos que tener la referencia
        //del input de esta manera lo localizamos
        const input = screen.getByRole('textbox');

        //disparamos el evento
        fireEvent.input( input, { target: { value: 'Saitama' } } );

        expect( input.value ).toBe('Saitama');
    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => { 
        
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();
        
        render( <AddCategory onNewCategory = { onNewCategory } /> );  

        const input = screen.getByRole('textbox');
        const form  = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        //1. verificamos que el value del input se ha vacio
        expect( input.value ).toBe('');

        //2. verificamos que la funcion a sido llamada
        expect( onNewCategory ).toHaveBeenCalled();

        //3. verificamos que la funcion solo se llame una vez
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        
        //4. verificamos que la funcion a sido llamada con el valor de Saitama
        expect( onNewCategory ).toHaveBeenCalledWith(inputValue);
    });

    test('no debe de llamar el onNewCategory si el input esta vacio', () => { 
        
        const onNewCategory = jest.fn();
        
        render( <AddCategory onNewCategory = { onNewCategory }
             /> );  

        const form  = screen.getByRole('form');

        fireEvent.submit( form );

        //2 opciones para verificar que no se llama a la funcion onNewCategory
        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();
    });

});