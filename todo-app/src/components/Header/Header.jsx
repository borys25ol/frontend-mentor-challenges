import React from 'react'

import { ReactComponent as Logo } from 'assets/logo.svg'
import { ThemeSwitcher } from 'components/ThemeSwitcher'
import { Wrapper } from 'components/Header'

function Header() {
  return (
    <Wrapper>
      <Logo />
      <ThemeSwitcher />
    </Wrapper>
  )
}

export { Header }
