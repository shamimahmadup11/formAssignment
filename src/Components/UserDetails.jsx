import { useLocation } from "react-router-dom";

const UserDetails = () => {
  const location = useLocation();
  const { username, password } = location.state || {};

  return (
    <div className="border m-20 border-gray-300 shadow-lg p-8 rounded w-full max-w-md bg-white flex  flex-col justify-center align-middle">
      <h1 className="text-xl font-bold"> Welcome to the Dashboard</h1>
      <p>
        <strong>Username:</strong> {username}
      </p>
      <p>
        <strong>Password:</strong> {password}
      </p>
    </div>
  );
};

export default UserDetails;
