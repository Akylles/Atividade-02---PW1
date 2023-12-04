import express from "express"
import routerUser from "./routes/user.route"
import routerTechnology from "./routes/technology.route"

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/user', routerUser)
app.use('/technologies', routerTechnology)

const PORT = process.env.PORT || 7527

app.listen(PORT, ()=> console.log(`aplicação rodando na porta ${PORT}`)) 