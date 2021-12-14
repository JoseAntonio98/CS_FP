import { createContext } from "react";
import { carrito } from "../../interfaces/interfaces";

export type CarritoContextProps =
{
    carrito : carrito,
    addPedido : ( productid : string, nombre : string, cantidad : number, precio : number) => void,
    deletePedido : ( productid : string, precio : number) => void,
    emptyCarrito: () => void
}

export const CarritoContext = createContext<CarritoContextProps>({} as CarritoContextProps);