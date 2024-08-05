import { apiPath, loginObserver } from "@/core/configs";
import { I_User } from "@/shared/types";
import axios from "axios";
import { SyntheticEvent } from "react";
import { from } from "rxjs";

class User {
  constructor(protected path: string = apiPath) {
    this.path = path;
  }

  public async getUser(e: SyntheticEvent, data: I_User) {
    e.preventDefault();

    const myObservable = from(axios.post(`${this.path}/user`, data));

    const result = myObservable.subscribe(loginObserver);

    return result;
  }
}

export const user = new User();
