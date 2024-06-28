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

### Propiedades

- **URL**: `/api/propiedades`
- **Métodos**: GET, POST
- **Descripción**: Obtener todas las propiedades o crear una nueva.

#### GET
Retorna todas las propiedades.

#### POST
Crea una nueva propiedad. Enviar los datos en el cuerpo de la solicitud.

### Alquiler

- **URL**: `/api/alquiler`
- **Métodos**: GET, POST
- **Descripción**: Obtener todas las propiedades en alquiler o agregar una nueva.

#### GET
Retorna todas las propiedades en alquiler.

#### POST
Agrega una nueva propiedad en alquiler. Enviar los datos en el cuerpo de la solicitud.

### Venta

- **URL**: `/api/venta`
- **Métodos**: GET, POST
- **Descripción**: Obtener todas las propiedades en venta o agregar una nueva.

#### GET
Retorna todas las propiedades en venta.

#### POST
Agrega una nueva propiedad en venta. Enviar los datos en el cuerpo de la solicitud.

### Propietarios

- **URL**: `/api/propietarios`
- **Métodos**: GET, POST
- **Descripción**: Obtener todos los propietarios o agregar uno nuevo.

#### GET
Retorna todos los propietarios.

#### POST
Agrega un nuevo propietario. Enviar los datos en el cuerpo de la solicitud.

### Ubicaciones

- **URL**: `/api/ubicaciones`
- **Métodos**: GET, POST
- **Descripción**: Obtener todas las ubicaciones o agregar una nueva.

#### GET
Retorna todas las ubicaciones.

#### POST
Agrega una nueva ubicación. Enviar los datos en el cuerpo de la solicitud.

### Ejecutar Consulta SQL

- **URL**: `/executeQuery`
- **Método**: POST
- **Descripción**: Ejecuta comandos SQL para modificar tablas.

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