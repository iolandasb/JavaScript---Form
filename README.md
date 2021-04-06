# JavaScript_Form
Creation of a form in HTML that allows the insertion and deletion of data, calculates the BMI, identifies inconsistencies in the information described, performs a search filter by name and brings data from an external source.

# Conceitos e Funcionalidades

•	DOM (Document Object Model): faz a ligação do HTML com o JS. É representado por “document”. O navegador, ao ler o seu arquivo HTML, cria uma cópia em memória daquele HTML e a partir dessa cópia ele vai desenhando a a página, colocando as TAGs e aplicando os estilos. Esta cópia é o chamado DOM, ou seja, uma representação em memória do HTML do arquivo, que o navegador usa para desenhar a página, e a variável “document” é quem contêm o DOM.

•	document: é uma variável muito importante do JS. Ela contém o DOM, que é como o navegador enxerga o HTML utilizado por ele para renderizar a página. Se jogado no console (F12) do navegador, mostra o código HTML completo.

•	Manipulação do DOM: quando se diz que com o JS se manipula o DOM, significa que o que o navegador renderizou é que foi manipulado. Então, ao trocar algum texto do DOM, o navegador imediatamente desenha novamente aquele texto, pois o DOM é o que o navegador usa para desenhar o site. Ademais, considerando que o que é manipulado é o DOM, quando por exemplo se troca um texto de um “h1” ou um estilo de um elemento, na verdade o que se está alterando é a representação em memória, o que faz com que o arquivo fonte que contêm seu HTML fique intacto.

•	document.querySelector(“”): busca algo no “document”. Dentro do “” deve ser inserido o que se quer achar. Importante destacar que o comando traz apenas UM elemento.

•	document.querySelectorAll(“”): busca algo no “document”. Dentro do “” deve ser inserido o que se quer achar. Importante destacar que o comando traz todos os elementos que estiverem dentro do que se quer buscar (como uma classe ou identificador).

•	Ordem: o ideal é sempre colocar o JS ao final do “body” da página, para que o navegador consiga ler todas as informações para então interpretar o JS.

•	(nome da variável).textContent: dá acesso ao texto das TAGs que possuem conteúdo de texto.

•	Boas práticas: é uma boa prática colocar classes (“.class”) ou identificadores (“#id”) para alterar textos contidos em TAGs ao invés de chamar as TAGs especificamente, pois isso pode gerar erros.

•	"<script src="(nome da pasta)/(nome do arquivo JS)"></script>": esse comando é o que faz o link com a programação JS. É necessário indicar a pasta em que o arquivo está, bem como seu nome.

•	ctrl+shift+J: mesmo que apertar “F12” no navegador. Abre o console.

•	(nome da variável).toFixed(): arredonda um número. Dentro do “()” é possível inserir o número de casas decimais que quer que apareça no navegador. Exemplo: “(nome da variável).toFixed(2)”. Isso irá mostrar um número com 2 casas decimais após a vírgula (ou ponto).

•	(nome da variável).style.backgroundColor = “nome da cor)”: pinta o fundo do local indicado pela variável com a cor desejada. Importante destacar que para CSS o comando seria “(nome da variável).style.background-color”, porém o JS não aceita esse “-“, dessa forma se usa o chamado “Camel Case”, que faz a separação das palavras iniciando-as em letra maiúscula e sem espeaços, como mostra esse comando.

•	(nome da variável).classList.add: o “classList” acessa uma classe e o “add” adiciona essa classe ao comando. Assim, pode-se por exemplo chamar e executar no JS uma classe que esteja no CSS.

•	(nome da variável).addEventListener(“”): o comando “escuta” o evento que se irá criar para o elemento. Dentro de “(“”)” se deve inserir qual será o evento.

•	Função anônima (function()): não precisa ser nomeada. Pode ser usada dentro de outro comandos, por exemplo. Funciona como qualquer outra função, só não tem um nome específico.

•	event.preventDefault(): é uma função que previne um comportamento padrão. Exemplo: o comportamento padrão de um “form” (formulário), quando clicamos em um “button” ou em um “input submit” que está dentro dele, é enviar os dados e recarregar a página. Esse comando evita tal comportamento.

•	form.(nome da classe/id/etc).value: o “form” cria uma atuação sobre o campo do formulário determinado pela classe, id, etc. Já o “value” se refere ao valor dentro desse campo. Assim, o comando capta as informações digitas no campo.

•	document.createElement(“”): cria um elemento no JS. Dentro do “()” deve ser indicado o elemento a ser criado.

•	(nome do elemento).appendChild():vincula uma variável, classe, id, etc como filha de um outro elemento pai. Dentro de “()” deve ir o elemento filho.

•	on: no JS, os eventos possuem um “atalho” para serem escritos, pois todos possuem a propriedade “on”. Por exemplo, em vez de escrever “botao.addEventListener('click')” para criar o evento de apertar o mouse, podemos usar “botão.onclick = (nome de uma função a ser executada)”.Porém, ressalta-se que nesse caso o comando suporta apenas uma função, sendo que caso exista outra atrelada ao mesmo comando, a segunda sobrescreverá a primeira.

