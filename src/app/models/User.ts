export class User {

    private _id?: number
    private _name: string
    private _cpf: string
    private _email: string
    private _password: string
    private _token: string

    public get token(): string {
        return this._token
    }
    public set token(value: string) {
        this._token = value
    }

    public get id(): number {
        return this._id
    }
    public set id(id: number) {
        this._id = id;
    }

    public get name(): string {
        return this._name;
    }
    public set name(name: string) {
        this._name = name;
    }

    public get cpf(): string {
        return this._cpf;
    }
    public set cpf(cpf: string) {
        this._cpf = cpf;
    }

    public get email(): string {
        return this._email;
    }
    public set email(email: string) {
        this._email = email;
    }

    public get password(): string {
        return this._password;
    }
    public set password(password: string) {
        this._password = password;
    }
}