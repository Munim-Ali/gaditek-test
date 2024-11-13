import { useForm } from "react-hook-form";
import LoginImg from "../assets//images/login.webp";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { loginSchema } from "../lib/zodSchema";
import emailIcon from "../assets/icons/email.svg";
import passwordIcon from "../assets/icons/password.svg";
import { useState } from "react";
import eyeOpen from "../assets/icons/eye.svg";
import { credentials } from "../data.json";
import { Link, useNavigate } from "react-router-dom";

interface LoginFormData {
  usernameOrEmail: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: LoginFormData) => {
    if (
      data.usernameOrEmail === credentials.username &&
      data.password === credentials.password
    ) {
      navigate("/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };
  return (
    <>
      <section className="w-full h-screen flex flex-row items-center justify-center p-[30px]">
        <div className="hidden lg:block w-1/2 h-full">
          <img src={LoginImg} className="w-full object-cover h-full" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
          <h1 className="text-black text-[40px] font-poppins font-normal leading-loose">
            Sign In
          </h1>
          <p className="font-poppins text-[20px] text-[#909090] font-normal pt-10px">
            Stay updated on your professional world
          </p>
          <form className="w-[80%]" onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full mt-[24px] flex flex-row items-center justify-between">
              <div className="w-full mt-[20px] relative flex flex-row items-center justify-start px-5 py-4">
                <div>
                  <img src={emailIcon} className="" />
                </div>
                <input
                  type="text"
                  id=""
                  placeholder="Enter Username"
                  className="inputField rounded-sm font-poppins font-normal text-black py-[0.875rem] ml-4 pr-[12px] w-full text-14 focus:outline-none"
                  {...register("usernameOrEmail")}
                />

                {errors.usernameOrEmail && (
                  <div className="error-message">
                    {errors.usernameOrEmail.message}
                  </div>
                )}
              </div>
            </div>

            <div className="w-full mt-[20px] relative flex flex-row items-center justify-start px-5 py-4">
              <div>
                <img src={passwordIcon} className="" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                id=""
                placeholder="Password"
                className="inputField rounded-sm font-poppins font-normal text-black py-[0.875rem] ml-4 pr-[12px] w-full text-14 focus:outline-none "
                {...register("password")}
              />

              {errors.password && (
                <div className="error-message">{errors.password.message}</div>
              )}
              <button
                type="button"
                className="eye-button"
                onClick={() => setShowPassword(!showPassword)}
              >
                <img
                  src={eyeOpen}
                  className="absolute top-[30px]  right-[20px]"
                />
              </button>
            </div>

            <div className="w-full mt-[40px]">
              <button
                type="submit"
                className={`w-full font-poppins font-semibold  uppercase pt-3 pb-3 pl-6 pr-6 text-white bg-blue rounded-full`}
                name="submit"
              >
                {/* {isLoading ? "Logging In..." : "Login"} */}
                Next
              </button>
            </div>
          </form>
          <p className="font-poppins text-[20px] text-[#909090] font-normal mt-[30px]">
            Don’t have an account?{" "}
            <Link to={"/signup"}>
              <span className="text-blue font-bold underline">Sign Up</span>
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default Login;
