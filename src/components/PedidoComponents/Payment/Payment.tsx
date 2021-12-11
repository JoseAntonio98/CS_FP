import React, { useState } from "react";
import { IonButton, IonDatetime, IonInput, IonItem, IonLabel, IonList, IonRadio, IonRadioGroup, IonTitle, useIonToast } from "@ionic/react";

import './Payment.css';

const Payment: React.FC<{ setCurrentTab: any, setDetailsDisabled: any
                          paymentMode: string, setPaymentMode: any,
                          names: string, setNames: any,
                          card: string, setCard: any,
                          expire: string, setExpire: any,
                          securityCode: string, setSecurityCode: any  
    }> = ({setCurrentTab, setDetailsDisabled, paymentMode, setPaymentMode, names, setNames, card, setCard, expire, setExpire, securityCode, setSecurityCode}) => {
    
    const [present] = useIonToast();

    return (
        <div>
            <IonTitle className="pb-3 px-0">Modo de pago</IonTitle>
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
                        <IonLabel position="floating">Apellidos y Nombres:</IonLabel>
                        <IonInput type="text" onIonChange={ (e) => setNames(e.detail.value)} value={names}></IonInput>
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
                    || (paymentMode === "card" && names.trim() === "" && card.trim() === "" && expire === "" && securityCode.trim() === "")) 
                {
                    present({
                        message: "Ingrese los datos",
                        duration: 2000,
                        color: "light"
                    });
                } else {
                    setDetailsDisabled(false);
                    setCurrentTab("details");
                }
            }} 
                expand="block" className="mt-3">
                Continuar
            </IonButton>
        </div>
    );
};

export default Payment;