import React from "react";
import { IonButton, IonIcon, IonItem, IonLabel, IonList } from "@ionic/react";

import './Details.css';

const Details: React.FC = () => {
    return (
        <div className="details">
            <p>Detalles del pedido:</p>
            <IonList>
                <IonItem>
                    <IonLabel>
                        <p>Apellidos y Nombres:</p>
                        <h2>Nombre Paterno Materno</h2>
                    </IonLabel>
                </IonItem>

                <IonItem>
                    <IonLabel>
                        <p>Número de tarjeta:</p>
                        <h2>XXX-0000-0000-000</h2>
                    </IonLabel>
                </IonItem>

                <IonItem>
                    <IonLabel>
                        <p>Dirección de entrega:</p>
                        <h2>Av. Independencia s/n</h2>
                    </IonLabel>
                </IonItem>

                <IonItem>
                    <IonLabel>
                        <p>Punto de referencia:</p>
                        <h2>A 3 cuadras de la UNSA</h2>
                    </IonLabel>
                </IonItem>

                <IonItem>
                    <IonLabel>
                        <p>Tiempo estimado de entrega:</p>
                        <h2>15 minutos</h2>
                    </IonLabel>
                </IonItem>
            </IonList>

            <IonButton fill="clear" className="margin">
                <IonIcon slot="start" name="storefront-outline"></IonIcon>
                <IonLabel>Recoger en tienda</IonLabel>
            </IonButton>

            <IonButton expand="block" className="ion-margin">
                Finalizar
            </IonButton>
        </div>
    );
};

export default Details;