const mongoose = require('mongoose');
require('colors')
const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })
        console.log(`mongoDB conected ${conn.connection.host}`.yellow);
    } catch (error) {
        console.error(`Error: ${error.message}`.inverse.red)
        process.exit(1)
    }
}

module.exports = connectDb;