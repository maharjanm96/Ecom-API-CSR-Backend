const express = require('express')

const app = express();
//Importing routes
const productRouter = require('./routes/product.js')
const authRouter = require('./routes/auth.js')
const userRouter = require('./routes/user.js')
const homeRouter = require('./routes/home.js')
const errorRouter = require('./routes/error.js')
const cors = require('cors')
const morgan =  require('morgan')
const logger = require('./middleware/logger')
const connectDatabase = require('./database/connection.js')
const cookieParser = require('cookie-parser');

//Setting Up environment in our project.
require('dotenv').config();



//DB Connection
connectDatabase();

app.use(cors())
app.use(logger);
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

//Link the router file
app.use(homeRouter)
app.use('/api/products', productRouter)
app.use(errorRouter)
app.use('/api/auth',authRouter)
app.use('/api/users',userRouter)


app.listen(process.env.PORT, () => {
    console.log(`Server Started at Port ${process.env.PORT}`)

})
//console.log("Test")

