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
const setaDireitaCli = document.getElementById('rightArrowCli');
setaDireitaCli.addEventListener('click', function(){
    codigoCliente += 1;
    showClients();
})

// Seta Esquerda - Clientes
const setaEsquerdaCli = document.getElementById('leftArrowCli');
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
const botaoNovoCliente = document.getElementById('newClientButton');
botaoNovoCliente.addEventListener('click', newClientFunc);

// Botão Salvar Cliente
const botaoSalvarCliente = document.getElementById('saveClientBtn');
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
const xButton = document.querySelectorAll('.closeBtn');

for(let xElement of xButton){
    xElement.addEventListener('click', function(){
        xElement.parentElement.parentElement.parentElement.style.display = 'none';
    })
}

// BOTÕES LATERAIS //
// Botão Clientes
const botaoClientes = document.getElementById('clientsBtn');
botaoClientes.addEventListener('click', function(){
    if(document.getElementById('clientsFieldset').style.display == 'flex'){
        clearMenus();
    }
    else{
        clearMenus();
        document.getElementById('clientsFieldset').style.display = 'flex';
    }
    showClients();
})

// Botão Produtos
const botaoProdutos = document.getElementById('productsBtn');
botaoProdutos.addEventListener('click', function(){
    if(document.getElementById('productsFieldset').style.display == 'flex'){
        clearMenus();
    }
    else{
        clearMenus();
        document.getElementById('productsFieldset').style.display = 'flex';
    }
    showProducts();
})

// Botão Pedidos
const botaoPedidos = document.getElementById('ordersBtn');
botaoPedidos.addEventListener('click', function(){
    if(document.getElementById('ordersFieldset').style.display == 'flex'){
        clearMenus();
    }
    else{
        clearMenus();
        document.getElementById('ordersFieldset').style.display = 'flex';
    }
})

// Função Limpar Menus
function clearMenus(){
    const arrayMainMenus = document.querySelectorAll('.mainMenus');
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
const setaDireitaProd = document.getElementById('rightArrowProd');
setaDireitaProd.addEventListener('click', function(){
    codigoProduto += 1;
    showProducts();
})

// Seta Esquerda - Produtos
const setaEsquerdaProd = document.getElementById('leftArrowProd');
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
const botaoNovoProduto = document.getElementById('newProductButton');
botaoNovoProduto.addEventListener('click', newProductFunc);

// Botão Salvar Produto
const botaoSalvarProduto = document.getElementById('saveProductsBtn');
botaoSalvarProduto.addEventListener('click', function(){
    let controlVarUm = 0;
    let controlVarDois = 0;
    const varFieldset = document.getElementById('productsFieldset');

    for(let elemento of varFieldset.querySelectorAll('.input')){
        if (elemento.value == ''){  
            controlVarUm += 1;
        }
    }
    if(controlVarUm !== 0){
        alert('Preencha todos os campos');
    }
    for(let obj of produtos){
        if(obj.codProduto == parseInt(document.getElementById('productCodeInput').value)){
            alert('Código já cadastrado');
            controlVarDois = 1;
        }
    }
    if(controlVarUm == 0 && controlVarDois !== 1){
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
        alert('Produto cadastrado com sucesso');
        newProductFunc();
    }
})

// TELA DE PEDIDOS
// Mostrar Nome dos Clientes
const inputCodigoCliente = document.getElementById('ordersCodeInput');
inputCodigoCliente.addEventListener('blur', function(){
    for(let obj of clientes){
        if(obj.codCliente == document.getElementById('ordersCodeInput').value){
        var pedidosCliente = obj.nomeCliente;
        }
    }
    document.getElementById('ordersClientInput').value = pedidosCliente;
})

// Mostrar Descrição dos Produtos
const inputCodigoProduto = document.getElementById('locateCode');
inputCodigoProduto.addEventListener('blur', function(){
    for(let obj of produtos){
        if(obj.codProduto == document.getElementById('locateCode').value){
        var descricaoPedido = obj.descProduto;
        var precoPedido = obj.precoProduto;
        }
    }
    document.getElementById('locateName').value = descricaoPedido;
    document.getElementById('locatePriceProd').value = precoPedido.toFixed(2);
})

// Botão Lançar Pedido
const botaoLancarPedido = document.getElementById('locateButton');
const listaDePedidos = [];
botaoLancarPedido.addEventListener('click', function(){

    for(let obj of produtos){
        if(obj.codProduto == document.getElementById('locateCode').value){
            var itemPedido = document.getElementById('locateCode').value;
            var descricaoPedido = obj.descProduto;
            var precoPedido = obj.precoProduto;
        }
    }
    // Validação do Item
    if (listaDePedidos.indexOf(itemPedido) == -1){
        const childElmItem = document.createElement('p');
        const childElmDescrip = document.createElement('p');
        const childElmPrice = document.createElement('p');
        const childElmQtty = document.createElement('p');
        const childElmSubTotal = document.createElement('p');
        listaDePedidos.push(itemPedido);
        document.getElementById('ulItemValue').appendChild(childElmItem).textContent = itemPedido;
        document.getElementById('ulDescripValue').appendChild(childElmDescrip).textContent = descricaoPedido;
        document.getElementById('ulPriceValue').appendChild(childElmPrice).textContent = precoPedido.toFixed(2);
        document.getElementById('ulQttyValue').appendChild(childElmQtty).textContent = document.getElementById('locateQtty').value;
        document.getElementById('ulSubTotalValue').appendChild(childElmSubTotal).setAttribute('class', 'liSubTotal');
        document.getElementById('ulSubTotalValue').appendChild(childElmSubTotal).textContent = (precoPedido * document.getElementById('locateQtty').value).toFixed(2);
    }
    else{
        alert('Item já adicionado ao pedido');
    }
    totalSumFunc();
})

// Função Soma Total
function totalSumFunc(){
    const subTotalArray = document.querySelectorAll('.liSubTotal');
    let somaTotal = 0;
    for(let subTotal of subTotalArray){
        somaTotal += parseFloat(subTotal.textContent);
    }
    document.getElementById('totalPriceValue').value = somaTotal.toLocaleString('pt-BR', {style: 'currency', 'currency': 'BRL'});
}