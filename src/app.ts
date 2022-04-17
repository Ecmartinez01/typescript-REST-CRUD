import morgan from 'morgan'
import cors from 'cors'
import "reflect-metadata"
import express from 'express' 
import { userRoutes } from './routes/user.routes';
export const app = express()
app.use(morgan("dev"))
app.use(cors())
app.use(express.json())
app.use(userRoutes) 

   
