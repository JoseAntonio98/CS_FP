import { IonCol, IonFab, IonText, IonModal, IonButton, IonItem, IonInput, IonContent, IonGrid, IonHeader, IonIcon, IonLabel, IonNav, IonRow, IonTitle } from '@ionic/react';
import ProductInfo from './Producto/ProductInfo'
import { useState, useEffect } from 'react';
import { add } from 'ionicons/icons'

interface ContainerProps
{
    arrayProductos : {}[]
}

const ProductoList: React.FC<ContainerProps> = (props) => {

    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

    const [productoNombre, setProductoNombre] = useState('')
    const [productoDesc, setProductoDesc] = useState('')
    const [cantidad, setCantidad] = useState(0)

    function actualizarDatos (nombre:string, desc:string)
    {
        setShowModal(true)
        setProductoNombre(nombre)
        setProductoDesc(desc)
    }

    function addPedido ()
    {

    }

    return (
        <IonRow>
            <IonModal isOpen={showModal}>
                <IonRow>
                    <IonCol>
                        <IonItem className="ion-margin ion-text-center">
                            <IonText>{productoNombre}</IonText>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonItem className="ion-margin">
                            <IonText>{productoDesc}</IonText>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonItem className="ion-margin">
                            <IonLabel position="floating">Cantidad</IonLabel>
                            <IonInput type='number' onIonChange={(e:any)=>setCantidad(e.target.value)}/>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonButton expand='block' fill="solid" onClick={() => setShowModal(false)}>Cancelar</IonButton>
                    </IonCol>
                    <IonCol>
                        <IonButton expand='block' >Registrar</IonButton>
                    </IonCol>
                </IonRow>
            </IonModal>

            <IonModal isOpen={showModal2}>
                <IonRow>
                    <IonCol>
                        <IonItem className="ion-margin ion-text-center">
                            <IonText>{productoNombre}</IonText>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonItem className="ion-margin">
                            <IonText>{productoDesc}</IonText>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonItem className="ion-margin">
                            <IonLabel position="floating">Cantidad</IonLabel>
                            <IonInput type='number' onIonChange={(e:any)=>setCantidad(e.target.value)}/>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonButton expand='block' fill="solid" onClick={() => setShowModal(false)}>Cancelar</IonButton>
                    </IonCol>
                    <IonCol>
                        <IonButton expand='block' >Registrar</IonButton>
                    </IonCol>
                </IonRow>
            </IonModal>

            <IonCol>
                <IonContent scrollY={true} fullscreen>
                    <IonTitle>Tiendas Cercanas</IonTitle>
                    <IonGrid>
                        {
                            props.arrayProductos.length > 0 ?
                            props.arrayProductos.map((item:any, index:Number) => {
                                return (
                                    <IonRow key={index.toString()}>
                                        <IonCol onClick={() => actualizarDatos(item.nombre, item.descripcion) }>
                                            <ProductInfo productoNombre={item.nombre} productoDesc={item.descripcion} docId={item.id} productoSede='' image=""/>
                                        </IonCol>
                                    </IonRow>
                                )
                            }) : null
                        }
                    </IonGrid>
                </IonContent>
            </IonCol>
        </IonRow>

    )
};

export default ProductoList;
