import { IonButton, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonIcon, IonInput, IonItem, IonLabel, IonModal, IonRow, IonTitle } from '@ionic/react';
import { collection, getDocs } from 'firebase/firestore';
import { add } from 'ionicons/icons'
import { useEffect, useState } from 'react';
import { createCategory } from '../../../servicios/firebaseAdmin';
import { db } from '../../../firebaseConfig';
import { toast } from '../../toast';
import CategoryInfo from './Category/CategoryInfo';
import './CategoryList.css';
interface ContainerProps { 
}

const CategoryList: React.FC<ContainerProps> = () => {
    //Modal show properties
    const [showModal, setShowModal] = useState(false);

    //Categories list
    const [arrayCategorias, SetArrayCategorias] = useState([{}])

    //Add Categories properties
    const [categoryName, setCategoryName] = useState('')
    const [categoryDesc, setCategoryDesc] = useState('')
    
    function registrarCategoria()
    {
        if(categoryName != "" && categoryDesc != "")
        {
            createCategory(categoryName, categoryDesc).then(()=>{
                toast('La categoria se ha registrado correctamente');
            }).catch(()=>
            {
                toast('Error durante el registro de la categoria');
            });
        }
        else
        {
            toast("Los campos no pueden estar vacios")
        }
        setShowModal(false);
    }
    const categoriesCollectionRef = collection(db, 'categorias')
    useEffect(()=>{
        async function obtenerCategorias()
        {
            const data = await getDocs(categoriesCollectionRef);
            SetArrayCategorias(data.docs.map((doc)=>({ ...doc.data(), id: doc.id })));
        }
        obtenerCategorias()
    },[])

    return (
    <div className="CategoryList">
        <IonFab vertical="bottom" horizontal="start">
            <IonModal isOpen={showModal}>
                <IonItem className="ion-margin">
                    <IonLabel position="floating">Categoria</IonLabel>
                    <IonInput onIonChange={(e:any)=>setCategoryName(e.target.value)}></IonInput>
                </IonItem>
                <IonItem className="ion-margin">
                    <IonLabel position="floating">Descripcion</IonLabel>
                    <IonInput onIonChange={(e:any)=>setCategoryDesc(e.target.value)}/>
                </IonItem>
                <IonButton onClick={() => setShowModal(false)}>Cancelar</IonButton>
                <IonButton onClick={() => registrarCategoria()}>Registrar</IonButton>
            </IonModal>
            <IonFabButton color="success" onClick={() => setShowModal(true)}>
                <IonIcon icon={add} color="dark"/>
            </IonFabButton>
        </IonFab>
        <IonContent scrollY={true} fullscreen>
            <IonTitle>Categorias</IonTitle>
            <IonGrid>
                { 
                    arrayCategorias?
                    arrayCategorias.map((item:any, index:Number)=>{
                        return (
                        <IonRow  key={index.toString()}>
                            <IonCol>
                                <CategoryInfo docId={item.id} categoryName={item.categoria} categoryDesc={item.descripcion}/>
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

export default CategoryList;
