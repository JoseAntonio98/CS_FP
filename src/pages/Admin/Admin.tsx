import { IonButton, IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar} from '@ionic/react'
import './Admin.css'
import ContentManager from '../../components/AdminComponents/ContentManager/ContentManager'
import AdminLogin from '../../components/AdminComponents/Login/AdminLogin';
import { logOutAdmin, useAdminAuth } from '../../servicios/firebaseAdmin';
import { toast } from '../../components/toast';
import { useHistory } from 'react-router';

const Admin: React.FC = () =>
{
    const history = useHistory()  //Para enrutar el camino denuevo a /admin
    const currentAdmin = useAdminAuth()
    function signOutManager()
    {
        logOutAdmin()
            .then(() => {
                toast("Se ha cerrado sesion")
                history.push('/admin');     //Modificamos el path para /admin
            })
            .catch(() =>{ toast("Error en el cierre de sesion")})
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        Administracion
                    </IonTitle>
                    {
                        currentAdmin ?
                        <IonButton slot="end" shape="round" color="success" onClick={signOutManager}>
                            <IonLabel>{ currentAdmin?.email}</IonLabel>
                        </IonButton>
                        :<></>
                    }
                </IonToolbar>
            </IonHeader>
                <IonContent>
                        {currentAdmin ?<ContentManager /> : <AdminLogin />}
                </IonContent>
        </IonPage>    
    );
}

export default Admin;