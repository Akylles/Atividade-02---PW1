import controllerUser from "../controllers/user.controller";
import middlewareUser from "../middlewares/user.middleware";
import express from "express"

const routerUser = express.Router()

routerUser.post('/', middlewareUser.checkNotExistsUserAccount, controllerUser.save)

export default routerUser