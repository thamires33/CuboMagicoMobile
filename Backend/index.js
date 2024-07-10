const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8081;

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }
  console.log('Connected as id ' + db.threadId);
});

app.use(cors());
app.use(bodyParser.json());

// Middleware para autenticação JWT
const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

app.post('/login', (req, res) => {
  const { login, senha } = req.body;

  db.query('SELECT * FROM user WHERE login = ?', [login], async (error, results) => {
    if (error) {
      res.status(500).json({ error });
    } else if (results.length > 0) {
      const user = results[0];
      const match = await bcrypt.compare(senha, user.senha); // Aqui deveria ser 'password' em vez de 'senha'
      if (match) {
        const token = jwt.sign({ login: user.login }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  });
});

app.post('/register', async (req, res) => {
  const { login, senha } = req.body;
  const hashedSenha = await bcrypt.hash(senha, 10);

  db.query('INSERT INTO user (login, senha) VALUES (?, ?)', [login, hashedSenha], (error, results) => {
    if (error) {
      res.status(500).json({ error });
    } else {
      res.status(201).json({ message: 'User registered successfully' });
    }
  });
});

app.post('/lessons', authenticateJWT, (req, res) => {
  const { lesson } = req.body;

  db.query('INSERT INTO lessons SET ?', { lesson }, (error, results) => {
    if (error) {
      res.status(500).json({ error });
    } else {
      res.status(201).json({ id: results.insertId });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
