const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors(corsOptions));
app.use(bodyParser.json());

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});


const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017/gudjob';

// Database Name
const dbName = 'gudjob';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function (err) {
  assert.equal(null, err);
  const db = client.db(dbName);
  console.log("Connected successfully to server" + db);
});

app.route('/api/users').get((req, res) => {
  const collection = db.collection('user');
  // Find some documents
  collection.find().toArray(function (err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


