
# Run Project

Install dependencies with npm.
```
npm install
```
Run server. (Runs in port 3000 (.env) or 3001)

```
npm start
```

## The task

Create a server with express

Level 1:

-1 GET petition with and endpoint with your name and the url from where the petition is being made.

-2 POST petition with endpoint /upload an archive. Error message if extension faulty.

Level 2:

-1 POST petition Endpoint /time that receives a JSON with the current hour and date. Include a middleware that adds Cache-control, no cache. Use CORS in the answers, with middleware or express.

-2 Add a middleware to the last endpoint that returns an HTTP Status 401 - unauthorized if the header of the petition doesn't return basic authentication.(User and password)

Level 3:

Create a GET petition at the endpoint /pokemon/{id} 
that receives a pokemon id and searches through the pokeapi and returns its name, heigth and weight.

## default project folder structure
https://yudhajitadhikary.medium.com/how-to-create-routes-using-express-and-postman-5f200b3b85b6

controllers: controller CRUD functions

routes: endpoints

data

app.js: responsible for set up of express

config.env: all the constant values


## What is REST?

Architectural style of communication standards between computer systems on the web.

REpresentational State Transfer

#### Separation client/ server:

Each side can be changed independently without affecting the other side.

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

https://developer.mozilla.org/en-US/docs/Web/HTTP/Status


sprint4 Omar hints...

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

