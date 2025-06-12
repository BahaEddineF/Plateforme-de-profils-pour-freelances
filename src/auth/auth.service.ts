import {
    Injectable,
    UnauthorizedException,
    BadRequestException,
  } from '@nestjs/common';
  import { JwtService } from '@nestjs/jwt';
  import { InjectRepository } from '@nestjs/typeorm';
  import { Repository } from 'typeorm';
  import * as bcrypt from 'bcryptjs';
  import * as nodemailer from 'nodemailer';
  import { User } from '../user/user.entity';
  import { RegisterDto } from './dto/register.dto';
  import { LoginDto } from './dto/login.dto';
  
  @Injectable()
  export class AuthService {
    constructor(
      @InjectRepository(User)
      private userRepository: Repository<User>,
      private jwtService: JwtService,
    ) {}
  
    async register(registerDto: RegisterDto) {
      const { email, password } = registerDto;
  
      const existing = await this.userRepository.findOneBy({ email });
      if (existing) {
        throw new BadRequestException('User already exists');
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = this.userRepository.create({
        email,
        password: hashedPassword,
      });
  
      await this.userRepository.save(user);
  
      const token = this.jwtService.sign({ id: user.id, email: user.email });
  
      await this.sendConfirmationEmail(user.email, token);
  
      return {
        message: 'Registration successful. Check your email to confirm.',
      };
    }
  
    async confirmEmail(token: string) {
      const payload = this.jwtService.verify(token);
      const user = await this.userRepository.findOneBy({ id: payload.id });
      if (!user) {
        throw new UnauthorizedException('Invalid token');
      }
      user.isConfirmed = true;
      await this.userRepository.save(user);
      return { message: 'Email confirmed successfully' };
    }
  
    async login(loginDto: LoginDto) {
      const { email, password } = loginDto;
      const user = await this.userRepository.findOneBy({ email });
  
      if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new UnauthorizedException('Invalid credentials');
      }
  
      if (!user.isConfirmed) {
        throw new UnauthorizedException('Email not confirmed');
      }
  
      const token = this.jwtService.sign({ id: user.id, email: user.email });
  
      return { access_token: token };
    }
  
    async sendConfirmationEmail(email: string, token: string) {
      const transporter = nodemailer.createTransport({
        host: 'sandbox.smtp.mailtrap.io',
        port: 2525,
        auth: {
          user: '60951511c0f86f', // ✅ Your Mailtrap username
          pass: 'a6d4e1b2e5599a', // ✅ Your Mailtrap password
        },
      });
  
      const confirmationUrl = `http://localhost:3000/auth/confirm?token=${token}`;
  
      await transporter.sendMail({
        from: 'no-reply@freelance.com',
        to: email,
        subject: 'Confirm your email',
        html: `<p>Click the link below to confirm your email:</p>
               <a href="${confirmationUrl}">${confirmationUrl}</a>`,
      });
    }
  }
  