import React, { useState } from "react";
import { IonButton, IonItem, IonLabel, IonList, IonRadio, IonRadioGroup } from "@ionic/react";

import './Payment.css';
import Cash from "./Cash/Cash";
import Card from "./Card/Card";

const Payment: React.FC<{ setCurrentTab: any, setDetailsDisabled: any}> = ({setCurrentTab, setDetailsDisabled}) => {
    const [paymentMode, setPaymentMode] = useState<string>("cash");

    return (
        <div className="payment">
            <p>Elija el modo de pago:</p>
            <IonList>
                <IonRadioGroup onIonChange={(event) => setPaymentMode(event.detail.value) } 
                    name="payment" value={paymentMode}>

                    <IonItem>
                        <IonLabel>Pago en efectivo</IonLabel>
                        <IonRadio value="cash"></IonRadio>
                    </IonItem>

                    <IonItem>
                        <IonLabel>Añadir tarjeta</IonLabel>
                        <IonRadio value="card"></IonRadio>
                    </IonItem>
                </IonRadioGroup>

                { paymentMode === "cash" ? <Cash></Cash> : <Card></Card>
                }
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