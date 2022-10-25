// Importação de dados
import { clientes } from "../modules/clientes.js";
import { produtos } from "../modules/produtos.js";

// Mostrar Clientes
var codigoCliente = 1;

function showClients(){
    if(codigoCliente > clientes.length || codigoCliente <= 0){
        defaultClientes();
        alert('Código inexistente');
    }
    else{
        for(let obj of clientes){
            if(obj.codCliente == codigoCliente){
            var nomeDoCliente = obj.nomeCliente;
            var dataDeCadastro = obj.dataCadCli;
            }
        }
        document.getElementById('clientCodeInput').value = codigoCliente;
        document.getElementById('clientName').value  = nomeDoCliente;
        document.getElementById('signUpDate').value  = dataDeCadastro;
    }
}

// Definição Padrão
function defaultClientes(){
    codigoCliente = 1;
    document.getElementById('clientCodeInput').value = clientes[0].codCliente;
    document.getElementById('clientName').value = clientes[0].nomeCliente;
    document.getElementById('signUpDate').value = clientes[0].dataCadCli;
}

// Seta Direita
let setaDireita = document.getElementById('rightArrow');
setaDireita.addEventListener('click', function(){
    codigoCliente += 1;
    showClients();
})

// Seta Esquerda
let setaEsquerda = document.getElementById('leftArrow');
setaEsquerda.addEventListener('click', function(){
    codigoCliente -= 1;
    showClients();
})


// Função Novo Cliente
function newClientFunc(){
    let valorNovoCliente = clientes.length + 1;
    document.getElementById('clientCodeInput').value = valorNovoCliente;
    document.getElementById('clientName').value  = "";
    document.getElementById('signUpDate').value  = "";
}


// Botão Novo Cliente
let botaoNovoCliente = document.getElementById('newClientButton');
botaoNovoCliente.addEventListener('click', newClientFunc);


// Botão Salvar Cliente
let botaoSalvarCliente = document.getElementById('saveClientBtn');
botaoSalvarCliente.addEventListener('click', function(){
    let newClientObject = {
        "codCliente":"",
        "nomeCliente": "",
        "dataCadCli":"",
    };
    newClientObject.codCliente = parseInt(document.getElementById('clientCodeInput').value);
    newClientObject.nomeCliente = document.getElementById('clientName').value;
    newClientObject.dataCadCli = document.getElementById('signUpDate').value;

    clientes.push(newClientObject);

    newClientFunc();
})

// Botão X
let xButton = document.querySelectorAll('.closeBtn');

for(let xElement of xButton){
    xElement.addEventListener('click', function(){
        xElement.parentElement.parentElement.parentElement.style.display = 'none';
    })
}

// BOTÕES LATERAIS //
// Botão Clientes
let botaoClientes = document.getElementById('clientsBtn');

botaoClientes.addEventListener('click', function(){
    if(document.getElementById('clientsFieldset').style.display == 'flex'){
        clearAll();
    }
    else{
        clearAll();
        document.getElementById('clientsFieldset').style.display = 'flex';
    }
    showClients();
})

// Botão Produtos
let botaoProdutos = document.getElementById('productsBtn');

botaoProdutos.addEventListener('click', function(){
    if(document.getElementById('productsFieldset').style.display == 'flex'){
        clearAll();
    }
    else{
        clearAll();
        document.getElementById('productsFieldset').style.display = 'flex';
    }
})

// Botão Pedidos
let botaoPedidos = document.getElementById('ordersBtn');

botaoPedidos.addEventListener('click', function(){
    if(document.getElementById('ordersFieldset').style.display == 'flex'){
        clearAll();
    }
    else{
        clearAll();
        document.getElementById('ordersFieldset').style.display = 'flex';
    }
})

// Função Limpar
function clearAll(){
    let arrayMainMenus = document.querySelectorAll('.mainMenus');

    for(let elementoMainMenu of arrayMainMenus){
        elementoMainMenu.style.display = 'none';
    }
}
