/***
 *  Data  :: 22/02/2020
 *  Autor :: Sebastião Rodrigo
 *  Exercicio :: 02 - Funções JS
 */

 var nota = 10
 var Rmult = 10 * 10

 function myF(){
    document.getElementById("demo").innerHTML = "Hello World";
 }

 function NotaS(){
     document.getElementById("n1").innerHTML = nota;
 }

 function mult(){
    document.getElementById("mult").innerHTML = Rmult;
}

 function atualizar(){
    window.location.reload()
 }