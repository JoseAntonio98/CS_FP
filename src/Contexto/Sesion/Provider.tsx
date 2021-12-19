import { useReducer } from "react";
import { SesionContext } from './Context'
import { SesionReducer } from './Reducer'
import { ProviderProps, sesion } from '../../interfaces/interfaces'
import { GeoPoint } from "firebase/firestore";

const INITIAL_STATE : sesion =
{
    uid: "",
    nombre: "",
    email: "",
    disp: false,
    tipo: '',
    pos : new GeoPoint(0,0)
}

export const SesionProvider = ( {children} : ProviderProps) => {

    const [ sesion, dispatch ] = useReducer( SesionReducer, INITIAL_STATE)

    // Aqui se crean las funciones

    const setData = ( uid: string, nombre : string, email : string, disp : boolean, pos : GeoPoint, tipo : string) => 
    {
        dispatch({ type:'setData', payload:{
            uid: uid,
            nombre : nombre,
            email : email,
            disp : disp,
            tipo : tipo,
            pos : pos
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