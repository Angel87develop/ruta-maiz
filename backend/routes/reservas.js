import express from 'express';
import pool from '../config/database.js';

const router = express.Router();

// Crear una nueva reserva
router.post('/', async (req, res) => {
  try {
    const { nombre_completo, correo_electronico, telefono, cantidad_entradas } = req.body;

    // Validaciones
    if (!nombre_completo || !correo_electronico || !telefono || !cantidad_entradas) {
      return res.status(400).json({ 
        error: 'Todos los campos son requeridos' 
      });
    }

    if (cantidad_entradas < 1) {
      return res.status(400).json({ 
        error: 'La cantidad de entradas debe ser mayor a 0' 
      });
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo_electronico)) {
      return res.status(400).json({ 
        error: 'El correo electrónico no es válido' 
      });
    }

    const precio_unitario = 180.00;
    const precio_total = cantidad_entradas * precio_unitario;

    // Insertar en la base de datos
    const [result] = await pool.execute(
      `INSERT INTO reservas 
       (nombre_completo, correo_electronico, telefono, cantidad_entradas, precio_unitario, precio_total) 
       VALUES (?, ?, ?, ?, ?, ?)`,
      [nombre_completo, correo_electronico, telefono, cantidad_entradas, precio_unitario, precio_total]
    );

    res.status(201).json({
      success: true,
      message: 'Reserva creada exitosamente',
      reserva: {
        id: result.insertId,
        nombre_completo,
        correo_electronico,
        telefono,
        cantidad_entradas,
        precio_total
      }
    });

  } catch (error) {
    console.error('Error al crear reserva:', error);
    res.status(500).json({ 
      error: 'Error al procesar la reserva',
      message: error.message 
    });
  }
});

// Obtener todas las reservas
router.get('/', async (req, res) => {
  try {
    const [reservas] = await pool.execute(
      `SELECT * FROM reservas 
       ORDER BY fecha_reserva DESC`
    );

    res.json({
      success: true,
      total: reservas.length,
      reservas
    });

  } catch (error) {
    console.error('Error al obtener reservas:', error);
    res.status(500).json({ 
      error: 'Error al obtener las reservas',
      message: error.message 
    });
  }
});

// Obtener una reserva por ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const [reservas] = await pool.execute(
      `SELECT * FROM reservas WHERE id = ?`,
      [id]
    );

    if (reservas.length === 0) {
      return res.status(404).json({ 
        error: 'Reserva no encontrada' 
      });
    }

    res.json({
      success: true,
      reserva: reservas[0]
    });

  } catch (error) {
    console.error('Error al obtener reserva:', error);
    res.status(500).json({ 
      error: 'Error al obtener la reserva',
      message: error.message 
    });
  }
});

// Actualizar estado de una reserva
router.patch('/:id/estado', async (req, res) => {
  try {
    const { id } = req.params;
    const { estado } = req.body;

    const estadosValidos = ['pendiente', 'confirmada', 'cancelada'];
    
    if (!estadosValidos.includes(estado)) {
      return res.status(400).json({ 
        error: 'Estado no válido' 
      });
    }

    const [result] = await pool.execute(
      `UPDATE reservas SET estado = ? WHERE id = ?`,
      [estado, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ 
        error: 'Reserva no encontrada' 
      });
    }

    res.json({
      success: true,
      message: 'Estado de la reserva actualizado'
    });

  } catch (error) {
    console.error('Error al actualizar estado:', error);
    res.status(500).json({ 
      error: 'Error al actualizar el estado',
      message: error.message 
    });
  }
});

export default router;

