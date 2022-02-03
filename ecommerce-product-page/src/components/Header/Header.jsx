import React, { useState } from 'react'
import styled from 'styled-components'

import AvatarImage from 'assets/images/image-avatar.png'
import { ReactComponent as Logo } from 'assets/icons/logo.svg'
import { MobileMenu } from 'components/MobileMenu'
import { DesktopMenu } from 'components/DesktopMenu'
import { Cart } from 'components/Cart'

const Wrapper = styled.div`
  padding-bottom: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1024px) {
    padding-bottom: 0;
    border-bottom: 1px solid #e4e9f2;
  }
`

const FlexItem = styled.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: 1024px) {
    height: 71px;
    min-width: 150px;
    position: relative;
    align-items: flex-start;
  }
`

const LogoWrapper = styled.div`
  margin-left: 16px;

  @media screen and (min-width: 1024px) {
    margin-left: 0;
  }
`

const Avatar = styled.img.attrs(props => {
  return {
    src: props.src,
  }
})`
  width: 24px;
  height: 24px;
  margin-left: 22px;

  @media screen and (min-width: 1024px) {
    position: absolute;
    bottom: 50%;
    right: 0;
    width: 50px;
    height: 50px;
    border: 2px solid transparent;
    border-radius: 50%;
    transition: 0.3s;

    &:hover {
      border-color: var(--orange);
    }
  }
`

function Header() {
  const [menuOpened, setMenuOpened] = useState(false)
  const [cartOpened, setCartOpened] = useState(false)

  const togleMobileMenu = () => {
    setMenuOpened(!menuOpened)
  }

  const togleCart = () => {
    setCartOpened(!cartOpened)
  }

  const navLinks = [
    {
      link: '#',
      text: 'Collections',
    },
    {
      link: '#',
      text: 'Men',
    },
    {
      link: '#',
      text: 'Women',
    },
    {
      link: '#',
      text: 'About',
    },
    {
      link: '#',
      text: 'Contact',
    },
  ]

  return (
    <Wrapper>
      <FlexItem>
        <MobileMenu
          navItems={navLinks}
          menuOpened={menuOpened}
          handleMenuClick={togleMobileMenu}
        />
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopMenu navItems={navLinks} />
      </FlexItem>
      <FlexItem>
        <Cart cartOpened={cartOpened} handleCartClick={togleCart} />
        <Avatar src={AvatarImage} alt='user-avatat' />
      </FlexItem>
    </Wrapper>
  )
}

export { Header }
