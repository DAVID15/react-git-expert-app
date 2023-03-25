import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en <GifItem />', () => { 
    
    const title = 'Saitama';
    const url = 'https://www.google.es/';

    test('debe de hacer match con el snapshot', () => { 
        const {container} = render( <GifItem title={title} url={url} /> );
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar la imagen con el URL y el ALT indicado', () => { 
        render( <GifItem title={title} url={url} /> );
        //lo muestra en la consola
        //screen.debug();

        //opcion 1
        //expect(screen.getByRole('img').src).toBe(url);
        //expect(screen.getByRole('img').alt).toBe(title);

        //opcion2 - con destructuracion
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);        
    });

    test('debe de mostrar el titulo en el componente', () => { 
        render( <GifItem title={title} url={url} /> );
        expect(screen.getByText(title)).toBeTruthy();
    });


});