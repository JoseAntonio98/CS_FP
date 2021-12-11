import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { signInAdmin } from '../../servicios/firebaseAdmin';
import './Admin.css'

const AdminLogin:React.FC = () =>
{
    
    //User login info
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    function loginUser()
    {
        signInAdmin(username, password);
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        Administracion
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent  className="ion-padding ion-text-center">
                <IonItem className="ion-margin">
                    <IonLabel position="floating">Username</IonLabel>
                    <IonInput  onIonChange={(e:any)=>setUserName(e.target.value)}></IonInput>
                </IonItem>
                <IonItem className="ion-margin">
                    <IonLabel position="floating">Password</IonLabel>
                    <IonInput onIonChange={(e:any)=>setPassword(e.target.value)}/>
                </IonItem>
                <IonButton onClick={loginUser}>Ingresar</IonButton>
            </IonContent>
        </IonPage>
    );
}

export default AdminLogin;