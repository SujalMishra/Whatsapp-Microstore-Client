import React from 'react';
import { useNavigate } from 'react-router-dom';

function OwnerLogin() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent form submission reload
    navigate("/SellerDashboard");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow ">
      <h2 className="text-2xl font-semibold mb-4">Store Owner Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Email</label>
          <input type="email" className="w-full p-2 border rounded" required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Password</label>
          <input type="password" className="w-full p-2 border rounded" required />
        </div>
        <div>
          <button
            type="submit"
            className="w-full mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default OwnerLogin;
