import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { productSelector } from 'store/slices/productSlice'
import { Header } from 'components/Header'
import { Main, Content } from 'components/Main'
import { ImageSlider } from 'components/ImageSlider'
import { ProductInfo } from 'components/ProductInfo'

function App() {
  const currentProduct = useSelector(productSelector)

  useEffect(() => {
    if (!currentProduct) {
      return
    }
  }, [currentProduct])

  return (
    <Main>
      <Header />
      <Content>
        {currentProduct && (
          <>
            <ImageSlider
              images={currentProduct.images}
              thumbnails={currentProduct.thumbnails}
            />
            <ProductInfo product={currentProduct} />
          </>
        )}
      </Content>
    </Main>
  )
}

export default App
