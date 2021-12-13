import React from "react";

const Sesion = React.createContext({
    uid : '',
    disponible : '',
    nombre : '',
    correo : '',
    dir_lat : Number,
    dir_lon : Number
})
export default Sesion