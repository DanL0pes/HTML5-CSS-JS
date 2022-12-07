function comprar(){
    var qtdeH, qtdeD, valorUnitario, valorTotal, codproduto, nomeproduto;

    codproduto = document.frmOrcamento.slcPousada.selectedIndex;
    nomeproduto = document.frmOrcamento.slcPousada[codproduto].text;
    switch(codproduto){
        case 1: 
            valorUnitario = 120.00;
            break;
        case 2:
            valorUnitario = 150.00;
            break;
        case 3: 
            valorUnitario = 200.00;
            break;
    }

    qtdeH = parseInt(document.getElementById('qtdeH').value);
    qtdeD = parseInt(document.getElementById('qtdeD').value);
    valorTotal = qtdeH * qtdeD * valorUnitario;



    //AULA 24.11.2022

    //radio button
    var i, frete, adicionais = 0;

    for (i = 0; i < document.frmOrcamento.rdRefeicao.length; i++) {
        if (document.frmOrcamento.rdRefeicao[i].checked)
            break;
    }

    if (parseInt(document.frmOrcamento.rdRefeicao[i].value) == 1)        
        frete = 50;
    else if (parseInt(document.frmOrcamento.rdRefeicao[i].value) == 2)
        frete = 100;
    else
        frete = 150;

    valorTotal += frete;

    //checkbox
    if (document.getElementById('traslado').checked) {
        adicionais += 25;
    }
    if (document.getElementById('embalagem').checked) {
        adicionais += 45;
    }
    if (document.getElementById('cartao').checked == true){
        adicionais += 75;
    }

    valorTotal += adicionais;



    document.getElementById('nomeProduto').innerHTML = "Pousada: " + nomeproduto;
    document.getElementById('valorUnitario').innerHTML = "Valor unitário: R$" + valorUnitario +"/dia";
    document.getElementById('frete').innerHTML = "Valor da Reifeição: R$" + frete;
    document.getElementById('adicionais').innerHTML = "Adicionais: R$" + adicionais;
    document.getElementById('valorTotal').innerHTML = "Valor total: R$" + valorTotal;
}

