import { Entity, PrimaryGeneratedColumn, Column, Timestamp, OneToMany } from "typeorm"

@Entity({name : "users"})
export class User {


    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    fullname: string

    @Column({ unique: true })
    username: string
    
    @Column({ unique: true })
    email: string
    
    @Column({select : false})
    password: string
        
    @Column({nullable : true})
    picture: string

    @Column({nullable : true})
    description: string
    
    
    @Column({ type : "timestamp" , default: () => "CURRENT_TIMESTAMP" })
    created_at: Date 
    
    @Column({ type : "timestamp" , default: () => "CURRENT_TIMESTAMP" })
    updated_at: Date 
}
