import { I_ListProps, I_User } from "@/types/types";

const UsersList = ({ usersList }: I_ListProps) => {
  return (
    <ul>
      {usersList.map((el: I_User) => (
        <li key={el.email} className="users-list--item">
          <p>{el.name + " " + el.email}</p>
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
