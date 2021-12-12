import { IonCol, IonContent, IonGrid, IonRow, IonTitle } from '@ionic/react';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../../firebaseConfig';
import UserInfo from './User/UserInfo';
import './UserList.css';

interface ContainerProps { }

const UserList: React.FC<ContainerProps> = () => {
    //User list
    const [arrayUsuarios, SetArrayUsuarios] = useState([{}])
    const usuariosCollectionRef = collection(db, 'clientes')
    useEffect(()=>{
        async function obtenerUsuarios()
        {
            const data = await getDocs(usuariosCollectionRef);
            SetArrayUsuarios(data.docs.map((doc)=>({ ...doc.data(), id: doc.id })));
            console.log()
        }
        obtenerUsuarios()
    },[])

    return (
    <div className="UserList">
    <IonContent scrollY={true} fullscreen>
        <IonTitle>Clientes</IonTitle>
        <IonGrid>
                { 
                    arrayUsuarios?
                    arrayUsuarios.map((item:any, index:Number)=>{
                        return (
                        <IonRow  key={index.toString()}>
                            <IonCol>
                                <UserInfo docId={item.id} email={item.email}
                                    nombre={item.nombre} password={item.password}
                                    disponible={item.disponible}
                                />
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
