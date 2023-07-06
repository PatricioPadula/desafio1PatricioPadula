import { ProductManager } from "./productManager.js";

const filePath = "./productos.json";

const productos = new ProductManager(filePath);
console.log(productos);

const operaciones = async() =>{
    try {
        const exists = productos.fileExist();
        console.log(exists);

        const resultado = await productos.getProducts();
        console.log("productos", resultado);

        await productos.addProduct({id:1, title:"teclado kumara", descripcion: "teclado kumara gamer retroiluminado", price: 2000, thumbnail:"https://spacegamer.com.ar/img/Public/1058-producto-1019-producto-teclado-kumara-k552-rainbow-switch-red-1-683-491.jpg", code: 213451, stock: 5});

        await productos.addProduct({id:2, title:"mouse gamer", descripcion: "mouse logitech gamer g500", price: 4000, thumbnail:"https://mexx-img-2019.s3.amazonaws.com/38348_1.jpeg", code: 345344, stock: 3});

    } catch (error) {
        console.log(error.message);
    }
}

operaciones();