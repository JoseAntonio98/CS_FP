import { IonImg, IonGrid, IonRow, IonCol, IonLabel, IonItem, IonTitle } from "@ionic/react";
import { GeoPoint } from "firebase/firestore";
import './style/info.css'

interface ProductoProps {
    id: string
    nombre: string
    descripcion: string
    precio: number
    imagen: string
    categoria : string
}

const ProductInfo: React.FC<ProductoProps> = (props) => {
    return (
        <div className="ProductoInfo">
            <IonGrid>
                <IonRow>
                    <IonCol size="9">
                        <div>
                            <h2>{props.nombre}</h2>
                        </div>
                        <div>
                            <IonLabel>Despcripción: {props.descripcion}</IonLabel>
                        </div>
                        <div>
                            <IonLabel>Categoría: {props.categoria}</IonLabel>
                        </div>
                        <div>
                            <IonLabel>Precio: S./<strong>{props.precio}</strong> por unidad</IonLabel>
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