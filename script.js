var validateLogin = async function(){
    let dataFetch = await fetch('/js-login-page/users.json');
    let dataJSON = await dataFetch.json();

    var user = document.getElementById('user').value;
    var pass = document.getElementById('password').value;

    var controlVar = 0;

    for (let objs of dataJSON.users){
        if(user == objs.user && pass == objs.pws){
            controlVar =+ 1;
        }
    }
    if(controlVar == 1){
        document.getElementById('form').action = '/js-login-page/products-page/index.html';
        document.getElementById('form').submit();
        controlVar = 0;
    }
    else{
        alert('Incorrect login or password');
    }
}