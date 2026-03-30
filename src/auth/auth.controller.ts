import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDTO, SignUpDTO } from './dto';
import { IUser } from './types/User';
import { IsPositiveNumber } from 'src/pipes/is-positive-number.pipes';
import { TNoDataFound } from 'src/message';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // @Get()
  // getUsers(@Query() params: any): IUser[] {
  //   return this.authService.findUsersByName(params.name);
  // }
//  @Post(':id')
//   getID(@Param('id') id: string) {
//     console.log('id: ', id);
//     return this.authService.findUserById(id);
//   }

// @Get()
// getUserById(@Query('name') name: string): IUser[] | string {
//   console.log("name: ", name);
//   const result = this.authService.findUsersByName(name);
//   return Array.isArray(result) ? result : result?.message;
// }

  @Post('signup')
  signup(@Body() dto: SignUpDTO) {
    return this.authService.signup(dto);
  }

  @Post('login')
  login(@Body() dto: AuthDTO) {
    // const { password } = req?.body;
    return this.authService.login(dto);
  }

  // @Get()
  //   findUserByAge(@Query('sort') sort: 'asc' | 'desc' = 'desc',
  //           @Query('age', new DefaultValuePipe(100), ParseIntPipe, IsPositiveNumber ) age: number) {
  //             console.log('age is : ', age)
  //             console.log("findUserByAge: ", this.authService.findUserByAge(age, sort))
  //             return this.authService.findUserByAge(age, sort)

  //   }

}
