import React, { useState } from "react";
import { IonButton, IonDatetime, IonInput, IonItem, IonLabel, IonList, IonRadio, IonRadioGroup, useIonToast } from "@ionic/react";

import './Payment.css';

const Payment: React.FC<{ setCurrentTab: any, setDetailsDisabled: any
                          paymentMode: string, setPaymentMode: any,
                          names: string, setNames: any,
                          card: string, setCard: any,
                          expire: string, setExpire: any,
                          securityCode: string, setSecurityCode: any, 
                          timeDelivery: number, setTimeDelivery: any 
    }> = ({setCurrentTab, setDetailsDisabled, paymentMode, setPaymentMode, names, setNames, card, setCard, expire, setExpire, securityCode, setSecurityCode, timeDelivery, setTimeDelivery}) => {
    
    const [present] = useIonToast();

    return (
        <div>
            <h6>Modo de pago:</h6>
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

                <IonList>
                    <IonItem>
                        <IonLabel position="floating">Nombres y Apellidos:</IonLabel>
                        <IonInput onIonChange={ (e) => setNames(e.detail.value)} 
                            value={names}
                            type="text"></IonInput>
                    </IonItem>

                    { paymentMode === "card" ?
                        <>
                        <IonItem>
                            <IonLabel position="floating">Número de tarjeta:</IonLabel>
                            <IonInput type="text" maxlength={19} onIonChange={ (e) => setCard(e.detail.value)} value={card}></IonInput>
                        </IonItem>
    
                        <IonItem>
                            <IonLabel>Fecha de expiración:</IonLabel>
                            <IonDatetime display-format="DD.MM.YYYY HH:mm" onIonChange={ (e) => setExpire(e.detail.value)} value={expire}></IonDatetime>
                        </IonItem>
    
                        <IonItem>
                            <IonLabel position="floating">Código de seguridad:</IonLabel>
                            <IonInput type="text" maxlength={6} onIonChange={ (e) => setSecurityCode(e.detail.value)} value={securityCode}></IonInput>
                        </IonItem>
                        </> : <span></span>
                    }
                </IonList>
            </IonList>

            <IonButton onClick={() => {
                if((paymentMode === "cash" && names.trim() === "")
                    || (paymentMode === "card" && (names.trim() === "" || card.trim() === "" || expire === "" || securityCode.trim() === ""))) 
                {
                    present({
                        message: "Ingrese todos los datos",
                        duration: 2000,
                        color: "dark"
                    });
                } else {
                    setDetailsDisabled(false);
                    setCurrentTab("details");
                    if(timeDelivery === 0) {
                        setTimeDelivery(Math.floor(Math.random() * 50) + 10);
                    } 

                }
            }} 
                expand="block" className="mt-3">
                Continuar
            </IonButton>
        </div>
    );
};

export default Payment;