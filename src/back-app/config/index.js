require('dotenv').config()

const config = {
    useFakes: process.env.NODE_ENV === 'test',
    db: {
        url: process.env.DB_URL,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD
    },
    fixerConfig: {
        url: process.env.FIXER_URL,
        accessToken: process.env.FIXER_ACCESS_TOKEN
    }
}

module.exports = config