class Visor {
    constructor() {}

    renderizar( model ) {
        
        let banner = document.createElement("div");

        banner.innerHTML = `<h2>${model.getTitle() }</h2>
                            <img src=${ model.getImage() } >
                            <p> ${model.getDate}</p>
                            <p> ${model.getCopyright}</p>`


        document.appendChild(banner);

    }

}
let busca = document.getElementById("Buscar")
busca.addEventListener('click', Controler.achaFoto) 