const url = https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json

async Function viasualizarIformaçõesGlobais() {
    const res = await  fetch (url)
    const dados = await res.json()
    const paragrafo = document.createElement("p")
    paragrafo.classList.add('graficos-container_texto')
    

}

viasualizarIformaçõesGlobais()