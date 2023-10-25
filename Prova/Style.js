function abririmagem(imagem){
    const sobreposicao = document.getElementById('sobreposicao');
    const fecharImagem = document.getElementById('fechar-imagem');
    const imagemAmpliada = document.getElementById('imagem-ampliada');

    imagemAmpliada.src = imagem
    sobreposicao.style.display = 'flex'
    fecharImagem.style.display = 'block'
}

function fecharImagem(){
    const sobreposicao = document.getElementById('sobreposicao');
    const fecharImagem = document.getElementById('fecharImagem');

    sobreposicao.style.display = 'none'
    fecharImagem.style.display = 'none'
}