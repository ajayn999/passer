// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './context/context';
import UserListPage from './components/UserList';
import UserDetails from './components/UserDetails';
import CreateUserPage from './components/CreateUser';
import EditUserPage from './components/EditUser';

const App = () => {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<UserListPage />} />
          <Route path="/user/:id" element={<UserDetails />} />
          <Route path="/create-user" element={<CreateUserPage />} />
          <Route path="/user/:id/edit" element={<EditUserPage />} />
        </Routes>
      </UserProvider>
    </Router>
  );
};

export default App;

