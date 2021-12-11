import { IonInput, IonItem, IonLabel, IonList } from "@ionic/react";
import React from "react";

const Cash: React.FC = () => {
    return (
        <IonList>
            <IonItem>
                <IonLabel position="floating">Apellidos y Nombres:</IonLabel>
                <IonInput type="text" placeholder="Titular"></IonInput>
            </IonItem>
        </IonList>
    );
};

export default Cash;