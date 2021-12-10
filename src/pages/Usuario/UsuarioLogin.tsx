import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import Content from '../../components/UsersComponents/Content/ContentUser'

const UsuarioLogin: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        Aplicación
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <Content />
            </IonContent>
        </IonPage>
    );
}

export default UsuarioLogin;