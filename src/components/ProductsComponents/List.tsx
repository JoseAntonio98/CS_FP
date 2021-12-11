import { IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonLabel, IonNav, IonRow, IonTitle } from '@ionic/react';
import ProductInfo from '../ProductsComponents/Product/ProductInfo'

interface ContainerProps { }

const List: React.FC<ContainerProps> = () => {
  return (
    <IonRow>
        <IonCol>
        <IonContent scrollY={true} fullscreen>
            <IonTitle>Tiendas Cercanas</IonTitle>
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <ProductInfo/>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <ProductInfo/>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <ProductInfo/>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
        </IonCol>
    </IonRow>
    
  )
};

export default List;
