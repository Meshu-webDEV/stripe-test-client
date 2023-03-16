import React from "react";

import { backendAPI } from "./lib/backend";

const App = () => {
  //

  const handleSignin = async (e) => {
    try {
      e.preventDefault();

      await backendAPI.post("/client/users/signin", {
        email: "jog@jo.com",
        password: "1qaz2wsx",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignout = async (e) => {
    try {
      e.preventDefault();

      await backendAPI.post("/client/users/signout", {
        email: "jog@jo.com",
        password: "1qaz2wsx",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App bg-slate-50 w-full min-h-screen flex flex-col justify-center items-center">
      React boilerplate
      <button
        onClick={handleSignin}
        className="bg-green-300 px-4 py-1 rounded-md"
      >
        Signin
      </button>
      <button
        onClick={handleSignout}
        className="bg-red-300 px-4 py-1 rounded-md"
      >
        Signout
      </button>
    </div>
  );
};

export default App;
