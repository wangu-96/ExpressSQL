import express from 'express';
import mysql from 'mysql';


const app =express();
const port=process.env.PORT;


const db = mysql.createPool({
    host: 'localhost', 
    user: 'root', 
    password: '', 
    database: 'laragigs' 
  });
  
  
  app.use(express.json());
  
  
  app.get('/data', (req, res) => {
    const query = 'SELECT * FROM listings'; 
  
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error executing query', err);
        res.status(500).send('Server error');
        return;
      }
      res.json(results);
    });
  });
  
  // Start the server
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });