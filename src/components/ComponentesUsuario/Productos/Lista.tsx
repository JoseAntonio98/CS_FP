import { IonAlert, IonCol, IonLoading, IonText, IonModal, IonButton, IonItem, IonInput, IonContent, IonGrid, IonHeader, IonIcon, IonLabel, IonNav, IonRow, IonTitle } from '@ionic/react';
import ProductInfo from './Info'
import { useState, useContext } from 'react';
import { CarritoContext } from '../../../Contexto/Carrito/Context'
import { SesionContext } from '../../../Contexto/Sesion/Context'

interface ContainerProps {
    arrayProductos: {}[]
}

const ListaProducto: React.FC<ContainerProps> = (props) => {

    const [loading, setLoading] = useState<boolean>(false)
    const [alert, setAlert] = useState<boolean>(false)
    const [mAdd, setMAdd] = useState<boolean>(false)

    const [id, setId] = useState('')
    const [pnom, setPNom] = useState('')
    const [pdes, setPDes] = useState('')
    const [ctd, setCtd] = useState(0)
    const [prc, setPr] = useState(15)

    const { carrito, addPedido } = useContext(CarritoContext)
    const { sesion } = useContext(SesionContext)

    const actualizarDatos = (uid: string, nombre: string, desc: string, pr: number) => {
        setId(uid)
        setMAdd(true)
        setPNom(nombre)
        setPDes(desc)
        setPr(pr)
    }

    function addProducto() {

        const pedido = carrito.pedidos.filter(pedido => pedido.productid == id)
        if (pedido.length == 0) {
            setLoading(true)
            addPedido(id, pnom, ctd, prc * ctd)
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
            <IonModal cssClass="Modal-productos" isOpen={mAdd}>
                <div className='form'>
                    <IonRow>
                        <IonCol>
                            <IonItem className="ion-margin ion-text-center">
                                <IonText><strong>{pnom}</strong></IonText>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem className="ion-margin">
                                <IonText>Descripción <br></br>{pdes}</IonText>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem className="ion-margin">
                                <IonLabel >Cantidad</IonLabel>
                                <IonInput slot='end' type='number' min='1' placeholder='5' onIonChange={(e: any) => setCtd(e.target.value)} />
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem className="ion-margin">
                                <IonText slot='end'>Precio: <strong>S/.{prc}</strong> c/u</IonText>
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
                </div>
            </IonModal>

            <IonCol>
                <IonContent scrollY={true} fullscreen>
                    <IonTitle>Productos</IonTitle>
                    <IonGrid>
                        {
                            props.arrayProductos.length > 0 ?
                                props.arrayProductos.map((i: any, index: Number) => {
                                    return (

                                        <IonRow key={index.toString()}>
                                            <IonCol
                                                onClick={() =>
                                                    actualizarDatos(index.toString(), i.nombre, i.descripcion, i.precio)}>
                                                <ProductInfo id={i.id} nombre={i.nombre} descripcion={i.descripcion} precio={i.precio} imagen={i.imagen} categoria={i.categoria} />
                                            </IonCol>
                                        </IonRow>

                                    )
                                }) : <IonRow>
                                    <IonCol>
                                        <IonTitle className='ion-text-center' style={{ padding: 14 }}>No se han encontrado productos que cumplan tales requisitos</IonTitle>
                                    </IonCol>
                                </IonRow>
                        }
                    </IonGrid>
                </IonContent>
            </IonCol>
        </IonRow>

    )
};

export default ListaProducto;
