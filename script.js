var validarLogin = async function(){
    let dadosFetch = await fetch('/desafios/desafio_js_pagina-login/json/usuario.json');
    let dadosJSON = await dadosFetch.json();

    var user = document.getElementById('usuario').value;
    var pass = document.getElementById('senha').value;

    var valor = 0;

    for (let arrays of dadosJSON.users){

        if(user == arrays.user && pass == arrays.pws){
            valor =+ 1;
        }
    }
    if(valor == 1){
        document.getElementById('form').action = '/desafios/desafio_js_pagina-login/destino/index.html';
        document.getElementById('form').submit();
        valor = 0;
    }
    else{
        alert('Login ou senha incorretos');
    }
}