//import { GeoPoint } from "firebase/firestore";
import { getDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from '../firebaseConfig'
//import { User } from "firebase/auth";

const Sesion = React.createContext({})

export function SesionProvider ({children} : any){

    return <Sesion.Provider value={
        {
            uid : db,
            nombre : '',
            cel : '',
            dir : []
        }
    }>
        {children}
    </Sesion.Provider>
}

export default Sesion