import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div>
      <NavLink to="/">Main</NavLink>
      <NavLink to="/signin">Signin</NavLink>
      <NavLink to="/signout">Sign Out</NavLink>
      <NavLink to="/heart">Heart</NavLink>
    </div>
  )
}

export default Header;
