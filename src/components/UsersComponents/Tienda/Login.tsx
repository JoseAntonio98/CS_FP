import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {IonCol, IonButton, IonContent, IonGrid, IonRow, IonTitle, IonItem, IonLabel, IonInput } from '@ionic/react';
import { signInTienda } from '../../../firebaseTienda'
import './Login.css';

interface ContainerProps { }

const Login: React.FC<ContainerProps> = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function login() {
        await signInTienda(email, password)
    }

    return (
        <div className="Login">
            <IonGrid>
                <IonRow>
                    <IonCol></IonCol>
                    <IonCol className='ion-text-center ion-margin-top'>
                        <h1>Ingresar como Tienda</h1>
                    </IonCol>
                    <IonCol></IonCol>
                </IonRow>
                <IonRow>
                    <IonCol></IonCol>
                    <IonCol>
                        <IonItem>
                            <IonLabel position="floating" > Correo Electronico</IonLabel>
                            <IonInput onIonChange={(e:any) => setEmail(e.target.value)} type="email"/>
                        </IonItem>
                    </IonCol>
                    <IonCol></IonCol>
                </IonRow>
                <IonRow>
                    <IonCol></IonCol>
                    <IonCol>
                        <IonItem>
                            <IonLabel position="floating"> Contraseña</IonLabel>
                            <IonInput onIonChange={(e:any) => setPassword(e.target.value)} type="password"/>
                        </IonItem>
                    </IonCol>
                    <IonCol></IonCol>
                </IonRow>
                <IonRow>
                    <IonCol></IonCol>
                    <IonCol className='ion-text-center ion-margin-top'>
                        <IonButton expand="block" fill="outline" onClick={login} >
                            Ingresar
                        </IonButton>
                        <p><Link to="/cliente/login">soy cliente</Link></p>
                        <p> ¿Eres nuevo aquí? <Link to="/tienda/registro">Registrate</Link> </p>
                    </IonCol>
                    <IonCol></IonCol>
                </IonRow>
            </IonGrid>
        </div>
    );
};

export default Login;
