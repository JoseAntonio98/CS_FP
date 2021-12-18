import { useReducer } from "react";
import { SesionContext } from './Context'
import { SesionReducer } from './Reducer'
import { ProviderProps, sesion } from '../../interfaces/interfaces'

const INITIAL_STATE : sesion =
{
    uid: "",
    nombre: "",
    email: "",
    disp: false,
    tipo: '',
}

export const SesionProvider = ( {children} : ProviderProps) => {

    const [ sesion, dispatch ] = useReducer( SesionReducer, INITIAL_STATE)

    // Aqui se crean las funciones

    const setData = ( uid: string, nombre : string, email : string, disp : boolean, tipo : string) => 
    {
        dispatch({ type:'setData', payload:{
            uid: uid,
            nombre : nombre,
            email : email,
            disp : disp,
            tipo : tipo
            }
        })
    }

    return <SesionContext.Provider value={{
        sesion,
        setData,
    }} >
        { children }
    </SesionContext.Provider>
};