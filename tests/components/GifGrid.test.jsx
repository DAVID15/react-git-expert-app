import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

//Un Mock en Jest es un objeto que imita la interfaz y propiedades de una función real, o una clase, 
//o un módulo, o cualquier otro elemento de software, que puedes definir un comportamiento,
jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => { 
    
    const category = 'One Punch';

    test('debe de mostrar el loading inicialmente', () => { 
        useFetchGifs.mockReturnValue({
            images:[], 
            isLoading: true        
        });

        render( <GifGrid category={category} /> );
        
        //indicamos que inicialmente tiene que mostrar el componente
        //el texto de Cargando... + category
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText(category) );
    });

    test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => { 
        
        const gifs = [
            {
                id:'ABC',
                title: 'Saitama',
                url: 'www.google.com'
            },
            {
                id:'123',
                title: 'Gku',
                url: 'www.as.com'
            }
        ];
        
        useFetchGifs.mockReturnValue({
            images:gifs, 
            isLoading: true        
        });

        render( <GifGrid category={category} /> );

        //estamos indicando que el array tenga 2 elementos
        expect( screen.getAllByRole('img').length ).toBe(2);
    });

});