export class SetLogged {
  static readonly type = '[Login] Set Logged';
  constructor(public logged: boolean) {}
}

export class SetUser {
  static readonly type = '[Login] Set User';
  constructor(
    public name: string,
    public userType: string,
    public empresaId: string
  ) {}
}

export class SetLoggout {
  static readonly type = '[Login] Loggout';
  constructor() {}
}
