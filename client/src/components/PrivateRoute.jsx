import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

const PrivateRoute = ({ element, ...props }) => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    // If the user is not logged in, redirect to the login page
    return <Navigate to="/login" />;
  }

  // If the user is logged in, render the original Routes
  return <Routes>{element}</Routes>;
};

export default PrivateRoute;