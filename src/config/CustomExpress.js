import express from "express";
import { CreateController } from "../controllers/CreateController.js";
import { TipsController } from "../controllers/TipsController.js";
const app = express();
app.use(express.json());
CreateController(app);
TipsController(app);
export { app };
