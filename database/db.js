const mysql = require('mysql');
const conexion = mysql.createConnection({
  host: 'localhost',
  port: 3307,
  user: 'root',
  password: '',
  database: 'crudanime'
});

conexion.connect((error) => {
  if(error){
    console.error(`Error en la conexion: ${error}`);
    return;
  }

  console.log(`Conexión Existosa`);
});

//Exportar
module.exports = conexion;