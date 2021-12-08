import { IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonLabel, IonNav, IonRow, IonTitle } from '@ionic/react';
import UserInfo from './User/UserInfo';
import './UserList.css';

interface ContainerProps { }

const UserList: React.FC<ContainerProps> = () => {
  return (
    <div className="UserList">
    <IonContent scrollY={true} fullscreen>
        <IonTitle>Usuarios</IonTitle>
        <IonGrid>
            <IonRow>
                <IonCol>
                    <UserInfo/>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <UserInfo/>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <UserInfo/>
                </IonCol>
            </IonRow>
        </IonGrid>
    </IonContent>
    </div>
  );
};

export default UserList;
