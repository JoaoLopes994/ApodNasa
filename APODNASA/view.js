class Visor {
    constructor() {}

    renderizar(model) {
        
        let banner = document.getElementById("baner");

        banner.innerHTML = `<h2>${model.getCopyright()}</h2>
                            <img src=${ model.getImage()} >
                            <p> ${model.getDate()}</p>
                            <p> ${model.getExplanation()}</p>`


        

    }

}
