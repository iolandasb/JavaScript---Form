    let titulo = document.querySelector(".titulo"); //Aqui se chamou a classe "titulo" nomeada na TAG "h1" acima.
    titulo.textContent = "Aparecida Nutricionista";

    let pacientes = document.querySelectorAll(".paciente");

    for(var i = 0; i < pacientes.length; i++) {

        var paciente = pacientes[i];
        
        let tdPeso = paciente.querySelector(".info-peso");
        let peso = tdPeso.textContent;

        let tdAltura = paciente.querySelector(".info-altura");  
        let altura = tdAltura.textContent;
    
        let tdImc = paciente.querySelector(".info-imc");
    
        let pesoValido = validaPeso(peso);
        let alturaValida = validaAltura(altura);
    
        // Abaixo. se está usando o "!" para indicar que todo o comando do "if" ocorrerá no caso de o valor da variável "pesoValida" ou "alturaValida" ser inválido.
        
        if(!pesoValido) { //Aqui se está verificando se não foi inserido um peso absurdo em "info-peso". Caso o peso não atenda os critérios do "if", uma mensagem aparece tanto no console como na página, no local da informação do peso. A leitura seria "quando o peso / a altura NÃO for válida ...".
            console.log("Peso Inválido");
            pesoValido = false;
            tdImc.textContent = "Peso Inválido";
            paciente.classList.add("paciente-invalido"); //Esse comando irá pintar de vermelho a linha do peso que deu erro, para deixar o problema em evidência. Ele chama uma classe criada no CSS ("paciente-valido") criada especialmente para essa alteração. Isso poderia ser feito aqui no JS, mas é importante manter as alterações de estilo no CSS.
        }
    
        if(!alturaValida) { //Aqui se está verificando se não foi inserida uma altura absurda em "info-altura". Caso a altura não atenda os critérios do "if", uma mensagem aparece tanto no console como na página, no local da informação da altura.
            console.log("Altura Inválida");
            alturaValida = false;
            tdImc.textContent = "Altura Inválida";
            paciente.classList.add("paciente-invalido"); //Esse comando irá pintar de vermelho a linha da altura que deu erro, para deixar o problema em evidência. Ele chama uma classe criada no CSS ("paciente-valido") criada especialmente para essa alteração. Isso poderia ser feito aqui no JS, mas é importante manter as alterações de estilo no CSS.
        }
    
        if(alturaValida && pesoValido) { //Como "alturaValida = true" e "pesoValido = true", aqui está-se dizendo "se a altura e o peso forem válidos".
            let imc = calculaImc(peso,altura);
            tdImc.textContent = imc;
        }

    }

    function validaPeso(peso) {
        if(peso >= 0 && peso < 1000) {
            return true;
        } else {
            return false;
        }
    }

    function validaAltura(altura) {
        if(altura >=0 && altura <= 3.00) {
            return true;
        } else {
            return false;
        }
    }

    function calculaImc(peso, altura) {
        let imc = 0;
        imc = peso / (altura * altura);
        return imc.toFixed(2);
    }

   


