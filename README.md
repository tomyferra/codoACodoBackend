# Backend codo a codo 2024 Grupo 1
-  Sebastain G. Gil
-  Facundo Tognola
-  Esmir
-  Tomas Ferrari

Backend para sitio web hosteado en: https://sgninja.github.io/JS_G1/

Endpoints:
 - /api/propiedades/alquiler
 - /api/propiedades/venta
 - /api/subscripciones



 _______
# Tablas
### - PropiedadesAlquiler -> Propiedades en alquiler
### - PropiedadesVenta -> Propiedades en venta
### - Suscriptos -> suscriptos a la newsletter



CREATE TABLE Propiedades (
    id INT AUTO_INCREMENT PRIMARY KEY,
    foto1 VARCHAR(255),
    foto2 VARCHAR(255),
    foto3 VARCHAR(255),
    titulo VARCHAR(255),
    fotoAlt VARCHAR(255),
    descripcion TEXT,
    habitaciones INT,
    tipo VARCHAR(100),
    metros DECIMAL(10, 2),
    precio DECIMAL(10, 2)
);



[
  [
    { Tables_in_bavfp3t4kjv6sbwd748s: 'PropiedadesAlquiler' },
    { Tables_in_bavfp3t4kjv6sbwd748s: 'PropiedadesVenta' },
    { Tables_in_bavfp3t4kjv6sbwd748s: 'Suscriptos' }
  ],
  [ `Tables_in_bavfp3t4kjv6sbwd748s` VARCHAR(64) NOT NULL ]
]