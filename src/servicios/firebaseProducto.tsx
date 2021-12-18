//Modulo de autenticacion de firebase
import { query,getDocs,where,collection,setDoc,doc, addDoc } from "firebase/firestore";
import { /*auth,*/db } from "../firebaseConfig";
import { useState,useEffect } from "react";
import { toast } from "../components/toast";
import { async } from "@firebase/util";

export async function crearProducto(/*categoriaId:string,*/ descripcion:string, imagen:string, nombre: string, tienda:string) {
    console.log("Firebase crearProdcuto");
    
    await addDoc(collection(db,"Producto"),{
        // categoriaId:categoriaId,
         descripcion:descripcion,
         imagen:imagen,
         nombre:nombre,
         tienda:tienda
        }
     );
}