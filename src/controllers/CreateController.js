import { bdDica } from "../config/bd.js"; 
import { DicaModel } from "../models/DicaModel.js";

const CreateController = (app) => {

    app.post("/create", (req, res) => {
        const {dica} = req.body

        const dicaModel = new DicaModel(dica)

        bdDica.push(dicaModel)

        res.send(bdDica)

    })
}

export {CreateController}