import React, { useState } from 'react'
import styled from 'styled-components'

import AvatarImage from 'assets/images/image-avatar.png'
import { ReactComponent as Logo } from 'assets/icons/logo.svg'
import { MobileMenu } from 'components/MobileMenu'
import { DesktopMenu } from 'components/DesktopMenu'
import { Cart } from 'components/Cart'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const FlexItem = styled.div`
  display: flex;
  align-items: center;
`

const LogoWrapper = styled.div`
  margin-left: 16px;

  @media screen and (min-width: 1024px) {
    margin-left: 0;
  }
`

const Avatar = styled.img.attrs(props => {
  return {
    scr: props.src,
  }
})`
  width: 24px;
  height: 24px;
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
        <Avatar src={AvatarImage} />
      </FlexItem>
    </Wrapper>
  )
}

export { Header }
