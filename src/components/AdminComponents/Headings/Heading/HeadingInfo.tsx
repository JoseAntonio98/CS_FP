import { IonButton, IonCol, IonGrid, IonIcon, IonLabel, IonRow } from "@ionic/react";
import { deleteDoc, doc } from "firebase/firestore";
import { earthOutline, trashOutline } from "ionicons/icons";
import { db } from "../../../../firebaseConfig";
import { toast } from "../../../toast";
import './HeadingInfo.css';

interface ContainerProps{
    headingName:string
    headingDesc:string
    docId:string
}

const HeadingInfo:React.FC<ContainerProps> = (props) =>{
    async function deleteHeading()
    {
        await deleteDoc(doc(db, "rubros", props.docId));
        toast("Se ha eliminado el rubro")
    }
    return (
    <div className="HeadingInfo">
        <IonIcon icon={earthOutline}/>
            <IonGrid>
            <IonRow>
                <IonCol size="10">
                    <div>
                        <strong>{props.headingName}</strong>
                    </div>
                    <div>
                        <IonLabel>{props.headingDesc}</IonLabel>
                    </div>
                </IonCol>
                <IonCol size="2">
                    <IonButton color="danger" onClick={deleteHeading}>
                        <IonIcon icon={trashOutline}/>
                    </IonButton>
                </IonCol>
            </IonRow>
        </IonGrid>
    </div>
  );
};

export default HeadingInfo;