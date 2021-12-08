import { IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonIcon, IonRow, IonTitle } from '@ionic/react';
import { add } from 'ionicons/icons';
import HeadingInfo from './Heading/HeadingInfo';
import './HeadingList.css';
interface ContainerProps { }

const HeadingList: React.FC<ContainerProps> = () => {
  return (
    <div className="HeadingList">
        <IonFab vertical="bottom" horizontal="start">
            <IonFabButton color="success">
                <IonIcon icon={add} color="dark"/>
            </IonFabButton>
        </IonFab>
        <IonContent scrollY={true} fullscreen>
        <IonTitle>Rubros</IonTitle>
        
        <IonGrid>
            <IonRow>
                <IonCol>
                    <HeadingInfo/>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <HeadingInfo/>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <HeadingInfo/>
                </IonCol>
            </IonRow>
        </IonGrid>
        </IonContent>
    </div>
  );
};

export default HeadingList;
