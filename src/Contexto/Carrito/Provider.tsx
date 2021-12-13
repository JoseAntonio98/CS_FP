import { useReducer } from 'react'
import { CarritoContext } from './Context'
import { CarritoReducer } from './Reducer'
import { ProviderProps, carrito } from '../../interfaces/interfaces'

const INITIAL_STATE : carrito = {
    usuarioid : '00',
    pedidos: [
        {
            productid : '001',
            cantidad : 1,
            nombre : 'Gaseosa',
            precio : 5
        }
    ],
    total : 5
}

export const CarritoProvider = ( {children} : ProviderProps) => {
    
    const [ carrito, dispatch] = useReducer( CarritoReducer, INITIAL_STATE);

    //Aqui se crean las 
    
    const addPedido = ( productid : string, nombre : string, cantidad : number, precio : number) =>
    {
        dispatch({ type:'addPedido', payload: {
            productid : productid,
            nombre : nombre,
            cantidad: cantidad,
            precio : precio
            }
        })
    }

    const deletePedido = ( productid : string, precio : number ) =>
    {
        dispatch({ type:'deletePedido', payload: {productid, precio}})
    }

    return <CarritoContext.Provider value={{
        carrito,
        addPedido,
        deletePedido
    }} >
        {children}
    </CarritoContext.Provider>
};
