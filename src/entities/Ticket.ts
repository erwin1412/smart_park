import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Timestamp,
  OneToOne,
  JoinColumn, // Import JoinColumn
} from "typeorm";
import { User } from "./User";
import { Floor } from "./Floor";

@Entity({ name: "tickets" })
export class Ticket {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  noKendaraan: string;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @OneToOne(() => Floor)
  @JoinColumn()
  floor: Floor;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  created_at: Date;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  updated_at: Date;
}
