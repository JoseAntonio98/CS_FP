import React from "react";
import { IonItem, IonLabel, IonTextarea, IonButton, useIonToast, IonTitle } from "@ionic/react";

import './Address.css';

const Address: React.FC<{ setPaymentDisabled: any, setCurrentTab: any, reference: string, setReference: any, address: string, setAddress: any}> = ({setPaymentDisabled, setCurrentTab, reference, setReference, address, setAddress}) => {
    
    const [present] = useIonToast();

    return (
        <div>
            {/* <div className="map"></div> */}
            {/* <Mapa coordX={-16.3342431} coordY={-71.6079893}></Mapa> */}
            <IonTitle className="pb-3 px-0">Dirección de entrega</IonTitle>
            <IonItem>
                <IonLabel position="floating">Dirección:</IonLabel>
                <IonTextarea onIonChange={ (e) => setAddress(e.detail.value)} value={address}
                    rows={2} cols={10} placeholder="Ingrese la dirección de entrega.">
                </IonTextarea>
            </IonItem>

            <IonItem>
                <IonLabel position="floating">Referencia:</IonLabel>
                <IonTextarea onIonChange={ (e) => setReference(e.detail.value)} value={reference}
                    rows={2} cols={10} placeholder="Ingrese algún punto de referencia."></IonTextarea>
            </IonItem>

            <IonButton onClick={() => {
                // Agregar validacion de direccion
                if(reference.trim() !== "") {
                    setPaymentDisabled(false);
                    setCurrentTab("payment");
                } else {
                    present({
                        message: "Ingrese todos los datos",
                        duration: 2000,
                        color: "light"
                    });
                }
                
            } } 
                expand="block" className="mt-3">
                Continuar
            </IonButton>
        </div>
    );
};

export default Address;