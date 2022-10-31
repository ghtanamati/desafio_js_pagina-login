// Importing Data
import { clients } from "../modules/clients.js";
import { products } from "../modules/products.js";

// Show Clients
var clientVariable = 1;

function showClients(){
    if(clientVariable > clients.length || clientVariable <= 0){
        defaultClients();
        alert('Code does not exist');
    }
    else{
        for(let obj of clients){
            if(obj.clientCode == clientVariable){
            var clientNameInput = obj.clientName;
            var signUpDateInput = obj.signUpDate;
            }
        }
        document.getElementById('clientCodeInput').value = clientCode;
        document.getElementById('clientName').value  = clientNameInput;
        document.getElementById('signUpDate').value  = signUpDateInput;
    }
}

// Default Clients
function defaultClients(){
    clientVariable = 1;
    document.getElementById('clientCodeInput').value = clients[0].clientCode;
    document.getElementById('clientName').value = clients[0].clientName;
    document.getElementById('signUpDate').value = clients[0].signUpDate;
}

// Right Arrow - Clients
const rightArrowClients = document.getElementById('rightArrowClients');
rightArrowClients.addEventListener('click', function(){
    clientVariable += 1;
    showClients();
})

// Left Arrow - Clients
const leftArrowClients = document.getElementById('leftArrowClients');
leftArrowClients.addEventListener('click', function(){
    clientVariable -= 1;
    showClients();
})

// New Client Function
function newClientFunc(){
    let newClientValue = clients.length + 1;
    document.getElementById('clientCodeInput').value = newClientValue;
    document.getElementById('clientName').value  = "";

    let clientDate = new Date();
    let correctDate = clientDate.toLocaleDateString('pt-BR')
    document.getElementById('signUpDate').value  = correctDate;
}

// New Client Button
const newClientButton = document.getElementById('newClientButton');
newClientButton.addEventListener('click', newClientFunc);

// Save Client Button
const saveClientButton = document.getElementById('saveClientBtn');
saveClientButton.addEventListener('click', function(){
    let newClientObject = {
        "clientCode":"",
        "clientName": "",
        "signUpDate":"",
    };
    newClientObject.codCliente = parseInt(document.getElementById('clientCodeInput').value);
    newClientObject.nomeCliente = document.getElementById('clientName').value;
    newClientObject.dataCadCli = document.getElementById('signUpDate').value;
    clients.push(newClientObject);
    newClientFunc();
})

// Botão X
const xButton = document.querySelectorAll('.closeBtn');

for(let xElement of xButton){
    xElement.addEventListener('click', function(){
        xElement.parentElement.parentElement.parentElement.style.display = 'none';
    })
}

// SIDE BUTTONS //
// Clients Button
const clientsBtn = document.getElementById('clientsBtn');
clientsBtn.addEventListener('click', function(){
    if(document.getElementById('clientsFieldset').style.display == 'flex'){
        clearMenus();
    }
    else{
        clearMenus();
        document.getElementById('clientsFieldset').style.display = 'flex';
    }
    showClients();
})

// Products Button
const productsBtn = document.getElementById('productsBtn');
productsBtn.addEventListener('click', function(){
    if(document.getElementById('productsFieldset').style.display == 'flex'){
        clearMenus();
    }
    else{
        clearMenus();
        document.getElementById('productsFieldset').style.display = 'flex';
    }
    showProducts();
})

// Cart Buttons
const cartBtn = document.getElementById('cartBtn');
cartBtn.addEventListener('click', function(){
    if(document.getElementById('ordersFieldset').style.display == 'flex'){
        clearMenus();
    }
    else{
        clearMenus();
        document.getElementById('ordersFieldset').style.display = 'flex';
    }
})

// Clear Menus Function
function clearMenus(){
    const mainMenusArray = document.querySelectorAll('.mainMenus');
    for(let mainMenuElement of mainMenusArray){
        mainMenuElement.style.display = 'none';
    }
}

// Show Products
var productCode = 1;
function showProducts(){
    if(productCode > products.length || productCode <= 0){
        defaultProducts();
        alert('Code does not exist');
    }
    else{
        for(let obj of products){
            if(obj.prodCode == prodCode){
            var productDescrip = obj.prodDescrip;
            var productPrice = obj.prodPrice;
            var productInStock = obj.prodInStock;
            }
        }
        document.getElementById('productCodeInput').value = prodCode;
        document.getElementById('descriptionInput').value  = productDescrip;
        document.getElementById('priceInput').value  = productPrice;
        document.getElementById('quantityInput').value  = productInStock;
    }
}

// Default Products
function defaultProducts(){
    productCode = 1;
    document.getElementById('productCodeInput').value = products[0].prodCode;
    document.getElementById('descriptionInput').value  = products[0].prodDescrip;
    document.getElementById('priceInput').value  = products[0].prodPrice;
    document.getElementById('quantityInput').value  = products[0].prodInStock;
}

