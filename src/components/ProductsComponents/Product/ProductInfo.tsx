import { IonImg, IonGrid, IonRow, IonCol, IonLabel,IonButton,IonContent,IonPage,useIonAlert} from "@ionic/react";
//import ProductoList from "../ListP";
//import { db } from '../../../firebaseConfig';
//import  firebaseApp  from "firebase/app";
import 'firebase/firestore';
//import { useEffect, useState } from 'react';
import './ProductInfo.css'
//import { deleteDoc, doc } from "firebase/firestore";
import { actualizarProducto, deleteProducto } from "../../../servicios/firebaseProducto";

interface ContainerProps
{
    productoNombre : string
    docId : string
    productoSede : string
    image : string
    precio: number
    categoria:string
    descripcion:string
    stock:number
}


const ProductEdit : React.FC<ContainerProps> = (props) => {
    const [present] = useIonAlert();

    // Borrar Productos, falta refrescar
    async function deleteProduct(){
       // await deleteDoc(doc(db, "productos", props.docId));   
        await deleteProducto(props.docId)
    }
    // Actualizar Prodcuto, por ID
    //funcion actualizarProducto(uidDoc: String, descripcion:string, idcategoria:string, idtienda:string, imagen:string, nombre:string, precio:number)
    async function updateProduct(){
        var uidProducto = props.docId
        //await actualizarProducto(uidProducto,"1","2","idsesion","4","Nuevo Rollo Papel Editado",99,20)        
    }

    return (
    <div className="ProductoInfo">
        <IonGrid>
        <IonRow>
            <IonCol size="9">
                <div>
                    <strong>Nombre: {props.productoNombre}</strong>
                </div>
                <div>
                    <IonLabel>Categoria: {props.categoria}</IonLabel>
                </div>
                <div>
                    <IonLabel>Descripcion: {props.descripcion}</IonLabel>
                </div>
                <div>
                    <IonLabel>Stock: {props.stock}</IonLabel>
                </div>
                <div>
                    <strong>Precio: {props.precio}</strong>
                </div>
            </IonCol>
            <IonCol size="3">
                <IonImg src={`{props.image}`} />
            </IonCol>
            <IonCol size="2">
            
            </IonCol>
        </IonRow>  
        </IonGrid>
    </div>
    )
}

export default ProductEdit

