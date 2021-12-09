import React from "react";
import { IonDatetime, IonInput, IonItem, IonLabel, IonList, IonListHeader, IonRadio, IonRadioGroup } from "@ionic/react";

import './Payment.css';

const Payment: React.FC = () => {
    return (
        <div className="payment">
            <IonList>
                <IonRadioGroup name="payment" value="cash">
                    <IonListHeader>
                        <IonLabel>Elija el modo de pago</IonLabel>
                    </IonListHeader>

                    <IonItem>
                        <IonLabel>Pago en efectivo</IonLabel>
                        <IonRadio value="cash"></IonRadio>
                    </IonItem>

                    <IonItem>
                        <IonLabel>Añadir tarjeta</IonLabel>
                        <IonRadio value="card"></IonRadio>
                    </IonItem>
                </IonRadioGroup>

                <IonList>
                    <IonItem>
                        <IonLabel position="floating">Apellidos y Nombres:</IonLabel>
                        <IonInput type="text" placeholder="Titular"></IonInput>
                    </IonItem>
                </IonList>

                <IonList>
                    <IonItem>
                        <IonLabel position="floating">Número de tarjeta:</IonLabel>
                        <IonInput type="text" placeholder="XXX-0000-0000-000"></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonLabel position="floating">Apellidos y Nombres:</IonLabel>
                        <IonInput type="text" placeholder="Titular"></IonInput>
                    </IonItem>
                    
                    <IonItem>
                        <IonLabel>Fecha de inicio:</IonLabel>
                        <IonDatetime display-format="DD.MM.YYYY HH:mm"></IonDatetime>
                    </IonItem>

                    <IonItem>
                        <IonLabel>Fecha de expiración:</IonLabel>
                        <IonDatetime display-format="DD.MM.YYYY HH:mm"></IonDatetime>
                    </IonItem>

                    <IonItem>
                        <IonLabel position="floating">Código de seguridad:</IonLabel>
                        <IonInput type="text" placeholder="6 dígitos de seguridad"></IonInput>
                    </IonItem>

                </IonList>
            </IonList>
        </div>
    );
};

export default Payment;