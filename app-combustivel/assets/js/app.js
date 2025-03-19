//alert('App Calculo');

// Receber os 
preco = $('#valorC').val();
kmM = $('#kmM').val();
kmR = $('#kmR').val();


lt = $('#litrosT').val();
result = $('#result').val();

// Validar os campos
function calc(){
    /**
    if(preco || kmM || kmR == null ) {
        alert('Por favar preencher todos os campos');
    }else{
        alert('passou');
    }
     */
    ltTotal = kmR /kmM ;

    lt = $('#litrosT').val(ltTotal)
   // alert(preco);       alert(kmM);       alert(kmR);
}

// função calculo do App