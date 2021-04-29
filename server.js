require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

const userRouter = require('./router/user')
const orderRouter = require('./router/order')
const productRouter = require('./router/product')

app.use('/uploads', express.static('uploads'))

require('./config/database')

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))

app.use(cors())
app.use(morgan("dev"))

app.use('/product', productRouter)
app.use('/user', userRouter)
app.use('/order', orderRouter)

const PORT = process.env.PORT || 7000

app.listen(PORT, console.log("connected server..."))