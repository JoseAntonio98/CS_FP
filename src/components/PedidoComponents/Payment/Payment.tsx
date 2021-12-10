import React, { useState } from "react";
import { IonButton, IonDatetime, IonInput, IonItem, IonLabel, IonList, IonListHeader, IonRadio, IonRadioGroup } from "@ionic/react";

import './Payment.css';
import Cash from "./Cash/Cash";
import Card from "./Card/Card";
import Input from "./Input/Input";

const Payment: React.FC<{
    currentTab: string,
    setCurrentTab: any,
    detailsDisabled: boolean,
    setDetailsDisabled: any}> = ({currentTab, setCurrentTab, detailsDisabled, setDetailsDisabled}) => {
    const [paymentMode, setPaymentMode] = useState<string>("card");

    return (
        <div className="payment">
            <IonList>
                <IonRadioGroup onIonChange={(event) => setPaymentMode(event.detail.value) } 
                    name="payment" value={paymentMode}>
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

                <Input paymentMode={paymentMode}></Input>
            </IonList>

            <IonButton onClick={() => {
                 setDetailsDisabled(false);
                 setCurrentTab("details");
            }} 
                expand="block" className="mt-3">
                Continuar
            </IonButton>
        </div>
    );
};

export default Payment;