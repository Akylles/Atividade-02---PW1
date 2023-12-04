import { Request, Response, NextFunction } from "express";
import serviceUser from "../services/user.service";


const checkNotExistsUserAccount = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const username = req.params.username || req.body.username
        const user = await serviceUser.findByUsername(username)
        
        if(user){
            res.status(400).send({
                error: `ERRO: Impossível cadastrar '${username}', já existe um usuário com este nome` 
            })
        }else{
            next()
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            mensagem: "O servidor encontrou uma situação com a qual não sabe lidar.",
            erro: error
        })
    }
}

const checkExistsUserAccount = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const username = req.body.username
        const user = await serviceUser.findByUsername(username)
        
        if(!user){
            res.status(404).send({
                error: `ERRO: Não existe no banco nenhum usuário com o username: '${username}'` 
            })
        }else{
            next()
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            mensagem: "O servidor encontrou uma situação com a qual não sabe lidar.",
            erro: error
        })
    }
}

const middlewareUser = {
    checkNotExistsUserAccount,
    checkExistsUserAccount
}

export default middlewareUser