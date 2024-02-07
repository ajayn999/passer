import React, { useState, useContext } from "react";
import { useNavigate,Link } from "react-router-dom"; // Import useNavigate
import UserContext from "../context/context";

const CreateUser = () => {
  const [formData, setFormData] = useState({
    id: "",
    username: "",
    email: "",
    role: "",
  });

  const { users, setUsers } = useContext(UserContext);
  const navigate = useNavigate(); // Use useNavigate hook to access navigation functionality

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform validation before adding the new user
    const newUser = {
      id: formData.id,
      username: formData.username,
      email: formData.email,
      role: formData.role,
    };
    setUsers([...users, newUser]);
    // Redirect to user list after creating user
    navigate("/"); // Use navigate function to navigate to the specified route
  };

  return (
    <div className="create-outer-container">
      <div className="create-main-container">
        <h2 className="create-heading">Create User</h2>
        <form className="create-form" onSubmit={handleSubmit}>
          <div>
            <label>
              Official ID:
              <input
                type="text"
                name="id"
                value={formData.id}
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              Username:
              <input
              required
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              Role:
              <select name="role" value={formData.role} onChange={handleChange}>
                <option value="admin">Admin</option>
                <option value="Manager">Manager</option>
                <option value="frontdesk">front desk</option>
                <option value="employee">Employee</option>
              </select>
            </label>
          </div>
<div className="create-button-container">

          <div className="create-button">
            <button type="submit">Create User</button>
          </div>
          <div className="create-button">
            <Link to='/'>Cancel</Link>
          </div>
</div>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
