import { IsEmail } from "class-validator";

export class LoginWithEmailDto {
    @IsEmail()
    email: string
}
export class LoginWithGoogleDto { }
