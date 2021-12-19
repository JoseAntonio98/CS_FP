import { IonAlert, IonCol, IonLoading, IonText, IonModal, IonButton, IonItem, IonInput, IonContent, IonGrid, IonHeader, IonIcon, IonLabel, IonNav, IonRow, IonTitle } from '@ionic/react';
import ProductInfo from './Info'
import { useState, useContext } from 'react';
import { CarritoContext } from '../../../Contexto/Carrito/Context'
import { SesionContext } from '../../../Contexto/Sesion/Context'
import Mapa from '../../Mapa';

interface ContainerProps
{
    arrayProductos : {}[]
}

const ListaProducto: React.FC<ContainerProps> = (props) => {

    const [loading, setLoading] = useState<boolean>(false)
    const [alert, setAlert] = useState<boolean>(false)
    const [mAdd, setMAdd] = useState<boolean>(false);
    const [mMap, setMMap] = useState<boolean>(false);

    const [id, setId] = useState('')
    const [pnom, setPNom] = useState('')
    const [pdes, setPDes] = useState('')
    const [ctd, setCtd] = useState(0)
    const [prc, setPr] = useState(15)

    const { carrito ,addPedido } = useContext(CarritoContext)
    const { sesion } = useContext(SesionContext)

    const actualizarDatos = (uid: string, nombre:string, desc:string, pr : number) => 
    {
        setId(uid)
        setMAdd(true)
        setPNom(nombre)
        setPDes(desc)
        //setPr(pr)
    }

    function addProducto() {
        
        const pedido = carrito.pedidos.filter(pedido => pedido.productid == id)
        if (pedido.length == 0)
        {
            setLoading(true)
            addPedido( id, pnom, ctd, prc*ctd) 
            setLoading(false)   
        }
        else {
            setAlert(true)
        } 
        
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
            <IonAlert
                isOpen={alert}
                onDidDismiss={() => setAlert(false)}
                cssClass='my-custom-class'
                header={'Ups'}
                subHeader={'Ya tienes este artículo en tu carrito'}
                buttons={['OK']}
            />
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
                            <IonInput type='number' min='1' onIonChange={(e:any)=>setCtd(e.target.value)}/>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonItem className="ion-margin">
                            <IonText>S/.{prc}</IonText>
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
                    <Mapa tipo='directions' o_lat={-16.3479552} o_lon={-71.5522048} d_lat={-16.3479552} d_lon={-71.5622048} />
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonButton expand='block' fill="solid" onClick={() => setMMap(false)}>salir</IonButton>
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
                                    <>
                                    <IonRow key={index.toString()}>
                                        <IonCol 
                                            onClick={() => 
                                            actualizarDatos(index.toString(), i.nombre, i.descripcion, i.precio) }>
                                            <ProductInfo id={i.id} nombre={i.nombre} descripcion={i.descripcion} precio = {i.precio} imagen={i.imagen}/>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow >
                                        <IonCol className="ion-text-right">
                                        <IonButton fill='outline' size='small' onClick={() => setMMap(true)} >Como llegar</IonButton>
                                        </IonCol>
                                    </IonRow>
                                </>
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
