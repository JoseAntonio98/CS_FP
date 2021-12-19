import { IonCol, IonLabel } from '@ionic/react';
import './CustomerInfo.css';

//Interfaz de datos del componente
interface ContainerProps 
{ 
    docId:string
    email:string
    nombre: string
    password: string
    disponible:boolean    
}

//Este componente renderiza los datos de los clientes
const CustomerInfo: React.FC<ContainerProps> = (props) => {
    return (
        <IonCol size="10">
            <div>
                <strong>{props.nombre}</strong>
            </div>
            <div>
                <IonLabel>{props.email}</IonLabel>
            </div>
            <div>
                <IonLabel>Disponible: { props.disponible?'Si':'No'}</IonLabel>
            </div>
        </IonCol>
    );
};

export default CustomerInfo;
