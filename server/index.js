// Require packages
const express = require('express')
const cors = require('cors')

// App instance
const app = express()

// Middleware
app.use(express.json())
app.use(cors())

// Endpoints

const {getBurgers, addBurger, deleteBurger, updateBurger} = require('./controller')

app.get('/burgers', getBurgers)
app.post('/burgers', addBurger)
app.delete('/burgers/:id', deleteBurger)
app.put('/burgers/:id', updateBurger)


// Start server with app.listen

app.listen(5678, () => console.log('Avengers assesmble on port 5678'))

