# Backend codo a codo 2024 Grupo 1
-  Sebastain G. Gil
-  Facundo Tognola
-  Esmir
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
| foto1         | String |
| foto2         | String |
| foto3         | String |
| titulo        | String |
| fotoAlt       | String |
| descripcion   | String |
| habitaciones  | Int    |
| tipo          | String |
| metros        | Int    |
| precio        | Int    |
| operacion     | String |
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
| nombre   | String |
| apellido | String |
| correo   | String |
| telefono | Int    |


Tabla: Ubicaciones
| Field  | Tipo   |
|--------|--------|
| id     | Int    |
| nombre | String |
