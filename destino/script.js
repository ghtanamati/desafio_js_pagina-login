// Botão X

let xButton = document.querySelectorAll('.closeBtn');

for(let xElement of xButton){
    xElement.addEventListener('click', function(){
        xElement.parentElement.parentElement.parentElement.style.display = 'none';
    })
}


// Botões Laterais

let sideButton = document.querySelectorAll('.sideBtn');

for(let sideElement of sideButton){
    sideElement.addEventListener('click', function(){
        if(sideElement.id == 'productsBtn'){
            if(document.getElementById('productsFieldset').style.display == 'none'){
                document.getElementById('productsFieldset').style.display = 'flex';
                document.getElementById('clientsFieldset').style.display = 'none';
                document.getElementById('ordersFieldset').style.display = 'none';
            }
            else{
                document.getElementById('productsFieldset').style.display = 'none';
            }
        }
        else if(sideElement.id == 'clientsBtn'){
            if(document.getElementById('clientsFieldset').style.display == 'none'){
            document.getElementById('productsFieldset').style.display = 'none';
            document.getElementById('clientsFieldset').style.display = 'flex';
            document.getElementById('ordersFieldset').style.display = 'none';
            }
            else{
                document.getElementById('clientsFieldset').style.display = 'none';
            }
        }
        else if(sideElement.id == 'ordersBtn'){
            if(document.getElementById('ordersFieldset').style.display == 'none'){
                document.getElementById('productsFieldset').style.display = 'none';
                document.getElementById('clientsFieldset').style.display = 'none';
                document.getElementById('ordersFieldset').style.display = 'flex';
            }
            else{
                document.getElementById('ordersFieldset').style.display = 'none';
            }
        }
    })
}

// Botões Arrows