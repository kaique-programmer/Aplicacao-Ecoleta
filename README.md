# aplicacaoEcoleta
Aplicação de coleta de resíduos, utilizando as tecnologias Node.js, React e React Native.

A pasta server está alocando todos arquivos necessários para o back-end, utilizando o Node.js.
A pasta web aloca todos os arquivos do lado do cliente da aplicação para ser executada nos navegadores, utilizando o React. 
A pasta mobile aloca todos arquivos referentes ao desenvolvimento da versão mobile do app, utilizando o React Native.

Finalidade da aplicação: 
  A solução consiste no cadastro de pontos de coleta e de itens de resíduos. A parte de implementação de banco de dados, faz o uso do (knex - query builer) para realizar os comandos sql de forma padronizada, em classes.
  Foram desenvolvidas as seguintes tabelas para registro dos dados dos usuários: tb_point, tb_items e uma tabela associativa criada devido às cardinalidades existentes na tabela points e items.
  A vesão mobile foi utilizada alguns recursos que forneceram funcionalidades do mapa, para tal foi usada uma API do leaflet para react-native, que possibilitou a implementação do mapa com visualização de pontos em formato de imagem ilustrativa personalizada, fazendo com que o usuário veja qual é o ponto mais próximo da sua região sem complicações. 
