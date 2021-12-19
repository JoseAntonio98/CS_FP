import { IonButton, IonCol, IonGrid, IonIcon, IonLabel, IonRow } from '@ionic/react';
import { deleteDoc, doc, setDoc } from 'firebase/firestore';
import {closeCircleOutline, personOutline, trashOutline} from 'ionicons/icons'
import { db } from '../../../../firebaseConfig';
import { toast } from '../../../toast';
import './UserInfo.css';

//Interfaz de datos del componente
interface ContainerProps 
{ 
    docId:string
    email:string
    nombre: string
    password: string
    disponible:boolean    
}

//Este componente renderiza los datos de los clientes
const UserInfo: React.FC<ContainerProps> = (props) => {
    return (
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
                <IonLabel>Disponible: { props.disponible?'Si':'No'}</IonLabel>
            </div>
        </IonCol>
    );
};

export default UserInfo;
