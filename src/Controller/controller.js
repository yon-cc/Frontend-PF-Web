export default class Controller{
    constructor(){
        // ! DEJAR UN SOLO URL y modificar metodos de get y post
        this.url = "https://raw.githubusercontent.com/yon-cc/Frontend-PF-Web/main/src/Model";
        // this.urlMax = "";
    }

    async getRequest(endpoint){
        const response  = fetch(this.url + `${endpoint}`);
        const data = (await response).json();

        return data;
    }

    async getProducts(stateData){
        const data = await this.getRequest("/data.json?token=GHSAT0AAAAAABY3PUSEVVPKZI6NAYIS324YY3D4N3Q");

        stateData = data.slice(0,data.lenght);
    }

    async getMaxMin(stateMaxMin){
        const data = await this.getRequest("");

        stateMaxMin = data.slice(0, data.lenght);
    }
}