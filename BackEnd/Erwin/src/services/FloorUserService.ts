import { Request, Response } from "express";
import { Floor } from "../entities/Floor";
import { AppDataSource } from "../data-source";
import { Repository } from "typeorm";

class FloorUserService {
  private readonly floorRepository: Repository<Floor> =
    AppDataSource.getRepository(Floor);

  async find(req: Request, res: Response) {
    const floor = await this.floorRepository.find();

    return res.status(200).json(floor);
  }

  async update(req: Request, res: Response) {
    const id = req.params.id;
    const floor = await this.floorRepository.findOne({
      where: { id: id },
    });

    if (floor.isBooked) {
      floor.isBooked = false;
    }

    this.floorRepository.save(floor);
    return res.status(200).json(floor);
  }
}

export default new FloorUserService();
