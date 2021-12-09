import React, { useState } from "react";
import { 
    IonButton, 
    IonCard, 
    IonCol,
    IonContent, 
    IonGrid, 
    IonHeader, 
    IonItem, 
    IonLabel, 
    IonPage, 
    IonRow, 
    IonSegment, 
    IonSegmentButton, 
    IonText, 
    IonTextarea, 
    IonTitle, 
    IonToolbar } from "@ionic/react"
import './Pedido.css'

const Pedido: React.FC = () =>
{
    const [currentTab, setCurrentTab] = useState<string>("address");

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
                    <IonSegmentButton value="payment">
                        <IonLabel>Pago</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="details">
                        <IonLabel>Detalles</IonLabel>
                    </IonSegmentButton>
                </IonSegment>
            </IonHeader>

            <IonContent className="ion-padding">
                <IonGrid>
                <IonRow>
                        <IonCol size="12" sizeLg="7">
                            <div className="address">
                                <p>Elija la dirección de destino:</p>
                                <div className="map"></div>
            
                                <IonItem>
                                    <IonLabel position="floating">Referencia:</IonLabel>
                                    <IonTextarea rows={2} cols={10} placeholder="Ingrese algún punto de referencia."></IonTextarea>
                                </IonItem>
                            </div>
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

                            <IonButton expand="block" class="ion-margin">
                                Continuar
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default Pedido;