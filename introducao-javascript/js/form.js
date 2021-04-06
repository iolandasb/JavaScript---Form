let botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event) {

    event.preventDefault();

    let form = document.querySelector("#form-adiciona");

    let paciente = obtemPacienteDoFormulario(form);

    let pacienteTr = montaTr(paciente);

    let erros = validaPaciente(paciente);
    console.log(erros);

    if(erros.length > 0) {
        exibeMensagensDeErro(erros);
        return; // Com esse "return" vazio o porgrama sai imediatamente da função e não dá continuidade ao resto da programação. Ou seja, se o "validaPaciente" contiver um valor inválido, o cadastri em questão não entrará na tabela do navegador. 
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();
    let mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = ""; //Esse comando controla elementos do HTML, no caso, a função "mensagensErro". O "" indica que os valores do "mensagensErro" devem ficar em branco. O comando serve para apagar as mensagens de erro quando se clica no botão de "adicionar".

});

function adicionaPacienteNaTabela(paciente) {
    let pacienteTr = montaTr(paciente);
    let tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros) {
    let ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = ""; //Esse comando controla elementos do HTML, no caso, a TAG "ul". O "" indica que os valores do "ul" devem ficar em branco. O comando serve para apagar as mensagens de erro quando se clica no botão de "adicionar".

    erros.forEach(function(erro) {
        let li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteDoFormulario(form) {

    let paciente = {
        //Esses elementos são objetos. Após o nome do objeto deve ter ":" para inserir o contéudo e o comando deve terminar em ",".
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente
    
}

function montaTr(paciente) {

    let pacienteTr = document.createElement("tr"); //"tr" é uma linha do HTML. Na programação do HTML, cada "tr" contém a classe "paciente". Como aqui se quer acrescentar uma linha àquela tabela, foi criado esse elemento (a TAG "tr").
    pacienteTr.classList.add("paciente"); //Isso foi incluído apenas para deixar as linhas e células criadas pelo JS iguais às do HTML (que são nomeadas por classes).

    //O ".appendChild" vincula uma variável, classe, id, etc como filha de um outro elemento pai (aqui "pacienteTR").
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;

}

function montaTd(dado, classe) {

    let td = document.createElement("td"); //"td" é uma célula do HTML. Na programação do HTML, cada "td" contém uma classe específica. Como aqui se quer acrescentar uma célula àquela tabela, foi criado esse elemento (a TAG "td").
    td.textContent = dado;
    td.classList.add(classe); //Isso foi incluído apenas para deixar as linhas e células criadas pelo JS iguais às do HTML (que são nomeadas por classes).

    return td
}

function validaPaciente(paciente) {

    let erros = []; //Como uma função comporta apenas um comando, o array ("[]") foi inserido para possibilitar que a função "validaPaciente" funcione tanto para o peso quanto para a altura.

    //Quando o "if" é simples (ou seja, só tem um comando), não é necessário usar "{}".
    
    if(paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }
    
    if(!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    } 

    if(!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    } 

    if(paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }

    if(paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco");
    }

    if(paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco");
    }

    return erros;

}