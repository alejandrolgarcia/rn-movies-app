import React, { createContext, useState } from 'react';

interface ImageColors {
    primary: string;
    secundary: string;
}

interface ContextProps {
    colors: ImageColors;
    prevColors: ImageColors;
    setMainColors: (colors: ImageColors) => void;
    setPrevMainColors: (colors: ImageColors) => void;
}

/**
 * Definir como sera el Context
 */
export const GradientContext = createContext({} as ContextProps );

/**
 * Definir Provider que servira como host de la informacion que se manejara
 */
export const GradientProvider = ({ children }: any ) => {

    const [colors, setColors] = useState<ImageColors>({
        primary: 'transparent',
        secundary: 'transparent'
    })

    const [prevColors, setPrevColors] = useState<ImageColors>({
        primary: 'transparent',
        secundary: 'transparent'
    })

    const setMainColors = ( colors: ImageColors ) => {
        setColors( colors );
    }

    const setPrevMainColors = ( colors: ImageColors ) => {
        setPrevColors( colors );
    }

    return(
        <GradientContext.Provider value={{
            colors,
            prevColors,
            setMainColors,
            setPrevMainColors,
        }}>
            { children }
        </GradientContext.Provider>
    )
}