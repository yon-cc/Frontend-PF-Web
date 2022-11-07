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
        // const data = await this.getRequest("maxmin.json");
        const data  = {min:1,max:100}
        return data;
    }

    async getImage(url){
        const endpoint = `http://localhost:1802/api/products/image/${url.split("images/").pop()}`
        // console.log(endpoint);
        // const data = await this.getRequest(`${endpoint}`);
        const response = await  fetch(endpoint);
        const imageBlob = await response.blob();
        const imgUrl = await URL.createObjectURL(imageBlob);
        console.log(imgUrl)
        return imgUrl;
    }
}

const controller = new Controller();
export default controller
