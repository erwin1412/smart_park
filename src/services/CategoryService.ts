import { Repository } from "typeorm";
import { User } from "../entities/User";
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { Category } from '../entities/Category';


class CategoryService {

// private readonly authRepository: Repository<User> = AppDataSource.getRepository(User)

private readonly CategoryRepository: Repository<Category> = AppDataSource.getRepository(Category)
async createCategory( req: Request, res: Response){
try {
    
    const data = {
        categoryName : req.body.categoryName
    }

    const Category = this.CategoryRepository.create({
        categoryName : data.categoryName
    })

    this.CategoryRepository.save(Category)

      return res.status(200).json(`Category Berhasil di buat : ${req.body}`);
    } catch (error) {
      return res.status(500).json("Terjadi kesalahan pada server");
    }
  }

}

export default new CategoryService()