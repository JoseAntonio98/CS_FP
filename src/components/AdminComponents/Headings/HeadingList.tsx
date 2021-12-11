import { IonButton, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonIcon, IonInput, IonItem, IonLabel, IonModal, IonRow, IonTitle } from '@ionic/react';
import { collection, getDocs } from 'firebase/firestore';
import { add } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { createHeading } from '../../../servicios/firebaseAdmin';
import { db } from '../../../firebaseConfig';
import { toast } from '../../toast';
import HeadingInfo from './Heading/HeadingInfo';
import './HeadingList.css';
interface ContainerProps { }

const HeadingList: React.FC<ContainerProps> = () => {
    //Modal show properties
    const [showModal, setShowModal] = useState(false);

    //Heading list
    const [arrayRubros, SetArrayRubros] = useState([{}])

    //Add Heading properties
    const [headingName, setHeadingName] = useState('')
    const [headingDesc, setHeadingDesc] = useState('')
    
    function registrarRubro()
    {
        if(headingName != "" && headingDesc != "")
        {
            createHeading(headingName, headingDesc)
            .then(()=>{toast('El rubro se ha registrado correctamente');})
            .catch(()=>{toast('Error durante el registro del rubro');});
        }
        else toast("Los campos no pueden estar vacios")
        setShowModal(false);
    }

    const headingCollectionRef = collection(db, 'rubros')
    useEffect(()=>{
        async function obtenerRubros()
        {
            const data = await getDocs(headingCollectionRef);
            SetArrayRubros(data.docs.map((doc)=>({ ...doc.data(), id: doc.id })));
        }
        obtenerRubros()
    },[])


    return (
    <div className="HeadingList">
        <IonFab vertical="bottom" horizontal="start">
            <IonModal isOpen={showModal}>
                <IonItem className="ion-margin">
                    <IonLabel position="floating">Rubros</IonLabel>
                    <IonInput onIonChange={(e:any)=>setHeadingName(e.target.value)}></IonInput>
                </IonItem>
                <IonItem className="ion-margin">
                    <IonLabel position="floating">Descripcion</IonLabel>
                    <IonInput onIonChange={(e:any)=>setHeadingDesc(e.target.value)}/>
                </IonItem>
                <IonButton onClick={() => setShowModal(false)}>Cancelar</IonButton>
                <IonButton onClick={() => registrarRubro()}>Registrar</IonButton>
            </IonModal>
            <IonFabButton color="success" onClick={() => setShowModal(true)}>
                <IonIcon icon={add} color="dark"/>
            </IonFabButton>
        </IonFab>

        <IonContent scrollY={true} fullscreen>
        <IonTitle>Rubros</IonTitle>
        
        <IonGrid>
                { 
                    arrayRubros?
                    arrayRubros.map((item:any, index:Number)=>{
                        return (
                        <IonRow  key={index.toString()}>
                            <IonCol>
                                <HeadingInfo docId={item.id} headingName={item.rubro} headingDesc={item.descripcion}/>
                            </IonCol>
                        </IonRow>
                        )
                    }):null
                }
        </IonGrid>
        </IonContent>
    </div>
  );
};

export default HeadingList;
