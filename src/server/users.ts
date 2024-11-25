"use server";
import { I_User } from "@/types/types";

const users: I_User[] = [];

export const setUser = async (user: I_User) => {
  if (!users.map((el) => el.email).includes(user.email)) {
    users.push(user);
  } else {
    throw new Error();
  }
};

export const setUsers = async (reqUsers: I_User[]) => {
  for (let i = 0; i < reqUsers.length; i += 1) {
    if (!users.some((el) => el.email === reqUsers[i].email)) {
      users.push(reqUsers[i]);
    }
  }
};

export const getUsers = async () => {
  return users;
};