•	Objetos: representam coisas do mundo real ou do mundo da programação que representam coisas que tem características em comum. Após o nome do objeto deve ter ":" para inserir o contéudo e o comando deve terminar em ",". Exemplo: “nome: form.nome.value,”.

•	(nome da variável).reset(): reseta os campos de um formulário. Geralmente é usado após o envio do formulário pelo clique de um botão.

•	if: quando o "if" é simples (ou seja, só tem um comando), não é necessário usar "{}".

•	Array: como uma função comporta apenas um comando, o array ("[]") pode ser inserido para possibilitar que a função tenha mais de um comando.

•	forEach: é como um “for”, mas não é necessário pedir que ele passe por todos os elementos, pois já faz isso.

•	(nome do elemento que se quer controlar).innerHTML = “”: permite controlar um elemento interno do HTML. O “” indica o que deve ser feito com os valores, que no caso devem ficar em branco.

•	dblclick: (double click) é um evento de duplo click do mouse (botão esquerdo).

•	this.remove: “this” está relacionado com quem acionou o evento. “remove” é para remover. Ou seja, o comando manda remover o dono do evento, o elemento que está relacionado ao evento.

•	Eventos: esse link contém uma lista com diversos tipos de eventos: https://developer.mozilla.org/en-US/docs/Web/Events. 

•	this.remove x event.target: “this.remove” é o dono do evento, “event.target” é quem sofreu o evento em si.

•	(nome do evento).parentNode: identifica o elemento pai.

•	Event Bubbling ("borbulhamento" de eventos): quando um evento é “escutado” no JavaScript, ele na verdade não acontece só no dono do evento, ele acontece também no pai do evento e assim vai subindo (hierarquicamente).

•	setTimeOut(): pede para o programa esperar um determinado tempo antes de seguir à próxima instrução/comando. Dentro de “()”, deve-se inserir uma função com o comando que virá em seguida, e separado por “,”, o tempo de espera (em milissegundos):
  - <img>![image](https://user-images.githubusercontent.com/60974082/113655170-b52b9280-966f-11eb-931d-a73e19f3fc6f.png)</img>
 
•	input: é um evento que identifica que algo está sendo digitado.

•	display: none: propriedade do CSS que torna um elemento invisível.

•	new RegExp(): trata-se de uma expressão regular, que identifica um texto ou pedaço de texto. Dentro do “()” deve constar o que se quer buscar (por exemplo, “this value”) e separado por “,” pode-se incluir “"i"”, que significa que a captação do texto não deve se importar se a letra digitada é maiúscula ou minúscula. Exemplo:
  - <img>![image](https://user-images.githubusercontent.com/60974082/113655204-c2488180-966f-11eb-8841-6e9dbaf1ad36.png)</img>

•	(nome da variável).test(): indica algo que se quer testar. Esse algo deve estar contido dentro do “()”. É uma booleana, ou seja, devolve verdadeiro ou falso.

•	(nome da variável).substr(): funciona como uma expressão regular para identificar e acessar os caracteres de uma palavra. Deve-se inserir dentro do “()” as posições das letras, separadas por “,”, considerando que a posição a primeira letra é “0”. Porém, ela não comporta a indicação de maiúsculas ou minúsculas, o que precisa ser feito por outros comandos. Exemplo (o “this.value.length” indica o tamanho da palavra):
  - <img>![image](https://user-images.githubusercontent.com/60974082/113655235-cf657080-966f-11eb-8c66-4e2db70b63cd.png)</img>

•	API: uma interface de programação que disponibiliza dados ao desenvolvedor.

•	new XMLHttpRequest(): objeto do JS responsável por fazer requisições HTTP. O “XML” é porque antes ele trafegava dados “XML”, porém atualmente ele também trafega outros tipos de dados. Para receber uma página HTTP, é necessário fazer outras configurações para que ele entenda esse comando.

•	(nome da variável).open(): abre uma requisição que se quer fazer. Dentro do “()” deve constar o tipo de requisição (lembrando da aula de HTTP, pode ser por exemplo uma requisição do tipo “GET”) e separado por “,” o endereço da página que se quer ter acesso.

•	(nome da variável).send(): pega a requisição criada pelo comando “open” e a envia.

•	load: evento que carrega uma informação.

•	(nome da variável).responseText: apresenta o texto da resposta.

•	JSON: é um jeito de transportar pela web um formato de dados muito semelhante aos objetos do JS. Ele consegue facilmente ser convertidos em objetos JS (arrays, strings, etc).

•	JSON.parse(): pega um texto em JSON e transforma em JS. Dentro do “()” deve constar o comando que contém o texto (como “responseText”, pro exemplo).

•	AJAX: é uma requisição feita ao JS de modo assíncrono (não para o fluxo do JS enquanto a requisição é feita).

•	(nome da variável).status: identifica o status code do erro HTTP que a página gerou (200,  300, 400, etc).
