import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {

    @ApiProperty({example: 'example@gmail.com', description: 'E-mail адрес'})
    readonly email: string

    @ApiProperty({example: 'qwerty', description: 'Пороль'})
    readonly password: string
}