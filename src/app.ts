import express, { Application, NextFunction, Request, Response } from 'express';
import path from 'path';
import cors from 'cors';

const app : Application = express()


app.use(cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'HEAD'],
    origin: ["http://client.com"],
    credentials: true

}))
app.use(express.json())
app.use(express.static(path.join(__dirname, '../', 'public')))


// Router
// app.use('/api/v1', router)





export default app;