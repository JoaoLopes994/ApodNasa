
class Controler {
    constructor (){}

    adicionaFoto(event) {
        event.preventDefault()
        let usuario = new Model();
        usuario.achaFoto(data.value);

        let vitrine = new Visor();
        vitrine.renderizar(usuario);
    }
}
let controler = new Controler();

document.getElementById("form").addEventListener("submit",controler.adicionaFoto)
var data = document.querySelector("#buscar") 



