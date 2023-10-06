import * as express from "express";
import AuthController from "../controllers/AuthController";
import TicketController from "../controllers/TicketController";
import FloorController from "../controllers/FloorController";


const router = express.Router();

router.post("/auth/register", AuthController.register);
router.post("/ticket", TicketController.create);
router.get("/floor", FloorController.find);
router.patch("/floor/update/:id", FloorController.update)

export default router;
