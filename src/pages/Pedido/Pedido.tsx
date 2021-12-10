import React, { useState } from "react";
import { IonCard, IonCol,IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonPage, IonRow, IonSegment, IonSegmentButton, IonText, IonTitle, IonToolbar } from "@ionic/react"
import './Pedido.css'
import Address from "../../components/PedidoComponents/Address/Address";
import Details from "../../components/PedidoComponents/Details/Details";
import Payment from "../../components/PedidoComponents/Payment/Payment";

const Pedido: React.FC = () =>
{
    const [currentTab, setCurrentTab] = useState<string>("address");
    const [paymentDisabled, setPaymentDisabled] = useState<boolean>(true);
    const [detailsDisabled, setDetailsDisabled] = useState<boolean>(true);

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
                                ? <Address setPaymentDisabled={setPaymentDisabled} setCurrentTab={setCurrentTab}></Address>
                                : currentTab === "payment" 
                                    ?
                                    <Payment setCurrentTab={setCurrentTab} setDetailsDisabled={setDetailsDisabled}></Payment>
                                    :
                                    <Details></Details>
                            }
                        </IonCol>

                        <IonCol size="12" sizeLg="5" className="ion-padding">
                            <h2>Mis Pedidos</h2>

                            <IonCard>
                                <IonItem>
                                    <IonText slot="start">
                                        <p>x3</p>
                                    </IonText>
                                    <IonLabel>Producto 1</IonLabel>
                                    <p>S/. 25.00</p>
                                    <p></p>
                                </IonItem>
                            </IonCard>

                            <IonCard>
                                <IonItem>
                                    <IonText slot="start">
                                        <p>x3</p>
                                    </IonText>
                                    <IonLabel>Producto 1</IonLabel>
                                    <p>S/. 25.00</p>
                                    <p></p>
                                </IonItem>
                            </IonCard>

                            <IonCard>
                                <IonItem>
                                    <IonLabel>Total:</IonLabel>
                                    <IonText slot="end">
                                        <p>S/. 125.00</p>
                                    </IonText>
                                </IonItem>
                            </IonCard>

                            {/* <IonButton expand="block" class="ion-margin">
                                Continuar
                            </IonButton> */}
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default Pedido;