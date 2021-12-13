import { Link } from "react-router-dom";
import { toast } from "../../components/toast";
import { useHistory } from "react-router";
import { useState, useEffect, useContext } from "react";
import { setDataCliente, logOutCliente, useCliente } from '../../servicios/firebaseCliente';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'

import { SesionProvider } from "../../Contexto/Sesion/Provider"
import { CarritoProvider } from "../../Contexto/Carrito/Provider"

import Login from '../../components/ComponentesUsuario/Identificación/ContentUser'
import Productos from '../../components/ComponentesUsuario/Productos/ContentProduct'
import { SesionContext } from "../../Contexto/Sesion/Context";

const UsuarioLogin: React.FC = () => {
    const history = useHistory()
    const currentCliente = useCliente()

    const { sesion, setData } = useContext(SesionContext)
    console.log('a', sesion)

    function signOutCliente() {
        logOutCliente()
            .then(() => {
                toast('Se ha cerrado sesión')
                history.push('/')
            })
            .catch(() => {
                toast('Error en el cierre de sesión')
            })
    }

    useEffect ( function() {
        if (currentCliente) {
            setDataCliente(currentCliente.uid, setData)   
            console.log('b', currentCliente.uid)
        }
    }, [currentCliente]) // MUY IMPORTANTE -> si no esta, puede crear bucles infinitos

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle >
                        <Link to="/" >Aplicación</Link>
                    </IonTitle>
                    {
                        currentCliente ?
                            <IonButton slot='end' shape="round" color="success" onClick={signOutCliente}>
                                {sesion.nombre}<b>_Salir</b>
                            </IonButton>

                            : null
                    }
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {
                    currentCliente ?
                        <>
                            <SesionProvider>
                                <CarritoProvider>
                                    <Productos />
                                </CarritoProvider>
                            </SesionProvider>
                        </>
                        : <Login />
                }
            </IonContent>
        </IonPage >
    );

}

export default UsuarioLogin;