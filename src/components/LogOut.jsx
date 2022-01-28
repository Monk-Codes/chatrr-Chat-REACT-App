import React from 'react';

const LogOut = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location.reload();

  };

  return (
        <form onSubmit={handleSubmit}>
          <div align="center">
            <button type="submit" className="logout">
              <span>Logout</span>
            </button>
          </div>
        </form>

  );
};

export default LogOut;