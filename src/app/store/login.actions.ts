export class SetLogged {
  static readonly type = '[Login] Set Logged';
  constructor(public logged: boolean) {}
}

export class SetUserType {
  static readonly type = '[Login] Set User Type';
  constructor(public userType: string) {}
}
