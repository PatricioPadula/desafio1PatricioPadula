const fs = require("fs");

class ProductManager{
    constructor(path){
        this.path=path;
    };

    fileExist(){
        return fs.existsSync(this.path);
    }

    async addProduct(product){
        try {
            if(this.fileExist()){
                const contenido = await fs.promises.readFile(this.path,"utf-8");
                const products = JSON.parse(contenido);
                products.push(product);
                await fs.promises.writeFile(this.path,JSON.stringify(products,null,"\t"));
                console.log("producto creado");
            }else{
                console.log("El archivo no existe");
                await fs.promises.writeFile(this.path,JSON.stringify([product],null,"\t"));
                console.log("producto creado");
            };
        } catch (error) {
            console.log(error.message);
            return undefined;
        }
    };

    async getProducts(){
        try {
            if(this.fileExist()){
                const contenido = await fs.promises.readFile(this.path,"utf-8");
                const contenidoJson = JSON.parse(contenido);
                return contenidoJson;
            }else{
                return console.log("El archivo no existe");
            };
        } catch (error) {
            console.log(error.message);
            return undefined;
        }
    };
    async getProductsById(){};
    async updateProduct(){};
    async deleteProduct(){};
}

module.exports = {ProductManager}