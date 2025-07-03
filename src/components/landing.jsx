import React from "react";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4">
      <div className="max-w-xl w-full space-y-6">
        
        <h1 className="text-3xl font-bold text-center">
          Welcome to WhatsApp Microstore
        </h1>
        <p className="text-center text-gray-600">
          Your one-stop solution for setting up a WhatsApp-based microstore.
        </p>

        <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Get Started</h2>
          <p>Follow the steps below to set up your WhatsApp Microstore:</p>
          <ol className="list-decimal list-inside space-y-2">
            <li>Connect your WhatsApp account</li>
            <li>Customize your store settings</li>
            <li>Add products to your catalog</li>
          </ol>
          <button
            className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => navigate("/setupStore")}
          >
            Start Setup
          </button>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Already Have a Store?</h2>
          <p>
            You can manage your products and settings from your store dashboard.
          </p>
          <button
            className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            onClick={() => navigate("/ownerLogin")}
          >
            Manage Store
          </button>
        </div>

      </div>
    </div>
  );
}

export default Landing;
