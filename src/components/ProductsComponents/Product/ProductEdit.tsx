import { IonImg, IonGrid, IonRow, IonCol, IonLabel,IonButton,IonContent,IonPage,useIonAlert} from "@ionic/react";
import ProductoList from "../ListP";
import { db } from '../../../firebaseConfig';
import  firebaseApp  from "firebase/app";
import 'firebase/firestore';
import { useEffect, useState } from 'react';
import './ProductInfo.css'
import { deleteDoc, doc } from "firebase/firestore";


interface ContainerProps
{
    productoNombre : string
    docId : string
    productoSede : string
    image : string
}


const ProductEdit : React.FC<ContainerProps> = (props) => {
    const [present] = useIonAlert();

    // Borrar Productos, falta refrescar
    async function deleteProduct(){
        await deleteDoc(doc(db, "Producto", props.docId));
       
    }

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
              message: '¿Desea eliminar el producto?',
              buttons: ['Cancel', 
              //Borra el producto despues del mensaje de confirmación
              { text: 'Ok', handler: (d) => /*console.log('did dismiss')*/deleteProduct() }],
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

