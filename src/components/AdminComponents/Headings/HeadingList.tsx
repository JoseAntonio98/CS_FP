import { IonButton, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonIcon, IonInput, IonItem, IonLabel, IonModal, IonRow, IonTitle } from '@ionic/react';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { add, trashOutline } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { createHeading } from '../../../servicios/firebaseAdmin';
import { db } from '../../../firebaseConfig';
import { toast } from '../../toast';
import HeadingInfo from './Heading/HeadingInfo';
import './HeadingList.css';

//Interfaz de datos del componente
interface ContainerProps { }

//Este componente renderiza la lista de rubros
const HeadingList: React.FC<ContainerProps> = () => {
    //Propiedades del modal
    const [showModal, setShowModal] = useState(false);

    //Lista de rubros
    const [arrayRubros, SetArrayRubros] = useState([{}])

    //Datos de formulario para el registro de rubros
    const [headingName, setHeadingName] = useState('')
    const [headingDesc, setHeadingDesc] = useState('')
    
    //Funcion que consulta los rubros registrados
    async function obtenerRubros()
    {
        const headingCollectionRef = collection(db, 'rubros')
        const data = await getDocs(headingCollectionRef);
        SetArrayRubros(data.docs.map((doc)=>({ ...doc.data(), id: doc.id })));
    }

    //Funcion para registrar un rubro
    function registrarRubro()
    {
        if(headingName != "" && headingDesc != "")
        {
            createHeading(headingName, headingDesc)
            .then(() => {
                obtenerRubros()
                    .then(() => toast('El rubro se ha registrado correctamente.'))
            })
            .catch(() =>{
                toast('Error durante el registro del rubro.');
            });
        }
        else toast("Los campos no pueden estar vacios.")
        setShowModal(false);
    }

    //Funcion para borrar un rubro
    async function deleteHeading(headingId:string, index:Number)
    {
        await deleteDoc(doc(db, "rubros", headingId))
            .then((result) => {
                obtenerRubros()
                    .then(() => toast("Se ha eliminado el rubro."))
            })
            .catch((error) => {
                toast("Error al eliminar la categoria.")
            });
    }

    //Efecto para renderizar los rubros por primera vez
    useEffect(()=>{
        obtenerRubros()
        return
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
                        <IonRow className="HeadingInfo m-2 p-4" key={index.toString()}>
                            <HeadingInfo docId={item.id} headingName={item.rubro} headingDesc={item.descripcion}/>
                            <IonCol size="2">
                                    <IonButton color="danger" onClick={() => {deleteHeading(item.id,index) }}>
                                    <IonIcon icon={trashOutline}/>
                                </IonButton>
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
