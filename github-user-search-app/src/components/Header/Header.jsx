import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { ReactComponent as MoonIcon } from './../../assets/icon-moon.svg'
import { ReactComponent as SunIcon } from './../../assets/icon-sun.svg'

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > svg {
    cursor: pointer;

    path {
      fill: var(--color-text);
    }
  }
`

const Theme = styled.span`
  font-size: 13px;
  line-height: 19px;
  letter-spacing: 2.5px;
  margin-right: 16px;
  font-weight: var(--weight-bold);
  text-transform: uppercase;
`

function Header() {
  const [theme, setTheme] = useState('light')

  const iconsMap = {
    light: <SunIcon />,
    dark: <MoonIcon />,
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <FlexContainer>
      <h1>devfinder</h1>
      <FlexContainer onClick={() => toggleTheme()}>
        <Theme>{theme}</Theme>
        {iconsMap[theme]}
      </FlexContainer>
    </FlexContainer>
  )
}

export { Header }
