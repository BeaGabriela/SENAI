const express = require('express')
const cors = require('cors')

const router = require('./src/routes/routes')

const status = require('./src/routes/status.routes')

const app = express()
    .use(express.json())
    .use(cors())
    .use(router)
    .use(status)

    app.listen(3000, () => {
        console.log('listening on port 3000')
    })