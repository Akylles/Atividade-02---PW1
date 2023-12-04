import express from "express"
import controllerTechnology from "../controllers/technology.controller"
import middlewareUser from "../middlewares/user.middleware"
import middlewareGlobal from "../middlewares/global.middlewares"
import middlewareTechnology from "../middlewares/technology.middleware"

const routerTechnology = express.Router()

routerTechnology.post('/', 
                    middlewareUser.checkExistsUserAccount, 
                    controllerTechnology.save)

routerTechnology.get('/', 
                    middlewareUser.checkExistsUserAccount, 
                    controllerTechnology.findByUsername)

routerTechnology.put('/:id', 
                    middlewareGlobal.validateUUID,
                    middlewareTechnology.checkTechnologyExistsById,
                    middlewareUser.checkExistsUserAccount, 
                    controllerTechnology.updateById)


routerTechnology.patch('/:id/studied', 
                    middlewareGlobal.validateUUID,
                    middlewareTechnology.checkTechnologyExistsById,
                    middlewareUser.checkExistsUserAccount,
                    controllerTechnology.updateStudiedPropertyById)


            
routerTechnology.delete('/:id', 
                    middlewareGlobal.validateUUID,
                    middlewareTechnology.checkTechnologyExistsById,
                    middlewareUser.checkExistsUserAccount,
                    controllerTechnology.deleteById)


export default routerTechnology