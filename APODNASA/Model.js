class Model  {
    constructor(copy,date,image,title) {
        this._copy = "";
        this._date = btn.value;
        this._image = "";
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

        request.open("GET", 'https://api.nasa.gov/planetary/apod?api_key=4DEWXdrd6bPG99Nvd9Yd0eicTyFHyi2QjYWlTlgv&date=' + this._date, false)
        
        request.send();
    }

    _response(responseText) {
        let response = JSON.parse(responseText)
        return response

    }

    _atualiza(dados){ 
        this._copy = dados.copyright;
        this._image = dados.url;
        this._date = dados.date;
        this._explanation = dados.title;
        
    }

    getCopyright() {
        return this._copy;
    }
    getImage() {
        return this._image;
    }
    getDate() {
        return this._date;
    }
    getExplanation() {
        return this._explanation;
    }
}