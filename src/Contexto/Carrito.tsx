import React, { useState } from "react";

export const Carrito = React.createContext({});

export const CarritoProvider = ({children}:any) => {
    const [pedidos, setPedidos] = React.useState('initial');

    let state = {
        pedios:pedidos,
        setPedidos:setPedidos
    };

    return <Carrito.Provider value={state}>
        {children}
    </Carrito.Provider>
};

export default Carrito;