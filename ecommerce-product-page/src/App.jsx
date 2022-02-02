import { Header } from 'components/Header'
import { Main, Content } from 'components/Main'
import { ImageSlider } from 'components/ImageSlider'

function App() {
  return (
    <Main>
      <Header />
      <Content>
        <ImageSlider />
      </Content>
    </Main>
  )
}

export default App
