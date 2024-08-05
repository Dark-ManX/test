import axios from "axios";
import { SyntheticEvent } from "react";
import { from } from "rxjs";
import { apiPath, loginObserver } from "../configs";

export class Auth {
  constructor(
    private email: string = "",
    private password: string = "",
    private user: any = "",
  ) {
    this.email = "";
    this.password = "";
    this.user = null;
  }

  public getEmail() {
    return this.email;
  }

  public getPassword() {
    return this.password;
  }

  public changeEmail(e: SyntheticEvent) {
    const { value } = e.target as HTMLInputElement;
    return (this.email = value);
  }

  public changePassword(e: SyntheticEvent) {
    const { value } = e.target as HTMLInputElement;
    return (this.password = value);
  }

  public async getUser(e: SyntheticEvent) {
    e.preventDefault();

    const myObservable = from(axios.get(`${apiPath}/user`));

    const data = myObservable.subscribe(loginObserver);

    return data;
  }
}

export const auth = new Auth();
