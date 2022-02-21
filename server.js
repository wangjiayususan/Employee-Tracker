const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const mysql = require('mysql2');

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


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



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  