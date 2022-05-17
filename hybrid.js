const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
    res.send('You Got Trolled!')
})

app.listen(port, () => {
    console.log(`ChristianFN started listening on port ${port}`)
})