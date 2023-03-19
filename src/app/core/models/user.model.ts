export class User {
  private readonly password: string | null;
  private email: string;

  constructor(email: string, pwd: string) {
    this.email = email;
    this.password = pwd;
  }

  get getEmail(): string {
    return this.email;
  }

  set setEmail(value: string) {
    this.email = value;
  }

  get getPassword(): string | null {
    return this.password;
  }

  static fromJson(json: any): User {
    return new User(json.email, json.password);
  }
}