// Right Arrow - Products
const rightArrowProd = document.getElementById('rightArrowProd');
rightArrowProd.addEventListener('click', function(){
    productCode += 1;
    showProducts();
})

// Left Arrow - Products
const leftArrowProd = document.getElementById('leftArrowProd');
leftArrowProd.addEventListener('click', function(){
    productCode -= 1;
    showProducts();
})

// New Product Function
function newProductFunc(){
    let newProductValue = products.length + 1;
    document.getElementById('productCodeInput').value = newProductValue;
    document.getElementById('descriptionInput').value  = "";
    document.getElementById('priceInput').value  = "";
    document.getElementById('quantityInput').value  = "";
}

// Botão Novo Produto
const newProductButton = document.getElementById('newProductButton');
newProductButton.addEventListener('click', newProductFunc);

// Botão Salvar Produto
const saveProductsBtn = document.getElementById('saveProductsBtn');
saveProductsBtn.addEventListener('click', function(){
    let controlVarOne = 0;
    let controlVarTwo = 0;
    const varFieldset = document.getElementById('productsFieldset');

    for(let element of varFieldset.querySelectorAll('.input')){
        if (element.value == ''){  
            controlVarOne += 1;
        }
    }
    if(controlVarOne !== 0){
        alert('Fill in the blanks');
    }
    for(let obj of products){
        if(obj.codProduto == parseInt(document.getElementById('productCodeInput').value)){
            alert('Code already registered');
            controlVarTwo = 1;
        }
    }
    if(controlVarOne == 0 && controlVarTwo !== 1){
        let newProductObject = {
            "prodCode": "",
            "prodDescrip": "",
            "prodPrice": "",
            "prodInStock": "",
        };
        newProductObject.codProduto = parseInt(document.getElementById('productCodeInput').value);
        newProductObject.descProduto = document.getElementById('descriptionInput').value;
        newProductObject.precoProduto = parseFloat(document.getElementById('priceInput').value);
        newProductObject.qtdEstoqueProd = parseInt(document.getElementById('quantityInput').value);
        products.push(newProductObject);
        alert('Success! Product registered');
        newProductFunc();
    }
})

// CART //
// Show Clients Name
const inputClientCode = document.getElementById('ordersCodeInput');
inputClientCode.addEventListener('blur', function(){
    for(let obj of clients){
        if(obj.clientCode == document.getElementById('ordersCodeInput').value){
        var ordersClientInput = obj.clientName;
        }
    }
    document.getElementById('ordersClientInput').value = ordersClientInput;
})

// Show Products Description
const inputProductCode = document.getElementById('locateCode');
inputProductCode.addEventListener('blur', function(){
    for(let obj of products){
        if(obj.prodCode == document.getElementById('locateCode').value){
        var prodDescripOrder = obj.prodDescrip;
        var prodPriceOrder = obj.prodPrice;
        }
    }
    document.getElementById('locateName').value = prodDescripOrder;
    document.getElementById('locatePriceProd').value = prodPriceOrder.toFixed(2);
})

// Place Order Button
const placeOrderButton = document.getElementById('locateButton');
const orderArray = [];
placeOrderButton.addEventListener('click', function(){

    for(let obj of products){
        if(obj.prodCode == document.getElementById('locateCode').value){
            var orderItem = document.getElementById('locateCode').value;
            var orderDescrip = obj.prodDescrip;
            var orderPrice = obj.prodPrice;
        }
    }
    // Validate Item
    if (orderArray.indexOf(orderItem) == -1){
        const childElmItem = document.createElement('p');
        const childElmDescrip = document.createElement('p');
        const childElmPrice = document.createElement('p');
        const childElmQtty = document.createElement('p');
        const childElmSubTotal = document.createElement('p');
        orderArray.push(orderItem);
        document.getElementById('ulItemValue').appendChild(childElmItem).textContent = orderItem;
        document.getElementById('ulDescripValue').appendChild(childElmDescrip).textContent = orderDescrip;
        document.getElementById('ulPriceValue').appendChild(childElmPrice).textContent = orderPrice.toFixed(2);
        document.getElementById('ulQttyValue').appendChild(childElmQtty).textContent = document.getElementById('locateQtty').value;
        document.getElementById('ulSubTotalValue').appendChild(childElmSubTotal).setAttribute('class', 'liSubTotal');
        document.getElementById('ulSubTotalValue').appendChild(childElmSubTotal).textContent = (orderPrice * document.getElementById('locateQtty').value).toFixed(2);
    }
    else{
        alert('Item already in cart');
    }
    totalSumFunc();
})

// Total Sum Function
function totalSumFunc(){
    const subTotalArray = document.querySelectorAll('.liSubTotal');
    let totalSum = 0;
    for(let subTotal of subTotalArray){
        totalSum += parseFloat(subTotal.textContent);
    }
    document.getElementById('totalPriceValue').value = totalSum.toLocaleString('pt-BR', {style: 'currency', 'currency': 'BRL'});
}