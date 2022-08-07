import { DicaModel } from "../models/DicaModel.js";
import { bdDica } from "../infra/bd.js";

const DicasController = (app) => {
    app.post("/create", (req, res) => {
        const {dica} = req.body

        const dicaModel = new DicaModel(dica)

        bdDica.push(dicaModel)

        return res.send(bdDica)
    })

    app.get("/tips", (req, res) => {
        const dica = bdDica[Math.floor(Math.random()*(bdDica.length+1))]
        return res.json(dica)
    })

}

export {DicasController}