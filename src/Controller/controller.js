class Controller{
    constructor(){
        // ! DEJAR UN SOLO URL y modificar metodos de get y post
        this.url = "https://raw.githubusercontent.com/yon-cc/Frontend-PF-Web/main/src/Model";
        // this.urlMax = "";
    }

    async getRequest(endpoint){
        const response  = fetch(this.url + `/${endpoint}`);
        const data = (await response).json();

        return data;
    }

    async getProducts(stateData){
        const data = await this.getRequest("data.json");
        return data;
    }

    async getMaxMin(stateMaxMin){
        const data = await this.getRequest("maxmin.json");
        return data;
    }
}

const controller = new Controller();
export default controller
