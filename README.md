# Ecoleta
  A solução consiste no cadastro de pontos de coleta e de itens de resíduos. A parte de implementação de banco de dados, faz o uso do (knex - query builer) para realizar os comandos sql de forma padronizada, em classes.
  Foram desenvolvidas as seguintes tabelas para registro dos dados dos usuários: tb_point, tb_items e uma tabela associativa criada devido às cardinalidades existentes na tabela points e items.
  A vesão mobile foi utilizada alguns recursos que forneceram funcionalidades do mapa, para tal foi usada uma API do leaflet para react-native, que possibilitou a implementação do mapa com visualização de pontos em formato de imagem ilustrativa personalizada, fazendo com que o usuário veja qual é o ponto mais próximo da sua região sem complicações. 

### Pré-requisitos

Ter conhecimento das tecnologias utilizadas no projeto.

## Desdobramento, desenvolvimento

A pasta server está alocando todos arquivos necessários para o back-end - Node.
A pasta web aloca todos os arquivos do lado do cliente da aplicação para ser executada nos navegadores  - React. 
A pasta mobile aloca todos arquivos referentes ao desenvolvimento da versão mobile do app - React Native.

## Construído com

* Node
* React
* React Native

## Contribuindo

Leia [CONTRIBUTING.md] (https://github.com/kaique-programmer/Aplicacao-Ecoleta) para obter detalhes sobre nosso código de conduta e o processo para enviar solicitações pull para nós.

## Controle de versão

Usamos [SemVer] (http://semver.org/) para versionar. Para as versões disponíveis, consulte [Ecoleta] (https://github.com/kaique-programmer/Aplicacao-Ecoleta).

## Autores

* ** Kaique Oliveira ** - [kaique-programmer] (https://github.com/kaique-programmer/)

Veja também a lista de [colaboradores] (https://github.com/your/project/contributors) que participaram deste projeto.

## Licença

Este projeto está licenciado sob a licença MIT - consulte o arquivo [LICENSE.md] (LICENSE.md) para obter detalhes

## Agradecimentos

* Rocketseat
* Diego Fernandes - Rocketseat

