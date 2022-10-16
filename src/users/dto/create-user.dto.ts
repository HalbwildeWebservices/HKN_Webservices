import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, MinLength} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({example: 'Manfred', description: "new user's first name"})
  @IsString()
  @IsNotEmpty()
  readonly firstName: string;
  
  @ApiProperty({example: 'Mustermann', description: "new user's last name / family name"})
  @IsString()
  @IsNotEmpty()
  readonly lastName: string;

  @ApiProperty({example: 'SuperStrongAndLongEasyToRememberPassword', description: 'initial password'})
  @IsString()
  @MinLength(15)
  readonly password: string;

  @ApiProperty({example: 'Manfred Mustermann', description: "new user's public username"})
  @IsString()
  @MinLength(5)
  readonly username: string;
}
