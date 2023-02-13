import { Body, Controller, Post } from '@nestjs/common';
import { LoginWithEmailDto } from './dto/login.dto';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) { }

  @Post()
  loginWithEmail(@Body() login: LoginWithEmailDto) {
    return this.loginService.loginWithEmail(login);
  }

  // @Post()
  // loginWithGoogle(@Body() login: LoginWithGoogleDto) {
  //   // this.loginService.create(login);
  //   return "comming soon!"
  // }

  // @Post()
  // loginWithFb(@Body() login: any) {
  //   // this.loginService.create(login);
  //   return "comming soon!"
  // }

}
