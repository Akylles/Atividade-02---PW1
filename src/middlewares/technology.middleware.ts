import { Request, Response, NextFunction } from "express";
import serviceTechnology from "../services/technology.service";

const checkTechnologyExistsById = async (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params

    const technology = await serviceTechnology.findById(id)

    if(!technology){
        res.status(404).send({
            mensagem: "ERRO: Não existe nenhuma tecnologia cadastrada com esse id"
        })
    }else{
        next()
    }
}


const middlewareTechnology = {
    checkTechnologyExistsById
}

export default middlewareTechnology