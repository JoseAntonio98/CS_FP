import React, { useState } from "react";
import { IonBadge, IonCard, IonCol,IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonPage, IonRow, IonSegment, IonSegmentButton, IonText, IonTitle, IonToolbar } from "@ionic/react"
import './Pedido.css'
import Address from "../../components/PedidoComponents/Address/Address";
import Details from "../../components/PedidoComponents/Details/Details";
import Payment from "../../components/PedidoComponents/Payment/Payment";

const Pedido: React.FC = () =>
{
    const [currentTab, setCurrentTab] = useState<string>("address"),
          [paymentMode, setPaymentMode] = useState<string>("cash");

    const [paymentDisabled, setPaymentDisabled] = useState<boolean>(true),
          [detailsDisabled, setDetailsDisabled] = useState<boolean>(true);

    const [reference, setReference] = useState<string>(""),
          [address, setAddress] = useState<string>(""),
          [names, setNames] = useState<string>(""),
          [card, setCard] = useState<string>(""),
          [expire, setExpire] = useState<string>(""),
          [securityCode, setSecurityCode] = useState<string>("");

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>
                        Pedidos
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
                                    setReference={setReference} reference={reference}></Address>
                                : currentTab === "payment" 
                                    ?
                                    <Payment 
                                        setCurrentTab={setCurrentTab} setDetailsDisabled={setDetailsDisabled}
                                        paymentMode={paymentMode} setPaymentMode={setPaymentMode}
                                        names={names} setNames={setNames}
                                        card={card} setCard={setCard}
                                        expire={expire} setExpire={setExpire}
                                        securityCode={securityCode} setSecurityCode={setSecurityCode}    
                                    ></Payment>
                                    :
                                    <Details reference={reference} address={address} names={names} card={card} expire={expire} securityCode={securityCode}></Details>
                            }
                        </IonCol>

                        <IonCol size="12" sizeLg="5">
                            <IonTitle className="px-0 py-2">Mis Pedidos</IonTitle>

                            <IonCard>
                                <IonItem>
                                    <IonBadge slot="start">x3</IonBadge>
                                    <IonLabel> 
                                        Producto 1
                                    </IonLabel>
                                    <IonLabel slot="end">S/. 75.00</IonLabel>
                                </IonItem>
                                <IonItem>
                                    <IonBadge slot="start">x1</IonBadge>
                                    <IonLabel> 
                                        Producto 2
                                    </IonLabel>
                                    <IonLabel slot="end">S/. 30.00</IonLabel>
                                </IonItem>
                            </IonCard>

                            <IonCard>
                                <IonItem>
                                    <IonLabel slot="start">Total:</IonLabel>
                                    <IonLabel slot="end">S/. 105.00</IonLabel>
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