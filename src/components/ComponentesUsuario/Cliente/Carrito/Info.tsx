import { useContext, useEffect } from "react";
import { IonList, IonItemSliding, IonItemOptions, IonItemOption, IonItem, IonBadge, IonText, IonButton, IonIcon } from "@ionic/react";
import { CarritoContext } from "../../../../Contexto/Carrito/Context";
import { searchCircle } from 'ionicons/icons'
import { Link } from "react-router-dom";

import './info.css'

const Info: React.FC = () => {

    const { carrito, deletePedido } = useContext(CarritoContext)
    const { pedidos } = carrito

    useEffect(() => {
        deletePedido('001', 0)
    }, [])

    function borrarProducto(id:string, prc:number) {
        deletePedido(id, prc)
    }

    return (
        <IonList>
            {
                pedidos.length > 0?
                pedidos.map((pedido, index:Number) => {
                    return ( 
                    <IonItemSliding key={index.toString()}>

                        <IonItem>
                            <IonBadge slot="start">X {pedido.cantidad}</IonBadge>
                            <IonText>{pedido.nombre}</IonText>
                            <IonBadge slot="end">S/.{pedido.precio}.00</IonBadge>
                        </IonItem>

                        <IonItemOptions side="end">
                            <IonItemOption onClick={() => borrarProducto(pedido.productid, pedido.precio)}>Borrar</IonItemOption>
                        </IonItemOptions>

                    </IonItemSliding>
                    
                )
                }):
                    <IonItemSliding>

                        <IonItem>
                            <IonIcon size="large" slot="end" icon={searchCircle}></IonIcon>
                            <IonText>Tu carrito esta vacío</IonText>
                        </IonItem>

                    </IonItemSliding>
            }


            <IonItemSliding>

                <IonItem>
                    <IonText slot="start" ><b>Total</b></IonText>
                    <IonText slot="end">S/.{carrito.total}.00</IonText>
                </IonItem>

            </IonItemSliding>

            <IonButton disabled={pedidos.length>0?false:true} expand="block" fill="solid" >
                <Link className="link" to="/pedido" >Hacer Pedido</Link>
            </IonButton>


        </IonList>
    )
}

export default Info;