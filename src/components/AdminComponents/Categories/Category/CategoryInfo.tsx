import { IonButton, IonCol, IonGrid, IonIcon, IonLabel, IonRow } from '@ionic/react';
import {pricetagOutline, trashOutline} from 'ionicons/icons'
import './CategoryInfo.css';
interface ContainerProps { }

const CategoryInfo: React.FC<ContainerProps> = () => {
  return (
    <div className="CategoryInfo">
        <IonIcon icon={pricetagOutline}/>
        <IonGrid>
            <IonRow>
                <IonCol size="10">
                    <div>
                        <strong>NombreCategoria</strong>
                    </div>
                    <div>
                        <IonLabel>DescripcionCategoria</IonLabel>
                    </div>
                </IonCol>
                <IonCol size="2">
                    <IonButton color="danger">
                        <IonIcon icon={trashOutline}/>
                    </IonButton>
                </IonCol>
            </IonRow>
        </IonGrid>
    </div>
  );
};

export default CategoryInfo;
