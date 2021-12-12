import { useHistory } from "react-router";
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import Login from '../../components/ComponentesUsuario/Content/ContentUser'
import Productos from '../../components/ComponentesUsuario/Productos/ContentProduct'
import { logOutCliente, useCliente } from '../../servicios/firebaseCliente';
import { Link } from "react-router-dom";
import { toast } from "../../components/toast";

const UsuarioLogin: React.FC = () => 
{
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
                    <Productos/>
                    : <Login/>
                }
            </IonContent>
        </IonPage >
    );

}

export default UsuarioLogin;