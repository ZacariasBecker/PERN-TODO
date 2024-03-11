const Pool = require("pg").Pool;

const pool = new Pool({
    user: "...",
    password: "...",
    host: "192.168.1.13",
    port: 5440,
    database: "perntodo",
});

module.exports = pool;