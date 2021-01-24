import { User } from "../types";

const users: User[] = [];

export const addUser = (newUser: User) => {
  users.push(newUser);
};

export const getUser = (user: User) => {
  return users.find(
    (u) => u.username === user.username && u.password === user.password
  );
};