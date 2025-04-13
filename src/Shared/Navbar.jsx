import React, { useContext } from "react";
import image from "../assets/Images/LOGO.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LuLogIn } from "react-icons/lu";
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { AuthContext } from '../Providers/AuthProviders';
import Swal from 'sweetalert2';
const Navbar = () => {
    const { Quser,Logout } = useContext(AuthContext);
    console.log("user form navbar",Quser);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  // Navigation using
  const naviagte=useNavigate();

  // Logout Funtionality
  const handleLogout = ()=>{
    Logout().then(res=>{

      Swal.fire({
                    title: "Logout Successfull!",
                    icon: "success",
                    draggable: true
                  });
                  setTimeout(()=>{
                    naviagte("/login");
                    },1000);
                  
          }
         
    )
  }
  
  const Authlinks = [
    <>
      <Link
        to="login"
        className="self-start lg:self-center px-0 py-0 lg:px-8 lg:py-3 lg:font-semibold lg:rounded flex items-center justify-center lg:bg-orange-600 lg:text-white"
      >
        Login <LuLogIn className="ml-2 text-xl" />
      </Link>
      <Link
        to="register"
        className="self-start lg:self-center px-0 py-0 lg:px-8 lg:py-3 lg:font-semibold lg:rounded lg:bg-red-600 lg:text-white"
      >
        Sign up
      </Link>
    </>
  ];

  const Links = (
    <>
      <Link
        to="/"
        className={`flex items-center px-4 py-2 ${
          isActive("/") ? "active-link" : "transition-transform duration-300 ease-in-out hover:scale-110 hover:text-black"
        }`}
      >
        Home
      </Link>
      <Link
        to="/availble-foods"
        className={`flex items-center px-4 py-2 ${
          isActive("/availble-foods") ? "active-link" : "transition-transform duration-300 ease-in-out hover:scale-110 hover:text-black"
        }`}
      >
        Available Foods
      </Link>
      <Link
        to="/add-foods"
        className={`flex items-center px-4 py-2 ${
          isActive("/add-foods") ? "active-link" : "transition-transform duration-300 ease-in-out hover:scale-110 hover:text-black"
        }`}
      >
        Add Food
      </Link>
      <Link
        to="/my-foods"
        className={`flex items-center px-4 ${
          isActive("/my-foods") ? "active-link" : "transition-transform duration-300 ease-in-out hover:scale-110 hover:text-black"
        }`}
      >
        Manage My Foods
      </Link>
      <Link
        to="/requests"
        className={`flex items-center px-4 ${
          isActive("/requests") ? "active-link" : "transition-transform duration-300 ease-in-out hover:scale-110 hover:text-black"
        }`}
      >
        My Food Request
      </Link>
    </>
  );
  return (
    <>
      <style>
        {`
  .active-link {
	font-weight:bold;
	position:relative;
  }
 
  .active-link::after{
  content:'';
  position: absolute;
  bottom:0;
  left:0;
  height:4px;
  width:100%;
  background:linear-gradient(90deg,red,yellow,red);
  background-size:300% 100%;
  animation: borderColorChange 8s ease-in-out infinite;
  }
  @keyframes borderColorChange {
  0% { background-position:0% 0%; }

  100% { background-position:100% 0%; }
  
}
 `}
      </style>
      <header className="p-4 bg-yellow-400 volkhov-bold-italic">
        <div className="container flex justify-between h-16 mx-auto">
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <img src={image} alt="" className="w-25" />
          </a>
          <ul className="items-stretch hidden space-x-3 lg:flex text-white font-semibold">
            {Links}
          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex gap-5">
            
            {
              Quser ?(
                <a rel="noopener noreferrer" href="#" className="flex items-center">
                <img src={Quser?.photoURL} alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                <Menu>
               
                <MenuButton>
                <span className="btn bg-orange-600 border-none text-white">{Quser?.displayName}</span>
                </MenuButton>
                <MenuList className="bg-orange-100 px-4 rounded">
                <MenuItem>
                <button className="flex items-center px-4 py-2" onClick={handleLogout}>Logout</button>
               </MenuItem>
               </MenuList>
                </Menu>
              </a>
               ):(Authlinks)
            }
            
          </div>
          <button className="p-4 lg:hidden z-10">
         
                <Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={ <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-6 h-6 dark:text-gray-800"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      ></path>
    </svg>}
    variant='outline'
  />
  <MenuList className="bg-orange-100 py-3">
    <MenuItem>
    <Link
        to="/"
        className={`flex items-center px-4 py-2 ${
          isActive("/") ? "active-link" : "transition-transform duration-300 ease-in-out hover:scale-110 hover:text-black"
        }`}
      >
        Home
      </Link>
    </MenuItem>
<MenuItem>
<Link
        to="/availble-foods"
        className={`flex items-center px-4 py-2 ${
          isActive("/availble-foods") ? "active-link" : "transition-transform duration-300 ease-in-out hover:scale-110 hover:text-black"
        }`}
      >
        Available Foods
      </Link>

</MenuItem>
     <MenuItem>
     <Link
        to="/add-foods"
        className={`flex items-center px-4 py-2 ${
          isActive("/add-foods") ? "active-link" : "transition-transform duration-300 ease-in-out hover:scale-110 hover:text-black"
        }`}
      >
        Add Food
      </Link>
     
     </MenuItem>
    <MenuItem>
    <Link
        to="/my-foods"
        className={`flex items-center px-4 py-2 ${
          isActive("/my-foods") ? "active-link" : "transition-transform duration-300 ease-in-out hover:scale-110 hover:text-black"
        }`}
      >
        Manage My Foods
      </Link>
    
    </MenuItem>
      <MenuItem>
      <Link
        to="/requests"
        className={`flex items-center px-4 py-2 ${
          isActive("/requests") ? "active-link" : "transition-transform duration-300 ease-in-out hover:scale-110 hover:text-black"
        }`}
      >
        My Food Request
      </Link>
      </MenuItem>
      {
        Quser?(
        <MenuItem>
          <button className="flex items-center px-4 py-2" onClick={handleLogout}>Logout</button>
         </MenuItem>
         ):
        (
          <>
          <MenuItem>
          <Link
        to="/login"
        className={`flex items-center px-4 py-2 ${
          isActive("/login") ? "active-link" : "transition-transform duration-300 ease-in-out hover:scale-110 hover:text-black"
        }`}
      >
        Login
      </Link>
     
          </MenuItem>
          <MenuItem>
          <Link
        to="/register"
        className={`flex items-center px-4 py-2 ${
          isActive("/register") ? "active-link" : "transition-transform duration-300 ease-in-out hover:scale-110 hover:text-black"
        }`}
      >
        Sign up
      </Link>
          </MenuItem>
          </>
        )
      }
      
    
  </MenuList>
  
</Menu>
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
