import React from "react";

const Login = () => {
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
        <form className="flex flex-col text-left p-3 gap-5">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="font-montserrat text-label text-labelColor hover:after:content-['admin@aa.com'] hover:after:text-black hover:after:pl-3 hover:after:underline hover:cursor-pointer"
            >
              Email
            </label>
            <input type="email" className="login-input" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
