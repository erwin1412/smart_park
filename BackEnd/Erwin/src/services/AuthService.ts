import { Repository } from "typeorm";
import { User } from "../entities/User";
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import * as bcrypt from 'bcrypt';

class AuthService {

private readonly authRepository: Repository<User> = AppDataSource.getRepository(User)

async register( req: Request, res: Response){
try {
    const data = {
        fullname : req.body.fullname,
        username : req.body.username,
        email :  req.body.email,
        password :  req.body.password,
    }
    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = this.authRepository.create({
        fullname: data.fullname,
        username: data.username,
        email: data.email,
        password: hashedPassword,
      });
      this.authRepository.save(user);
      const responseMessage = `Data User Berhasil di buat : \n${JSON.stringify(user, null, 2)}`;

      console.log("Request body:", user);

      return res.status(200).send(responseMessage);
    } catch (error) {
      return res.status(500).json("Terjadi kesalahan pada server");
    }
  }

}

export default new AuthService()