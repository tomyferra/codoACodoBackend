import { createPool } from 'mysql2/promise';

// necesitamos conectar mysql a este pool
const pool = createPool({
    host: 'bavfp3t4kjv6sbwd748s-mysql.services.clever-cloud.com',
    user: 'up6azrrjrvd6f3f0',
    password: 'Ad3xsRuWjnodM4PAjh8h',
    database: 'bavfp3t4kjv6sbwd748s',
    connectionLimit: 5, // Adjust the connection limit as per your needs
    waitForConnections: true,
    queueLimit: 0
});

pool.getConnection()
    .then(connection => {
        pool.releaseConnection(connection);
        console.log('Conectado a la base de datos');
    })
    .catch(err => console.error('No se ha podido conectar a la base de datos: ', err));

export default pool;