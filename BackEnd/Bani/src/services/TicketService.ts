import { Request, Response, response } from 'express'

import { AppDataSource } from '../data-source'
import { Repository } from 'typeorm'
import { Ticket } from '../entities/Ticket';


class TicketService {
    private readonly checkinRepository: Repository<Ticket> =
    AppDataSource.getRepository(Ticket);
    async create(req: Request, res: Response) {
    // const roleId = res.locals.loginSession.user.role;
    // const userId = res.locals.loginSession.user.id;
    // try {
    //   if (roleId != "3") {
    //     return res.status(400).json({ error: "Role required" });
    //   }

    const data = {
    noKendaraan: req.body.noKendaraan,
    floorId: req.body.floorId,
    userId: req.body.userId,
    };

    const user = this.checkinRepository.create({
    noKendaraan: data.noKendaraan,
    floor: data.floorId,
    user: data.userId,
    });
    await this.checkinRepository.save(user); // Wait for user to be saved

    const responseMessage = `Data User Berhasil di buat:\n${JSON.stringify(
    user,
    null,
    2
    )}`;

    return res.status(200).send(responseMessage);
    } catch (error) {
      console.error("Error:", error);
    // return res.status(500).json({ error: error });
    return response.status(500).json({error : error})
    }
  }

export default new TicketService()