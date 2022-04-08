const express = require ('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const db = require('./queries')
const PORT = 3000


app.use(cors())
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended:true,
    })
)

app.get('/', (request, response) => {
    response.json({ info:'API NodeJS com PostgreSQL.' })
})

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
// app.get('/users/logar', db.getLogin)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.get('/local_d', db.getLocal_d)
app.get('/local_d/:id', db.getLocal_dById)
app.post('/local_d', db.createLocal_d)
app.put('/local_d/:id', db.updateLocal_d)
app.delete('/local_d/:id', db.deleteLocal_d)

app.get('/denuncia', db.getDenuncia)
app.get('/denuncia/:id', db.getDenunciaById)
app.post('/denuncia', db.createDenuncia)
app.put('/denuncia/:id', db.updateDenuncia)
app.delete('/denuncia/:id', db.deleteDenuncia)

app.get('/empresa', db.getEmpresa)
app.get('/empresa/:id', db.getEmpresaById)
app.post('/empresa', db.createEmpresa)
app.put('/empresa/:id', db.updateEmpresa)
app.delete('/empresa/:id', db.deleteEmpresa)


app.listen(PORT, () => {
    console.log(`Servidor inicializado em http://172.20.10.8:${PORT}`)
})