import { IonCol, IonLoading, IonText, IonModal, IonButton, IonItem, IonInput, IonContent, IonGrid, IonHeader, IonIcon, IonLabel, IonNav, IonRow, IonTitle } from '@ionic/react';
import ProductInfo from './Producto/ProductInfo'
import { useState, useEffect, useContext } from 'react';

import { CarritoContext } from '../../../Contexto/Carrito/Context'
import { setuid } from 'process';

interface ContainerProps
{
    arrayProductos : {}[]
}

const ListaProducto: React.FC<ContainerProps> = (props) => {

    const [loading, setLoading] = useState<boolean>(false)
    const [id, setId] = useState('')
    const [mAdd, setMAdd] = useState(false);
    const [mMap, setMMap] = useState(false);
    const [pnom, setPNom] = useState('')
    const [pdes, setPDes] = useState('')
    const [ctd, setCtd] = useState(0)
    const [prc, setPr] = useState(15)

    const {carrito, addPedido} = useContext(CarritoContext)
    console.log({carrito})

    const actualizarDatos = (uid: string, nombre:string, desc:string, pr : number) => 
    {
        setId(uid)
        setMAdd(true)
        setPNom(nombre)
        setPDes(desc)
        //setPr(pr)
    }

    function addProducto() {
        setLoading(true)
        addPedido( id, pnom, ctd, prc*ctd)
        setLoading(false)
        setMAdd(false)
    }

    if (loading) {
        return <IonLoading
        isOpen={loading}
        onDidDismiss={() => setLoading(false)}
        message={'Obteniendo Tiendas Cercanas'}
      />
    }


    return (
        <IonRow>
             <IonModal isOpen={mAdd}>
                <IonRow>
                    <IonCol>
                        <IonItem className="ion-margin ion-text-center">
                            <IonText>{pnom}</IonText>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonItem className="ion-margin">
                            <IonText>{pdes}</IonText>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonItem className="ion-margin">
                            <IonLabel position="floating">Cantidad</IonLabel>
                            <IonInput type='number' onIonChange={(e:any)=>setCtd(e.target.value)}/>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonItem className="ion-margin">
                            <IonText>{prc}</IonText>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonButton expand='block' fill="solid" onClick={() => setMAdd(false)}>Cancelar</IonButton>
                    </IonCol>
                    <IonCol>
                        <IonButton onClick={addProducto} expand='block'>Añadir</IonButton>
                    </IonCol>
                </IonRow>
            </IonModal>

            <IonModal isOpen={mMap}>
                <IonRow>
                    <IonCol>
                        <IonItem className="ion-margin ion-text-center">
                            <IonText></IonText>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonItem className="ion-margin">
                            <IonText>{}</IonText>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonButton expand='block' fill="solid" onClick={() => setMMap(false)}>Cancelar</IonButton>
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
                            props.arrayProductos.map((i:any, index:Number) => {
                                return (
                                    <IonRow key={i.toString()}>
                                        <IonCol 
                                        onClick={() => 
                                        actualizarDatos(i.uid, i.nombre, i.descripcion, i.precio) }>
                                            <ProductInfo productoNombre={i.nombre} productoDesc={i.descripcion} docId={i.id} productoSede='' image=""/>
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

export default ListaProducto;
