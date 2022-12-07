function calcRoute() {
    var n = parseInt(document.getElementById('number').value);
    var e = parseInt(document.getElementById('expoente').value);
    i = 0;
    res=1
    while(i<e){
        res = n*res;
        i++;
    }
    document.getElementById('result').innerHTML += (n+' elevado a '+e+' é igual a '+res+'<br>')
}