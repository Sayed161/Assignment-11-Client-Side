import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import loginImage from "../assets/Images/login.png";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Swal from 'sweetalert2'
import { AuthContext } from "../Providers/AuthProviders";

const LoginPage = () => {
  const { userLogin,GoogleLogin,setUser,setLoading } = useContext(AuthContext);
  const handleGoogleLogin = ()=>{
    GoogleLogin().then(
    res=>{
      const user = res.user;
      setUser(user);
      setLoading(false);
      Swal.fire({
              title: "Login Successfull!",
              icon: "success",
              draggable: true
            });
            setTimeout(()=>{
              navigate("/");
              },2000);
            
    }
    )
  }
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = (data) => {
    userLogin(data).then(res=>{
      const user = res.user;
      setUser(user);
      setLoading(false);
      Swal.fire({
              title: "Login Successfull!",
              icon: "success",
              draggable: true
            });
            setTimeout(()=>{
              navigate("/");
              },2000);
            
    }
    );
  };
  return (
    <div>
      <section className="p-6 bg-gray-100 text-gray-800">
        <div className="container grid gap-6 mx-auto text-start lg:grid-cols-2 xl:grid-cols-5">
          <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 bg-gray-50">
          <span className="block mb-2 text-violet-600">
              Hunger Hero design system
            </span>
            <h1 className="text-5xl font-extrabold text-gray-900">
              Login NOW!! HurgerHero
            </h1>
            <p className="my-8">
              <span className="font-medium text-gray-900">
               Hungry Or Giving ? 
              </span>
               Don't waste your foods.Give it to us, we will distribute or needed person will take it.
            </p>
            <form
              noValidate=""
              action=""
              className="space-y-6 order-2"
              onSubmit={handleSubmit(handleLogin)}
            >
              <div className="space-y-1 text-sm">
                <label htmlFor="email" className="block font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                  {...register("email", {
                    required: "email is required",
                  })}
                  className="w-full px-4 py-3 rounded-md border border-gray-800 bg-white text-gray-800"
                />
                {errors.email && (
                  <p className="">{errors.email.message}</p>
                )}
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="password" className="block font-semibold">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className="w-full px-4 py-3 rounded-md bg-white text-gray-800 border border-gray-800"
                />
                {errors.password && <p>{errors.password.message}</p>}
                <div className="flex justify-end text-xs font-semibold">
                  <a rel="noopener noreferrer" href="#">
                    Forgot Password?
                  </a>
                </div>
              </div>
              <button className="block cursor-pointer w-full p-3 text-center rounded-sm text-gray-50 bg-black">
                Login
              </button>
            </form>
            <div className="flex items-center pt-4 space-x-1">
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
              <p className="px-3 text-sm text-black font-semibold">
                Login with social accounts
              </p>
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
            </div>
            <div className="flex justify-center space-x-4">
              <button onClick={handleGoogleLogin}
                aria-label="Log in with Google"
                className="p-3 rounded-sm"
              >
               
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
              
              </button>
            
            </div>
            <p className="text-xs text-center sm:px-6 dark:text-gray-600">
              Don't have an account ?
              <Link
                to="/register"
                rel="noopener noreferrer"
                className="underline text-gray-800 px-1 font-semibold"
              >
                Sign up
              </Link>
            </p>
          </div>
      <DotLottieReact
      src="https://lottie.host/0a4ebe6c-43f1-471a-accb-42dbe29c297e/51rBNxQxN4.lottie"
      loop
      autoplay
      className="object-center w-8/12 mx-auto rounded-md col-span-3"
    />
        </div>
      </section>
  
    </div>
  );
};

export default LoginPage;
