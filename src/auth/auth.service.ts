// import { Injectable } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
// import { UsersService } from './users.service';
// import { compare } from 'bcrypt';
//
// @Injectable()
// export class AuthService {
//     constructor(
//         private readonly usersService: UsersService,
//         private readonly jwtService: JwtService,
//     ) {}
//
//     async login(loginData: { email: string; password: string }) {
//         const { email, password } = loginData;
//         const user = await this.usersService.findOneByEmail(email);
//
//         if (!user) {
//             throw new Error('Invalid credentials');
//         }
//
//         const isPasswordValid = await compare(password, user.password);
//
//         if (!isPasswordValid) {
//             throw new Error('Invalid credentials');
//         }
//
//         const payload = { email: user.email, sub: user.id };
//         const accessToken = this.jwtService.sign(payload);
//
//         return { access_token: accessToken };
//     }
// }
