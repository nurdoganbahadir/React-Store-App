import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      email.toLowerCase() === "admin@aa.com" &&
      pass.toLowerCase() === "admin"
    ) {
      login({ email, pass });
    } else {
      alert("Kullanıcı bilgileri yanlış");
    }
  };
  return (
    <div className="loginDiv">
      <div className="h-[500px] w-11/12 sm:w-[475px] bg-white rounded-[20px] p-5 flex flex-col justify-center text-center">
        <div className="flex justify-center items-center mt-2 gap-2">
          <span className="w-[6px] h-[39px] bg-yellow-500"></span>
          <h1 className="text-[22px] sm:text-[32px] font-montserrat font-[700] uppercase">
            Clarus Store
          </h1>
        </div>
        <div className="my-2">
          <h3 className="font-montserrat font-[600] text-[22px]">SIGN IN</h3>
          <p className="font-montserrat text-labelColor text-label">
            Enter your credentials to access your account
          </p>
        </div>
        <form
          className="flex flex-col text-left p-3 gap-5"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="font-montserrat text-label text-labelColor hover:after:content-['admin@aa.com'] hover:after:text-black hover:after:pl-3 hover:after:underline hover:cursor-pointer"
            >
              Email
            </label>
            <input
              type="email"
              className="login-input"
              id="email"
              placeholder="Enter your email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="font-montserrat text-label text-labelColor hover:after:content-['admin'] hover:after:text-black hover:after:pl-3 hover:after:underline hover:cursor-pointer"
            >
              Password
            </label>
            <input
              type="password"
              className="login-input"
              id="password"
              placeholder="Enter your password"
              required
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <button className="bg-main h-[44px] font-montserrat text-label text-white hover:opacity-90 rounded-[4px]">
            SIGN IN
          </button>
          <div className="flex justify-center items-center flex-wrap">
            <span className="text-label font-montserrat font-[400] text-labelColor">
              Forget your password?
            </span>
            <span className="text-main text-[14px] font-montserrat font-[500] underline ml-1">
              Reset password
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
