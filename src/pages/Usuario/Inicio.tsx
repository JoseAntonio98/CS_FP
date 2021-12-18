import { Link } from "react-router-dom";
import { toast } from "../../components/toast";
import { useHistory } from "react-router";
import { useEffect, useContext } from "react";
import { setDataCliente, logOutCliente, useCliente } from '../../servicios/firebaseCliente';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'

import Login from '../../components/ComponentesUsuario/Identificación/ContentUser'
import Productos from '../../components/ComponentesUsuario/Productos/ContentProduct'
import Tienda from '../../components/ProductsComponents/Tienda'
import { SesionContext } from "../../Contexto/Sesion/Context";

const UsuarioLogin: React.FC = () => {
    const history = useHistory()
    const CUser = useCliente()

    const { sesion, setData } = useContext(SesionContext)

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
        if (CUser) {
            setDataCliente(CUser.uid, setData)   
        }
    }, [CUser]) // MUY IMPORTANTE -> si no esta, puede crear bucles infinitos

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle >
                        <Link to="/" >Aplicación</Link>
                    </IonTitle>
                    {
                        CUser ?
                            <IonButton slot='end' shape="round" color="success" onClick={signOutCliente}>
                                {sesion.nombre}<b>_Salir</b>
                            </IonButton>

                            : null
                    }
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {
                    CUser? // estas logueado?
                    sesion.tipo == 'cliente'? // es cliente ?
                    <Productos />
                    : <Tienda /> //NO, enviame a Tienda
                    : <Login />
                }
            </IonContent>
        </IonPage >
    );

}

export default UsuarioLogin;