import { IonButton, IonCol, IonContent, IonGrid, IonIcon, IonLabel, IonRow, IonTitle } from "@ionic/react";
import { earthOutline, trashOutline } from "ionicons/icons";
import './HeadingInfo.css';

interface ContainerProps{
}

const HeadingInfo:React.FC<ContainerProps> = () =>{
    return (
    <div className="HeadingInfo">
        <IonIcon icon={earthOutline}/>
            <IonGrid>
            <IonRow>
                <IonCol size="10">
                    <div>
                        <strong>RubrosCategoria</strong>
                    </div>
                    <div>
                        <IonLabel>DescripcionRubros</IonLabel>
                    </div>
                </IonCol>
                <IonCol size="2">
                    <IonButton color="danger">
                        <IonIcon icon={trashOutline}/>
                    </IonButton>
                </IonCol>
            </IonRow>
        </IonGrid>
    </div>
  );
};

export default HeadingInfo;