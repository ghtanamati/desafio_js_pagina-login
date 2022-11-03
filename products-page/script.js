// Importing Data
import { clients } from "../modules/clients.js";
import { products } from "../modules/products.js";

// Show Clients
var clientsIndex = 1;

function showClients(){
    if(clientsIndex > clients.length || clientsIndex <= 0){
        defaultClients();
        alert('Code does not exist');
    } else{
        for(let obj of clients){
            if(obj.clientCode == clientsIndex){
            var clientNameInput = obj.clientName;
            var signUpDateInput = obj.signUpDate;
            }
        }
        document.getElementById('clientCodeInput').value = clientsIndex;
        document.getElementById('clientNameInput').value  = clientNameInput;
        document.getElementById('signUpDateInput').value  = signUpDateInput;
    }
}

// Default Clients
function defaultClients(){
    clientsIndex = 1;
    document.getElementById('clientCodeInput').value = clients[0].clientCode;
    document.getElementById('clientNameInput').value = clients[0].clientName;
    document.getElementById('signUpDateInput').value = clients[0].signUpDate;
}

// Right Arrow - Clients
const rightArrowClients = document.getElementById('rightArrowClients');
rightArrowClients.addEventListener('click', function(){
    clientsIndex += 1;
    showClients();
})

// Left Arrow - Clients
const leftArrowClients = document.getElementById('leftArrowClients');
leftArrowClients.addEventListener('click', function(){
    clientsIndex -= 1;
    showClients();
})

// New Client Function
function newClientFunc(){
    let newClientValue = clients.length + 1;
    document.getElementById('clientCodeInput').value = newClientValue;
    document.getElementById('clientNameInput').value  = "";

    let clientDate = new Date();
    let correctDate = clientDate.toLocaleDateString('pt-BR')
    document.getElementById('signUpDateInput').value  = correctDate;
}

// New Client Button
const newClientButton = document.getElementById('newClientButton');
newClientButton.addEventListener('click', newClientFunc);

// Save Client Button
const saveClientButton = document.getElementById('saveClientButton');
saveClientButton.addEventListener('click', function(){
    let a = checkClientsBlank();
    let b = checkClientsCode();
    if(a == 0 && b == 0){
        let newClientObject = {
            "clientCode":"",
            "clientName": "",
            "signUpDate":"",
        };
        newClientObject.clientCode = parseInt(document.getElementById('clientCodeInput').value);
        newClientObject.clientName = document.getElementById('clientNameInput').value;
        newClientObject.signUpDate = document.getElementById('signUpDateInput').value;
        clients.push(newClientObject);
        alert('Success! Client registered');
        defaultClients();
    }
})

// Check Blank Inputs - Clients
function checkClientsBlank(){
    let countBlanks = 0;
    const clientsInputs = document.getElementById('clientsInputs');
    for(let inputs of clientsInputs.querySelectorAll('.input')){
        if (inputs.value == ''){
            countBlanks += 1;
        }
    }
    if(countBlanks !== 0){
        alert('Fill in the blanks!');
    } else{
        return 0
    }
}

// Check Already Registered Clients
function checkClientsCode(){
    let countCodes = 0;
    for(let obj of products){
        if(obj.prodCode == parseInt(document.getElementById('clientCodeInput').value)){
            alert('Code already registered');
            countCodes = 1;
        }
    }
    if (countCodes == 0){
        return 0;
    }
}

// X Button
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
    } else{
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
    } else{
        clearMenus();
        document.getElementById('productsFieldset').style.display = 'flex';
    }
    showProducts();
})

