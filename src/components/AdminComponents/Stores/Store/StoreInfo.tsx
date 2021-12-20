import { IonCol, IonLabel } from '@ionic/react';
import './StoreInfo.css';

//Interfaz de datos del componente
interface ContainerProps { 
    docId:string
    email:string
    nombre:string
    rubro:string
    ruc:string
    uid: string
    disponible:boolean
}
//Componente para renderizar los datos de una tienda
const StoreInfo: React.FC<ContainerProps> = (props) => {
    return (
        <IonCol size="10">
            <div>
                <strong>Nombre: {props.nombre}</strong>
            </div>
            <div>
                <IonLabel>RUC: {props.ruc}</IonLabel>
            </div>
            <div>
                <IonLabel>Email: {props.email}</IonLabel>
            </div>
            <div>
                <IonLabel>Rubro: {props.rubro}</IonLabel>
            </div>
            <div>
                <IonLabel>Disponible: {props.disponible?'Si':'No'}</IonLabel>
            </div>
        </IonCol>
    );
};

export default StoreInfo;
