const express = require('express')
const connection = require('./configration/configDb')
const app = express()
const cors=require('cors')
const mealRoute=require("./modules/meals/routes/meal.route")
const userRouter=require("./modules/users/routes/user.route")
require("dotenv").config();
app.use(express.json());

const port =process.env.PORT;
app.get('/', (req, res) => res.send('Hello World!'))

app.use(cors())
app.use(userRouter)
app.use(mealRoute)

connection();

app.listen(port, () => console.log(`Example app listening on port ${port}!`))