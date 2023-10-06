import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Ticket } from "./ticket";
import { Mall } from "./Mall";

@Entity({ name: "floors" })
export class Floor {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  parkingCode: string;

  @Column({ default: false })
  isBooked: Boolean;

  @OneToOne(() => Mall)
  @JoinColumn()
  mall: Mall;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  created_at: Date;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  updated_at: Date;
}
