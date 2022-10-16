import { Column, IsUUID, Model, PrimaryKey, Table, Unique } from 'sequelize-typescript';

@Table
export class User extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column
  userId: string;

  @Unique
  @Column
  username: string;
  
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column({ defaultValue: true })
  isActive: boolean;

  @Column
  password: string;
}
