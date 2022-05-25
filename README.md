## What is REST?

Architectural style providing standars between computer systems on the web facilitating communication with each other.

REpresentational State Transfer

#### Separation client/ server:

The implementation of the client and the implementation of the server can be done independently without each knowing about the other. Each side can be changed independently without affecting the other side.

Since they know the format of exchange they can be kepy modular and separate. Fleixibilty and scalability.

#### Statelessness:

The server does not need to know anything about what state the client is in and vice versa. They can understand any message receivedindepentently of previous messages.
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
