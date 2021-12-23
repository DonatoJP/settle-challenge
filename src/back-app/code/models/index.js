const mongoose = require('mongoose')
const dbConfig = require('../config').db

const db = mongoose.createConnection(
    dbConfig.url,
    { dbName: dbConfig.dbName }
)

const ratesSchema = mongoose.Schema({
    from: { symbol: String, description: String },
    to: { symbol: String, description: String },
    originalRate: Number,
    feePercentage: Number,
    feeAmount: Number,
    totalRate: Number
})

const Rate = db.model('Rate', ratesSchema, 'Rates')

module.exports = Rate

