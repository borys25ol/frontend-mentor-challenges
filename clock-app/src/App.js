import { useState, useEffect } from 'react'

import { Main } from './components/Main'
import { Time } from './components/Time'
import { Quote } from './components/Quote'
import { Details } from './components/Details'
import { useTheme } from './hooks/useTheme'

function App() {
  const [show, setShow] = useState(false)
  const { theme } = useTheme()

  const handleClick = () => setShow(!show)

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <Main active={show}>
      <Quote active={!show} />
      <Time handleClick={handleClick} />
      <Details active={show} />
    </Main>
  )
}

export default App
