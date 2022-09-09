function tocaSom (seletorAudio){

    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    }

    else {
            //alert('Elemento não encontrado')
        console.log('Elemento não encontrado ou seletor não valido!');
    }
}


//document.querySelector('.tecla_pom').onclick = tocaSomPom;

const listaDeTeclas = document.querySelectorAll('.tecla');

// let contador = 0; antes while = enquanto, agora está for = para


//enquanto
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    
    const instrumento = tecla.classList[1];
    
    const idAudio = `#som_${instrumento}` //template string ^^ 
    
    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento){
        
        if (evento.code === 'Space' || evento.code === 'Enter') {
            
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

    //contador = contador + 1;  antes era while = enquanto -----, --- agora está for = para ---------- 

    // ------ console.log(contador);
}

