import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Header as LunaHeader, HeaderLogo, HeaderNav } from '@jsluna/react'
import { Sainsburys } from '@jsluna/images'

import routes from 'routes'

const Header = () => (
  <LunaHeader>
    <HeaderLogo>
      <Link to="/">
        <Sainsburys
          aria-label="Sainsbury's logo"
          style={{ verticalAlign: 'middle', height: '24px' }}
        />
      </Link>
    </HeaderLogo>
    <HeaderNav openDropdownOnHover drawer label="Main">
      {routes.map(({ path, name }) => (
        <NavLink key={path} to={path} activeClassName="is-active">
          {name}
        </NavLink>
      ))}
    </HeaderNav>
  </LunaHeader>
)

Header.displayName = 'Header'

export default Header
