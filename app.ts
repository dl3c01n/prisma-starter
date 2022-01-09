import express, { Router } from 'express'
import dotenv from 'dotenv'
import { UserRoutes } from './routes/UserRoutes'

dotenv.config()
const app = express()
const routes = Router()
routes.use('/users', UserRoutes)
app.use(routes)
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})