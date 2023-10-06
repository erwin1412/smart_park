import { Request, Response } from "express";
import OfficerService from "../services/admin/OfficerService";

class OfficerController {
  create(req: Request, res: Response) {
    OfficerService.create(req, res);
  }
}

export default new OfficerController();
