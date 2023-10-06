import { Repository } from "typeorm";
import { User } from "../../entities/User";
import { AppDataSource } from "../../data-source";
import { Request, Response } from "express";
import * as bcrypt from "bcrypt";

class OfficerService {
  private readonly officerRepository: Repository<User> =
    AppDataSource.getRepository(User);
  async create(req: Request, res: Response) {
    const roleId = res.locals.loginSession.user.role;
    try {
      if (roleId != "3") {
        return res.status(400).json({ error: "Role required" });
      }

      const data = {
        fullname: req.body.fullname,
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
      };

      if (!data.fullname || !data.username || !data.email || !data.password) {
        return res.status(400).json({ error: "All fields are required" });
      }

      const hashedPassword = await bcrypt.hash(data.password, 10);

      const user = this.officerRepository.create({
        fullname: data.fullname,
        username: data.username,
        email: data.email,
        phone: data.phone,
        password: hashedPassword,
        role: "1", // Or "2" as per your requirement
      });
      await this.officerRepository.save(user); // Wait for user to be saved

      const responseMessage = `Data User Berhasil di buat:\n${JSON.stringify(
        user,
        null,
        2
      )}`;

      return res.status(200).send(responseMessage);
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ error: error });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const roleId = res.locals.loginSession.user.role;
      if (roleId != "3") {
        return res.status(400).json({ error: "Role required" });
      }
      const id = parseInt(req.params.id);
      const deletedThread = await this.officerRepository.delete(id);
      return res.status(200).json(deletedThread);
    } catch (error) {
      return res.status(500).json("Terjadi kesalahan pada server");
    }
  }
}
export default new OfficerService();
