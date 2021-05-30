const { Pool } = require("pg")

const pool = new Pool({
    user: 'admin2',
    host: 'localhost',
    database: 'vytalize_npi_database',
    password: 'y2699WmsN8ZfxGDhPpFrUKIfIg9fef2I',
    port: 5432,
});

module.exports = pool;