 import { Request, Response } from "express"
import { User } from '../entities/User';

export const createUser = async(req:Request,res:Response)=>{
   try {
    const {firstname,lastname} = req.body
    const user = new User()
    user.firstname = firstname
    user.lastname = lastname
    await user.save()
    res.send(user) 
   } catch (error) {
       if (error instanceof Error) {
           res.send({
               mensaje:"Error"
           })
       }
   }
    
} 
export const getUsers = async(req:Request,res:Response)=>{
    const users =await User.find()
    res.send(users)

}
export const updateUsers = async(req:Request, res:Response) =>{
    try {
        const {id} =req.params 
      const user =  await User.findOneBy({id: parseInt(id)})
      if (!user) {
          return res.status(400).send("No encontro el usuario")
      }
    await User.update({id:parseInt(id)},req.body)
      return res.status(200).send("Usuario actualizado")
    } catch (error){
     res.send("Error en la actualizacion")   
    }
}

export const deleteUser = async (req:Request, res:Response ) => {
    try {
        const {id} = req.params
        const user = await User.findOneBy({id:parseInt(id)})
        if (!user) {
            return res.status(404).send("usuario no encontrado")
        }
        await User.delete({id:parseInt(id)})
        return  res.status(200).send("Eliminado")        
    } catch (error) {
        console.log(error)
        return res.status(500).send("Error interno")
    }
}

export const getUserById = async(req:Request,res:Response) =>{
    try {
        const {id} = req.params
        const usuario = await User.findOneBy({id:parseInt(id)})
        if (!usuario) {
            return res.status(404).send("No existe")
        }
        return res.status(200).send(usuario)
    } catch (error) {
        console.log(error)
        return res.status(500).send("Error interno")
    }
}