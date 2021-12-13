import React, { useContext, useState } from "react";
import { IonBadge, IonCard, IonCol,IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonPage, IonRow, IonSegment, IonSegmentButton, IonText, IonTitle, IonToolbar } from "@ionic/react"
import './Pedido.css'
import Address from "../../components/PedidoComponents/Address/Address";
import Details from "../../components/PedidoComponents/Details/Details";
import Payment from "../../components/PedidoComponents/Payment/Payment";
import { CarritoContext } from "../../Contexto/Carrito/Context";

const Pedido: React.FC = () =>
{
    const { carrito } = useContext(CarritoContext);
    const total = carrito.total;
    const pedidos = carrito.pedidos;

    const [currentTab, setCurrentTab] = useState<string>("address"),
          [paymentMode, setPaymentMode] = useState<string>("cash");

    const [paymentDisabled, setPaymentDisabled] = useState<boolean>(true),
          [detailsDisabled, setDetailsDisabled] = useState<boolean>(true);

    const [reference, setReference] = useState<string>(""),
          [coord, setCoord] = useState([0,0]),
          [names, setNames] = useState<string>(""),
          [card, setCard] = useState<string>(""),
          [expire, setExpire] = useState<string>(""),
          [securityCode, setSecurityCode] = useState<string>(""),
          [timeDelivery, setTimeDelivery] = useState(0);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>
                        Datos del Pedido
                    </IonTitle>
                </IonToolbar>
                
                <IonSegment value={currentTab} onIonChange={(ev) => setCurrentTab(ev.detail.value as string) }>
                    <IonSegmentButton value="address">
                        <IonLabel>Dirección</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="payment" disabled={paymentDisabled}>
                        <IonLabel>Pago</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="details" disabled={detailsDisabled}>
                        <IonLabel>Detalles</IonLabel>
                    </IonSegmentButton>
                </IonSegment>
            </IonHeader>

            <IonContent className="ion-padding">
                <IonGrid>
                <IonRow>
                        <IonCol size="12" sizeLg="7">
                            { currentTab == "address" 
                                ? <Address 
                                    setPaymentDisabled={setPaymentDisabled} setCurrentTab={setCurrentTab}
                                    setReference={setReference} reference={reference}
                                    setCoord={setCoord} coord={coord}></Address>
                                : currentTab === "payment" 
                                    ?
                                    <Payment 
                                        setCurrentTab={setCurrentTab} setDetailsDisabled={setDetailsDisabled}
                                        paymentMode={paymentMode} setPaymentMode={setPaymentMode}
                                        names={names} setNames={setNames}
                                        card={card} setCard={setCard}
                                        expire={expire} setExpire={setExpire}
                                        securityCode={securityCode} setSecurityCode={setSecurityCode}
                                        timeDelivery={timeDelivery} setTimeDelivery={setTimeDelivery}    
                                    ></Payment>
                                    :
                                    <Details reference={reference} coord={coord} names={names} card={card} expire={expire} securityCode={securityCode} timeDelivery={timeDelivery}></Details>
                            }
                        </IonCol>

                        <IonCol size="12" sizeLg="5">
                            <IonTitle className="px-2 py-2">Mis Pedidos</IonTitle>

                            <IonCard>
                                {
                                    pedidos.map( product => {
                                        return (
                                            <IonItem key={product.productid}>
                                                <IonBadge slot="start">x{product.cantidad}</IonBadge>
                                                <IonLabel> 
                                                    {product.nombre}
                                                </IonLabel>
                                                <IonLabel slot="end">S/. {product.precio}</IonLabel>
                                            </IonItem>
                                        );
                                    })
                                }
                            </IonCard>

                            <IonCard>
                                <IonItem>
                                    <IonLabel slot="start"><b>Total</b></IonLabel>
                                    <IonLabel slot="end">S/. {total}</IonLabel>
                                </IonItem>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default Pedido;