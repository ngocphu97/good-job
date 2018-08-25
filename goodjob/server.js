const express = require('express');
const app = express();

const cors = require('cors');

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions));

app.get('/', (req, res) => res.send('Hello World!'));

app.route('/api/cats').get((req, res) => {
  res.send({
    cats: [{
      name: 'lilly'
    }, {
      name: 'lucy'
    }]
  });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
