import React from 'react'
import styled from 'styled-components'

import { ReactComponent as IconMenuOpen } from 'assets/icons/icon-menu.svg'
import { ReactComponent as IconClose } from 'assets/icons/icon-close.svg'
import PropTypes from 'prop-types'

const BurgetButton = styled.span`
  margin-bottom: 1px;
  cursor: pointer;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`

const MenuWrapper = styled.div`
  position: fixed;
  top: 0;
  right: ${props => (props.opened ? '0' : '100%')};
  width: 100%;
  height: 100%;
  background-color: var(--black-background);
  transition: 0.3s ease-out;
  z-index: 30;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`

const Menu = styled.div`
  position: relative;
  right: ${props => (props.opened ? '0' : '100%')};
  transition: 0.5s ease-in;
  padding: 20px 24px 0 24px;
  width: 250px;
  height: 100%;
  background-color: var(--white);

  @media screen and (min-width: 768px) {
    padding-top: 43px;
    width: 350px;
  }
`

const CloseButton = styled.span`
  margin-top: 23px;
  margin-bottom: 1px;
  cursor: pointer;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`

const MenuList = styled.ul`
  margin: 72px 0 0 0;
  list-style: none;
`

const Menuitem = styled.li`
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
  }
`

const MenuLink = styled.a.attrs(props => {
  return {
    href: props.href,
  }
})`
  font-size: 18px;
  line-height: 26px;
  color: var(--black);
  font-weight: var(--fw-bold);
  text-decoration: none;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`

function MobileMenu({ navItems, menuOpened, handleMenuClick }) {
  return (
    <>
      <BurgetButton onClick={() => handleMenuClick()}>
        <IconMenuOpen />
      </BurgetButton>
      <MenuWrapper opened={menuOpened}>
        <Menu opened={menuOpened}>
          <CloseButton onClick={() => handleMenuClick()}>
            <IconClose />
          </CloseButton>
          <MenuList>
            {navItems.map(navItem => (
              <Menuitem key={navItem.text}>
                <MenuLink href={navItem.link}>{navItem.text}</MenuLink>
              </Menuitem>
            ))}
          </MenuList>
        </Menu>
      </MenuWrapper>
    </>
  )
}

export { BurgetButton, MobileMenu }

MobileMenu.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.object),
  menuOpened: PropTypes.bool,
  handleMenuClick: PropTypes.func,
}
