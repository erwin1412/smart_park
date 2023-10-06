import { Repository } from "typeorm";
import { User } from "../entities/User";
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { Product } from "../entities/Product";


class ProductService {

// private readonly authRepository: Repository<User> = AppDataSource.getRepository(User)

private readonly productRepository: Repository<Product> = AppDataSource.getRepository(Product)
async createProduct( req: Request, res: Response){
try {

      return res.status(200).json(`Data Berhasil di buat`);
    } catch (error) {
      return res.status(500).json("Terjadi kesalahan pada server");
    }
  }

}

export default new ProductService()