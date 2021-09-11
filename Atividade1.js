//variaveis
var peso = 100
var qtd = 10
const peca = ['mor','reservatorio','bateria']; 

console.log("");
console.log("");
console.log("Empresa Savinis");
console.log("");
console.log("Contagem de peças e Pesagem da peça");
console.log("");
console.log("");


if (peso > 100) {
    console.log("A peça tem peso de "+ peso+" gramas, Aprovado!");
    
}else{
    console.log("A peça tem peso de "+ peso +" gramas, Reprovado!");
}

console.log("");
console.log("A quantidade de peça é: "+qtd);
console.log("");
if (qtd <= 10) {
    console.log("A quantidade de peças é: "+qtd+ " Aprovado!");
    
}else   {
    console.log("A quantidade de peças é: "+qtd+ " Capacidade Excedida!");

}
console.log("");
console.log("");

console.log("Contagem de caracteres");
console.log("");


console.log("Quantidade de caracteres");
for (let index = 0; index < peca.length; index++) {
    const atual = peca[index];
    if (atual.length <3) {
    console.log(atual+" : A Peça possui caracteres inferior a 3, e não pode ser cadastrada. ");
    
}else{
    console.log(atual+" : A Peça pode ser cadastrada. ");
}
    
}









