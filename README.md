📝 Formulário de Cadastro

Projeto de um formulário de cadastro desenvolvido com HTML5, CSS3 e JavaScript, com integração à API ViaCEP para consulta automática de endereços por meio do CEP informado pelo usuário.

O objetivo do projeto é praticar conceitos fundamentais de desenvolvimento web, organização de arquivos, manipulação do DOM e consumo de APIs externas.

📌 Sobre o projeto

O formulário permite que o usuário informe seus dados pessoais e de endereço.

Uma das principais funcionalidades é a consulta automática de CEP. Ao preencher o campo correspondente e sair dele, o JavaScript realiza uma requisição à API ViaCEP e preenche automaticamente os campos de rua, bairro, cidade e estado.

O projeto foi desenvolvido com foco no aprendizado de desenvolvimento front-end.

🚀 Funcionalidades
Cadastro de nome.
Cadastro de idade.
Seleção da data de nascimento.
Cadastro de e-mail.
Consulta automática de CEP.
Preenchimento automático dos campos de endereço.
Identificação de CEP inválido.
Identificação de CEP não encontrado.
Tratamento de erros durante a consulta à API.
Validação básica dos campos obrigatórios do formulário.
🛠️ Tecnologias utilizadas
Tecnologia	Utilização
HTML5	Estruturação do formulário
CSS3	Estilização e organização visual
JavaScript	Lógica e interatividade
ViaCEP API	Consulta de endereços por CEP
📂 Estrutura do projeto
text
FormularioCadastro/
│
├── Formulario.html
├── Formulario.css
├── Formulario.js
└── README.md

Descrição dos arquivos

Formulario.html

Contém a estrutura do formulário, os campos de cadastro e as referências aos arquivos CSS e JavaScript.

Formulario.css

Responsável pela aparência do formulário, incluindo cores, espaçamentos, fontes, bordas e estilização dos elementos.

Formulario.js

Contém a lógica responsável pela consulta do CEP, comunicação com a API ViaCEP, manipulação dos campos e tratamento de erros.

🌐 Integração com a API ViaCEP

O projeto utiliza a API pública ViaCEP para consultar informações de endereço.

Documentação oficial: https://viacep.com.br/

A consulta é realizada por meio da seguinte URL:

text
https://viacep.com.br/ws/CEP/json/


O CEP informado pelo usuário é inserido dinamicamente na URL.

Como funciona a consulta?
O usuário digita um CEP no formulário.
O evento blur identifica quando o usuário sai do campo.
O JavaScript remove caracteres que não sejam números.
É realizada uma verificação para confirmar se o CEP possui oito dígitos.
A função fetch() realiza uma requisição à API ViaCEP.
A resposta é convertida para JSON.
Os dados recebidos são utilizados para preencher automaticamente os campos de endereço.
Caso ocorra algum erro, o sistema apresenta uma mensagem ao usuário.
Exemplo de retorno da API
json
{
    "cep": "01001-000",
    "logradouro": "Praça da Sé",
    "bairro": "Sé",
    "localidade": "São Paulo",
    "uf": "SP"
}

⚙️ Conceitos de JavaScript aplicados

Durante o desenvolvimento foram utilizados os seguintes conceitos:

getElementById(): seleciona elementos HTML pelo identificador.
addEventListener(): adiciona eventos aos elementos da página.
blur: detecta quando o usuário sai de um campo.
replace(): remove caracteres indesejados do CEP.
fetch(): realiza requisições HTTP para consumir a API.
then(): trata as etapas de resolução da requisição assíncrona.
response.json(): converte a resposta para o formato JSON.
catch(): captura erros durante a requisição.
value: permite acessar e modificar o conteúdo dos campos do formulário.
💻 Como executar o projeto
Faça o download ou clone este repositório.
Abra a pasta do projeto no Visual Studio Code.
Confira se os arquivos HTML, CSS e JavaScript estão na mesma pasta.
Abra o arquivo Formulario.html no navegador.
Preencha os campos do formulário.
Digite um CEP válido e saia do campo para testar a consulta automática.

Importante: é necessário ter conexão com a internet para consultar a API ViaCEP.

🧪 Exemplo de teste

Para testar a funcionalidade de consulta automática, utilize o CEP:

text
01001-000


O sistema deverá preencher automaticamente:

Rua: Praça da Sé
Bairro: Sé
Cidade: São Paulo
Estado: SP
📚 Objetivos de aprendizagem

Este projeto foi desenvolvido com os seguintes objetivos:

Aprender a estruturar páginas utilizando HTML5.
Aplicar estilos utilizando CSS3.
Desenvolver funcionalidades utilizando JavaScript.
Compreender a manipulação do DOM.
Aprender a trabalhar com eventos JavaScript.
Entender o funcionamento de requisições HTTP utilizando fetch().
Consumir uma API externa.
Trabalhar com dados no formato JSON.
Organizar arquivos e estruturar um projeto web.
🔮 Melhorias futuras

Algumas funcionalidades que podem ser implementadas futuramente:

Implementar o armazenamento dos dados em um banco de dados.
Criar um sistema de cadastro com backend.
Adicionar máscaras para CEP e telefone.
Melhorar a responsividade para dispositivos móveis.
Implementar mensagens de validação diretamente na página.
Adicionar uma tela de confirmação de cadastro.
Criar um sistema de consulta e edição de cadastros.
👨‍💻 Autor

Projeto desenvolvido como atividade prática de aprendizado em desenvolvimento web.

Tecnologias: HTML5 | CSS3 | JavaScript | API ViaCEP

⭐ Se este projeto foi útil para seus estudos, deixe uma estrela no repositório!
