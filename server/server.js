const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()
app.use(cors())
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// api routes
app.use(require('./routes/hello'))

app.listen(3020, () => {
	console.log(`escuchando puerto: 3020`)
})
