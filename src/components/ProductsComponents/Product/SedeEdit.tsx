import { IonImg, IonGrid, IonRow, IonCol, IonLabel,IonButton,IonContent,IonPage,useIonAlert} from "@ionic/react";
import './ProductInfo.css'

interface ContainerProps
{
    sedeNombre : string
    image : string
}

const SedeEdit : React.FC<ContainerProps> = (props) => {
    const [present] = useIonAlert();
    return (
    <div className="SedeInfo">
        <IonGrid>
        <IonRow>
            <IonCol size="9">
                <div>
                    <strong>{props.sedeNombre}</strong>
                </div>
                <div>
                    <IonLabel>Nombre Sede</IonLabel>
                </div>
            </IonCol>
            <IonCol size="2">
                <IonImg src={`{props.image}`} />
            </IonCol>
            <IonCol size="2">
            <IonButton
          expand="block"
          onClick={() =>
            present({
              cssClass: 'my-css',
              header: 'Alerta',
              message: '¿Desea eliminar?',
              buttons: ['Cancel', { text: 'Ok', handler: (d) => console.log('ok pressed') }],
              onDidDismiss: (e) => console.log('did dismiss'),
            })
          }
        >
          Eliminar
        </IonButton>
            <IonButton>Editar</IonButton>
            </IonCol>
            
            
        </IonRow>  
        </IonGrid>
    </div>
    )
}

export default SedeEdit