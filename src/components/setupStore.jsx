import React from "react";
import { useState } from "react";

function setupStore() {
  const [storeInfo, setStoreInfo] = useState({
    ownerEmail: "",
    password: "",
    name: "",
    whatsappNumber: "",
    description: "",
  });


  const putInfo = (e) => {
    e.preventDefault();
    console.log("Store setup information submitted");
    console.log(storeInfo);
  };
  return (
    <div>
      <div className="max-w-xl mx-auto p-4 space-y-4">
        <div>
          <h3 className="text-3xl font-bold text-center">
            Setup Your WhatsApp Microstore
          </h3>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="mb-4">
            Please provide the necessary information to set up your store:
          </p>
          <form onSubmit={putInfo}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Owner Email
              </label>
              <input
                type="email"
                value={storeInfo.ownerEmail}
                onChange={(e) =>
                  setStoreInfo({ ...storeInfo, ownerEmail: e.target.value })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                value={storeInfo.password}
                onChange={(e) =>
                  setStoreInfo({ ...storeInfo, password: e.target.value })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Store Name
              </label>
              <input
                type="text"
                value={storeInfo.name}
                onChange={(e) =>
                  setStoreInfo({ ...storeInfo, name: e.target.value })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                WhatsApp Number
              </label>
              <input
                type="tel"
                value={storeInfo.whatsappNumber}
                onChange={(e) =>
                  setStoreInfo({ ...storeInfo, whatsappNumber: e.target.value })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Store Description
              </label>
              <textarea
                value={storeInfo.description}
                onChange={(e) =>
                  setStoreInfo({ ...storeInfo, description: e.target.value })
                }
                className="w-full p-2 border rounded"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default setupStore;
