function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigada por clicar</b>";
    //console.log(document.getElementoById("agradecimento"));
}
function redirecionar(){
    window.open("https://web.digitalinnovation.one/course/programacao-para-internet-com-javascript/learning/ddb54ad6-55fb-4eec-90d5-561a6010d14d");
}
function trocar(elemento){
    elemento.innerHTML = "<b>Obrigada por passar o mouse</b>";
 //alert("trocar texto");
}
function voltar(elemento){
    elemento.innerHTML = "passe o mouse aqui"; 
}
function load(){
    alert("Página Carregada")
}
function funcaochange(elemento){
    console.log(elemento.value)
}
/*function validaIdade(idade){
    var validar;
    if (idade >=18){
    validar = true
}else{
    validar = false
}
return validar;
}
var idade = prompt("Qual sua idade ?");
console.log(validaIdade(idade));

/*function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(soma(5, 10))
alert(setReplace("vai japão" , "japão", "Brasil"));

/*var d = new Date();
alert(d);
alert(d.getDay());

/*var count;
for(count= 1 ; count <=5;count++){
    alert(count);
}

/*var count = 0;
while (count <=5){
    console.log(count);
    alert(count);
    count = count +1;
};
*/



/*var idade = prompt("How old are you?");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};



var frutas = [{nome:"maça" , cor:"vermelha"},{nome:"Uva" , cor:"roxa"}, {nome:"banana" , cor:"Amarela"} ];
alert(frutas[0].cor);
alert(frutas);
console.log(frutas);
var fruta = {nome:"maça" , cor:"vermelha"}
alert(fruta.cor);


*/

//var lista =["maça", "pera" ,//"laranja"];
//lista.push("uva");
//lista.pop("pera");
//alert(lista[0]);
//alert(lista);



/*var nome ="Lucilene Pessoa";
var idade ="34";
var idade2 = 10;
var frase = "Japão e o melhor  time do mundo";
alert(nome +  " tem "  +  idade  +  " Anos ");
alert(frase.replace("Japão" , "Brasi")); */