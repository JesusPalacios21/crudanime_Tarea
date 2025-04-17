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

//3
// Ruta para mostrar el formulario de edición
router.get('/edit/:id', (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM animes WHERE id = ?', [id], (err, resultado) => {
        if (err) {
            console.error(err);
            return res.send('Error al cargar el anime');
        }
        res.render('edit', { anime: resultado[0] });
    });
});


// Ruta para procesar los cambios del formulario de edición
router.post('/update/:id', (req, res) => {
    const id = req.params.id;
    const { titulo, genero, episodios, creador, fecha_estreno, calificacion } = req.body;

    const query = `UPDATE animes 
                   SET titulo='${titulo}', genero='${genero}', episodios=${episodios},
                       creador='${creador}', fecha_estreno='${fecha_estreno}', calificacion=${calificacion} 
                   WHERE id=${id}`;

    db.query(query, (err, result) => {
        if (err) {
            console.error(err);
            return res.send('Error al actualizar el anime');
        }
        res.redirect('/');
    });
});

//4
// Ruta para eliminar un anime
router.get('/delete/:id', (req, res) => {
    const id = req.params.id;

    db.query('DELETE FROM animes WHERE id = ?', [id], (err, result) => {
        if (err) {
            console.error(err);
            return res.send('Error al eliminar el anime');
        }
        res.redirect('/');
    });
});



module.exports = router;
