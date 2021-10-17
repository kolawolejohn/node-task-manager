const express = require('express')
const app = express()
require('dotenv').config()

const taskRoute = require('./routes/tasks')
const connectDB = require('./db/connection')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

//middleware
app.use(express.json())
app.use(express.static('./public'))

//app.routes
app.use('/api/v1/tasks', taskRoute)
app.use(notFound)
app.use(errorHandlerMiddleware)

const PORT =  process.env.PORT || 3000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(PORT, () => console.log(`server listening on localhost:${PORT}`))
  } catch (error) {
    console.log(error)
  }
}

start()