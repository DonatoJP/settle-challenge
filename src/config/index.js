require('dotenv').config()

const config = {
    db: {
        url: process.env.DB_URL,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD
    }
}

module.exports = config