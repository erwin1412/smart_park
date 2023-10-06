import { Entity, PrimaryGeneratedColumn, Column, Timestamp, OneToMany, ManyToOne } from "typeorm"
import { Category } from "./Category";
import { ProductImage } from "./ProductImage";

@Entity({name : "products"})
export class Product {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ unique: true})
    productName: string

    @Column()
    description : string
    
    @Column()
    slug: string
    
    @Column("float")
    price: number
        
    @Column()
    stock: number

    @Column()
    berat: number

    
    @OneToMany(() => ProductImage, (image) => image.product, { cascade: true })
    images: ProductImage[]; 

    @ManyToOne(()=> Category, (category)=> category.products)
    category: Category


    @Column({ type : "timestamp" , default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date 
    
    @Column({ type : "timestamp" , default: () => "CURRENT_TIMESTAMP" })
    updatedAt: Date 
}
