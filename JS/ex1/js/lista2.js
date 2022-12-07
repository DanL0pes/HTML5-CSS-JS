function calcRoute() {
    n = parseInt(document.getElementById('number').value);
    ante = 0;
    suce = 1;
    i =1
    res=1
    while(i<=n){
        document.getElementById('result').innerHTML += (res+'<br>');
        res = ante + suce;
        ante = suce;
        suce = res;
        i++;
    }
}
