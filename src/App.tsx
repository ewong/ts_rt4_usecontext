import React from "react";
import "./App.css";
import { useUpdateUserContext, useUserContext, IUser } from "./userprovider";

function App() {
  const user = useUserContext();
  const updateUser = useUpdateUserContext();

  const handleLogin = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("handleLogin: Calling remote login api");
    setTimeout(() => {
      const u: IUser = {
        id: "121k-sjfkl",
        name: "Ricky Bobby",
        email: "shakebake@gmail.com",
      };
      updateUser.setUser(u);
    }, 500);
  };

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("handleLogout: Calling remote logout api");
    setTimeout(() => {
      updateUser.clearUser();
    }, 500);
  };

  return (
    <div className="App">
      <header className="App-header">
        {user ? (
          <button className="button" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <button className="button" onClick={handleLogin}>
            Login
          </button>
        )}
        {user ? (
          <div>
            id: {user.id}, name: {user.name}, email: {user.email}
          </div>
        ) : undefined}
      </header>
    </div>
  );
}

export default App;
