import { Entity, PrimaryGeneratedColumn, Column, Timestamp, OneToMany, ManyToOne } from "typeorm"
import { Product } from "./Product";

@Entity({name : "product_images"})
export class ProductImage  {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    imageUrl: string

    @ManyToOne(() => Product, product => product.images)
    product: Product;

    @Column({ type : "timestamp" , default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date 
    
    @Column({ type : "timestamp" , default: () => "CURRENT_TIMESTAMP" })
    updatedAt: Date 
}
