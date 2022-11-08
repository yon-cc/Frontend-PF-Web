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

    async getProductsById(id){
        const data = await this.getRequest(`products/specific/${id}`);
        return data;
    }

    async getProducts(page){
        const data = await this.getRequest(`products/${page}`);
        return data;
    }

    async getProductsByPrice(lower,upper, page){
        const data = await this.getRequest(`products/price/lower=${lower}&upper=${upper}/${page}`);
        return data;
    }

    async getProductsByName(search, page){
        const data = await this.getRequest(`products/name/${search}/${page}`);
        return data;
    }

    async getMaxMin(){
        const data = await this.getRequest("products/limit/price");
        return data;
    }

    async getLastPage(){
        const data = await this.getRequest("products");
        return data
    }

    async getLastPageSearch(search){
        const data = await this.getRequest(`products/name/${search}/pages`);
        return data
    }

    async getLastPagePrice(lower,upper){
        const data = await this.getRequest(`products/price/lower=${lower}&upper=${upper}/pages`);
        return data;
    }


}

const controller = new Controller();
export default controller
