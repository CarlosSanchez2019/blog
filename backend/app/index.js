require('./database')

const express = require('express')
const app = express()
const path = require('path')

const router = require('./routes/blog.routing')
const cors = require('cors')

app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'pug');

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(router)
app.use(require('./routes/user.routing'))

app.listen(3000, function(){
    console.log(`Server on port 3000 `)
})