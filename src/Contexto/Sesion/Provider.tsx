import { useReducer } from "react";
import { SesionContext } from './Context'
import { SesionReducer } from './Reducer'
import { coordenada, ProviderProps, sesion } from '../../interfaces/interfaces'

const INITIAL_STATE : sesion =
{
    uid: "",
    nombre: "",
    email: "",
    disp: false,
    pos: {
        _lat : 0,
        _lon : 0,
    }
}

export const SesionProvider = ( {children} : ProviderProps) => {

    const [ sesion, dispatch ] = useReducer( SesionReducer, INITIAL_STATE)

    // Aqui se crean las funciones

    const setData = ( uid: string, nombre : string, email : string, disp : boolean, pos:coordenada ) => 
    {
        dispatch({ type:'setData', payload:{
            uid: uid,
            nombre : nombre,
            email : email,
            disp : disp,
            pos : pos,
            }
        })
    }

    return <SesionContext.Provider value={{
        sesion,
        setData
    }} >
        { children }
    </SesionContext.Provider>
};