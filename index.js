const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Heyy theeeere!')
})

app.listen(2200)
