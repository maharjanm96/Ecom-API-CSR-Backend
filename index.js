const express = require('express')

const app = express();
const PORT = 5000;

const productRouter = require('./routes/product.js')
const homeRouter = require('./routes/home.js')
const errorRouter = require('./routes/error.js')
const cors = require('cors')

app.use(cors())

//Link the router file
app.use(homeRouter)
app.use('/api/products', productRouter)
app.use(errorRouter)

app.listen(PORT, () => {
    console.log(`Server Started at Port ${PORT}`)

})
console.log("Test")

