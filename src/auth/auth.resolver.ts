import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => String)
async register(@Args('registerInput') registerDto: RegisterDto): Promise<string> {
  const result = await this.authService.register(registerDto);
  return result.message;
}


  @Mutation(() => String)
  async login(@Args('loginInput') loginDto: LoginDto): Promise<string> {
    const result = await this.authService.login(loginDto);
    return result.access_token;
  }

  @Mutation(() => String)
  async confirmEmail(@Args('token') token: string): Promise<string> {
    const result = await this.authService.confirmEmail(token);
    return result.message;
  }
}
