import serviceTechnology from "../services/technology.service";
import { Request, Response } from "express";

const save = async (req: Request, res: Response) => {
    try {
        const {title, deadline, username} = req.body
        const technology = await serviceTechnology.save(title, deadline, username)

        res.status(201).send({
            technology
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: "O servidor se deparou com uma situação com a qual não sabe lidar",
            error: error
        })
    }
}

const findByUsername = async (req: Request, res: Response) => {
    try {
        const username = req.body.username
        const technologies = await serviceTechnology.findByUsername(username)
        res.status(200).send({
            usuário: username,
            tecnologias: technologies
        })    
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: "O servidor se deparou com uma situação com a qual não sabe lidar",
            error: error
        })
    }
    
}

const updateById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const {title, deadline} = req.body
        const technology = await serviceTechnology.updateById(id, title, deadline)
        
        res.status(200).send({
            mensagem: "Tecnologia atualizada com sucesso",
            technology: technology
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: "O servidor se deparou com uma situação com a qual não sabe lidar",
            error: error
        })
    }
}

const updateStudiedPropertyById = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const technology = await serviceTechnology.updateStudiedPropertyById(id, true)
        res.status(200).send({
            mensagem: "Propriedade studied da tecnologia atualizada com sucesso",
            technology: technology
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: "O servidor se deparou com uma situação com a qual não sabe lidar",
            error: error
        })
    }
}

const deleteById = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const technology = await serviceTechnology.deleteById(id)
        
        res.status(200).send({
            mensagem: "Tecnologia excluída com sucesso",
            technology: technology
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: "O servidor se deparou com uma situação com a qual não soube lidar",
            error: error
        })
    }
}

const controllerTechnology = {
    save,
    findByUsername,
    updateById, 
    updateStudiedPropertyById,
    deleteById
}

export default controllerTechnology