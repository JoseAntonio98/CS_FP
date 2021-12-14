
import { carrito, pedido } from '../../interfaces/interfaces'

type CarritoAction = 
| { type: 'addPedido', payload: pedido }
| { type: 'getPedido', payload: { nombre : string } }
| { type: 'deletePedido', payload: {id:string, precio:number}}

export const CarritoReducer = ( state : carrito, action:CarritoAction ) : carrito => 
{

    switch ( action.type ) {
        case 'addPedido':
            return  {
                ...state,
                pedidos: [ ...state.pedidos, action.payload ],
                total : state.total + action.payload.precio
            }
            break;

        case 'deletePedido':
            return {
                ...state,
                pedidos: state.pedidos.filter( (pedido) => pedido.productid !== action.payload.id),
                total : state.total - action.payload.precio
            }
    
        default:
            return state
    }
}