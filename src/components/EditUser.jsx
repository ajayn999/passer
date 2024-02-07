// EditUser.js
import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import UserContext from "../context/context";

const EditUser = () => {
  const { id } = useParams();
  const { users, setUsers } = useContext(UserContext);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    role: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const user = users.find((user) => user.id === id);
    if (user) {
      setFormData({
        username: user.username,
        email: user.email,
        role: user.role,
      });
    }
  }, [id, users]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, ...formData } : user
    );
    setUsers(updatedUsers);
    navigate(`/user/${id}`);
  };

  return (
    <div className="edit-outer-container">
      <div className="edit-main-container">
        <h2 className="edit-heading">Edit User</h2>
        <form className="edit-form" onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Role:
            <select name="role" value={formData.role} onChange={handleChange}>
              <option value="admin">Admin</option>
              <option value="Manager">Manager</option>
              <option value="frontdesk">front desk</option>
              <option value="employee">Employee</option>
            </select>
          </label>
          <div className="edit-button-container">

          <div className="edit-button">
            <button type="submit">Save</button>
          </div>
          <div className="edit-button">
            <Link to="/">Home</Link>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
