const express = require('express');
const mysql2 = require('mysql2');
require ('dotenv').config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3030;
const cors = require('cors');
app.use(cors());

const dbConnection = mysql2.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.listen(PORT, (req, res) => {
  console.log(`Server running on port ${PORT}`);
});

app.get('/tools', (req, res) => {
  dbConnection.query('SELECT * FROM tools', (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result)
    }
  });
});

app.post('/tools', (req, res) => {
  const insertQuery = 'INSERT INTO tools SET ?';
  dbConnection.query(insertQuery, req.body, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send('Tool added to database');
    }
  });
});

app.put('/tools', (req, res) => {
  const updateQuery = 'UPDATE tools SET name = ?, brand = ?, serial_number = ?, model_number = ?, WHERE id = ?';
  dbConnection.query(updateQuery, [req.body.name, req.body.brand, req.body.serial_number, req.body.model_number, req.body.id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
});

app.delete('/tools/:id', (req, res) => {
  dbConnection.query('DELETE FROM tools WHERE id = ?', req.params.id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});