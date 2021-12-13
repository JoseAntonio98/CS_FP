import { IonImg, IonGrid, IonRow, IonCol, IonLabel} from "@ionic/react";
import './ProductInfo.css'

interface ContainerProps
{
    productoNombre : string
    docId : string
    productoSede : string
    image : string
}

const ProductInfo : React.FC<ContainerProps> = (props) => {
    return (
    <div className="ProductoInfo">
        <IonGrid>
        <IonRow>
            <IonCol size="9">
                <div>
                    <strong>{props.productoNombre}</strong>
                </div>
                <div>
                    <IonLabel>{props.docId}</IonLabel>
                </div>
                <div>
                    <IonLabel>Nombre Sede</IonLabel>
                </div>
            </IonCol>
            <IonCol size="3">
                <IonImg src={`{props.image}`} />
            </IonCol>
        </IonRow>  
        </IonGrid>
    </div>
    )
}

export default ProductInfo