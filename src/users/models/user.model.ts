import { ApiProperty } from '@nestjs/swagger';
import { Column, IsUUID, Model, PrimaryKey, Table, Unique } from 'sequelize-typescript';

@Table
export class User extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column
  userId: string;

  @ApiProperty({example: 'Manfred Mustermann', description: 'chosen username'})
  @Unique
  @Column
  username: string;
  
  @ApiProperty({example: 'Manfred', description: 'first name(s)'})
  @Column
  firstName: string;

  @ApiProperty({example: 'Mustermann', description: 'last name(s)'})
  @Column
  lastName: string;

  @Column({ defaultValue: true })
  isActive: boolean;

  @Column
  password: string;
}
