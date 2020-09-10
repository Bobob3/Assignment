# Assignment Documentation

## Git rep

Git hub was used to provide a backup as well as a proof of process

## Data structures

- Object
  Used in User information as a way of providing a specific design of the user
- Array
  Used for storing messages that then gets stored in session storage

## Angular Architecture

* Components
  - Account 
    That is used to change the username of current logged in user
  - Chat
    That is used to display the main chat room
  - Profile
    That is used to display the public information of a user
* Services
  -Socket
    Used to recieve and send chat messages to the server and client

## Node server Architecture

* Modules
  - Express
  - Cors
  - Path
  - BodyParser
  - Http
  - Sockets
* Files
  - Listen.js
  - Socket.js
  - api-login.js
*Global Variables
  - Port
  - httpOptions

## Responsibilities
The client deals with the ability to go between pages as well as takes information from the server and acts on it
The server recieves requests such as messages in the chat and send them back to the client with information gathered from the server.
