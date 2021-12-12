import React, { useState } from "react";

const FirebaseContext = React.createContext({})

export function FirebaseProvider ({children} : any){

    const [uid, setUid] = useState('Sesion.tsx')

    return <FirebaseContext.Provider value={{uid, setUid}}>
        {children}
    </FirebaseContext.Provider>
}

export default FirebaseContext