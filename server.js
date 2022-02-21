const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const mysql = require('mysql2');
const apiRoutes = require('./routes');
const {initializeApp} = require('./lib/app');


// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use apiRoutes
app.use('/api', apiRoutes);

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'AdamlvSusan9798!',
      database: 'election'
    },
    console.log('Connected to the election database.')
  );

  module.exports = db;
  
  db.connect(err => {
    if (err) throw err;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

initializeApp();