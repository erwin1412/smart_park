import { Repository } from "typeorm";
import { User } from "../../entities/User";
import { AppDataSource } from "../../data-source";
import { Request, Response } from "express";
import * as bcrypt from "bcrypt";
import { Mall } from "../../entities/Mall";

class MallService {
  private readonly mallRepository: Repository<Mall> =
    AppDataSource.getRepository(Mall);

  async getAllOMalls(req: Request, res: Response) {
    // const roleId = res.locals.loginSession.user.role;
    // if (roleId != "3") {
    //   return res.status(400).json({ error: "Role required" });
    // }
    try {
      const malls = await this.mallRepository.find({
        order: {
          id: "DESC",
        },
      });
      return res.status(200).json(malls);
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ error: error });
    }
  }

  async create(req: Request, res: Response) {
    const roleId = res.locals.loginSession.user.role;
    try {
      if (roleId != "3") {
        return res.status(400).json({ error: "Role required" });
      }

      const data = {
        name: req.body.name,
        location: req.body.location,
        image: req.body.image
      };

      if (!data.name || !data.location) {
        return res.status(400).json({ error: "All fields are required" });
      }

      const mall = this.mallRepository.create({
        name: data.name,
        location: data.location,
        image: data.image
      });
      await this.mallRepository.save(mall); // Wait for user to be saved

      const responseMessage = `Data User Berhasil di buat:\n${JSON.stringify(
        mall,
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
      // const roleId = res.locals.loginSession.user.role;
      // if (roleId != "3") {
      //   return res.status(400).json({ error: "Role required" });
      // }
      const id = req.params.id;
      const deletedOficcer = await this.mallRepository.delete(id);
      return res.status(200).json(deletedOficcer);
    } catch (error) {
      return res.status(500).json("Terjadi kesalahan pada server");
    }
  }

  async update(req: Request, res: Response) {
    try {
      // const roleId = res.locals.loginSession.user.role;
      // if (roleId !== "3") {
      //   return res.status(403).json({ error: "Permission denied" });
      // }

      const id = req.params.id;

      const mallToUpdate = await this.mallRepository.findOne({
        where: {
          id: id,
        },
      });

      if (!mallToUpdate) {
        return res.status(404).json({ error: "Mall not found" });
      }

      const { name, location, image } = req.body;

      const updatedMall = new Mall();
      updatedMall.name = name;
      updatedMall.location = location;
      updatedMall.image = image;

      mallToUpdate.name = name;
      mallToUpdate.location = location;
      mallToUpdate.image = image;
      mallToUpdate.updated_at = new Date();

      const update = await this.mallRepository.save(mallToUpdate);

      return res.status(200).json(update);
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
export default new MallService();
