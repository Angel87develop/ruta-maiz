# 🚀 Instrucciones para Configurar el Backend

## Paso 1: Configurar la Base de Datos MySQL

1. **Inicia XAMPP**:
   - Abre XAMPP Control Panel
   - Inicia **Apache** y **MySQL**

2. **Crea la base de datos**:
   - Abre phpMyAdmin (http://localhost/phpmyadmin)
   - Selecciona la pestaña "SQL"
   - Copia y pega el contenido completo del archivo `backend/database.sql`
   - Haz clic en "Ejecutar"
   
   **O puedes ejecutar el archivo directamente**:
   - Ve a la pestaña "Importar"
   - Selecciona el archivo `backend/database.sql`
   - Haz clic en "Ejecutar"

3. **Verifica la creación**:
   - En el panel izquierdo, deberías ver la base de datos `ruta_maiz`
   - Al expandirla, deberías ver la tabla `reservas`

## Paso 2: Instalar Dependencias del Backend

1. Abre una terminal en la raíz del proyecto

2. Navega a la carpeta backend:
```bash
cd backend
```

3. Instala las dependencias:
```bash
npm install
```

Esto instalará:
- express
- mysql2
- cors
- dotenv
- nodemon (para desarrollo)

## Paso 3: Configurar la Conexión (si es necesario)

Si tu XAMPP no tiene la configuración por defecto:
- Abre el archivo `backend/config/database.js`
- Modifica la contraseña si es necesario:
```javascript
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'tu_contraseña_aqui', // Cambia esto si tienes contraseña
  database: 'ruta_maiz',
  // ...
};
```

## Paso 4: Iniciar el Servidor Backend

1. En la terminal (estando en la carpeta `backend`), ejecuta:
```bash
npm start
```

O para modo desarrollo (con recarga automática):
```bash
npm run dev
```

2. Deberías ver:
```
🚀 Servidor corriendo en http://localhost:3001
✅ Conexión a la base de datos exitosa
```

## Paso 5: Iniciar el Frontend

En una **nueva terminal**, navega a la raíz del proyecto y ejecuta:
```bash
npm run dev
```

## 🎉 ¡Todo Listo!

Ahora puedes:
- Visitar el frontend en http://localhost:5173 (o el puerto que indique)
- Llenar el formulario de reservas en la página de contacto
- Los datos se guardarán en la base de datos MySQL

## Endpoints Disponibles

- `GET http://localhost:3001/api/test` - Prueba del servidor
- `POST http://localhost:3001/api/reservas` - Crear nueva reserva
- `GET http://localhost:3001/api/reservas` - Ver todas las reservas
- `GET http://localhost:3001/api/reservas/:id` - Ver una reserva específica

## 📊 Ver las Reservas en phpMyAdmin

1. Ve a http://localhost/phpmyadmin
2. Selecciona la base de datos `ruta_maiz`
3. Haz clic en la tabla `reservas`
4. Verás todas las reservas realizadas

## Estructura de la Tabla

```sql
CREATE TABLE reservas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_completo VARCHAR(100) NOT NULL,
    correo_electronico VARCHAR(100) NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    cantidad_entradas INT NOT NULL,
    precio_unitario DECIMAL(10, 2) NOT NULL DEFAULT 180.00,
    precio_total DECIMAL(10, 2) NOT NULL,
    fecha_reserva TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    estado ENUM('pendiente', 'confirmada', 'cancelada') DEFAULT 'pendiente'
);
```

## Solución de Problemas

### Error: "Cannot connect to database"
- Verifica que MySQL esté corriendo en XAMPP
- Verifica que la contraseña sea correcta en `backend/config/database.js`

### Error: "Database not found"
- Ejecuta el archivo SQL nuevamente en phpMyAdmin

### Error: "Address already in use"
- El puerto 3001 está ocupado
- Cambia el puerto en `backend/.env` o `backend/server.js`

### No se puede conectar al servidor desde el frontend
- Verifica que el backend esté corriendo en http://localhost:3001
- Verifica que la URL en `Contact.jsx` sea correcta

