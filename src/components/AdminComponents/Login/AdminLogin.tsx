import { IonButton, IonInput, IonItem, IonLabel } from '@ionic/react';
import { useState } from 'react';
import { signInAdmin } from '../../../servicios/firebaseAdmin';
import './AdminLogin.css'

const AdminLogin:React.FC = () =>
{
    //Admin login info
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    function loginUser()
    {
        signInAdmin(username, password);
    }
    return (
        <div className="admin-login-container">
            <div className="admin-login-box border p-3">
                <div className="h3 p-2 text-dark">
                    Ingreso de Administrador
                </div>
                <IonItem className="ion-margin">
                    <IonLabel position="floating">Nombre de usuario</IonLabel>
                    <IonInput className="text-dark" onIonChange={(e:any)=>setUserName(e.target.value)}></IonInput>
                </IonItem>
                <IonItem className="ion-margin">
                    <IonLabel position="floating">Constraseña</IonLabel>
                    <IonInput className="text-dark" type="password" onIonChange={(e:any)=>setPassword(e.target.value)}/>
                </IonItem>
                <div className="p-3">
                    <IonButton color="success" onClick={loginUser}>Ingresar</IonButton>
                </div>
            </div>
        </div>
    );
}

export default AdminLogin;