let botaoAdicionarX = document.querySelector("#buscar-pacientes");

botaoAdicionarX.addEventListener("click", function() {
    console.log("Buscando pacientes");
    
    //Os comandos abaixo buscam uma lista de pacientes de outro site e a inserem na tabela do navegador quanto o botão "Buscar Pacientes" é apertado.
    let xhr = new XMLHttpRequest(); //"new XMLHttpRequest()"": objeto do JS responsável por fazer requisições HTTP. 
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes"); //Esse comando abre uma requisição que se quer fazer. 
    xhr.addEventListener("load", function() { //"load": evento que carrega uma informação.
        
        let erroAjax = document.querySelector("#erro-ajax");

        if(xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            let resposta = xhr.responseText; //Esse comando captura a resposta da requisição.
            let pacientes = JSON.parse(resposta); //Esse comando transforma o texto JSON em JS.
            pacientes.forEach(function(paciente) {
            adicionaPacienteNaTabela(paciente);
        });   
        } else {
            console.log(xhr.status); //Esse comando identifica o status code do erro HTTP que a página gerou (200,  300, 400, etc).
            console.log(xhr.responseText);
            
            erroAjax.classList.remove("invisivel");
        }

        });
        xhr.send(); //Esse comando pega a requisição criada pelo comando “open” e a envia.
    })
    