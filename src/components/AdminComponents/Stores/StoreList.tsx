import {IonCol, IonContent, IonGrid, IonRow, IonTitle } from '@ionic/react';
import StoreInfo from './Store/StoreInfo';
import './StoreList.css';

interface ContainerProps { }

const StoreList: React.FC<ContainerProps> = () => {
  return (
    <div className="StoreList">
    <IonContent scrollY={true} fullscreen>
        <IonTitle>Tiendas</IonTitle>
        <IonGrid>
            <IonRow>
                <IonCol>
                    <StoreInfo/>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <StoreInfo/>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <StoreInfo/>
                </IonCol>
            </IonRow>
        </IonGrid>
        </IonContent>
    </div>
  );
};

export default StoreList;
