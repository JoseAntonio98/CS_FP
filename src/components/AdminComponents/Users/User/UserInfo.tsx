import { IonButton, IonCol, IonGrid, IonIcon, IonLabel, IonRow } from '@ionic/react';
import { deleteDoc, doc } from 'firebase/firestore';
import {closeCircleOutline, personOutline, trashOutline} from 'ionicons/icons'
import { db } from '../../../../firebaseConfig';
import { toast } from '../../../toast';
import './UserInfo.css';
interface ContainerProps 
{ 
    docId:string
    email:string
    nombre:string
}

const UserInfo: React.FC<ContainerProps> = (props) => {
    async function deleteClient()
    {
        console.log("Clickeaste sobre el boton de eliminado")
        await deleteDoc(doc(db, "clientes", props.docId));
        toast("Se ha eliminado el cliente")
    }

    return (
    <div className="UserInfo">
        <IonIcon icon={personOutline}/>
        <IonGrid>
            <IonRow>
                <IonCol size="10">
                    <div>
                        <strong>{props.nombre}</strong>
                    </div>
                    <div>
                        <IonLabel>apellido</IonLabel>
                    </div>
                    <div>
                        <IonLabel>{props.email}</IonLabel>
                    </div>
                    <div>
                        <IonLabel>UserPhoneNumber</IonLabel>
                    </div>
                </IonCol>
                <IonCol size="2">
                    <IonButton color="danger"  onClick={deleteClient}>
                        <IonIcon icon={trashOutline}/>
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
