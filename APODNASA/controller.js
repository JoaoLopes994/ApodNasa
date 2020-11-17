
class Controler {
    constructor (){}

    adicionaFoto() {

        let usuario = new Model();
        usuario.adicionaFoto();

        let vitrine = new Visor();
        vitrine.renderizar(usuario);
    }
}
let controler = new Controler();



