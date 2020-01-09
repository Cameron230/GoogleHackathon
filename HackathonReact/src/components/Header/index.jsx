import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Header as LunaHeader, HeaderLogo, HeaderNav } from '@jsluna/react'
import { Sainsburys } from '@jsluna/images'
import { HeaderActions } from '@jsluna/header'
import { Favourites, Account, Basket } from '@jsluna/icons'

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

    <HeaderActions align="right" label="Basket and account">
      <a href="#basket">
        <Basket />
        <span className="ln-u-visually-hidden">Basket</span>
      </a>
      <a href="#favourites">
        <Favourites />
        <span className="ln-u-visually-hidden">Favourites</span>
      </a>
      <a href="#account">
        <Account />
        <span className="ln-u-visually-hidden">Account</span>
      </a>
    </HeaderActions>
  </LunaHeader>
)

Header.displayName = 'Header'

export default Header
