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
                tipo : action.payload.tipo,
                pos : action.payload.pos
            }
        default:
            return state
    }
}