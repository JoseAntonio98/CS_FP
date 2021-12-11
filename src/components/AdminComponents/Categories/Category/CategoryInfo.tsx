import { IonButton, IonCol, IonGrid, IonIcon, IonLabel, IonRow } from '@ionic/react';
import { deleteDoc, doc } from 'firebase/firestore';
import {pricetagOutline, trashOutline} from 'ionicons/icons'
import { db } from '../../../../firebaseConfig';
import { toast } from '../../../toast';
import './CategoryInfo.css';
interface ContainerProps 
{
    categoryName:string
    categoryDesc:string
    docId:string
}

const CategoryInfo: React.FC<ContainerProps> = (props) => {
    async function deleteCategory()
    {
        await deleteDoc(doc(db, "categorias", props.docId));
        toast("Se ha eliminado la categoria")
    }

  return (
    <div className="CategoryInfo">
        <IonIcon icon={pricetagOutline}/>
        <IonGrid>
            <IonRow>
                <IonCol size="10">
                    <div>
                        <strong>{props.categoryName}</strong>
                    </div>
                    <div>
                        <IonLabel>{props.categoryDesc}</IonLabel>
                    </div>
                </IonCol>
                <IonCol size="2">
                    <IonButton color="danger" onClick={deleteCategory}>
                        <IonIcon icon={trashOutline}/>
                    </IonButton>
                </IonCol>
            </IonRow>
        </IonGrid>
    </div>
  );
};

export default CategoryInfo;
