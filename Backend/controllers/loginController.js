const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models/db');

const loginController = async (req, res) => {
  const { login, senha } = req.body;

  try {
    const [user] = await db.query('SELECT * FROM user WHERE login = ?', [login]);

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const match = await bcrypt.compare(senha, user.senha);

    if (match) {
      const token = jwt.sign({ login: user.login }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.status(200).json({ token });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = loginController;
