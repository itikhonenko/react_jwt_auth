import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div>
      <NavLink style={{margin: '10px'}} to="/">Main</NavLink>
      <NavLink style={{margin: '10px'}} to="/signin">Signin</NavLink>
      <NavLink style={{margin: '10px'}} to="/signout">Sign Out</NavLink>
      <NavLink style={{margin: '10px'}} to="/heart">Heart</NavLink>
    </div>
  )
}

export default Header;
