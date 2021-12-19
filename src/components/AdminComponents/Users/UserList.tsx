import { IonButton, IonCol, IonContent, IonGrid, IonIcon, IonRow, IonTitle } from '@ionic/react';
import { collection, deleteDoc, doc, getDocs, setDoc } from 'firebase/firestore';
import { closeCircleOutline, trashOutline } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { db } from '../../../firebaseConfig';
import { toast } from '../../toast';
import UserInfo from './User/UserInfo';
import './UserList.css';

//Interfaz de datos del componente
interface ContainerProps { }

const UserList: React.FC<ContainerProps> = () => {
    //Lista de usuarios
    const [arrayUsuarios, SetArrayUsuarios] = useState([{}])
    
    //Funcion para la consulta de los usuarios
    async function obtenerUsuarios()
    {
        const usuariosCollectionRef = collection(db, 'clientes')
        const data = await getDocs(usuariosCollectionRef);
        SetArrayUsuarios(data.docs.map((doc)=>({ ...doc.data(), id: doc.id })));
        console.log()
    }

    //Funcion para borrar y borrar el renderizado del cliente
    async function deleteClient(cliente:any, index:Number)
    {
        await deleteDoc(doc(db, "clientes", cliente.id))
            .then(()=>{
                obtenerUsuarios()
                    .then(()=>toast("Se ha eliminado el cliente."))
            })
            .catch(() => {
                toast("Error al eliminar el cliente.")
            })
    }

    //Funcion para desactivar y renderizar un cliente
    async function disableClient(cliente:any)
    {
        cliente.disponible = !cliente.disponible
        await setDoc(doc(db, "clientes", cliente.id), cliente)
            .then(() => {
                obtenerUsuarios().then(() => toast("Se ha actualizado el estado del cliente "+cliente.nombre))
            });
    }
    
    useEffect(() => {
        obtenerUsuarios()
        return
    }, [])

    return (
        <div className="UserList">
            <IonContent scrollY={true} fullscreen>
                <IonTitle>Clientes</IonTitle>
                <IonGrid>
                    { 
                        arrayUsuarios?
                        arrayUsuarios.map((item:any, index:Number)=>{
                            return (
                            <IonRow  className="UserInfo m-2 p-4" key={index.toString()}>
                                <UserInfo docId={item.id} email={item.email}
                                    nombre={item.nombre} password={item.password}
                                    disponible={item.disponible}
                                />
                                <IonCol size="2">
                                    <IonButton color="danger"  onClick={()=>deleteClient(item,index)}>
                                        <IonIcon icon={trashOutline}/>
                                    </IonButton>
                                    <IonButton color="light" onClick={()=>disableClient(item)}>
                                        <IonIcon icon={closeCircleOutline}/>
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

export default UserList;
