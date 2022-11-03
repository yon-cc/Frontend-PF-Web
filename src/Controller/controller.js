export default class Controller{
    constructor(){
        this.url  = "http://localhost";
    }

    async getData(stateData){
        const response  = fetch(this.url);
        const data = (await response).json();

        stateData = data.slice(0,data.lenght);

        

        // return data;
    }
}