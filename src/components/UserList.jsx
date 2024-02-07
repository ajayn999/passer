// UserList.js
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/context";

const UserList = () => {
  const { users } = useContext(UserContext);

  return (
    <div className="userlist-outer-container">
      <div  className="userlist-main-container">
        <h2 className="userlist-heading">User List</h2>
        <Link to="/create-user">
          <button>Create User</button>
        </Link>
        <ul className="userlist-ul-container">
          {users.map((user) => (
            <li key={user.id}>
              <Link to={`/user/${user.id}`}>{user.username}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserList;
