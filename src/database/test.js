// test.js
import pool from './dbconfig.js';

// Consulta para obtener la versión del servidor PostgreSQL
pool.query('SELECT version()', (err, res) => {
  if (err) {
    console.error('Error al ejecutar la consulta:', err);
  } else {
    console.log('Versión del servidor PostgreSQL:', res.rows[0].version);
  }
  
  // Cerrar el pool de conexiones después de completar la prueba
  pool.end();
});
