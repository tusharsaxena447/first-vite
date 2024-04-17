import React from "react";
import { Link, Outlet } from "react-router-dom";

import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
 
export default function Example() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul className="mb-1 mt-2 flex  flex-col gap-2 lg:mb-0  lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <Link to="/home" className="flex hover:text-purple-900 text-lg focus:text-purple-900 items-center">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <Link to="/about" className="flex hover:text-purple-900 text-lg focus:text-purple-900 items-center">
          About
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <Link to="/contact" className="flex hover:text-purple-900 text-lg focus:text-purple-900 items-center">
          Contact
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <Link to="/form" className="flex hover:text-purple-900 text-lg focus:text-purple-900 items-center">
          Form
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <Link to="/temperature" className="flex hover:text-purple-900 text-lg focus:text-purple-900 items-center">
          Temperature
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <Link to="/task" className="flex hover:text-purple-900 text-lg focus:text-purple-900 items-center">
          Task
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <Link to="/technology" className="flex hover:text-purple-900 text-lg focus:text-purple-900 items-center">
         Technology
        </Link>
      </Typography>
      
    </ul>
  );
 
  return (
    <>
      <Navbar className="sticky bg-black border-0 inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-white-900">
        <a href="/" className="flex hover:text-purple-900 text-lg focus:text-purple-900 items-center">
                        
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">All in one</span>
                    </a>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className=" h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=" h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          
        </MobileNav>
      </Navbar>
      <Outlet/>
    </>
  );
}