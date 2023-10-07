import * as express from "express";
import AuthController from "../controllers/AuthController";
import OfficerController from "../controllers/OfficerController";
import authenticate from "../middlewares/auth";
import CheckinController from "../controllers/CheckinController";
import MallController from "../controllers/MallController";
import FloorController from "../controllers/FloorController";
import ReportController from "../controllers/ReportController";

const router = express.Router();
// router
//   .route("/officer")
//   .get(OfficerController.getAllOfficers)
//   .post(OfficerController.create)
//   .delete(OfficerController.delete);

//admin

//officers
router.get("/officer", OfficerController.getAllOfficers);
router.post("/officer", authenticate, OfficerController.create);
router.delete("/officer/:id", authenticate, OfficerController.delete);
router.put("/officer/:id", OfficerController.update);

//mall
router.get("/mall", MallController.getAllMalls);
router.post("/mall", authenticate, MallController.create);
router.delete("/mall/:id", authenticate, MallController.delete);
router.put("/mall/:id", MallController.update);

//floor
router.get("/floor", FloorController.getAllFloors);
router.post("/floor", authenticate, FloorController.create);
router.delete("/floor/:id", authenticate, FloorController.delete);
router.put("/floor/:id", FloorController.update);

router.get("/report/", ReportController.ReportOfficers);
router.get("/report/book-day", ReportController.ReportBookToday);
router.get("/report/book-month", ReportController.ReportBookMonth);
router.get("/report/book-year", ReportController.ReportBookYear);
// admin end

router.post("/checkin/create", authenticate, CheckinController.create);

router.post("/auth/register", AuthController.register);
router.post("/auth/login", AuthController.login);

export default router;
