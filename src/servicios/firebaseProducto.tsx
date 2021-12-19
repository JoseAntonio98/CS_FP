//Modulo de autenticacion de firebase
import { query,getDocs,where,collection,addDoc,setDoc,doc,deleteDoc } from "firebase/firestore";
import { /*auth,*/db } from "../firebaseConfig";
import { useState,useEffect } from "react";
import { toast } from "../components/toast";
import { async } from "@firebase/util";

//Para crear un producto necesito de los siguientes datos
//String nombre, string descripcion, string imagen, number precio, string id-categoria, string id-tienda

//tengo que buscar en categoria a que categoria pertenece para pasar el id ( se puede asignar el nombre de categoria)
//tengo que buscar en tienda a que tienda pertenece para copiar el id ( se puede asignar el nombre de tienda)

//revisar si necesito el ID del producto para copiar o me copio todaaa la coleccion
/*export function datosTienda() {
    const {sesion} = useContext(SesionContext)
    return sesion.uid
}
export async function createProducto(categoria:string, descripcion:string,idtienda:string,imagen:string, 
    nombre: string, precio:number,stock:number)
{
        setDoc(doc(db, "productos"),{
            categoriaId:categoria,
            descripcion:descripcion,
            idtienda:idtienda,
            imagen:imagen,
            nombre:nombre,
            precio:precio,
            stock:stock
        });
}
*/
/*categoriaId:string, descripcion:string, idcategoria: string,idtienda:string,
imagen:string, nombre: string, precio:number */
export async function crearProducto(categoria:string, descripcion:string,idtienda:string,imagen:string, 
    nombre: string, precio:number,stock:number) {
    console.log("Firebase crearProdcuto");
    
    await addDoc(collection(db,"productos"),{
         categoriaId:categoria,
         descripcion:descripcion,
         idtienda:idtienda,
         imagen:imagen,
         nombre:nombre,
         precio:precio,
         stock:stock
        }
     );
}

export async function actualizarProducto(uidProduct: string,categoria:string, descripcion:string,idtienda:string,imagen:string, 
    nombre: string, precio:number,stock:number) {
          setDoc(doc(db,"productos",uidProduct),{
            categoriaId:categoria,
            descripcion:descripcion,
            idtienda:idtienda,
            imagen:imagen,
            nombre:nombre,
            precio:precio,
            stock:stock

        });
}
export async function deleteProducto(uidDoc: string) {

    await deleteDoc(doc(db,"productos",uidDoc));

}

