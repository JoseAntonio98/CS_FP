import React from "react";
import { IonItem, IonLabel, IonTextarea, IonButton } from "@ionic/react";

import './Address.css';

const Address: React.FC<{ setPaymentDisabled: any, setCurrentTab: any, reference: string, setReference: any}> = ({setPaymentDisabled, setCurrentTab, reference, setReference}) => {
    return (
        <div className="address">
            <p>Elija la dirección de destino:</p>
            <div className="map"></div>

            <IonItem>
                <IonLabel position="floating">Referencia:</IonLabel>
                <IonTextarea onIonChange={ (e) => setReference(e.detail.value)} value={reference}
                    rows={2} cols={10} placeholder="Ingrese algún punto de referencia."></IonTextarea>
            </IonItem>

            <IonButton onClick={() => {
                setPaymentDisabled(false);
                setCurrentTab("payment");
                
            } } 
                expand="block" className="mt-3">
                Continuar
            </IonButton>
        </div>
    );
};

export default Address;