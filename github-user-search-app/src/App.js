import { Header } from './components/Header'
import { SearchBar } from './components/SearchBar'
import { UserCard } from './components/UserCard/UserCard'
import { Wrapper, Container } from './components/Wrapper'

function App() {
  return (
    <Wrapper>
      <Container>
        <Header />
        <SearchBar />
        <UserCard />
      </Container>
    </Wrapper>
  )
}

export default App
