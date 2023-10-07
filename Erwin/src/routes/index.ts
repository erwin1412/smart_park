import * as express from "express"
import AuthController from "../controllers/AuthController"
import authenticate from "../middlewares/auth"
import OfficerController from "../controllers/Admin/OfficerController"
import MallController from "../controllers/Admin/MallController"
import FloorController from "../controllers/Admin/FloorController"
import ReportController from "../controllers/Admin/ReportController"
import TicketUserController from "../controllers/TicketUserController"
import FloorUserController from "../controllers/FloorUserController"

const router = express.Router()
// router
//   .route("/officer")
//   .get(OfficerController.getAllOfficers)
//   .post(OfficerController.create)
//   .delete(OfficerController.delete);

//admin

//officers
router.get("/officer", OfficerController.getAllOfficers)
router.post("/officer", authenticate, OfficerController.create)
router.delete("/officer/:id", authenticate, OfficerController.delete)
router.put("/officer/:id", OfficerController.update)

//mall
router.get("/mall", MallController.getAllMalls)
router.post("/mall", authenticate, MallController.create)
router.delete("/mall/:id", authenticate, MallController.delete)
router.put("/mall/:id", MallController.update)

//floor
router.get("/floor", FloorController.getAllFloors)
router.post("/floor", authenticate, FloorController.create)
router.delete("/floor/:id", authenticate, FloorController.delete)
router.put("/floor/:id", FloorController.update)

router.get("/report/", ReportController.ReportOfficers)
router.get("/report/book-day", ReportController.ReportBookToday)
router.get("/report/book-month", ReportController.ReportBookMonth)
router.get("/report/book-year", ReportController.ReportBookYear)
// admin end

//user
router.get("/ticket/:id", TicketUserController.find)
router.post("/ticket/:id", TicketUserController.create)
router.get("/floor", FloorUserController.find)
// user end

//petugas
router.patch("/floor/update/:id", FloorUserController.update)
//emd petugas

router.post("/auth/register", AuthController.register)
router.post("/auth/login", AuthController.login)
router.get("/auth/check", authenticate, AuthController.check);
export default router
