# Backend codo a codo 2024 Grupo 1
-  Sebastain G. Gil
-  Facundo Tognola
-  Esmir Cáceres
-  Tomas Ferrari

Backend para sitio web hosteado en: https://sgninja.github.io/JS_G1/

Endpoints:
 - /api/propiedades [GET / POST]
 - /api/alquiler [GET / POST]
 - /api/venta [GET / POST]
 - /api/propietarios [GET / POST]
 - /api/ubicaciones [GET / POST]
 - /executeQuery [ POST ] (para ejecutar comandos SQL y poder modificar tablas si se desea)


# Tablas
### - Alquiler -> Propiedades en alquiler
### - Venta -> Propiedades en venta
### - Propiedades -> suscriptos a la newsletter
### - Propietarios -> Propietarios
### - Ubicaciones -> Ubicacion de las propiedades


- Filtros en las propiedades
- documentacion de la api
- orden de codigo
- joins de tablas
- ?

Tabla: Propiedades
| Field         | Tipo   |
|---------------|--------|
| id            | Int    |
| foto1         | String | varchar(255)
| foto2         | String | varchar(255)
| foto3         | String | varchar(255)
| titulo        | String | varchar(255)
| fotoAlt       | String | varchar(255)
| descripcion   | String | text
| habitaciones  | Int    |
| tipo          | String | varchar(255)
| metros        | Int    | decimal(10,2)
| precio        | Int    | decimal(10,2)
| operacion     | String | varchar(255)
| ubicacion_id  | Int    |
| propietario_id| Int    |


Tabla: Alquiler
| Field        | Tipo   |
|--------------|--------|
| id           | Int    |
| propiedad_id | Int    |


Tabla: Venta
| Field        | Tipo   |
|--------------|--------|
| id           | Int    |
| propiedad_id | Int    |


Tabla: Propietarios
| Field    | Tipo   |
|----------|--------|
| id       | Int    |
| nombre   | String | varchar(255)
| apellido | String | varchar(255)
| correo   | String | varchar(255)
| telefono | Int    | varchar(50)


Tabla: Ubicaciones
| Field  | Tipo   |
|--------|--------|
| id     | Int    |
| nombre | String | varchar(255)
