import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
      constructor(
            private jwtService: JwtService
      ) {}
      login(credential: {username: string, password: string}) {
            if(credential.username == "user" && credential.password == "password") {
                  const payload = {
                        sub: "123",
                        username: credential.username,
                        role: "admin"
                  }
                  const token = this.jwtService.sign(payload)

                  return token
            }

            throw new UnauthorizedException("Invalid Credentials")
      }

      async validateToken(token: string) {
            try {
                  const decoded = this.jwtService.verify(token)
                  return {valid: true, userId: decoded.sub, role: decoded.role}
            } catch (error) {
                  return {valid: false, userId: null, role: null}
            }
      }
}
