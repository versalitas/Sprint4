
install 

npm i nodemon --save-dev

run npx nodemon index

## The task

Level 1:

-1 Create a server with express que returns a GET petition with and endpoint with your name and the url from with the petition is being made.

-2 Add an endpoint /upload , upload an archive of the type POST which returns a message if the extension is faulty.

Level 2:

-1 Create and endpoint /time that receives via POST
a JSON with the current hour and date. Include a middleware that adds Cache-control, no cache. Use CORS in the answers, with middleware or express.

-2 Add a middleware to the last endpoint that returns an HTTP Status 401 - unauthorized if the header of the petition doesn't return basic authentication.(User and password)

Level 3:

Create a GET petition at the endpoint  /pokemon/{id} 
that receives a pokemon id and searches through th epokeapi and returns its name, heigth and weight.



## What is REST?

Architectural style providing standars between computer systems on the web facilitating communication with each other.

REpresentational State Transfer

#### Separation client/ server:

The implementation of the client and the implementation of the server can be done independently without each knowing about the other. Each side can be changed independently without affecting the other side.

Since they know the format of exchange they can be kepy modular and separate. Fleixibilty and scalability.

#### Statelessness:

 Client and Server understand any message received indepentently of previous messages and respective state.
#### REST uses Resources 

Resources are the nouns of the Web, they describe any object, document, or thing that you may need to store or send to other services.

#### REST architecture Communication Client / Server

Clients send requests to retrieve or modify resources, and servers send responses to these requests.

##### Requests consists of:
- HTTP verb, which defines what kind of operation to perform
- header, which allows the client to pass along info about the request
- path to a resource
- optional message body containing data

##### HTTP Verbs

**GET** — retrieve a specific resource (by id) or a collection of resources
**POST** — create a new resource
**PUT** — update a specific resource (by id)
**DELETE** — remove a specific resource by id

##### HEADER accept field

Accept field : the type of content that the client is able to receive from the server. Consists of type and subtype separated by a slash. 
**text:** text/html, text/css, text/plain
**image:** image/png, image/jpeg, image/gif
**audio:** audio/wav, audio/mpeg
**video:** video/mp4, video/ogg
**application** application/json, application/pdf, application/xml, application/octet-stream

##### STATUS code 


200 (OK)	Standard response for successful HTTP requests.
201 (CREATED)	Standard response for an HTTP request item successfully created.
204 (NO CONTENT)	Standard response for successful HTTP requests, nothing returned in response body.
400 (BAD REQUEST)	The request cannot be processed: bad request syntax, excessive size, or another client error.
403 (FORBIDDEN)	The client does not have permission to access this resource.
404 (NOT FOUND)	The resource could not be found at this time. It is possible it was deleted, or does not exist yet.
500 (INTERNAL SERVER ERROR)	The generic answer for an unexpected failure if there is no more specific information available.


npm install express --save

npm install body-parser --save

npm install connect-multiparty --save

/////

sprint4
Hints:

the petition has to fetch the url. This can not be introduced as a string in the JSON. http requests url

jason web token
payload = the object stored in the data base with the info user

jwt = payload encripted with (key + user password)

jwt is what is saved in the db

base de dates
sequalize tiene que generar la inicialización de la base de datos: si hay una base drop si no crear

pokemon
const fetch = require('cross-fetch') let response = await 'api del pokemon con id' response.json;

recibir petición de una api, hacer la bonita y volver a subirla.

servidor
separar servidor, que el frontend y el backend comunique

vue o react
vue se añade con script no hace falta instalar, menos farragoso
////
# Node Initial Project

### Project Structure

Main structure of node.js project. Folders / files:

- <b>\_\_tests__</b>. Tests folder. See [Jest Docs](https://jestjs.io/es-ES/docs/configuration) and [Chai Docs](https://www.chaijs.com/)
- <b>app</b>:
    - <b>config</b>
    - <b>controllers</b>
    - <b>crons</b>
    - <b>middleware</b>
    - <b>models</b>
    - <b>routes</b>
    - <b>tmp</b>
    - <b>app.js</b>. Entry point.
- <b>.env</b>. Environment descriptor. See [dotenv doc](https://www.npmjs.com/package/dotenv).
- <b>.eslintrc</b>. Linter JS, static code analyzer. See [EsLint Docs](https://eslint.org/docs/user-guide/configuring/configuration-files).
- <b>.prettierignore</b>. Code formatter. See [Prettier Config](https://prettier.io/docs/en/configuration.html) and [Prettier Ignore](https://prettier.io/docs/en/ignore.html).
- <b>.ecosystem.config.js</b>. Process Manage at runtime. See [PM2 Docs](https://pm2.keymetrics.io/).
- <b>package.json</b>.

### Import project for use with WebStorm

Follow the steps below:
* Clone the project from the Github Platform. Execute:
  ```
  git clone [url project]
  ```
* Open the project downloaded.
![Open Project](img/webstorm_open.png)


### Import project for use with Visual Studio Code

Follow the steps below:
* Clone the project from the Github Platform. Execute:
  ```
  git clone [url project]
  ```
* Open the project downloaded.
  ![Open Project](img/VSC_open.png)


### Utilities

* [Node Developers Guide](https://nodejs.dev/learn)
* **.gitignore file** configuration. See [Official Docs](https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files).
* **Git branches**. See [Official Docs](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)
