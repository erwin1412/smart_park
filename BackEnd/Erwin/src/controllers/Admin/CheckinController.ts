import { Request, Response } from "express";
import AuthService from "../services/AuthService";
import CheckinService from "../services/CheckinService";

class CheckinController {
  create(req: Request, res: Response) {
    CheckinService.create(req, res);
  }
}

export default new CheckinController();
