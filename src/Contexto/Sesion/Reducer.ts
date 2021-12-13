import { sesion } from "../../interfaces/interfaces";


type UsuarioAction = 
| { type: 'setData', payload : sesion }

export const SesionReducer = ( state : sesion, action : UsuarioAction) : sesion =>
{
    switch ( action.type ) {
        case 'setData' :
            return {
                ...state,
                uid : action.payload.uid,
                nombre : action.payload.nombre,
                email : action.payload.email,
                disp : action.payload.disp,
                pos : action.payload.pos
            }
            break;
    
        default:
            return state
    }
}