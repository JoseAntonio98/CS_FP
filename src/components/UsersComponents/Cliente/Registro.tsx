import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {IonCol, IonButton, IonContent, IonGrid, IonRow,IonItem, IonLabel, IonInput } from '@ionic/react';
import { createCliente } from '../../../firebaseCliente'
import { toast } from '../../toast'

interface ContainerProps { }

const Registro: React.FC<ContainerProps> = () => {

    const [nombre, setNombre] = useState('')
    const [celular, setCelular] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');

    async function registro () {
        if(password !== cpassword){
            toast('contraseñas diferentes')
        }
        else {
            await createCliente(nombre, celular, email, password)
        }
        
    }

    return (
            <IonContent scrollY={true} fullscreen>
                <IonGrid>
                    <IonRow>
                        <IonCol></IonCol>
                        <IonCol className='ion-text-center'>
                            <h2>Registrar un nuevo Cliente</h2>
                        </IonCol>
                        <IonCol></IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol></IonCol>
                        <IonCol>
                            <IonItem>
                            <IonLabel position="floating" > Nombre</IonLabel>
                            <IonInput onIonChange={(e:any) => setNombre(e.target.value)}/>
                            </IonItem>
                        </IonCol>
                        <IonCol></IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol></IonCol>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating"> Celular</IonLabel>
                                <IonInput onIonChange={(e:any) => setCelular(e.target.value)}/>
                            </IonItem>
                        </IonCol>
                        <IonCol></IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol></IonCol>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating" > Correo Electronico</IonLabel>
                                <IonInput onIonChange={(e:any) => setEmail(e.target.value)}/>
                            </IonItem>
                        </IonCol>
                        <IonCol></IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol></IonCol>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating"> Contraseña</IonLabel>
                                <IonInput onIonChange={(e:any) => setPassword(e.target.value)} type="password" />
                            </IonItem>
                        </IonCol>
                        <IonCol></IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol></IonCol>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">Confirmar Contraseña</IonLabel>
                                <IonInput onIonChange={(e:any) => setCPassword(e.target.value)} type="password" />
                            </IonItem>
                        </IonCol>
                        <IonCol></IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol></IonCol>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="stacked">Dirección</IonLabel>
                            </IonItem>
                        </IonCol>
                        <IonCol></IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol></IonCol>
                        <IonCol className='ion-text-center ion-margin-top'>
                            <IonButton expand="block" fill="outline" onClick={Registro} >
                                Registrar
                            </IonButton>
                            <p><Link to="/tienda/login">Ingresar como tienda</Link></p>
                            <p> ¿Ya tienes una cuenta? <Link to="/cliente/login">Ingresa aquí</Link> </p>
                        </IonCol>
                        <IonCol></IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
    );
};

export default Registro;
