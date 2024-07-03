# Backend codo a codo 2024 Grupo 1
-  Facundo Tognola
-  Esmir Cáceres
-  Tomás Ferrari
-  Sebastián G. Gil

Backend para sitio web hosteado en: https://sgninja.github.io/JS_G1/

# API de Gestión Inmobiliaria

Esta API proporciona endpoints para gestionar propiedades inmobiliarias, incluyendo información sobre alquileres, ventas, propietarios y ubicaciones.

## Tabla de Contenidos

- [Instalación](#instalación)
- [Uso](#uso)
- [Endpoints](#endpoints)
  - [Propiedades](#propiedades)
  - [Alquiler](#alquiler)
  - [Venta](#venta)
  - [Propietarios](#propietarios)
  - [Ubicaciones](#ubicaciones)
  - [Ejecutar Consulta SQL](#ejecutar-consulta-sql)
- [Estructura de Datos](#estructura-de-datos)
- [Tablas de la Base de Datos](#tablas-de-la-base-de-datos)

## Instalación

```bash
git clone https://github.com/tomyferra/codoACodoBackend.git
cd codoACodoBackend
npm install
```

## Uso

Para iniciar el servidor:

```bash
npm start
```

El servidor se iniciará en `http://localhost:3000` (o el puerto que se haya configurado).

## Endpoints

### 1. Obtener Todas las Propiedades

- **URL**: `/api/propiedades`
- **Método**: GET
- **Descripción**: Recupera todas las propiedades de la base de datos.
- **Respuesta**: 
  - Código de estado: 200 OK
  - Cuerpo: Array de objetos de propiedad

### 2. Obtener Propiedades en Alquiler

- **URL**: `/api/alquiler`
- **Método**: GET
- **Descripción**: Recupera todas las propiedades en alquiler, realizando un join con la tabla Propiedades.
- **Respuesta**: 
  - Código de estado: 200 OK
  - Cuerpo: Array de objetos de propiedad en alquiler

### 3. Obtener Propiedades en Venta

- **URL**: `/api/venta`
- **Método**: GET
- **Descripción**: Recupera todas las propiedades en venta, realizando un join con la tabla Propiedades.
- **Respuesta**: 
  - Código de estado: 200 OK
  - Cuerpo: Array de objetos de propiedad en venta

### 4. Obtener Propietarios

- **URL**: `/api/propietarios`
- **Método**: GET
- **Descripción**: Recupera todos los propietarios de la base de datos.
- **Respuesta**: 
  - Código de estado: 200 OK
  - Cuerpo: Array de objetos de propietario

### 5. Obtener Ubicaciones

- **URL**: `/api/ubicaciones`
- **Método**: GET
- **Descripción**: Recupera todas las ubicaciones de la base de datos.
- **Respuesta**: 
  - Código de estado: 200 OK
  - Cuerpo: Array de objetos de ubicación

### 6. Crear Propiedad

- **URL**: `/api/propiedades`
- **Método**: POST
- **Descripción**: Crea una nueva propiedad en la base de datos.
- **Cuerpo de la Solicitud**:
  ```json
  {
    "foto1": "string",
    "foto2": "string",
    "foto3": "string",
    "titulo": "string",
    "fotoAlt": "string",
    "descripcion": "string",
    "habitaciones": "number",
    "tipo": "string",
    "metros": "number",
    "precio": "number",
    "operacion": "string",
    "ubicacion_id": "number",
    "propietario_id": "number"
  }
  ```
- **Respuesta**: 
  - Código de estado: 201 Created
  - Cuerpo: `{ "message": "Propiedad inserted successfully" }`

### 7. Agregar Propiedad en Alquiler

- **URL**: `/api/alquiler`
- **Método**: POST
- **Descripción**: Agrega una propiedad existente a la lista de alquiler.
- **Cuerpo de la Solicitud**:
  ```json
  {
    "propiedad_id": "number"
  }
  ```
- **Respuesta**: 
  - Código de estado: 201 Created
  - Cuerpo: `{ "message": "Propiedad inserted successfully" }`
- **Errores**:
  - 409 Conflict: Si la propiedad ya existe en alquiler o no existe en la tabla Propiedades

### 8. Agregar Propiedad en Venta

- **URL**: `/api/venta`
- **Método**: POST
- **Descripción**: Agrega una propiedad existente a la lista de venta.
- **Cuerpo de la Solicitud**:
  ```json
  {
    "propiedad_id": "number"
  }
  ```
- **Respuesta**: 
  - Código de estado: 201 Created
  - Cuerpo: `{ "message": "Propiedad inserted successfully" }`
- **Errores**:
  - 409 Conflict: Si la propiedad ya existe en venta o no existe en la tabla Propiedades

### 9. Crear Propietario

- **URL**: `/api/propietarios`
- **Método**: POST
- **Descripción**: Crea un nuevo propietario en la base de datos.
- **Cuerpo de la Solicitud**:
  ```json
  {
    "nombre": "string",
    "apellido": "string",
    "correo": "string",
    "telefono": "string"
  }
  ```
- **Respuesta**: 
  - Código de estado: 201 Created
  - Cuerpo: `{ "message": "Propietario inserted successfully" }`

### 10. Crear Ubicación

- **URL**: `/api/ubicaciones`
- **Método**: POST
- **Descripción**: Crea una nueva ubicación en la base de datos.
- **Cuerpo de la Solicitud**:
  ```json
  {
    "nombre": "string"
  }
  ```
- **Respuesta**: 
  - Código de estado: 201 Created
  - Cuerpo: `{ "message": "Ubicacion inserted successfully" }`

### 11. Eliminar Propiedad de Alquiler

- **URL**: `/api/alquiler/borrar/:id`
- **Método**: DELETE
- **Descripción**: Elimina una propiedad de la lista de alquiler.
- **Parámetros**: 
  - `id` (parámetro de ruta): El ID de la propiedad a eliminar de alquiler
- **Respuesta**: 
  - Código de estado: 200 OK
  - Cuerpo: `{ "message": "Id successfully deleted" }`

### 12. Eliminar Propiedad de Venta

- **URL**: `/api/venta/borrar/:id`
- **Método**: DELETE
- **Descripción**: Elimina una propiedad de la lista de venta.
- **Parámetros**: 
  - `id` (parámetro de ruta): El ID de la propiedad a eliminar de venta
- **Respuesta**: 
  - Código de estado: 200 OK
  - Cuerpo: `{ "message": "Id successfully deleted" }`

### 13. Actualizar Propiedad

- **URL**: `/api/propiedades/:id`
- **Método**: PUT
- **Descripción**: Actualiza una propiedad existente en la base de datos.
- **Parámetros**: 
  - `id` (parámetro de ruta): El ID de la propiedad a actualizar
- **Cuerpo de la Solicitud**: Todos los campos de la propiedad
- **Respuesta**: 
  - Código de estado: 200 OK
  - Cuerpo: `{ "message": "Propiedad updated successfully" }`

### 14. Actualizar Propietario

- **URL**: `/api/propietarios/:id`
- **Método**: PUT
- **Descripción**: Actualiza un propietario existente en la base de datos.
- **Parámetros**: 
  - `id` (parámetro de ruta): El ID del propietario a actualizar
- **Cuerpo de la Solicitud**: Todos los campos del propietario
- **Respuesta**: 
  - Código de estado: 200 OK
  - Cuerpo: `{ "message": "Propietario updated successfully" }`

### 15. Actualizar Parcialmente Propiedad

- **URL**: `/api/propiedades/:id`
- **Método**: PATCH
- **Descripción**: Actualiza parcialmente una propiedad existente.
- **Parámetros**: 
  - `id` (parámetro de ruta): El ID de la propiedad a actualizar
- **Cuerpo de la Solicitud**: Campos a actualizar de la propiedad
- **Respuesta**: 
  - Código de estado: 200 OK
  - Cuerpo: `{ "message": "Propiedad updated successfully" }`

### 16. Ejecutar Consulta SQL (Desarrollo)

- **URL**: `/executeQuery`
- **Método**: POST
- **Descripción**: Ejecuta una consulta SQL predefinida (actualmente describe la tabla Propiedades).
- **Respuesta**: 
  - Código de estado: 200 OK
  - Cuerpo: `{ "message": "query executed successfully" }`

## Notas Adicionales

- La API utiliza una base de datos MySQL.
- Se implementa CORS para permitir solicitudes desde cualquier origen.
- Los errores se manejan devolviendo un código de estado 500 en caso de fallos en la base de datos.
- La API está configurada para ejecutarse en el puerto 3000.

## Estructura de Datos

### Propiedad
```json
{
  "id": "Integer",
  "foto1": "String",
  "foto2": "String",
  "foto3": "String",
  "titulo": "String",
  "fotoAlt": "String",
  "descripcion": "String",
  "habitaciones": "Integer",
  "tipo": "String",
  "metros": "Integer",
  "precio": "Integer",
  "operacion": "String",
  "ubicacion_id": "Integer",
  "propietario_id": "Integer"
}
```

### Alquiler/Venta
```json
{
  "id": "Integer",
  "propiedad_id": "Integer"
}
```

### Propietario
```json
{
  "id": "Integer",
  "nombre": "String",
  "apellido": "String",
  "correo": "String",
  "telefono": "Integer"
}
```

### Ubicación
```json
{
  "id": "Integer",
  "nombre": "String"
}
```

## Tablas de la Base de Datos

### Alquiler
Propiedades en alquiler

| Field        | Tipo |
|--------------|------|
| id           | Int  |
| propiedad_id | Int  |

### Venta
Propiedades en venta

| Field        | Tipo |
|--------------|------|
| id           | Int  |
| propiedad_id | Int  |

### Propiedades
Suscriptos a la newsletter

| Field          | Tipo            |
|----------------|-----------------|
| id             | Int             |
| foto1          | String (varchar(255)) |
| foto2          | String (varchar(255)) |
| foto3          | String (varchar(255)) |
| titulo         | String (varchar(255)) |
| fotoAlt        | String (varchar(255)) |
| descripcion    | String (text)   |
| habitaciones   | Int             |
| tipo           | String (varchar(255)) |
| metros         | Int (decimal(10,2)) |
| precio         | Int (decimal(10,2)) |
| operacion      | String (varchar(255)) |
| ubicacion_id   | Int             |
| propietario_id | Int             |

### Propietarios
Propietarios

| Field    | Tipo            |
|----------|-----------------|
| id       | Int             |
| nombre   | String (varchar(255)) |
| apellido | String (varchar(255)) |
| correo   | String (varchar(255)) |
| telefono | Int (varchar(50)) |

### Ubicaciones
Ubicación de las propiedades

| Field  | Tipo            |
|--------|-----------------|
| id     | Int             |
| nombre | String (varchar(255)) |

**Nota**: Esta API está en desarrollo. Se planea implementar filtros para las propiedades y mejorar la estructura de los datos con joins de tablas. La documentación y el código pueden estar sujetos a cambios.