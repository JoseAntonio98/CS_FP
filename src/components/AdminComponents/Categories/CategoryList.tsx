import { IonButton, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonIcon, IonInput, IonItem, IonLabel, IonModal, IonRow, IonTitle } from '@ionic/react';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { add, trashOutline } from 'ionicons/icons'
import { useEffect, useState } from 'react';
import { createCategory } from '../../../servicios/firebaseAdmin';
import { db } from '../../../firebaseConfig';
import { toast } from '../../toast';
import CategoryInfo from './Category/CategoryInfo';
import './CategoryList.css';

//Interfaz de datos del componente
interface ContainerProps { }

//Este componente renderiza las cateogiras
const CategoryList: React.FC<ContainerProps> = () => {
    //Variable de control sobre el modal
    const [showModal, setShowModal] = useState(false);

    //Lista de categorias
    const [arrayCategorias, SetArrayCategorias] = useState([{}])

    //Datos de entrada de categoria
    const [categoryName, setCategoryName] = useState('')
    const [categoryDesc, setCategoryDesc] = useState('')
    
    //Funcion para consultar las categorias registradas
    async function obtenerCategorias()
    {
        const categoriesCollectionRef = collection(db, 'categorias')
        const data = await getDocs(categoriesCollectionRef);
        SetArrayCategorias(data.docs.map((doc)=>({ ...doc.data(), id: doc.id })));
    }

    //Funcion para registrar una categoria
    function registrarCategoria()
    {
        if(categoryName != "" && categoryDesc != "")
        {
            createCategory(categoryName, categoryDesc)
                .then(() => {
                    obtenerCategorias()
                        .then(() => toast('La categoria se ha registrado correctamente.'))
                })
                .catch(() =>
                {
                    toast('Error durante el registro de la categoria.');
                });
        }
        else
            toast("Los campos no pueden estar vacios")
        setShowModal(false);
    }
    
    //Funcion para eliminar la categoria
    async function deleteCategory(categoryId:string, index:Number)
    {
        await deleteDoc(doc(db, "categorias", categoryId))
            .then(()=> {
                obtenerCategorias()
                    .then(() => toast("Se ha eliminado la categoria."))
            })
            .catch(() => {
                toast("Error al eliminar la categoria.")
            });
    }

    //Efecto para renderizar las categorias por primera vez
    useEffect(()=>{
        obtenerCategorias()
        return
    }, [])
    return (
    <div className="CategoryList">
        <IonFab vertical="bottom" horizontal="start">
            <IonModal cssClass="Modal-category" isOpen={showModal}>
                <div className="Category-form">
                    <div className="text h2">
                        Registrar categoria
                    </div>
                    <IonItem className="ion-margin">
                        <IonLabel position="floating">Categoria</IonLabel>
                        <IonInput onIonChange={(e:any)=>setCategoryName(e.target.value)}></IonInput>
                    </IonItem>
                    <IonItem className="ion-margin">
                        <IonLabel position="floating">Descripcion</IonLabel>
                        <IonInput onIonChange={(e:any)=>setCategoryDesc(e.target.value)}/>
                    </IonItem>
                    <div className="form-buttons">
                        <IonButton color="dark" onClick={() => setShowModal(false)}>Cancelar</IonButton>
                        <IonButton color="success" onClick={() => registrarCategoria()}>Registrar</IonButton>
                    </div>
                </div>
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
                        <IonRow  key={index.toString()} className="CategoryInfo m-2 p-4">
                            <CategoryInfo docId={item.id} categoryName={item.categoria} categoryDesc={item.descripcion}/>
                            <IonCol size="2">
                                    <IonButton color="danger" onClick={() => { deleteCategory(item.id, index) }}>
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

export default CategoryList;
