
import { createContext } from "react";
import { sesion } from "../../interfaces/interfaces";

export type SesionContextProps = 
{
    sesion : sesion
    setData : ( uid: string, nombre : string, email : string, disp : boolean, tipo : string) => void
}

export const SesionContext = createContext<SesionContextProps>({} as SesionContextProps)