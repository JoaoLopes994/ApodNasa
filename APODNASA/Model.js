class Model  {
    constructor() {
        this._copy = "";
        this._image = "";
        this._data = data.value;
        this._explanation = "";

    }

    achaFoto() {

        let request = new XMLHttpRequest();

        request.addEventListener("load", () => {

            if (request.status == 200) {

                let dados = this._response(request.responseText);
                this._atualiza(dados)
            }
        })
        console.log(this._data)
        request.open("GET", "https://api.nasa.gov/planetary/apod?api_key=4DEWXdrd6bPG99Nvd9Yd0eicTyFHyi2QjYWlTlgv&date=" + this._data, false)
        
        request.send();
    }

    _response(responseText) {
        let response = JSON.parse(responseText)
        return response

    }

    _atualiza(dados){ 
        this._copy = dados.copyright;
        this._image = dados.url;
        this._data = btn.data;
        this._explanation = dados.explanation;
        
    }

    getCopyright() {
        return this._copy;
    }
    getImage() {
        return this._image;
    }
    getDate() {
        return this._data;
    }
    getExplanation() {
        return this._explanation;
    }
}