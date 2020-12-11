import express = require('express');
import jwt from 'jsonwebtoken'
import { config } from '../config';

// Carregamento da interface com o Banco de Dados
import * as users from '../models/users'
import bcrypt, { hash } from 'bcrypt';


type authUser = {
    email: string,
    token: string
}

const AUTH_CONFIG = config['secret']

const authRouter = express.Router();

//Funções Auxiliares

//Geração de Token JWT
function generateTokens(params = {}) {

    return jwt.sign(params, AUTH_CONFIG, {
        expiresIn: 86400
    })
}


// Registro de Novo Usuário
async function createUser(NewItem: users.NewItem) {

    let pushItem = <users.User>NewItem
    let lastId = users.model.slice(-1).pop()?.id
    lastId = lastId ? lastId + 1 : 1
    pushItem.id = lastId
    pushItem.password = await hash(pushItem.password, 10)

    return pushItem
}

authRouter.post('/', async function async(req, res) {

    const email = req.body.email;
    let password = req.body.password;

    const user = users.model.find(element => element.email === email)
    if (!user)
        res.status(400).send({ error: 'usuario não encontrado' })


    //Comparando a senha
    if (! await bcrypt.compare(password, user!.password))
        res.status(401).send({ error: 'senha incorreta' })
    // if (user?.password !== password)

    password = "";

    let data: authUser = {
        email,
        token: generateTokens({ id: user!.id }),
    }
    res.status(200).send(data);
})



//Fazer Novo registro no  banco de dados 
authRouter.post('/cadastro', async function (req, res) {

    const { email } = req.body;
    let password = req.body.password;
    try {
        if (users.model.find(element => element.email === email))
            return res.status(400).send({ error: 'Usuário já registrado' })

        const newUser: users.User = await createUser(req.body)
        users.model.push(newUser)

        let data: authUser = {
            email,
            token: generateTokens({ id: newUser.id }),
        }
        res.status(200).send(data);

    } catch (err) {
        return res.status(400).send({ error: 'Falha no registro de novo usuário' })
    }
    if (req.body.password === req.body.passwordConf) {
        res.status(201).send(req.body); // Confirmação novo cadastro
    } else {
        res.status(400).send('Por favor verifique sua senha'); // Erro no Cadastro
    }
})



module.exports = authRouter;
