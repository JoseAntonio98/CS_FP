import { IonButton, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonIcon, IonLabel, IonRow, IonTitle } from '@ionic/react';
import {add, pricetagOutline, trashOutline} from 'ionicons/icons'
import CategoryInfo from './Category/CategoryInfo';
import './CategoryList.css';
interface ContainerProps { }

const CategoryList: React.FC<ContainerProps> = () => {
  return (
    <div className="CategoryList">
        <IonFab vertical="bottom" horizontal="start">
            <IonFabButton color="success">
                <IonIcon icon={add} color="dark"/>
            </IonFabButton>
        </IonFab>
        <IonContent scrollY={true} fullscreen>
            <IonTitle>Categorias</IonTitle>
            
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <CategoryInfo/>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <CategoryInfo/>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <CategoryInfo/>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    </div>
  );
};

export default CategoryList;
