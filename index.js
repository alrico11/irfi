const express = require("express")

const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors')
const swaggerUi = require('swagger-ui-express');
const yaml = require('js-yaml')
const fs = require('fs')

// const router = require("./src/application/routes")
const routerv1 = require("./src/application/v1.routes")
const routerv2 = require("./src/application/v2.routes")

const app = express()

app.use(cors({
    origin:'*'
}))

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

const swaggerDocument = yaml.load(fs.readFileSync('./src/swagger/swagger.yaml','utf-8'))

app.use(cookieParser())
app.use(
    session({
        secret:'abcdefghijklmnopqrstuvwxyz',
        resave: false,
        saveUninitialized: true
    })
)

app.use("/",routerv1)

app.use("/api/v1",routerv1)
app.use("/api/v2",routerv2)
app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerDocument))



const PORT = 3000
app.listen(PORT)
console.log("Application Running On Port", PORT);
