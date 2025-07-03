import React from 'react'

function ownerLogin() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Store Owner Login</h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Email</label>
          <input type="email" className="w-full p-2 border rounded" required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Password</label>
          <input type="password" className="w-full mb-2 p-2 border rounded" required />
        </div>
        <div>
        <button type="submit" className="mt-6 bg-blue-500 text-white px-4 py-4 rounded hover:bg-blue-600">
          Login
        </button>
        </div>
      </form>
    </div>
  )
}

export default ownerLogin
