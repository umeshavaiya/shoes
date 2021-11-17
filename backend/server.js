const express = require('express')
const {errorHandler} = require('./middlewares/errorMiddleware')
const colors = require('colors')
const products = require("./data/products")
const dotenv = require('dotenv')
const connectDb = require('./config/config')
const productRoutes = require('./routes/productsRoute')

// For dotenv config
dotenv.config()
// Connecting to mongodb database
connectDb();
const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Welcome to node')
})

app.use('/api', productRoutes);

app.use(errorHandler)
const PORT = 8080;
app.listen(process.env.PORT || PORT, () => {
    console.log(
        `Server running in ${process.env.NODE_ENV} Mode on port ${process.env.PORT}`
            .inverse
    );
})