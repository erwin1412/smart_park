import * as express from "express";
import AuthController from "../controllers/AuthController";
import OfficerController from "../controllers/OfficerController";
import authenticate from "../middlewares/auth";
import CheckinController from "../controllers/CheckinController";

const router = express.Router();

router.post("/officer/create", authenticate, OfficerController.create);
router.post("/checkin/create", authenticate, CheckinController.create);

router.post("/auth/register", AuthController.register);
router.post("/auth/login", AuthController.login);

export default router;
