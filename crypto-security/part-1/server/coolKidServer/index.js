const express = require('express')
const cors = require('cors')

const messageCtrl = require('./controllers/messageController');


const app = express()

app.use(express.json())
app.use(cors())

app.post('/api/', messageCtrl.createMessage)

app.listen(4004, () => console.log('be more professional on server 4004!'))
