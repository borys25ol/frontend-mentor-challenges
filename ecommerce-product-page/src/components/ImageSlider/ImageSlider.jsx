import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { ReactComponent as PreviousIcon } from 'assets/icons/icon-previous.svg'
import { ReactComponent as NextIcon } from 'assets/icons/icon-next.svg'

const RugularWrapper = styled.div`
  position: relative;

  @media screen and (min-width: 1024px) {
    width: 445px;
    height: 445px;
  }
`

const ModalWrapper = styled.div`
  position: absolute;
  top: 133px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 30;
  display: ${props => (props.active ? 'block' : 'none')};

  @media screen and (min-width: 1024px) {
    width: 550px;
    height: 550px;

    & > div {
      height: 550px;
    }
  }
`

const Overlay = styled.div`
  position: fixed;
  display: ${props => (props.active ? 'block' : 'none')};
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--black);
  opacity: 0.75;
  z-index: 20;
`

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  margin: 0 -24px;
  min-height: 300px;
  height: calc(100vw * 0.75);
  overflow: hidden;
  cursor: pointer;

  @media screen and (min-width: 1024px) {
    margin: 0 0;
    height: 445px;
    border-radius: 15px;
  }
`

const PreviousButton = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  top: 50%;
  transform: translateY(-50%);
  left: -10px;
  z-index: 10;
  border-radius: 50%;
  background-color: var(--white);
  cursor: pointer;

  @media screen and (min-width: 1024px) {
    display: ${props => (props.active ? 'flex' : 'none')};
    z-index: 40;
    left: -20px;
  }
`

const NextButton = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  top: 50%;
  transform: translateY(-50%);
  right: -10px;
  z-index: 10;
  border-radius: 50%;
  background-color: var(--white);
  cursor: pointer;

  @media screen and (min-width: 1024px) {
    display: ${props => (props.active ? 'flex' : 'none')};
    z-index: 50;
    right: -20px;
  }
`

const Image = styled.img`
  transform: translateX(-${props => props.shift}%);
  transition: transform 0.4s;
  flex-shrink: 0;
  width: 100%;
  max-height: auto;
`

const Footer = styled.div`
  display: none;
  margin-top: 32px;
  max-height: 88px;
  justify-content: space-between;

  @media screen and (min-width: 1024px) {
    display: flex;
  }
`

const ThumbnailWrapper = styled.div`
  width: 88px;
  height: 88px;
  background-color: var(--white);
  border: ${props => (props.active ? '2px solid var(--orange)' : '0')};
  border-radius: 10px;

  img {
    opacity: ${props => (props.active ? '0.25' : '1')};

    &:hover {
      opacity: 0.5;
    }
  }
`

const ImageThumbnail = styled.img`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  cursor: pointer;
`

function ImageSlider({ images, thumbnails }) {
  const [width, setWidth] = useState(window.innerWidth)
  const [shift, setShift] = useState(0)
  const [modalActive, setModalActive] = useState(false)

  const handlePreviousClick = () => {
    setShift(current =>
      current === 0 ? (images.length - 1) * 100 : current - 100
    )
  }

  const handleNextClick = () => {
    setShift(current =>
      current === (images.length - 1) * 100 ? 0 : current + 100
    )
  }

  const handleSliderClick = () => {
    setModalActive(!modalActive)
  }

  const updateDimensions = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  return (
    <>
      <RugularWrapper onClick={() => handleSliderClick()}>
        <RegularSlider
          images={images}
          thumbnails={thumbnails}
          isButtonActive={false}
          currentShift={shift}
          updateShift={setShift}
          handleSliderClick={handleSliderClick}
          handlePreviousClick={handlePreviousClick}
          handleNextClick={handleNextClick}
        />
      </RugularWrapper>
      <ModalWrapper active={modalActive && width >= 1024}>
        <RegularSlider
          images={images}
          thumbnails={thumbnails}
          isButtonActive={true}
          currentShift={shift}
          updateShift={setShift}
          handlePreviousClick={handlePreviousClick}
          handleNextClick={handleNextClick}
        />
      </ModalWrapper>
      <Overlay
        active={modalActive && width >= 1024}
        onClick={() => handleSliderClick()}
      />
    </>
  )
}

function RegularSlider({
  images,
  thumbnails,
  isButtonActive,
  currentShift,
  updateShift,
  handlePreviousClick,
  handleNextClick,
}) {
  return (
    <>
      <PreviousButton
        active={isButtonActive}
        onClick={() => handlePreviousClick()}
      >
        <PreviousIcon />
      </PreviousButton>
      <ImageWrapper>
        {images.map(image => (
          <Image
            key={image}
            shift={currentShift}
            src={image}
            alt='image-product'
          />
        ))}
      </ImageWrapper>
      <NextButton active={isButtonActive} onClick={() => handleNextClick()}>
        <NextIcon />
      </NextButton>
      <Footer>
        {thumbnails.map((image, index) => (
          <ThumbnailWrapper
            key={image}
            active={currentShift === index * 100}
            onClick={() => {
              updateShift(index * 100)
            }}
          >
            <ImageThumbnail src={image} alt='image-thumbnail' />
          </ThumbnailWrapper>
        ))}
      </Footer>
    </>
  )
}

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  thumnails: PropTypes.arrayOf(PropTypes.string),
}

RegularSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  thumnails: PropTypes.arrayOf(PropTypes.string),
  isButtonActive: PropTypes.bool,
  currentShift: PropTypes.number,
  updateShift: PropTypes.func,
  handlePreviousClick: PropTypes.func,
  handleNextClick: PropTypes.func,
}

export { ImageSlider }
