// Importação de Dados
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

// Definição Padrão - Clientes
function defaultClientes(){
    codigoCliente = 1;
    document.getElementById('clientCodeInput').value = clientes[0].codCliente;
    document.getElementById('clientName').value = clientes[0].nomeCliente;
    document.getElementById('signUpDate').value = clientes[0].dataCadCli;
}

// Seta Direita - Clientes
let setaDireitaCli = document.getElementById('rightArrowCli');
setaDireitaCli.addEventListener('click', function(){
    codigoCliente += 1;
    showClients();
})

// Seta Esquerda - Clientes
let setaEsquerdaCli = document.getElementById('leftArrowCli');
setaEsquerdaCli.addEventListener('click', function(){
    codigoCliente -= 1;
    showClients();
})

// Função Novo Cliente
function newClientFunc(){
    let valorNovoCliente = clientes.length + 1;
    document.getElementById('clientCodeInput').value = valorNovoCliente;
    document.getElementById('clientName').value  = "";

    let dataCliente = new Date();
    let dataCerta = dataCliente.toLocaleDateString('pt-BR')
    document.getElementById('signUpDate').value  = dataCerta;
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
    showProducts();
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

// Mostrar Produtos
var codigoProduto = 1;

function showProducts(){
    if(codigoProduto > produtos.length || codigoProduto <= 0){
        defaultProdutos();
        alert('Código inexistente');
    }
    else{
        for(let obj of produtos){
            if(obj.codProduto == codigoProduto){
            var descricaoProduto = obj.descProduto;
            var precoProduto = obj.precoProduto;
            var estoqueProduto = obj.qtdEstoqueProd;
            }
        }
        document.getElementById('productCodeInput').value = codigoProduto;
        document.getElementById('descriptionInput').value  = descricaoProduto;
        document.getElementById('priceInput').value  = precoProduto;
        document.getElementById('quantityInput').value  = estoqueProduto;
    }
}

// Definição Padrão - Produtos
function defaultProdutos(){
    codigoProduto = 1;

    document.getElementById('productCodeInput').value = produtos[0].codProduto;
    document.getElementById('descriptionInput').value  = produtos[0].descProduto;
    document.getElementById('priceInput').value  = produtos[0].precoProduto;
    document.getElementById('quantityInput').value  = produtos[0].qtdEstoqueProd;
}

// Seta Direita - Produtos
let setaDireitaProd = document.getElementById('rightArrowProd');
setaDireitaProd.addEventListener('click', function(){
    codigoProduto += 1;
    showProducts();
})

// Seta Esquerda - Produtos
let setaEsquerdaProd = document.getElementById('leftArrowProd');
setaEsquerdaProd.addEventListener('click', function(){
    codigoProduto -= 1;
    showProducts();
})

// Função Novo Produto
function newProductFunc(){
    let valorNovoProduto = produtos.length + 1;
    document.getElementById('productCodeInput').value = valorNovoProduto;
    document.getElementById('descriptionInput').value  = "";
    document.getElementById('priceInput').value  = "";
    document.getElementById('quantityInput').value  = "";
}

// Botão Novo Produto
let botaoNovoProduto = document.getElementById('newProductButton');
botaoNovoProduto.addEventListener('click', newProductFunc);

// Botão Salvar Produto
let botaoSalvarProduto = document.getElementById('saveProductsBtn');
botaoSalvarProduto.addEventListener('click', function(){
    let newProductObject = {
        "codProduto": "",
        "descProduto": "",
        "precoProduto": "",
        "qtdEstoqueProd": "",
    };
    newProductObject.codProduto = parseInt(document.getElementById('productCodeInput').value);
    newProductObject.descProduto = document.getElementById('descriptionInput').value;
    newProductObject.precoProduto = parseFloat(document.getElementById('priceInput').value);
    newProductObject.qtdEstoqueProd = parseInt(document.getElementById('quantityInput').value);

    produtos.push(newProductObject);

    newProductFunc();
})

// TELA DE PEDIDOS
// Mostrar Nome dos Clientes
let inputCodigoCliente = document.getElementById('ordersCodeInput');
inputCodigoCliente.addEventListener('blur', function(){
    for(let obj of clientes){
        if(obj.codCliente == document.getElementById('ordersCodeInput').value){
        var pedidosCliente = obj.nomeCliente;
        }
    }
    document.getElementById('ordersClientInput').value = pedidosCliente;
})

// Mostrar Descrição dos Produtos
let inputCodigoProduto = document.getElementById('locateCode');
inputCodigoProduto.addEventListener('blur', function(){
    for(let obj of produtos){
        if(obj.codProduto == document.getElementById('locateCode').value){
        var descricaoPedido = obj.descProduto;
        var precoPedido = obj.precoProduto;
        }
    }
    document.getElementById('locateName').value = descricaoPedido;
    document.getElementById('locatePriceProd').value = precoPedido;
})

// Botão Lançar Pedido
let botaoLancarPedido = document.getElementById('locateButton')
botaoLancarPedido.addEventListener('click', function(){
    for(let obj of produtos){
        if(obj.codProduto == document.getElementById('locateCode').value){
        var descricaoPedido = obj.descProduto;
        var precoPedido = obj.precoProduto;
        }
    }
    document.getElementById('locateName').appendChild()
    document.getElementById('locatePriceProd').value = precoPedido;
})

// for(let p of produtos){
//     const filhosLista = document.createElement('li');
    
//     for(listaP in p){
//         if(listaP == 'preco'){
//             listaProdutos.appendChild(filhosLista).setAttribute('data-preco', p[listaP]);
//             valorParcial += p[listaP];
//         }else{
//             listaProdutos.appendChild(filhosLista).textContent = `${p[listaP]}`;
//         }
//     }
// }


// function(){

//     const caixaProduto = document.querySelector('#produto');
//     const botaoCadastrar = document.querySelector('#cadastrar');
//     const myList = document.querySelector('#listaDeProdutos');

//     cadastrar.addEventListener('click', function(){
//         let createdList = document.createElement('li');
//         myList.appendChild(createdList).setAttribute('class', 'listaDeFrutas');
//         myList.appendChild(createdList).textContent = caixaProduto.value;
//     })
// }