class Controller{
    constructor(){
        // ! DEJAR UN SOLO URL y modificar metodos de get y post
        this.url = "http://localhost:1802/api";
        // this.urlMax = "";
    }

    async getRequest(endpoint){
        // console.log(this.url + `/${endpoint}`)
        const response  = fetch(this.url + `/${endpoint}`);
        const data = (await response).json();
        // console.log(response)
        return data;
    }

    async postRequest(endpoint,data){
        const dataSend = JSON.stringify(data)

        const response = await fetch(`${this.url}/${endpoint}`,{
            method:'post',
            body:dataSend,
            headers: {'Content-Type':'application/json'}
        })

        const dataResponse = (await response).json();
        // console.log(response)
        return dataResponse
    }

    async getProductsById(id){
        const data = await this.getRequest(`products/specific/${id}`);
        return data;
    }

    async getProducts(page){
        const data = await this.getRequest(`products/${page}`);
        return data;
    }

    async getFavorites(user, page){
        const data = await this.getRequest(`users/favorites/${user}/${page}`);
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

    async getLastPageFavorites(user){
        const data = await this.getRequest(`users/favorites/${user}/pages`);
        return data;
    }

    async singUp(data){
        const dataPost = await this.postRequest("users/register",data)
        return dataPost;
    }

    async LogIn(data){
        const dataPost = await this.postRequest("users/login",data)
        return dataPost;
    }

    async addToFavorites(data){
        const dataPost = await this.postRequest("users/addFavorite",data)
        return dataPost;
    }

    async removeFromFavorites(data){
        const dataPost = await this.postRequest("users/removeFavorite",data)
        return dataPost;
    }

    async addToCart(data){
        const dataPost = await this.postRequest("users/addToCart",data)
        return dataPost;
    }

    async getCart(user){
        const data = await this.getRequest(`users/cart/${user}`);
        return data;
    }
}

const controller = new Controller();
export default controller
