import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { randomUUID } from 'crypto';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './models/user.model';
import { hash } from 'bcrypt'

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const password = await hash(createUserDto.password, 10);
    return this.userModel.create({
      userId: randomUUID(),
      firstName: createUserDto.firstName,
      lastName: createUserDto.lastName,
      password,
      username: createUserDto.username,
    });
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  findOne(id: string): Promise<User> {
    return this.userModel.findOne({
      where: {
        userId: id,
      },
    });
  }

  findByUsername(username: string): Promise<User> {
    return this.userModel.findOne({
      where: {
        username,
      },
    });
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }
}
