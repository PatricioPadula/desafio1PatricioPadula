class ProductManager{
    #precioBaseDeGanancia;//añade un costo adicional al precio del evento
    constructor(){
        this.products = [];
    };

    getProducts(){
        return this.products;
    };

    addProduct(title,description,price,thumbnail,code,stock){
        let newId;
        if(!this.products.length){
            newId=1;
        } else {
            newId = this.products[this.products.length-1].id+1
        };
        const nuevoProducto = {
            id:newId,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };
        this.products.push(nuevoProducto);
        console.log("nuevo producto creado", nuevoProducto);
    };

    getProductById(idProducto){
        const productoExiste = this.products.some((prod)=>{return prod.id === idProducto});
        if(!productoExiste){
            console.log("Not found")
        } 
    };
};

const productos = new ProductManager();
console.log("Productos:",productos);
console.log("Productos",productos.getProducts());
productos.addProduct("teclado kumara","teclado kumara gamer retroiluminado",2000,"https://spacegamer.com.ar/img/Public/1058-producto-1019-producto-teclado-kumara-k552-rainbow-switch-red-1-683-491.jpg",213451,5);
productos.addProduct("mouse gamer","mouse logitech gamer g500",4000,"https://mexx-img-2019.s3.amazonaws.com/38348_1.jpeg",345344,3);
console.log("Productos",productos.getProducts());
productos.getProductById(3);

