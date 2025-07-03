import React, { useState } from "react";
// import { X } from 'lucide-react'; // Optional, plain 'X' works too

function CreateCatalog() {
  const [catalogInfo, setCatalogInfo] = useState([
    { productName: "", productDescription: "", price: "" },
  ]);

  const handleInputChange = (index, field, value) => {
    const updatedCatalog = [...catalogInfo];
    updatedCatalog[index][field] = value;
    setCatalogInfo(updatedCatalog);
  };

  const addProduct = () => {
    setCatalogInfo([
      ...catalogInfo,
      { productName: "", productDescription: "", price: "" },
    ]);
  };

  const removeProduct = (index) => {
    const updatedCatalog = catalogInfo.filter((_, i) => i !== index);
    setCatalogInfo(updatedCatalog);
  };

  const handleCatalogSubmit = (e) => {
    e.preventDefault();
    console.log("Catalog information submitted:", catalogInfo);
  };

  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full space-y-6 bg-white shadow-lg rounded-xl p-8">
        <h3 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Create Product Catalog
        </h3>

        <form onSubmit={handleCatalogSubmit} className="">
          {catalogInfo.map((product, index) => (
            <div
              key={index}
              className="border px-4 py-6 overflow-hidden m-4"
            >
              <h4 className="font-semibold text-lg text-gray-700">
                Product {index + 1}
              </h4>
              <div className="space-y-2 mx-2 ">
                <label className="block text-sm font-medium text-gray-600">
                  Product Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 border rounded focus:outline-blue-400"
                  value={product.productName}
                  onChange={(e) =>
                    handleInputChange(index, "productName", e.target.value)
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-600">
                  Product Description
                </label>
                <textarea
                  className="w-full p-3 border rounded focus:outline-blue-400"
                  rows="3"
                  value={product.productDescription}
                  onChange={(e) =>
                    handleInputChange(
                      index,
                      "productDescription",
                      e.target.value
                    )
                  }
                  required
                ></textarea>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-600">
                  Price
                </label>
                <input
                  type="number"
                  className="w-full p-3 border rounded focus:outline-blue-400"
                  value={product.price}
                  onChange={(e) =>
                    handleInputChange(index, "price", e.target.value)
                  }
                  required
                />
              </div>
              <button
                type="button"
                onClick={() => removeProduct(index)}
                className="bg-red-500 hover:bg-red-600 text-white rounded-full p-2 mb-2"
              >
                X
              </button>
            </div>
          ))}

          {/* Add Product Button */}
          <div className="text-center">
            <button
              type="button"
              onClick={addProduct}
              className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
            >
              + Add Product
            </button>
          </div>

          {/* Create Catalog Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-4 text-lg font-semibold rounded hover:bg-orange-600"
            >
              Create Catalog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateCatalog;
