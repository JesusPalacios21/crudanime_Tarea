const express = require('express');
const router = express.Router();
const db = require('./database/db');

//1
// Ruta para mostrar la lista de animes
router.get('/', (req, res) => {
    db.query('SELECT * FROM animes', (err, resultado) => {
        if (err) {
            return res.send('UPS!, ha ocurrido un error');
        }
        res.render('index', { animes: resultado });
    });
});


//2
// Ruta para mostrar el formulario de creación de un anime
router.get('/create', (req, res) => {
    res.render('create'); 
});

router.post('/create', (req, res) => {
    const { titulo, genero, episodios, creador, fecha_estreno, calificacion } = req.body;

    // Crear la consulta SQL para insertar el nuevo anime en la base de datos
    const query = `INSERT INTO animes (titulo, genero, episodios, creador, fecha_estreno, calificacion) 
                   VALUES ('${titulo}', '${genero}', ${episodios}, '${creador}', '${fecha_estreno}', ${calificacion})`;

    db.query(query, (err, result) => {
        if (err) {
            console.error(err);
            return res.send('Error al agregar el anime');
        }
        res.redirect('/');
    });
});

module.exports = router;
