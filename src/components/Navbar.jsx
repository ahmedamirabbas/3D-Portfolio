import { NavLink } from "react-router-dom";

//import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/' className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
        <p className="blue-gradient_text">AA</p>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" } >
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"} >
          Projects
        </NavLink>
        <NavLink to='https://bit.ly/4e9fD1Z' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"} target="blank">
          Courses
        </NavLink>
        <NavLink to='https://ahmedamir7.itch.io' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"} target="blank">
          Play
        </NavLink>
        <NavLink to='https://medium.com/@ahmad.abdulkhalig' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"} target="blank">
          Blog
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;