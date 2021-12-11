import { IonThumbnail, IonImg, IonGrid, IonRow, IonCol, IonLabel, IonButton, IonItem } from "@ionic/react";
import { personOutline } from 'ionicons/icons'
import './ProductInfo.css'

interface ContainerProps {}

const ProductInfo : React.FC<ContainerProps> = () => {
    return (
    <div className="ProductoInfo">
        <IonGrid>
        <IonRow>
            <IonCol size="9">
                <div>
                    <strong>Nombre Producto</strong>
                </div>
                <div>
                    <IonLabel>Precio</IonLabel>
                </div>
                <div>
                    <IonLabel>Nombre Sede</IonLabel>
                </div>
            </IonCol>
            <IonCol size="3">
                <IonImg src={'https://randomuser.me/api/portraits/men/76.jpg'} />
            </IonCol>
        </IonRow>  
        </IonGrid>
    </div>
    )
}

export default ProductInfo