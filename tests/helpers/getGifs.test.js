import { getGifs } from '../../src/helpers/getGifs';

describe('Pruebas en getGifs()', () => { 

    test('debe de retornar un arreglo de gifs', async() => { 
        const gifs = await getGifs('Onw Punch');
        
        //estamos indicando que el arreglo tenga + de un elemento
        expect(gifs.length).toBeGreaterThan(0);
        
        //estamos indicando que el arreglo tenga esta estructura
        expect(gifs[0]).toEqual({
            id: expect.any(String),//cualquier string
            title: expect.any(String),
            url: expect.any(String)
        });
    });

});