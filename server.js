const express = require('express')
const app = express()
const path = require('path')
const data = require('./random-names.json')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/random-name', (req, res) => {
    const { first_name } = data[Math.round(Math.random() * data.length)]
    const { last_name } = data[Math.round(Math.random() * data.length)]
    return res.json({first_name, last_name})
})

app.get('/', (req, res) => {
    res.render('index.ejs')
})


app.listen(process.env.PORT || 3000, () => console.log("listening"))
