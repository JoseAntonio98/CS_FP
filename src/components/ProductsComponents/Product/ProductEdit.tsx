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
    const [present] = useIonAlert();
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

export default ProductEdit

