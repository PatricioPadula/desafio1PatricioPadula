import express from "express";
import { ProductManager } from "./productManager.js";

/* const productos = [
    {id:1, nombre:"teclado", precio:2000},
    {id:2, nombre:"mouse", precio:3000},
    {id:3, nombre:"parlante", precio:1000},
    {id:4, nombre:"auriculares", precio:700}
] */

const port = 8080;

//creamos la aplicacion del servidor
const app = express();

//levantar el servidor
app.listen(port,()=>console.log(`El servidor esta escuchando en el puerto ${port}`));

const productManager = new ProductManager("./productos.json");

app.get("/products", async(req,res)=>{
    try {
        const result =  await productManager.getProducts();
        res.send(result);     
    } catch (error) {
        res.send(error.menssage);     
    }
})

app.get("/products/:pid", async(req,res)=>{
    try {
        const pid = parseInt(req.params.pid);
        console.log("pid",pid);
        const product = productManager.find(elm=>elm.id === pid);
        if(!product){
            res.send("El producto no existe");
        }else{
            res.send(product);
        }
    } catch (error) {
        res.send(error.menssage);  
    }
})