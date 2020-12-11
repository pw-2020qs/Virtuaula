import { config } from "../config"
import { Request, Response, NextFunction, Express } from 'express'
import jwt from 'jsonwebtoken'

interface AuthRequest extends Request {
    userId: number
}




function AuthMiddleware (req: AuthRequest, res: Response, next: NextFunction) {

    const authHeader = req.headers.authorization;

    if (!authHeader)
        return res.status(401).send({ error: 'No token provided' })

    const parts = authHeader.split(' ');

    if (!(parts.length === 2))
        return res.status(401).send({ error: 'Token error' })

    const [schema, token] = parts;

    if (!/^Bearer$/i.test(schema))
        return res.status(401).send({ error: 'Token malformatted' })

    jwt.verify(token, config['secret'], (err, decoded) => {
        if (err) return res.status(401).send({ error: 'Invalid Token' })

        req.userId = (<any>decoded).Id;
        next();
    })
}

module.exports = AuthMiddleware;