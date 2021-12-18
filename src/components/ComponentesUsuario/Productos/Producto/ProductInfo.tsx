import { IonImg, IonGrid, IonRow, IonCol, IonLabel} from "@ionic/react";
import './ProductInfo.css'

interface ProductoProps
{
    id : string
    nombre : string
    descripcion : string
    sede : string
    imagen : string
}

const ProductInfo : React.FC<ProductoProps> = (props) => {
    return (
    <div className="ProductoInfo">
        <IonGrid>
        <IonRow>
            <IonCol size="9">
                <div>
                    <strong>{props.nombre}</strong>
                </div>
                <div>
                    <IonLabel>{props.descripcion}</IonLabel>
                </div>
                <div>
                    <IonLabel>Nombre Sede</IonLabel>
                </div>
            </IonCol>
            <IonCol offsetLg="1" sizeLg="2">
                <IonImg src={props.imagen} />
            </IonCol>
        </IonRow>  
        </IonGrid>
    </div>
    )
}

export default ProductInfo