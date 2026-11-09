CREATE TABLE usuarios (
	id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    nombre VARCHAR(30) NOT NULL,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

/*Escribir el codigo CREATE de la tabla de Espacios_de_Trabajo*/

CREATE TABLE espacios_de_trabajo (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(50) NOT NULL,
    descripcion TEXT(1000),
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)