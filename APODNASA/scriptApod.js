class Model  {
    constructor(copy,data,imagem,titulo) {
        this._copy = "";
        this._data = dateForm.value;
        this._imagem = "";
        this._titulo = "";

    }

    achaFoto() {

        let request = new XMLHttpRequest();

        request.addEventListener("load", () => {

            if (request.status == 200) {

                let dados = this._response(request.responseText);
                this._atualiza(dados)
            }
        })

        request.open("GET", `https://api.nasa.gov/planetary/apod?api_key=4DEWXdrd6bPG99Nvd9Yd0eicTyFHyi2QjYWlTlgv&date=${inputValor}`, false)
        
        request.send();
    }

    _response(responseText) {
        let response = JSON.parse(responseText)
        return response

    }

    _atualiza(dados){ 
        this._copy = dados.copyright;
        this._imagem = dados.url;
        this._data = dados.date;
        this._titulo = dados.title;
        
    }

    getCopyright() {
        this._copy;
    }
    getImagem() {
        this._imagem;
    }
    getData() {
        this._data;
    }
    getTitulo() {
        this._titulo;
    }
}

class Visor {
    constructor() {}

    renderizar( model ) {
        
        let banner = document.createElement("div");

        banner.innerHTML = `<h1>${model.getTitulo() }</h1>
                            <img src=${ model.getImagem() } >
                            <p> ${model.getData}</p>
                            <p> ${model.getCopyright}</p>`


        document.appendChild(banner);

    }

}

class Controler {
    constructor (){}

    adicionaFoto() {

        let usuario = new Model();
        usuario.adicionaFoto();

        let vitrine = new Visor();
        vitrine.renderizar();
    }
}
document.getElementById("Buscar").addEventListener("click", Controler.adicionaFoto)

