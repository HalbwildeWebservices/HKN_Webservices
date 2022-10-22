import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { Column, IsUUID, Model, PrimaryKey, Table, Unique, ForeignKey, HasMany, BelongsTo} from 'sequelize-typescript';

@Table
export class User extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column({ defaultValue: randomUUID()})
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

  @HasMany(() => UserPermission)
  permissions: UserPermission[];
}

@Table
export class UserPermission extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column( {defaultValue: randomUUID()})
  permissionId: string;
  
  @Column
  name: string;

  @ForeignKey(() => User)
  @Column
  userId: string

  @BelongsTo(() => User)
  user: User;

}
