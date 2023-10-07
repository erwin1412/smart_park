import { Request, Response } from 'express'

import { AppDataSource } from '../data-source'
import { Repository } from 'typeorm'
import { Ticket } from '../entities/Ticket';
import { Floor } from '../entities/Floor';


class TicketService {
    private readonly checkinRepository: Repository<Ticket> = AppDataSource.getRepository(Ticket);
    private readonly floorRepository: Repository<Floor> = AppDataSource.getRepository(Floor);

    async find(req: Request, res: Response) {
      const id = req.params.id
      const ticket = await this.checkinRepository.find({
        where : {user : {id : id}}
      })

      return res.status(200).json(ticket)
    }
    
    async create(req: Request, res: Response) {      
    try {
      const id = req.params.id
      const data = {
        noKendaraan: req.body.noKendaraan,
        userId: req.body.userId,
      };

      const ticket = this.checkinRepository.create({
        noKendaraan: data.noKendaraan,
        floor: {id : id},
        user: {id : data.userId},
      });
      
      await this.checkinRepository.save(ticket);

      const floor = await this.floorRepository.findOne({
        where : {id : id}
      });

      if (floor) {
        floor.isBooked = true;
        await this.floorRepository.save(floor);
      }

      return res.status(200).send(ticket);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}

export default new TicketService()