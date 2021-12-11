import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { IonSelect, IonContent, IonSelectOption, IonCol, IonButton, IonGrid, IonRow, IonItem, IonLabel, IonInput } from '@ionic/react';
import { createTienda } from '../../../servicios/firebaseTienda'
import { toast } from '../../toast'

interface ContainerProps { }

const Registro: React.FC<ContainerProps> = () => {

    const [nombre, setNombre] = useState('')
    const [ruc, setRuc] = useState('')
    const [rubro, setRubro] = useState('')
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [cpassword, setcpassword] = useState('');

    async function Registro () {
        if(password !== cpassword){
            toast('contraseñas diferentes')
        }
        else {
            await createTienda(nombre, ruc, email, password, rubro)
        }
        
    }

    return (
        <IonContent scrollY={true} fullscreen>
            <IonGrid>
                <IonRow>
                    <IonCol offsetLg="4" sizeLg="4" className='ion-text-center'>
                        <h2>Crear nueva Tienda</h2>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol offsetLg="4" sizeLg="4">
                        <IonItem>
                            <IonLabel position="floating" > Nombre</IonLabel>
                            <IonInput onIonChange={(e:any) => setNombre(e.target.value)}/>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol offsetLg="4" sizeLg="4">
                        <IonItem>
                            <IonLabel position="floating"> RUC</IonLabel>
                            <IonInput onIonChange={(e:any) => setRuc(e.target.value)}/>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol offsetLg="4" sizeLg="4">
                        <IonItem>
                            <IonLabel position="floating" > Correo Electronico</IonLabel>
                            <IonInput onIonChange={(e:any) => setemail(e.target.value)}/>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol offsetLg="4" sizeLg="4">
                        <IonItem>
                            <IonLabel position="floating"> Contraseña</IonLabel>
                            <IonInput onIonChange={(e:any) => setpassword(e.target.value)} type="password" />
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol offsetLg="4" sizeLg="4">
                        <IonItem>
                            <IonLabel position="floating">Confirmar Contraseña</IonLabel>
                            <IonInput onIonChange={(e:any) => setcpassword(e.target.value)} type="password" />
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol offsetLg="4" sizeLg="4">
                        <IonItem>
                            <IonLabel position="floating">Rubro</IonLabel>
                            <IonSelect interface="popover" onIonChange={(e:any) => setRubro(e.detail.value)}>
                                <IonSelectOption value="Comida">Comida</IonSelectOption>
                                <IonSelectOption value="Medicamentos">Medicamentos</IonSelectOption>
                            </IonSelect>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol offsetLg="4" sizeLg="4" className='ion-text-center ion-margin-top'>
                        <IonButton expand="block" fill="outline" onClick={Registro} >
                            Registrar
                        </IonButton>
                        <p><Link to="/">soy cliente</Link></p>
                        <p> ¿Ya tienes una cuenta? <Link to="/tienda/login">Ingresa aquí</Link> </p>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    );
};

export default Registro;
