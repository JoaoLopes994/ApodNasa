class Visor {
    constructor() {}

    renderizar( model ) {
        
        let banner = document.createElement("div");

        banner.innerHTML = `<h2>${model.getTitle() }</h2>
                            <img src=${ model.getExplanation() } >
                            <p> ${model.getDate}</p>
                            <p> ${model.getCopyright}</p>`


        document.appendChild(banner);

    }

}
