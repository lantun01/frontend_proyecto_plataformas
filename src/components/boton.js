import React from 'react';
import { Redirect } from 'react-router-dom';

const RedirectButton = ({ to, label }) => {
  const handleClick = () => {
    return <Redirect to={to} />;
  };

  return (
    <button onClick={handleClick}>{label}</button>
  );
};

export default RedirectButton;