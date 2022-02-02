import { Header } from 'components/Header'
import { Main, Content } from 'components/Main'
import { ImageSlider } from 'components/ImageSlider'
import { ProductInfo } from 'components/ProductInfo'

function App() {
  return (
    <Main>
      <Header />
      <Content>
        <ImageSlider />
        <ProductInfo />
      </Content>
    </Main>
  )
}

export default App