// Cart Buttons
const cartBtn = document.getElementById('cartBtn');
cartBtn.addEventListener('click', function(){
    if(document.getElementById('cartFieldset').style.display == 'flex'){
        clearMenus();
    } else{
        clearMenus();
        document.getElementById('cartFieldset').style.display = 'flex';
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
var productsIndex = 1;
function showProducts(){
    if(productsIndex > products.length || productsIndex <= 0){
        defaultProducts();
        alert('Code does not exist');
    } else{
        for(let obj of products){
            if(obj.prodCode == productsIndex){
            var productDescrip = obj.prodDescrip;
            var productPrice = obj.prodPrice;
            var productInStock = obj.prodInStock;
            }
        }
        document.getElementById('productCodeInput').value = productsIndex;
        document.getElementById('descriptionInput').value  = productDescrip;
        document.getElementById('priceInput').value  = productPrice;
        document.getElementById('inStockInput').value  = productInStock;
    }
}

// Default Products
function defaultProducts(){
    productsIndex = 1;
    document.getElementById('productCodeInput').value = products[0].prodCode;
    document.getElementById('descriptionInput').value  = products[0].prodDescrip;
    document.getElementById('priceInput').value  = products[0].prodPrice;
    document.getElementById('inStockInput').value  = products[0].prodInStock;
}

// Right Arrow - Products
const rightArrowProd = document.getElementById('rightArrowProd');
rightArrowProd.addEventListener('click', function(){
    productsIndex += 1;
    showProducts();
})

// Left Arrow - Products
const leftArrowProd = document.getElementById('leftArrowProd');
leftArrowProd.addEventListener('click', function(){
    productsIndex -= 1;
    showProducts();
})

// New Product Function
function newProductFunc(){
    let newProductIndex = products.length + 1;
    document.getElementById('productCodeInput').value = newProductIndex;
    document.getElementById('descriptionInput').value  = "";
    document.getElementById('priceInput').value  = "";
    document.getElementById('inStockInput').value  = "";
}

// New Products Button
const newProductButton = document.getElementById('newProductButton');
newProductButton.addEventListener('click', newProductFunc);

// Save Products Button
const saveProductsBtn = document.getElementById('saveProductsButton');
saveProductsBtn.addEventListener('click', function(){
    let countBlanks = checkProdBlanks();
    let countCodes = checkProdCode();
    if(countBlanks == 0 && countCodes == 0){
        let newProductObject = {
            "prodCode": "",
            "prodDescrip": "",
            "prodPrice": "",
            "prodInStock": "",
        };
        newProductObject.prodCode = parseInt(document.getElementById('productCodeInput').value);
        newProductObject.prodDescrip = document.getElementById('descriptionInput').value;
        newProductObject.prodPrice = parseFloat(document.getElementById('priceInput').value);
        newProductObject.prodInStock = parseInt(document.getElementById('inStockInput').value);
        products.push(newProductObject);
        alert('Success! Product registered');
        defaultProducts();
    }
})

// Check Blank Inputs - Products
function checkProdBlanks(){
    let countBlanks = 0;
    const productsInput = document.getElementById('productsInputs');
    for(let inputs of productsInput.querySelectorAll('.input')){
        if (inputs.value == ''){   
            countBlanks += 1;
        }
    }
    if(countBlanks !== 0){
        alert('Fill in the blanks');
    } else{
        return 0;
    }
}

// Check Already Registered Codes
function checkProdCode(){
    var countCodes = 0;
    for(let obj of products){
        if(obj.prodCode == parseInt(document.getElementById('productCodeInput').value)){
            alert('Code already registered');
            countCodes = 1;
        }
    }
    if (countCodes == 0){
        return 0;
    }
}

// CART //
// Show Clients Name
const cartClientsCodeInput = document.getElementById('clientsCodeInput');
cartClientsCodeInput.addEventListener('blur', function(){
    var ctrlVarCartClient = 0;
    for(let obj of clients){
        if(obj.clientCode == document.getElementById('clientsCodeInput').value){
            var cartClientNameInput = obj.clientName;
            ctrlVarCartClient = 1;
        }
    }
    if (ctrlVarCartClient == 1){
        document.getElementById('clientsNameInput').value = cartClientNameInput;
    } else{
        alert('Insert a valid client');
        document.getElementById('clientsCodeInput').value = 1;
        document.getElementById('clientsNameInput').value = clients[0].clientName;
    }
})

// Show Products Description
const cartInputProductCode = document.getElementById('inputProdCode');
cartInputProductCode.addEventListener('blur', function(){
    var countCart = 0;
    for(let obj of products){
        if(obj.prodCode == document.getElementById('inputProdCode').value){
            var prodDescripOrder = obj.prodDescrip;
            var prodPriceOrder = obj.prodPrice;
            countCart = 1;
        }
    }
    if (countCart == 1){
        document.getElementById('inputProdName').value = prodDescripOrder;
        document.getElementById('inputProdPrice').value = prodPriceOrder.toFixed(2);
    } else{
        alert('Insert a valid product');
        document.getElementById('inputProdCode').value = 1;
        document.getElementById('inputProdName').value = products[0].prodDescrip;
        document.getElementById('inputProdPrice').value = products[0].prodPrice;
    }
})

// Place Order Button
const placeOrderButton = document.getElementById('placeOrderButton');
placeOrderButton.addEventListener('click', function(){
    for (let obj of products){
        if (obj.prodCode == document.getElementById('inputProdCode').value){
            var orderItem = document.getElementById('inputProdCode').value;
            var orderDescrip = obj.prodDescrip;
            var orderPrice = obj.prodPrice;
        }
    }
    let blanksCheck = checkCartBlanks();
    let codeCheck = checkCartCode();
    let cartCheck = checkCartStock();
    if (blanksCheck == 0 && codeCheck == 0 && cartCheck == 0){
        const childElmItem = document.createElement('p');
        const childElmDescrip = document.createElement('p');
        const childElmPrice = document.createElement('p');
        const childElmQtty = document.createElement('p');
        const childElmSubTotal = document.createElement('p');
        orderArray.push(orderItem);
        document.getElementById('ulItem').appendChild(childElmItem).textContent = orderItem;
        document.getElementById('ulDescrip').appendChild(childElmDescrip).textContent = orderDescrip;
        document.getElementById('ulPrice').appendChild(childElmPrice).textContent = orderPrice.toFixed(2);
        document.getElementById('ulQtty').appendChild(childElmQtty).textContent = document.getElementById('inputProdQtty').value;
        document.getElementById('ulSubTotal').appendChild(childElmSubTotal).setAttribute('class', 'liSubTotal');
        document.getElementById('ulSubTotal').appendChild(childElmSubTotal).textContent = (orderPrice * document.getElementById('inputProdQtty').value).toFixed(2);
    }
    totalSumFunc();
})

// Check Cart Blanks
function checkCartBlanks(){
    let countBlanks = 0;
    const cartForm = document.getElementById('cartForm');
    for(let inputs of cartForm.querySelectorAll('.input')){
        if (inputs.value == ''){
            countBlanks += 1;
        }
    }
    if (countBlanks > 0){
        alert('Fill in the blanks!');
    } else{
        return 0;
    }
}

// Check Items Already in Cart
var orderArray = [];
function checkCartCode(){
    if (orderArray.indexOf(document.getElementById('inputProdCode').value) !== -1){
        alert('Item already in cart');
    } else{
        return 0;
    }
}

// Check Cart Stock
function checkCartStock(){
    for (let obj of products){
        if (obj.prodCode == document.getElementById('inputProdCode').value){
            var orderStock = obj.prodInStock;
        }
    }
    if (document.getElementById('inputProdQtty').value > orderStock){
        alert('Not enough items in stock');
    } else{
        return 0;
    }
}

// Total Sum Function
function totalSumFunc(){
    const subTotalArray = document.querySelectorAll('.liSubTotal');
    let totalSum = 0;
    for(let subTotal of subTotalArray){
        totalSum += parseFloat(subTotal.textContent);
    }
    document.getElementById('totalPriceValue').value = totalSum.toLocaleString('pt-BR', {style: 'currency', 'currency': 'BRL'});
}