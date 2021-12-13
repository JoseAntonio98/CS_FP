import { useHistory } from "react-router";
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import Login from '../../components/ComponentesUsuario/Identificación/ContentUser'
import Productos from '../../components/ComponentesUsuario/Productos/ContentProduct'
import { setDataCliente, logOutCliente, useCliente } from '../../servicios/firebaseCliente';
import { Link } from "react-router-dom";
import { toast } from "../../components/toast";
import Sesion from "../../Contexto/Sesion"
import Carrito, { CarritoProvider } from "../../Contexto/Carrito"
import { useState, useEffect } from "react";

const UsuarioLogin: React.FC = () => 
{

    const [usuario, setUsuario] = useState({
        uid : '',
        disponible : '',
        nombre : '',
        correo : '',
        dir_lat : Number,
        dir_lon : Number  
    })

    const [pedidos, SetPedidos] = useState({})

    const history = useHistory()
    const currentCliente = useCliente()

    function signOutCliente()
    {
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
            setDataCliente(currentCliente.uid, setUsuario)   
            //console.log('bucle?')
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
                        currentCliente?
                        <IonButton slot='end' shape="round" color="success" onClick={signOutCliente}>
                            { currentCliente.email }
                        </IonButton>
                        
                        : null
                    }
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {   
                    currentCliente?
                    <>
                        <Sesion.Provider value={usuario}>
                            <CarritoProvider>
                                <Productos />
                            </CarritoProvider>
                        </Sesion.Provider>
                    </>
                    : <Login/>
                }
            </IonContent>
        </IonPage >
    );

}

export default UsuarioLogin;