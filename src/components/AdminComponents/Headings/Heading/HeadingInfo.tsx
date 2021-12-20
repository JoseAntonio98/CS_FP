import { IonCol, IonLabel } from "@ionic/react";
import './HeadingInfo.css';

//Interfaz de datos del componente
interface ContainerProps{
    headingName:string
    headingDesc:string
    docId:string
}

//Este componente renderiza los datos de un rubro
const HeadingInfo:React.FC<ContainerProps> = (props) =>{
    return (
        <IonCol size="10">
            <div>
                <strong>{props.headingName}</strong>
            </div>
            <div>
                <IonLabel>{props.headingDesc}</IonLabel>
            </div>
        </IonCol>
    );
};

export default HeadingInfo;