import React, { useEffect, useState } from "react";
import "./User.css";
import axios from "axios";
import User from "./User";
const URL = "http://localhost:5000/user";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Users = () => {
  const [users, setUsers] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setUsers(data.users));
  }, []);
  console.log(users);
  return (
    <div>
      <ul>
        {users &&
          users.map((user, i) => (
            <li key={i}>
              <User user={user} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Users;
