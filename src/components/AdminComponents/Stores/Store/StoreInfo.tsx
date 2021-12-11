import { IonButton, IonCol, IonGrid, IonIcon, IonLabel, IonRow } from '@ionic/react';
import { deleteDoc, doc } from 'firebase/firestore';
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
    uid:string
}

const StoreInfo: React.FC<ContainerProps> = (props) => {
    async function deleteStore()
    {
        await deleteDoc(doc(db, "tiendas", props.docId));
        toast("Se ha eliminado la tienda")
    }

  return (
    <div className="StoreInfo">
        <IonIcon icon={storefrontOutline}/>
        <IonGrid>
            <IonRow>
                <IonCol size="10">
                    <div>
                        <strong>{props.nombre}</strong>
                    </div>
                    <div>
                        <IonLabel>{props.ruc}</IonLabel>
                    </div>
                    <div>
                        <IonLabel>{props.email}</IonLabel>
                    </div>
                </IonCol>
                <IonCol size="2">
                    <IonButton color="danger" onClick={deleteStore}>
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

export default StoreInfo;
