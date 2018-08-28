const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');
var schedule = require('node-schedule');
var request = require('request');

app.use(cors(corsOptions));
app.use(bodyParser.json());

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sitepoint'
});

con.connect((err) => {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log('We are connected');
});

app.route('/api/schedule').get((req, res) => {
  const date = new Date(2018, 07, 27, 11, 28, 00);

  var j = schedule.scheduleJob(date, function () {
    const employee = {
      name: 'helu luhe helu',
      location: 'Viet Nam'
    };
    con.query('INSERT INTO employees SET ?', employee, (err, res) => {
      if (err) throw err;
      console.log('Last insert ID:', res.name);
    });

    j.cancel();
    console.log(res);
  });

})

app.route('/api/cats').get((req, res) => {
  const test = con.query('SELECT * FROM employees', (err, rows) => {
    if (err) throw err;
    res.send({
      rows
    });
    console.log('Data received from Db:\n');
    rows.forEach((row) => {
      console.log(`${row.name} is in ${row.location}`);
    });
  });
});

app.route('/api/cats/:name').get((req, res) => {
  const requestedCatName = req.params['name'];
  res.send({
    name: requestedCatName
  });
});

app.route('/api/cats').post((req, res) => {
  const employee = {
    name: 'phu heo',
    location: 'Viet Nam'
  };
  con.query('INSERT INTO employees SET ?', employee, (err, res) => {
    if (err) throw err;
    console.log('Last insert ID:', res.name);
  });
  res.send(201, res.body);
});

app.route('/api/cats/:name').put((req, res) => {
  con.query(
    'UPDATE employees SET name = ? Where ID = 1', ['ca rot', '1'],
    (err, result) => {
      if (err) throw err;
      console.log(result);
      console.log(`Changed ${result.changedRows} row(s)`);
    }
  );
  res.send(200, req.body);
});

app.route('/api/cats/:name').delete((req, res) => {
  res.sendStatus(204);
});

app.route('/post').post((req, res) => {
  console.log(res.body);
  res.send(201);
})

var job = function (date, message, access_token) {
  var d = date;
  var m = message;
  var a = access_token;
  return function (req, res, next) {
    var j = schedule.scheduleJob(d, function () {
      var options = {
        method: 'post',
        url: 'https://graph.facebook.com/v3.1/me/photos',
        qs: {
          access_token: a,
          message: m,
          url: 'https://images-na.ssl-images-amazon.com/images/I/81MQcUJi-UL._SY355_.jpg'
        }
      };

      request(options, function (error, response, body) {
        if (error) throw new Error(error);
        console.log(body);
      });
    });

    next();
  }
}

app.route('/api/post').get((req, res) => {
  console.log('here');
  job(new Date(2018, 07, 28, 11, 16, 00), 'hello159743', 'EAAFiVT3Gv5EBACsOzEGev17QNqibnXws2R1RpiA3wy7UrAGP1QAUc1k1IRlZCmAK3ttISFQrYHO3ICLrPtZCbl1iAoOU1zgIBPBF0zzFfcItdqOTAGimvZB8EaBJf2K2oYy9l2ZBEjMmpRTnybPSmQ6DHEtPAuvZBQoI6VGTDPscprMLPC5zxbo06xOpxSUEZD');
});


app.listen(3000, () => console.log('Example app listening on port 3000!'));
