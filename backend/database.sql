-- Script de creación de base de datos y tabla para Ruta del Maíz
-- Ejecuta este archivo en phpMyAdmin o en la consola de MySQL

-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS ruta_maiz CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Usar la base de datos
USE ruta_maiz;

-- Crear la tabla de reservas
CREATE TABLE IF NOT EXISTS reservas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_completo VARCHAR(100) NOT NULL,
    correo_electronico VARCHAR(100) NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    cantidad_entradas INT NOT NULL,
    precio_unitario DECIMAL(10, 2) NOT NULL DEFAULT 180.00,
    precio_total DECIMAL(10, 2) NOT NULL,
    fecha_reserva TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    estado ENUM('pendiente', 'confirmada', 'cancelada') DEFAULT 'pendiente',
    INDEX idx_correo (correo_electronico),
    INDEX idx_fecha (fecha_reserva)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

