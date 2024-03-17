import { Outlet, NavLink } from "react-router-dom";

const Navbar = () => {
  return(
    <>
      <nav className="flex items-center justify-between p-2">
        <h1 className="text-3xl">REACT ROUTER</h1>
          <ul className="flex">
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