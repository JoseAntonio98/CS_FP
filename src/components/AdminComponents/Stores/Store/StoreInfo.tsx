import { IonButton, IonCol, IonGrid, IonIcon, IonLabel, IonRow } from '@ionic/react';
import { deleteDoc, doc, setDoc } from 'firebase/firestore';
import {closeCircleOutline, storefrontOutline, trashOutline} from 'ionicons/icons'
import { db } from '../../../../firebaseConfig';
import { toast } from '../../../toast';
import './StoreInfo.css';

interface ContainerProps { 
    docId:string
    email:string
    nombre:string
    rubro:string
    ruc:string
    uid: string
    disponible:boolean
}

const StoreInfo: React.FC<ContainerProps> = (props) => {
    
    return (
        <IonCol size="10">
            <div>
                <strong>Nombre: {props.nombre}</strong>
            </div>
            <div>
                <IonLabel>RUC: {props.ruc}</IonLabel>
            </div>
            <div>
                <IonLabel>Email: {props.email}</IonLabel>
            </div>
            <div>
                <IonLabel>Rubro: {props.rubro}</IonLabel>
            </div>
            <div>
                <IonLabel>Disponible: {props.disponible?'Si':'No'}</IonLabel>
            </div>
        </IonCol>
    );
};

export default StoreInfo;
