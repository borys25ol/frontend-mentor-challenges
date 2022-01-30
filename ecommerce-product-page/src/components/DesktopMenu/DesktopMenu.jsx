import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const MenuList = styled.ul`
  margin-left: 57px;
  display: none;
  list-style: none;

  @media screen and (min-width: 1024px) {
    display: flex;
  }
`

const Menuitem = styled.li`
  margin-right: 33px;

  &:last-child {
    margin-right: 0;
  }
`

const MenuLink = styled.a.attrs(props => {
  return {
    href: props.href,
  }
})`
  font-size: 15px;
  line-height: 26px;
  color: inherit;
  text-decoration: none;
`

function DesktopMenu({ navItems }) {
  return (
    <MenuList>
      {navItems.map(navItem => (
        <Menuitem key={navItem.text}>
          <MenuLink href={navItem.link}>{navItem.text}</MenuLink>
        </Menuitem>
      ))}
    </MenuList>
  )
}

export { DesktopMenu }

DesktopMenu.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.object),
}
