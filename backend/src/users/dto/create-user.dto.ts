import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, MinLength, MaxLength, IsEmail} from 'class-validator';

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
  @MaxLength(30)
  readonly password: string;

  @ApiProperty({example: 'Manfred Mustermann', description: "new user's public username"})
  @IsString()
  @MinLength(5)
  @MaxLength(20)
  readonly username: string;

  @ApiProperty({example: "website@halbwilde.com", description: "email address"})
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;
}
