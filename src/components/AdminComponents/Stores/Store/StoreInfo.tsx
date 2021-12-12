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
    async function deleteStore()
    {
        await deleteDoc(doc(db, "tiendas", props.docId));
        toast("Se ha eliminado la tienda")
    }

    async function disableStore()
    {
        console.log("Desactivando tienda")
        await setDoc(doc(db, "tiendas", props.docId), {
            disponible: !props.disponible,  
            email: props.email,  
            nombre: props.nombre,
            rubro: props.rubro,
            ruc: props.ruc,
            uid: props.uid
        });
    }

  return (
    <div className="StoreInfo">
        <IonIcon icon={storefrontOutline}/>
        <IonGrid>
            <IonRow>
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
                <IonCol size="2">
                    <IonButton color="danger" onClick={deleteStore}>
                        <IonIcon icon={trashOutline}/>
                    </IonButton>
                      <IonButton color="light" onClick={disableStore}>
                        <IonIcon icon={closeCircleOutline}/>
                    </IonButton>
                </IonCol>
            </IonRow>
        </IonGrid>
    </div>
  );
};

export default StoreInfo;
