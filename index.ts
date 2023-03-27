import dotenv from 'dotenv'
import express, { Request, Response } from 'express'

dotenv.config()

const port: number = process?.env?.PORT ? +process.env.PORT : 3000

const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world!')
})

app.listen(port, () => {
  console.log(`The application is listening on port ${port}!`)
})
