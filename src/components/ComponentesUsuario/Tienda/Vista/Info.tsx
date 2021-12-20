import { IonGrid, IonRow, IonCol, IonLabel, IonBadge, IonButton, IonIcon } from "@ionic/react";
import { GeoPoint } from "firebase/firestore";
import { arrowRedoOutline, star } from "ionicons/icons";
import { Link } from "react-router-dom";
import Productos from '../../Productos/Contenedor'
import './style/info.css'

interface Props {
    uid: string
    nombre: string
    calificacion: number[]
    rubro: string
    pos : GeoPoint
}

const Info: React.FC<Props> = (props) => {
    return (
        <div className="info">
            <IonGrid>
                <IonRow>
                    <IonCol sizeMd="9" sizeLg="10" sizeXs="6">
                        <div>
                            <IonLabel><strong>{props.nombre}</strong></IonLabel>
                        </div>
                        <div>
                            <IonLabel>{props.rubro}</IonLabel>
                        </div>
                    </IonCol>
                    <IonCol sizeMd="3" sizeLg="2" sizeXs="6">
                        <div>
                            <IonBadge>{props.calificacion[0]/props.calificacion[1]}</IonBadge>
                            <IonIcon icon={star} size='xs'></IonIcon>
                        </div>
                        <div>
                            <IonButton color='success' size="small"><Link className='link' to={{pathname:'/productos', state:{uid : props.uid, nombre : props.nombre, lt:props.pos.latitude, lg:props.pos.longitude, cal:props.calificacion}}}>Ver productos</Link></IonButton>
                        </div>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
    )
}

export default Info