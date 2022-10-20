function hideOrders(){
    document.getElementById('ordersFieldset').style.display = 'none';
}

function hideProducts(){
    document.getElementById('productsFieldset').style.display = 'none';
}

function hideClients(){
    document.getElementById('clientsFieldset').style.display = 'none';
}

let clientNav = getElementById('clientsBtn');

clientNav.addEventListener('click', function(){
    document.getElementById('clientsFieldset').style.display = 'none';
})