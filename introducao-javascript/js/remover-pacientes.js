let pacientesX = document.querySelectorAll(".paciente");

let tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
    //Os códigos em comentário seriam uma alternativa ao "event.target.parentNode.remove();", colocando-se "paiDoAlvo.reme()" ao final.
    /*let alvoEvento = event.target; //Aqui está-se referindo à TAG "td" do HTML, que é filha dos "trs".
    let paiDoAlvo = alvoEvento.parentNode; //Aqui está-se referindo à TAG "tr" do HTML, que é o pai das "tds".*/
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){ //Esse comando exclui a linha no navegador de forma gradual.
        event.target.parentNode.remove();
    },500);
    
})