import { useReducer } from 'react'
import { CarritoContext } from './Context'
import { CarritoReducer } from './Reducer'
import { ProviderProps, carrito } from '../../interfaces/interfaces'

const INITIAL_STATE : carrito = {
    pedidos: [
        {
            productid : '001',
            cantidad : 1,
            nombre : 'Gaseosa',
            precio : 5
        }
    ],
    total : 0
}

export const CarritoProvider = ( {children} : ProviderProps) => {
    
    const [ carrito, dispatch] = useReducer( CarritoReducer, INITIAL_STATE);
    
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

    const deletePedido = ( id : string, precio : number ) =>
    {
        dispatch({ type:'deletePedido', payload: {
            id,
            precio
            }
        })
    }

    const emptyCarrito = () => 
    {
        dispatch( {
            type: 'emptyCarrito',
            payload: {}
        })
    }

    return <CarritoContext.Provider value={{
        carrito,
        addPedido,
        deletePedido,
        emptyCarrito
    }} >
        {children}
    </CarritoContext.Provider>
};
