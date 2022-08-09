import { bdDica } from "../config/bd.js";

const TipsController = (app) => {

    app.get("/tips", (req, res) => {
        
        const dica = bdDica[Math.floor(Math.random()*(bdDica.length))]
        return res.json(dica)
    })
}

export {TipsController}