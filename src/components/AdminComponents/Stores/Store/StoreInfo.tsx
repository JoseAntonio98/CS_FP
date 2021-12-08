import { IonButton, IonCol, IonGrid, IonIcon, IonLabel, IonRow } from '@ionic/react';
import {closeCircleOutline, storefrontOutline, trashOutline} from 'ionicons/icons'
import './StoreInfo.css';

interface ContainerProps { }

const StoreInfo: React.FC<ContainerProps> = () => {
  return (
    <div className="StoreInfo">
        <IonIcon icon={storefrontOutline}/>
        <IonGrid>
            <IonRow>
                <IonCol size="10">
                    <div>
                        <strong>StoreName</strong>
                    </div>
                    <div>
                        <IonLabel>StoreRUC</IonLabel>
                    </div>
                    <div>
                        <IonLabel>StoreMail</IonLabel>
                    </div>
                </IonCol>
                <IonCol size="2">
                    <IonButton color="danger">
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
