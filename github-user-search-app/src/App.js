import { useEffect, useState } from 'react'

import { Header } from './components/Header'
import { SearchBar } from './components/SearchBar'
import { UserCard } from './components/UserCard/UserCard'
import { Main } from './components/Main'
import { useFetch } from './hooks/useFetch'
import { extractData } from './utils/extractData'

function App() {
  const [value, setValue] = useState('octocat')
  const [showError, setShowError] = useState(false)
  const [updateInfo, setUpdateInfo] = useState(false)
  const [currentProfile, setCurrentProfile] = useState(null)
  const [{ isLoading, response, isError }, doFetch] = useFetch(value)

  const handleSearch = () => {
    setUpdateInfo(true)
  }

  useEffect(() => {
    doFetch()
    setUpdateInfo(false)
  }, [doFetch, updateInfo])

  useEffect(() => {
    if (!response) {
      return
    }
    setCurrentProfile(response)
  }, [response])

  useEffect(() => {
    if (isError) {
      setShowError(true)
    } else {
      setShowError(false)
    }
  }, [isError, isLoading])

  return (
    <Main>
      <Header />
      <SearchBar
        handleChange={setValue}
        showError={showError}
        setShowError={setShowError}
        handleSearch={handleSearch}
        disabled={isLoading}
      />
      {currentProfile && <UserCard data={extractData(currentProfile)} />}
    </Main>
  )
}

export default App
