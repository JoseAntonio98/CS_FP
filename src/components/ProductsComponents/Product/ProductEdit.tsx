import { IonImg, IonGrid, IonRow, IonCol, IonLabel,IonButton,IonContent,IonPage,useIonAlert} from "@ionic/react";
import './ProductInfo.css'

interface ContainerProps
{
    productoNombre : string
    docId : string
    productoSede : string
    image : string
}

const ProductEdit : React.FC<ContainerProps> = (props) => {
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
            <IonCol size="1">
            <IonButton>Eliminar</IonButton>
            <IonButton>Editar</IonButton>
            </IonCol>
            
            
        </IonRow>  
        </IonGrid>
    </div>
    )
}

export default ProductEdit