const express = require('express')
const app = express()
const path = require("path")
const port = 9000
const bodyParser = require('body-parser')

app.set('views', "./views");
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.get('/:id', (req, res) => {
    const number = req.params.id;
    console.log(number)
    var temp = number;
    var total = 0;
    while(temp >= 3){
        if (temp%3 === 0 || temp%7 === 0){
            total += temp;
        }
        temp--;
    }
    res.render("calc", {number: total});
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})