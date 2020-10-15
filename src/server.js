// Importar dependência
const express = require('express');
const server = express()

// Criar uma rota
server.get('/', () => {
    return console.log('oi')
})

// Ligar o servidor
server.listen(5500)

