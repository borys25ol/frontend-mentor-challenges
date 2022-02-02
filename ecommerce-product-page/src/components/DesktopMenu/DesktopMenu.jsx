import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const MenuList = styled.ul`
  margin-left: 57px;
  display: none;
  list-style: none;

  @media screen and (min-width: 1024px) {
    padding-bottom: 0;
    display: flex;
    height: 100%;
  }
`

const Menuitem = styled.li`
  flex-grow: 1;
  margin-right: 33px;
  border-bottom: 4px solid transparent;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    transition: 0.3s ease-in;
    border-bottom: 4px solid var(--orange);
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

  &:hover {
    color: var(--black);
  }
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
