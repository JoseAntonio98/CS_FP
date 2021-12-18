
export interface ProviderProps { // Para el error del children
    children : JSX.Element | JSX.Element[]
}

export interface sesion
{
    uid : string;
    nombre : string;
    email : string;
    disp : boolean;
    tipo : string;
}

export interface carrito
{
    pedidos : pedido[];
    total : number;
}

export interface pedido
{
    productid : string;
    cantidad : number;
    nombre : string;
    precio : number;
}
