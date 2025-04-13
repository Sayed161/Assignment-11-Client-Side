import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import loginImage from "../assets/Images/Animation1.json";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Lottie from "lottie-react";
import { AuthContext } from "../Providers/AuthProviders";
import Swal from 'sweetalert2'

const RegisterPage = () => {
  const { createNewUser,setUser,setLoading }= useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

    const navigate = useNavigate();
  // Register Form 
  const handleLogin = (data) => {
  
    createNewUser(data).then(result=> {
      
      const user = result.user;
      setUser(user);
      setLoading(false);
      Swal.fire({
        title: "Registration Successfull!",
        icon: "success",
        draggable: true
      });
      setTimeout(()=>{
        navigate("/");
        },2000);
      
    }
      
    )

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
              Register with HurgerHero
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
              className="space-y-6"
              onSubmit={handleSubmit(handleLogin)}
            >
              <div className="space-y-1 text-sm">
                <label htmlFor="Name" className="block font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  name="Name"
                  id="Name"
                  placeholder="Name"
                  {...register("Name", { required: "Name is required" })}
                  className="w-full px-4 py-3 rounded-md bg-white text-gray-800 border border-gray-600"
                />
                {errors.Name && <p className="">{errors.Name.message}</p>}
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="email" className="block font-semibold">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  {...register("email", { required: "email is required" })}
                  placeholder="leroy@jenkins.com"
                  className="w-full px-4 py-3 rounded-md bg-white text-gray-800 border border-gray-600"
                />

                {errors.email && <p className="">{errors.email.message}</p>}
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="Photo URL" className="block font-semibold">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photo"
                  {...register("photo", { required: "photo is required" })}
                  placeholder="https://i.ibb.co.com/Y7gxy5kk/5.png"
                  className="w-full px-4 py-3 rounded-md bg-white text-gray-800 border border-gray-600"
                />

                {errors.photo && <p className="">{errors.photo.message}</p>}
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
                    minLength: {
                      value: 6,
                      message: "Password Must be at least 6 Charecters",
                    },
                    validate: (value) => {
                      if (!/[A-Z]/.test(value)) {
                        return "Password must contain at least one uppercase letter";
                      }
                      if (!/[a-z]/.test(value)) {
                        return "Password must contain at least one lowercase letter";
                      }
                      if (!/(?=.\d)/.test(value)) {
                        return "Password must contain at least one number";
                      }
                    },
                  })}
                  className="w-full px-4 py-3 rounded-md bg-white text-gray-800 border border-gray-600"
                />
                {errors.password && <p>{errors.password.message}</p>}
                <div className="flex justify-end text-xs font-semibold">
                  <a rel="noopener noreferrer" href="#">
                    Forgot Password?
                  </a>
                </div>
              </div>
              <button className="block cursor-pointer w-full p-3 text-center rounded-sm text-white bg-neutral font-bold">
                Register
              </button>
            </form>
            <p className="text-center sm:px-6 text-gray-600 pt-4">
              Already have an account ?
              <Link
                to="/login"
                rel="noopener noreferrer"
                className="underline text-gray-800 px-1 font-semibold"
              >
                Login
              </Link>
            </p>
          </div>
          <img src="https://static.vecteezy.com/system/resources/previews/003/689/230/non_2x/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg" alt="" className="object-center min-h-full mx-auto rounded-md col-span-3"/>
  

          {/* <img src={loginImage} alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500" /> */}
        </div>
      </section>
      {/* <div className="w-full max-w-2xl p-8 space-y-3 rounded-xl bg-[#808080fa] lg:mx-auto my-20">
        <h1 className="text-4xl font-bold text-center text-white">Register</h1>
       

       
      </div> */}
    </div>
  );
};

export default RegisterPage;
