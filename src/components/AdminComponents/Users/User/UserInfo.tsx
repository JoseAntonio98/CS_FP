import { IonButton, IonCol, IonGrid, IonIcon, IonLabel, IonRow } from '@ionic/react';
import { deleteDoc, doc } from 'firebase/firestore';
import {closeCircleOutline, personOutline, trashOutline} from 'ionicons/icons'
import { db } from '../../../../firebaseConfig';
import { toast } from '../../../toast';
import './UserInfo.css';
interface ContainerProps { 
    docId:string
    email:string
    nombre:string
}

const UserInfo: React.FC<ContainerProps> = (props) => {
    async function deleteClient()
    {
        await deleteDoc(doc(db, "clientes", props.docId));
        toast("Se ha eliminado la tienda")
    }

  return (
    <div className="UserInfo">
        <IonIcon icon={personOutline}/>
        <IonGrid>
            <IonRow>
                <IonCol size="10">
                    <div>
                        <strong>{props.email}</strong>
                    </div>
                    <div>
                        <IonLabel>UserLastname</IonLabel>
                    </div>
                    <div>
                        <IonLabel>{props.email}</IonLabel>
                    </div>
                    <div>
                        <IonLabel>UserPhoneNumber</IonLabel>
                    </div>
                </IonCol>
                <IonCol size="2">
                    <IonButton color="danger">
                        <IonIcon icon={trashOutline} onClick={deleteClient}/>
                    </IonButton>
                    <IonButton color="light">
                        <IonIcon icon={closeCircleOutline}/>
                    </IonButton>
                </IonCol>
            </IonRow>
        </IonGrid>
    </div>
  );
};

export default UserInfo;
