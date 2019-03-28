export class AuthToken {

  static isValid(token: AuthToken): boolean {
    return token && new Date() <= new Date(token.expiresIn);
  }

  constructor(public accessToken: string,
    public tokenType: string,
    public expiresIn: number,
    public data_access_expiration_time: number
    ) {}
}


