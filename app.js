var feathers = require('feathers');
var bodyParser = require('body-parser');
var db = require('feathers-nedb');

var app = feathers()
    // Configure REST and real-time capabilities
    .configure(feathers.rest())
    .configure(feathers.socketio())
    // REST endpoints can parse JSON
    .use(bodyParser.json())
    // Add a messages API endpoint
    .use('/messages', db('messages'))
    // Host the current folder
    .use('/', feathers.static(__dirname));

app.listen(3030);