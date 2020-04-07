# Buscador de Devs
Projeto no framework React, utilizando **React Native** para plataformas mobile e **ReactJS** com Node.js no backend.

## Detalhes de implementação
A arquitetura do projeto com a divisão backend/frontend exige a compreensão do padrão REST e a implementação de APIs RESTful em JavaScript.

### Backend
Um projeto foi inicializado com o seguinte comando:

```yarn create react-app backend```

A construção da API para operações CRUD valeu-se do desenvolvimento **ReactJS** em Node.js. Com a instalação no ```nodemon```, a aplicação é inicializada com o seguinte comando:

```yarn nodemon start src/index.js```

Métodos HTTP: **GET**, **POST**, **PUT**, **DELETE**.

#### Tipos de parâmetros
* Query Params: request.query (filtros, ordenação, paginação, etc.)
* Route Params: request.params (identifica um recurso na alteração ou remoção)
* Body: request.body -- pode ter vários formatos (JSON, XML, etc.)

#### Banco de dados
Foi utilizado o MongoDB Atlas em conjunto com a biblioteca Mongoose.

#### APIs externas
A biblioteca Axios é utilizada para o consumo de APIs externas, como a do GitHub.

#### Funções do controller
* index
* show
* store
* update
* destroy

### Frontend
Foi utilizado o framework **ReactJS** para a construção de uma interface web.

#### Conceitos de ReactJS

##### Componente
Um componente é um bloco isolado de HTML, CSS e JS, o qual não interfere no resto da aplicação. O componente possui:

* *Propriedade*: informações que um componente pai passa para um componente filho.

* *Estado*: informações mantidas pelo componente, baseando-se no conceito de imutabilidade.

#### Web
Um projeto React para a web foi inicializado com o seguinte comando do gerenciador de pacotes **Yarn**:

```yarn create react-app web```

Foram excluídos os seguintes arquivos de ```web/src```:
* ```App.test.js```
* ```index.css```
* ```logo.svg```
* ```serviceWorker.js```
* ```setupTests.js```

#### Mobile
Para o desenvolvimento de uma aplicação mobile portável em iOS e Android, foi utilizado **React Native** em conjunto com a ferramenta **Expo** para simulação e deploy, que foi instalada no Windows com o seguinte comando:

```yarn global add expo-cli```

Em seguida, o projeto mobile foi inicializado com o comando:

```expo init mobile```

sendo ```mobile``` o nome escolhido para a aplicação.

Foram também instaladas algumas bibliotecas para navegação e gestos nos dispositivos, com os seguintes comandos:

```yarn add react-navigation```

```yarn add @react-native-community/masked-view```

```expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context```

Para a intalação da biblioteca para navegação por pilha, foi utilizado o seguinte comando:

```yarn add react-navigation-stack```

##### Geolocalização com mapa

Para a instalação do mapa, foi utilizado o seguinte comando:

```expo install react-native-maps```

Para a instalação do driver de geolocalização mobile, foi utilizado o seguinte comando:

```expo install expo-location```

##### Visualização de páginas da web

Para a instalação de um visualizador de páginas da web, foi utilizado o seguinte comando:

```expo install react-native-webview```
