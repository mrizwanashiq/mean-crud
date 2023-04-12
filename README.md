# MEAN stack with Angular CRUD example

In this tutorial, I will show you how to build a full-stack (MEAN stack) Angular + Node.js example with a CRUD Application. The back-end server uses Node.js + Express for REST APIs and connects with MongoDB database, front-end side is an Angular App with HTTPClient.

We will build a full-stack Tutorial Application in that:

- Tutorial has id, title, description, published status.
- User can create, retrieve, update, delete Tutorials.
- There is a search box for finding Tutorials by title.

## Project setup

### Node.js Server

```
cd node-js-server
node server.js
```

### Angular Client

```
cd angular-client
```

Run `ng serve --port 8081` for a dev server. Navigate to `http://localhost:8081/`.
