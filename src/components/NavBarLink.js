import { NavLink } from 'react-router-dom'

const NavBarLink = ({ to, label }) => {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => {
        return {
          fontWeight: isActive ? 'bold' : undefined,
          color: isActive ? 'green' : undefined,
        }
      }}
    >
      {label}
    </NavLink>
  )
}

export default NavBarLink
