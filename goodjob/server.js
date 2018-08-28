const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');

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
  console.log('Connection established');
});

app.get('/', (req, res) => res.send('Hello World!'));

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
  // res.send(201, req.body);
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

app.listen(3000, () => console.log('Example app listening on port 3000!'));



// // insert to 
// const employee = {
//   name: 'Winnie',
//   location: 'Australia'
// };
// con.query('INSERT INTO employees SET ?', employee, (err, res) => {
//   if (err) throw err;

//   console.log('Last insert ID:', res.insertId);
// });

// // update 

// function update(name, id) {
//   con.query(
//     'UPDATE employees SET location = ? Where ID = ?', [name, id],
//     (err, result) => {
//       if (err) throw err;

//       console.log(`Changed ${result.changedRows} row(s)`);
//     }
//   );
// }

// update('viet nam ne chu', 3);

// select all


// con.end((err) => {
//   // The connection is terminated gracefully
//   // Ensures all previously enqueued queries are still
//   // before sending a COM_QUIT packet to the MySQL server.
// });
