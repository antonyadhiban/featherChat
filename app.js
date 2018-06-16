const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');

const memory = require('feathers-memory');

// Creates an Express compatible Feathers application
const app = express(feathers());

    // Configure REST and real-time capabilities
    app.configure(express.rest())
    app.configure(socketio())
    // REST endpoints can parse JSON
    app.use(bodyParser.json())
    // Add a messages API endpoint
    app.use('/messages', db('messages'))
    // Host the current folder
    app.use('/', feathers.static(__dirname));

app.listen(3030);