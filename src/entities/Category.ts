import { Entity, PrimaryGeneratedColumn, Column, Timestamp, OneToMany } from "typeorm"
import { Product } from "./Product";

@Entity({name : "categories"})
export class Category  {


    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    categoryName: string

    @OneToMany(() => Product, product => product.category)
    products: Product[];

    @Column({ type : "timestamp" , default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date 
    
    @Column({ type : "timestamp" , default: () => "CURRENT_TIMESTAMP" })
    updatedAt: Date 
}
