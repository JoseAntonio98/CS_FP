
import { GeoPoint } from "firebase/firestore";
import { createContext } from "react";
import { sesion } from "../../interfaces/interfaces";

export type SesionContextProps = 
{
    sesion : sesion
    setData : ( uid: string, nombre : string, email : string, disp : boolean, pos:GeoPoint, tipo : string) => void
}

export const SesionContext = createContext<SesionContextProps>({} as SesionContextProps)