# Backend Ruta del Maíz

Backend para el sistema de reservas de entradas.

## Requisitos

- Node.js (v16 o superior)
- MySQL (XAMPP)
- npm o yarn

## Instalación

1. Navega a la carpeta `backend`:
```bash
cd backend
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura la base de datos:
   - Abre XAMPP y inicia Apache y MySQL
   - Abre phpMyAdmin (http://localhost/phpmyadmin)
   - Ejecuta el archivo `database.sql` para crear la base de datos y la tabla

4. Configura el archivo `.env` si necesitas cambiar la contraseña de MySQL

## Ejecutar el servidor

```bash
# Modo producción
npm start

# Modo desarrollo (con nodemon)
npm run dev
```

El servidor estará disponible en `http://localhost:3001`

## Endpoints

- `GET /api/test` - Prueba de servidor
- `POST /api/reservas` - Crear una nueva reserva
- `GET /api/reservas` - Obtener todas las reservas
- `GET /api/reservas/:id` - Obtener una reserva por ID
- `PATCH /api/reservas/:id/estado` - Actualizar estado de una reserva

## Estructura de la API

### POST /api/reservas

**Request Body:**
```json
{
  "nombre_completo": "Juan Pérez",
  "correo_electronico": "juan@example.com",
  "telefono": "5551234567",
  "cantidad_entradas": 2
}
```

**Response:**
```json
{
  "success": true,
  "message": "Reserva creada exitosamente",
  "reserva": {
    "id": 1,
    "nombre_completo": "Juan Pérez",
    "correo_electronico": "juan@example.com",
    "telefono": "5551234567",
    "cantidad_entradas": 2,
    "precio_total": 360
  }
}
```

