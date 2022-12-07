function calcRoute() {
    var n = parseFloat(document.getElementById('number').value);
    for(i=1; i<=10; i++){
      res = n * i;
      document.getElementById('result').innerHTML += (n+'x'+i+'='+res+'<br>');
    }
}