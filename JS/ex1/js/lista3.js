function calcRoute() {
    var num = parseInt(document.getElementById('number').value)
    switch(num){
        case 1:
            document.getElementById('result').innerHTML += ('Janeiro');
            break;
        case 2:
            document.getElementById('result').innerHTML += ('Fevereiro');
            break;
        case 3:
            document.getElementById('result').innerHTML += ('Março');
            break;
        case 4:
            document.getElementById('result').innerHTML += ('Abril');
            break;
        case 5:
            document.getElementById('result').innerHTML += ('Maio');
            break;
        case 6:
            document.getElementById('result').innerHTML += ('Junho');
            break;
        case 7:
            document.getElementById('result').innerHTML += ('Julho');
            break;
        case 8:
            document.getElementById('result').innerHTML += ('Agosto');
            break;
        case 9:
            document.getElementById('result').innerHTML += ('Setembro');
            break;
        case 10:
            document.getElementById('result').innerHTML += ('Outubro');
            break;
        case 11:
            document.getElementById('result').innerHTML += ('Novembro');
            break;
        case 12:
            document.getElementById('result').innerHTML += ('Dezembro');
            break;
        default:
            document.getElementById('result').innerHTML += ('Esse mês não existe.'+num+'<br>')
            break;
    }
}