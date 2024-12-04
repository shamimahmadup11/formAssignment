import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    username: "",
    password: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/userdetail", { state: formdata });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="border border-gray-300 shadow-lg p-8 rounded w-full max-w-md bg-white">
        <h1 className="text-2xl font-bold text-center mb-6">Login!</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-bold mb-2"
            >
              Username
            </label>
            <input
               className="w-full px-4 py-2 border rounded"
              type="text"
              name="username"
              placeholder="Enter Username"
              value={formdata.username}
              id="username"
              onChange={handlechange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              className="w-full px-4 py-2 border rounded"
              type="password"
              name="password"
              placeholder="Enter Password"
              id="password"
              value={formdata.password}
              onChange={handlechange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
