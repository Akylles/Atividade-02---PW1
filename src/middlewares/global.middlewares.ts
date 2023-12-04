import { validate } from "uuid";
import { Request, Response, NextFunction } from "express";

const validateUUID = (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id

    if (!validate(id)){
        res.status(401).send({
            "error": "O id passado como parâmetro não é válido como UUID"
        })
    }else{
        next()
    }
    
}

const middlewareGlobal = {
    validateUUID
}

export default middlewareGlobal