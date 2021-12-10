import { IonDatetime, IonInput, IonItem, IonLabel, IonList } from "@ionic/react";
import React from "react";

const Card: React.FC = () => {
    return (
        <IonList>
            <IonItem>
                <IonLabel position="floating">Apellidos y Nombres:</IonLabel>
                <IonInput type="text" placeholder="Titular"></IonInput>
            </IonItem>

            <IonItem>
                <IonLabel position="floating">Número de tarjeta:</IonLabel>
                <IonInput type="text" placeholder="XXX-0000-0000-000"></IonInput>
            </IonItem>

            {/* <IonItem>
                <IonLabel>Fecha de inicio:</IonLabel>
                <IonDatetime display-format="DD.MM.YYYY HH:mm"></IonDatetime>
            </IonItem> */}

            <IonItem>
                <IonLabel>Fecha de expiración:</IonLabel>
                <IonDatetime display-format="DD.MM.YYYY HH:mm"></IonDatetime>
            </IonItem>

            <IonItem>
                <IonLabel position="floating">Código de seguridad:</IonLabel>
                <IonInput type="text" placeholder="6 dígitos de seguridad"></IonInput>
            </IonItem>

        </IonList>
    );
};

export default Card;