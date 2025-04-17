const express = require('express');
const app = express();
const path = require('path');
const conexion = require('./database/db'); 
const router = require('./router'); 

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

app.use('/', router); 

app.listen(5000, () => {
  console.log("Servidor en ejecucion en http://localhost:5000");
});
