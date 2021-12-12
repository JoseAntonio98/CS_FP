import { IonThumbnail, IonImg, IonGrid, IonRow, IonCol, IonLabel, IonButton, IonItem } from "@ionic/react";
import { personOutline } from 'ionicons/icons'
import './ProductInfo.css'

interface ContainerProps {
    id: string
}

const ProductDatos: React.FC<ContainerProps> = (ContainerProps) => {
    return (
    <div className="ProductoInfo">
        <IonGrid>
            <IonRow>
                <IonCol offsetLg="5" sizeLg="2">
                    <IonImg className="img" src={'https://randomuser.me/api/portraits/men/76.jpg'} />
                </IonCol>
            </IonRow> 
            <IonRow>
                <IonCol offsetLg="4" sizeLg="4">
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
            </IonRow> 
        </IonGrid>
    </div>
    )
}

export default ProductDatos