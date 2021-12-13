
import { createContext } from "react";
import { sesion, coordenada } from "../../interfaces/interfaces";

export type SesionContextProps = 
{
    sesion : sesion
    setData : ( uid: string, nombre : string, email : string, disp : boolean, pos:coordenada ) => void
}

export const SesionContext = createContext<SesionContextProps>({} as SesionContextProps)