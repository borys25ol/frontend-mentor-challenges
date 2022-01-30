import { useState, useEffect } from 'react'
import { ThreeDots } from 'react-loader-spinner'

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
    if (!theme) {
      return
    }
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  if (!theme) {
    return <ThreeDots color='black' wrapperClass='spinner' />
  }

  return (
    <Main active={show}>
      <Quote active={!show} />
      <Time handleClick={handleClick} />
      <Details active={show} />
    </Main>
  )
}

export default App
