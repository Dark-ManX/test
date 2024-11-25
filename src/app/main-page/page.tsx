"use client";
import UsersList from "@/components/UsersList";
import { getUsers, setUser, setUsers } from "@/server/users";
import { I_User } from "@/types/types";
import { useEffect, useState } from "react";

const UserList = () => {
  const [usersList, setUsersList] = useState<I_User[]>([]);
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (data: FormData) => {
    try {
      if (data.get("name") && data.get("email")) {
        setLoading(true);
        await setUser({
          name: data.get("name") as string,
          email: data.get("email") as string,
        });
        setLoading(false);
        setCount(count + 1);
        alert("User saved");
        localStorage.setItem("users-list", JSON.stringify(usersList));
      }
    } catch (e) {
      if (e instanceof Error) {
        alert(e.message);
      }
    }
  };

  const fetchedUsers = async () => {
    const users = await getUsers();
    setUsersList(users);
  };

  useEffect(() => {
    if (localStorage.getItem("users-list")) {
      setUsers(JSON.parse(localStorage.getItem("users-list") as string));
    }

    const handleBeforeUnload = () => {
      if (usersList.length) {
        localStorage.setItem("users-list", JSON.stringify(usersList));
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  useEffect(() => {
    fetchedUsers();
  }, [count]);

  return (
    <>
      <form action={handleFormSubmit} className="form">
        <label>
          Name
          <input name="name" type="text" className="form--input" />
        </label>
        <label>
          Email
          <input name="email" type="text" className="form--input" />
        </label>
        <button type="submit" className="form--button">
          Add user
        </button>
      </form>

      <h1 className="list--header">Users list</h1>

      {usersList.length ? (
        <UsersList usersList={usersList} />
      ) : (
        <p>{loading ? "Loading..." : "There is no users"}</p>
      )}
    </>
  );
};

export default UserList;
