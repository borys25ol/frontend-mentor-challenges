import React, { useEffect, useState } from 'react'

import { ReactComponent as IconMoon } from 'assets/icon-moon.svg'
import { ReactComponent as IconSun } from 'assets/icon-sun.svg'
import { Wrapper } from 'components/ThemeSwitcher'
import { useLocalStorage } from 'hooks/useLocalStorage'

function ThemeSwitcher() {
  const { storedValue, setValue } = useLocalStorage('theme', { theme: 'light' })
  const [theme, setTheme] = useState(storedValue.theme)

  const iconsMap = {
    dark: <IconSun />,
    light: <IconMoon />,
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
    setValue({ theme })
  }, [theme, setValue])

  return <Wrapper onClick={() => toggleTheme()}>{iconsMap[theme]}</Wrapper>
}

export { ThemeSwitcher }
