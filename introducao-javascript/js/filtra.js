let campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() { //"input": é um evento que identifica que algo está sendo digitado.
    console.log(this.value);

    let pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0) {
        for(let i = 0; i < pacientes.length; i++) {
            let paciente = pacientes[i];
            let tdNome = paciente.querySelector(".info-nome");
            let nome = tdNome.textContent;
            //Os comandos abaxo, em especial o "new RegExp(this.value, "i")" são os que permitem que o filtro capte e busque uma letra digitada no campo de filtro do navegador.
            let expressao = new RegExp(this.value, "i"); //O "this" está se referindo a lista de pacientes. O "new RegExp()"" é uma expressão regular, que identifica um texto ou pedaço de texto. Dentro do “()” deve constar o que se quer buscar (no caso, “this value”) e separado por “,” pode-se incluir “"i"”, que significa que a captação do texto não deve se importar se a letra digitada é maiúscula ou minúscula. 
            // O teste descrito abaixo irá retornar verdadeiro caso o "nome" contenha a expressão igual à digitada no filtro, ou falso caso não contenha. Como se está testando se o nome NÃO contém a expressão (para que se execute a classe invisivel), foi utilizado o operador de negação "!".
            if(!expressao.test(nome)) { //O ".test" indica algo que se quer testar. Esse algo deve estar contido dentro do “()”. 
                paciente.classList.add("invisivel"); //Aqui o comando está dizendo que os nomes da lista que forem diferentes do digitado devem ser apagados.
            } else {
                paciente.classList.remove("invisivel"); //Aqui o comando está dizendo que os nomes da lista que forem iguais ao digitado devem ser mantidos.
            }
        }
    } else {
        for(let i = 0; i < pacientes.length; i++) {
            let paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }


})