import { IonCol, IonLoading, IonContent, IonGrid, IonLabel,IonRow, IonModal, IonItem, IonInput, IonButton, useIonAlert } from '@ionic/react';
import ProductEdit from './Product/ProductInfo'
import { db } from '../../firebaseConfig'
import { useState, useEffect, useContext } from 'react';
import { collection, getDocs, query,where } from "firebase/firestore";
import { SesionContext } from '../../Contexto/Sesion/Context';
import { actualizarProducto,deleteProducto } from '../../servicios/firebaseProducto';


interface ContainerProps
{

}

const ProductoList: React.FC<ContainerProps> = () => {


    const {sesion}=useContext(SesionContext)
    var idsesion = sesion.uid
    
    const [present] = useIonAlert();

    const [arrayProductos, setArrayProductos] = useState([{}]);
    const [loading, setLoading] = useState<boolean>(true);

    //boleano a usar
    const [mActualizarDatos,setboolActualizarDatos] = useState(false);
    //variables a usar 
    const [descripcion, setDescripcion] = useState('')
    const [categoria, setCategoria] = useState('')

    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState(0)
    const [stock,setStock]=useState(0)
    const [uid,setuidDoc] = useState('')

    async function obtenerProductos()
        {
            
            const p = query(productosCollectionRef, where('idtienda', '==', idsesion))
            const d = await getDocs(p);
            setArrayProductos(d.docs.map((doc) => (
          {
            ...doc.data(),
            uid: doc.id
          }
        )))
        setLoading(false)                 
        }

    async function guardarActualizarDatos() {
        
          await actualizarProducto(uid,precio,stock)
          setboolActualizarDatos(false)
    }

    async function deleteProduct(uid:string) {
        
        await deleteProducto(uid)
        obtenerProductos()
     }

    const actualizarDatos=(categoria:string, descripcion:string,nombre: string, precio:number,stock:number,uid:string)=>
    {   setboolActualizarDatos(true)
        setuidDoc(uid)
        setDescripcion(descripcion)
        setCategoria(categoria)
        setNombre(nombre)
        setPrecio(precio)
        setStock(stock)
    }


    const productosCollectionRef = collection(db, 'productos')
    
    useEffect(() => {
        obtenerProductos()
    }, [])

    if (loading) {
        return <IonLoading
        isOpen={loading}
        onDidDismiss={() => setLoading(false)}
        message={'Cargando...'}
    />
    }
    return (
        <IonRow>
            <IonModal isOpen={mActualizarDatos} >
            <IonContent scrollY={true} fullscreen>
            <IonGrid>
                <IonRow>
                    <IonCol className='ion-text-center'>
                        <h2>Actualizar Producto</h2>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol >
                        <IonItem>
                            <IonLabel  > Nombre:{nombre}</IonLabel>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol >
                        <IonItem>
                            <IonLabel > Descripcion: {descripcion}</IonLabel>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol >
                        <IonItem>
                            <IonLabel  > Categoria: {categoria}</IonLabel>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol >
                        <IonItem>
                            <IonLabel position="floating"> Precio:{precio}</IonLabel>
                            <IonInput onIonChange={(e:any) => setPrecio(e.target.value)} />
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol >
                        <IonItem>
                            <IonLabel position="floating"> Stock:{stock}</IonLabel>
                            <IonInput onIonChange={(e:any) => setStock(e.target.value)} />
                        </IonItem>
                    </IonCol>
                </IonRow>
                
                <IonRow>
                    <IonCol className='ion-text-center ion-margin-top'>
                        <IonButton expand="block" fill="outline" onClick={()=>setboolActualizarDatos(false)} >
                            Cerrar
                        </IonButton>
                        <IonButton expand="block" fill="outline" onClick={()=>{guardarActualizarDatos()}} >
                            Actualizar
                        </IonButton>

                    </IonCol>
                </IonRow>
               </IonGrid>
            </IonContent>
            </IonModal>

            <IonCol>
                <IonContent scrollY={true} fullscreen>
                <IonRow>
            <IonButton
                 onClick={obtenerProductos}>Actualizar
            </IonButton>
            </IonRow>
                    <IonGrid>
                        {
                            arrayProductos.length > 0 ?
                            arrayProductos.map((item:any, index:Number) => {
                                return (
                                    <IonRow key={index.toString()}>
                                        <IonCol onClick={()=>actualizarDatos(item.categoria,item.descripcion,item.nombre,item.precio,item.stock,item.uid)} >
                                            <ProductEdit  categoria = {item.categoria} descripcion = {item.descripcion} productoNombre={item.nombre} docId={item.uid} productoSede='' image="" precio={item.precio} stock={item.stock} />
                                        </IonCol>

                                        <IonButton
                                                expand="block"
                                                onClick={() =>
                                                    present({
                                                    cssClass: 'my-css',
                                                    header: 'Alerta',
                                                    message: '??Desea eliminar el producto?',
                                                    buttons: ['Cancel', 
                                                    //Borra el producto despues del mensaje de confirmaci??n
                                                    { text: 'Ok', handler: (d) => /*console.log('did dismiss')*/deleteProduct(item.uid) }],
                                                    onDidDismiss: (e) => console.log('did dismiss'),
                                                    })
                                                }>Eliminar
                                            </IonButton>
                                            <IonButton
                                                expand="block"
                                                onClick={()=>actualizarDatos(item.categoria,item.descripcion,item.nombre,item.precio,item.stock,item.uid)}>Editar
                                            </IonButton>

                                    </IonRow>
                                )
                            }) : <p>No Existen Productos{console.log(arrayProductos)}</p>
                        }
                    </IonGrid>
                </IonContent>
            </IonCol>
        </IonRow>

    )
};

export default ProductoList;
