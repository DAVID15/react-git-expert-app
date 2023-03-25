
import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Pruebas en el hook useFetchGifs', () => { 

    test('debe de regresar el estado inicial', () => { 

        //ejecutar el Hook 
        const { result } = renderHook( () => useFetchGifs('One Punch') );
        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0);//estado inicial tiene que ser ''
        expect( isLoading ).toBeTruthy();//estado inicial tiene que ser true
    });

    test('debe de retornar un arreglo de imagnes y isLoading en false', async () => { 

        const { result } = renderHook( () => useFetchGifs('One Punch') );
        
        //tengo que esperar hasta que se cargen las imagenes
        await waitFor(
            //estamos indicando que se espere hasta que images > 0
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0);//estado inicial tiene que ser > 0
        expect( isLoading ).toBeFalsy();//estado inicial tiene que ser false
    });

});