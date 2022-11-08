class Controller{
    constructor(){
        // ! DEJAR UN SOLO URL y modificar metodos de get y post
        this.url = "http://localhost:1802/api";
        // this.urlMax = "";
    }

    async getRequest(endpoint){
        const response  = fetch(this.url + `/${endpoint}`);
        const data = (await response).json();
        // console.log(response)
        return data;

    }

    async getProducts(page){
        const data = await this.getRequest(`products/${page}`);
        return data;
    }

    async getMaxMin(){
        const data = await this.getRequest("products/limit/price");
        return data;
    }

}

const controller = new Controller();
export default controller
