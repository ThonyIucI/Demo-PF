const { Router } = require('express')

const routes = Router()

routes.get('/', (req, res) => {
    try {
        res.status(200).send({msg: 'Hola'})
    } catch (error) {
        res.status(500).send({msg: 'Error interno del servidor', error})
    }
})

module.exports = routes