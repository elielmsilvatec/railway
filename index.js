const http = require('http');
const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const session = require('express-session')
const flash = require('connect-flash');
const path = require('path');
require('dotenv').config();
const connection = require("./database/database")

//Exportando Minhas rotas
const router = require("./src/router")
// configurando sessão
app.use(session({
    secret: 'fdsjkl22%%6667889)))@####',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 3 * 24 * 60 * 60 * 1000 } // 7 days
}))
// configurando o flash
app.use(flash())

// Middlewere
app.use((req, res, next) => {
    //variaveis globais
    res.locals.sucesso_msg = req.flash('sucesso_msg')
    res.locals.erro_msg = req.flash('erro_msg')

    res.locals.sucesso_msg_login = req.flash('sucesso_msg_login')
    res.locals.erro_msg_login = req.flash('erro_msg_login')

   if(req.session.user){   // se a sessão estiver ativa user em partials recebe os dados do usuario logado (email)
    res.locals.user =  req.session.user
   }
   
    next()
})

// arquivos staticos
//app.use(express.static('public'))
app.use(express.static(__dirname + "/public/"));

// Views
app.set('views', path.join(__dirname, 'src/Views'));
app.set('view engine', 'ejs');


// Body Parser Formulários
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.listen(8080, () => { console.log("Logado") })
app.listen(process.env.PORT || 3000, () => { console.log("Server On....") })


connection
    .authenticate()
    .then(() => {
        // console.log("Conectado ao banco")
    }).catch((erro) => {
        console.log(erro)
    })

//Usando Rotas 
app.use("/", router)