import { IonImg, IonGrid, IonRow,IonIcon ,IonCol, IonLabel,IonButton,IonContent,IonPage,useIonAlert} from "@ionic/react";
import './ProductInfo.css'
import 'pencil-outline.svg'
import ProductoList from '../List';
import ProductoDatos from '../List';
import { list } from "ionicons/icons";
import ProductDatos from './ProductDatos';

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
    <div className="ProductoEdit">
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
            <IonCol size="3">
            <IonButton onClick={() => {

                    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                    list
                
                }
                
             }expand="block" className="mt-3"
            >Editar</IonButton>
            <IonButton
          expand="block"
          onClick={() =>
            present({
              header: 'Alerta',
              message: '¿Desea Eliminar?',
              buttons: ['Cancel', { text: 'Ok', handler: (d) => console.log('ok pressed') }],
              onDidDismiss: (e) => console.log('did dismiss'),
            })}>Eliminar</IonButton>
            </IonCol>
            
            
            
        </IonRow>  
        </IonGrid>
        
    </div>
    )
}

export default ProductEdit
