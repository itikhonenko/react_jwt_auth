import { connect, useSelector } from "react-redux";
import { NavLink } from "react-router-dom"
import { signout } from '../actions'

const Header = ({ signout }) => {
  const authenticated = useSelector(({ auth: { authenticated } }) => authenticated)

  if (authenticated) {
    return (
      <div>
        <NavLink style={{margin: '10px'}} to="/">Main</NavLink>
        <NavLink style={{margin: '10px'}} to="/heart">Heart</NavLink>
        <NavLink style={{margin: '10px'}} onClick={signout}>Sign Out</NavLink>
      </div>
    )
  } else {
    return (
      <div>
        <NavLink style={{margin: '10px'}} to="/">Main</NavLink>
        <NavLink style={{margin: '10px'}} to="/signin">Signin</NavLink>
      </div>
    )
  }
}

export default connect(
  null,
  { signout }
)(Header);
