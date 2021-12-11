//import { GeoPoint } from "firebase/firestore";
import React, { useState } from "react";
//import Firebase from '../servicios/firebaseCliente'
//import { User } from "firebase/auth";

const  Carrito = React.createContext({})

export function SesionProvider ({children} : any){

    const [uid, setUid] = useState([])

    return <Carrito.Provider value={{uid, setUid}}>
        {children}
    </Carrito.Provider>
}

export default Carrito