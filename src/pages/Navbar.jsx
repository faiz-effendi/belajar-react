import { Outlet, NavLink } from "react-router-dom";

const Navbar = () => {
  return(
    <>
      <nav className="flex items-center justify-between py-4 px-12 drop-shadow-lg">
        <h1 className="text-3xl">REACT ROUTER</h1>
          <ul className="flex gap-x-5 text-xl">
            <li>
               <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/About">About</NavLink>
            </li>
            <li>
              <NavLink to="/Login">Login</NavLink>
            </li>
          </ul>
        </nav>

        <Outlet />
    </>
  )
}

export default Navbar;