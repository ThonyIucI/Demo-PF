const { server } = require('./src/db.js')

server.authenticate().then(() => {
    console.log('Server started')
}) 
