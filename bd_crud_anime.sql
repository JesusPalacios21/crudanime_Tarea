CREATE DATABASE crudanime;
USE crudanime;

CREATE TABLE animes(
	id   			INT AUTO_INCREMENT PRIMARY KEY,
    titulo 			VARCHAR(50),
    genero			VARCHAR(100),
    episodios		INT NOT NULL,
    creador			VARCHAR(100),
    fecha_estreno	DATE,
    calificacion	TINYINT
    
)ENGINE = INNODB;

INSERT INTO animes (titulo, genero, episodios, creador, fecha_estreno, calificacion) VALUES 
	('Charlotte', 'Comedia dramática, sobrenatural', 13, 'Jun Maeda', '2015-07-04', 10);    
