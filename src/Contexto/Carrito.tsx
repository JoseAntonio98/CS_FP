import React, { useState } from "react";

export const Carrito = React.createContext([]);

export const CarritoProvider = ({children}:any) => {
    const [pedidos, setPedidos] = useState([]);

    //return <Carrito.Provider value={{ pedidos, setPedidos }}>
    return <Carrito.Provider value={pedidos} >
        {children}
    </Carrito.Provider>
};

export default Carrito;