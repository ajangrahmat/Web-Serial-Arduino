const { SerialPort } = require('serialport')
const port = new SerialPort({ path: 'COM9', baudRate: 9600 })


port.on('error', function (err) {
    console.log('Error: ', err.message)
})

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
const port_web = 3000

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/kirim', (req, res) => {
    var pesan = req.body.message
    console.log('Got body:', pesan);
    port.write(pesan, function (err) {
        if (err) {
            return console.log('Error on write: ', err.message)
        }
        console.log('message written')
    })
    return res.redirect('/');
})

app.listen(port_web, () => {
    console.log(`Example app listening on port ${port_web}`)
})