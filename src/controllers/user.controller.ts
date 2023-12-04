import serviceUser from "../services/user.service";
import { Request, Response } from "express";

const save = async (req: Request, res: Response) => {
    const {name, username} = req.body

    try {
        const usuario = await serviceUser.save(name, username)
        res.status(201).send(usuario)
    } catch (error) {
        console.log(error)
        res.status(500).send({
            mensagem: "O servidor encontrou uma situação com a qual não sabe lidar.",
            erro: error
        })
    }
}

const controllerUser = {
    save
}

export default controllerUser