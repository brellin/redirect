const express = require('express')
const cors = require('cors')
const request = require('request')

const port = process.env.PORT || 5000

const server = express()

server.use(express.json())
server.use(cors())

server.get('/', (req, res) => {

    const { url } = req.headers

    request({
        url,
        headers: { 'User-Agent': 'request' }
    }, (error, response, body) => {
        if (error) {
            res.status(500).json({ error })
        } else {
            res.status(200).json({ data: JSON.parse(body) })
        }
    })

})

server.listen(port, () => {
    console.log(`\n=============================\n Server Running on Port ${port} \n=============================\n`)
})
