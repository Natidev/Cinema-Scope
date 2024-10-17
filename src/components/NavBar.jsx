import { useState, useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ThemeContext } from "@/App";
import { Typography } from "@mui/material";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faLessThanEqual, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function NavBar({isLogin, setIsLogin}) {
 const navigate=useNavigate()
  const { theme, switchTheme } = useContext(ThemeContext);


  return (
    <nav className="dark:bg-gray-900 dark:text-gray-300 bg-gray-400 text-slate-950 px-4 py-2 sticky top-0 z-10">
      <div className="flex justify-between items-center">
        <button className="text-2xl font-bold" onClick={(e)=>navigate("/")}>CinemaScope</button>

        <ul className="md:flex space-x-4 hidden ">
          <li>
            <button onClick={switchTheme}>
              {theme == "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            </button>
          </li>
          <li>
            <NavLink
              to="/"
              className="hover:font-semibold transition-all duration-300 ease-in-out"
            >
              <Typography>Home</Typography>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies"
              className="hover:font-semibold transition-all duration-300 ease-in-out"
            >
              <Typography>Movies</Typography>
            </NavLink>
          </li>
          <li>
            {false? (
              <NavLink
                to="/wishList"
                className="hover:font-semibold transition-all duration-300 ease-in-out"
              >
                <Typography>Wish-List</Typography>
              </NavLink>
            ) : (
              ""
            )}
          </li>
          <li>
            <NavLink
              to="/login"
              className="hover:font-semibold transition-all duration-300 ease-in-out"
            >
              <Typography>
                {isLogin ? "Logout" : "Login"}
              </Typography>
            </NavLink>
          </li>
          <li>
            <NavLink to="/search">
              <div className="flex justify-center px-3 pt-1">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="" />
              </div>
            </NavLink>
          </li>
        </ul>

        <div className="md:hidden flex">
          <button onClick={switchTheme} className="mr-3">
            {theme == "dark" ? <LightModeIcon /> : <DarkModeIcon />}
          </button>
          <NavLink to="/search">
            <div className="flex justify-center pr-3 pt-1">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="" />
            </div>
          </NavLink>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <FontAwesomeIcon icon={faBars} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <NavLink to="/" className="w-[100%] h-[100%]">
                  Home
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <NavLink to="/movies" className="w-[100%] h-[100%]">
                  Movies
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <NavLink
                  to="/wishList"
                  className="hover:font-semibold transition-all duration-300 ease-in-out"
                >
                  <Typography>Wish-List</Typography>
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <NavLink to="/login" className="w-[100%] h-[100%]">
                  Login
                </NavLink>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* <div className="flex space-x-4 md:hidden mr-5">
          <button onClick={() => setShow((prev) => !prev)}>///</button>
          {show && (
            <ul className="flex-col space-x-4  absolute right-5 top-16 text-white  gap-3 shadow-lg ">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  wishlist
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  login
                </a>
              </li>
            </ul>
          )}
          
        </div> */}
      </div>
    </nav>
  );
}
