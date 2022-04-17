import { Router } from "express";
import { createUser, getUsers, updateUsers, deleteUser, getUserById } from '../controllers/user.controllers';

export const userRoutes = Router()

userRoutes.post("/user",createUser)
userRoutes.get("/user",getUsers)
userRoutes.put("/user/:id",updateUsers)
userRoutes.delete("/user/:id",deleteUser)
userRoutes.get("/user/:id",getUserById)