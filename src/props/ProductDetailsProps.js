import React from 'react'
import { Swanston } from '../pages/Swanston'
import SwanstonFull from '../img/SwanstonFull.png'
import SwanstonTanpa from '../img/SwanstonTanpaSandaran.png'
import ForlandSwanston from '../img/ForlandSwanston.png'

export const ProductDetailsProps = (props) => {
  const [imgOne, setImgOne] = React.useState(true)
  const [imgTwo, setImgTwo] = React.useState(false)
  const [imgThree, setImgThree] = React.useState(false)
  const [imgFour, setImgFour] = React.useState(false)

  const openBedTwo = () => {
    setImgTwo(true)
    setImgOne(false)
    setImgThree(false)
    setImgFour(false)
  }

  const openBedThree = () => {
    setImgThree(true)
    setImgTwo(false)
    setImgOne(false)
    setImgFour(false)
  }

  const openBedFour = () => {
    setImgFour(true)
    setImgTwo(false)
    setImgOne(false)
    setImgThree(false)
  }

  return (
    <div className="product-details">
      <div className="product-details-img">
        <img src={imgOne && props.img1}></img>
        <img src={imgTwo && props.img2}></img>
        <img src={imgThree && props.img3}></img>
        <img src={imgFour && props.img4}></img>
        <div className="product-details-smallimg">
          <img onClick={openBedTwo} src={props.smallimg1}></img>
          <img onClick={openBedThree} src={props.smallimg2}></img>
          <img onClick={openBedFour}src={props.smallimg3}></img>
        </div>
      </div>
      <div className="product-specs">
        <h4>{props.tag}</h4>
        <h3>{props.title}</h3>
        <h1>{props.details}</h1>
        <p>{props.text}</p>
        <div className="ecommerce-logo">
          <img src={props.logoimg1}></img>
          <img src={props.logoimg2}></img>
          <img src={props.logoimg3}></img>
          <img src={props.logoimg4}></img>
          <img src={props.logoimg5}></img>
          <img src={props.logoimg6}></img>
          <img src={props.logoimg7}></img>
        </div>
      </div>
    </div>
  )
}