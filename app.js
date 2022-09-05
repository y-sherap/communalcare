const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const app = express()

const OfferRouter = require('./routes/OfferRouter')
const AuthRouter = require('./routes/AuthRouter')
const RequestRouter = require('./routes/RequestRouter')


const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.json({ message: 'Server Works' }))
app.use('/auth',AuthRouter)
app.use('/offer',OfferRouter)
app.use('/request',RequestRouter)

app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
