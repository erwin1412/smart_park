import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";


@Entity({ name: "malls" })
export class Mall {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  district: string;

  @Column()
  address: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  created_at: Date;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  updated_at: Date;
}
