import React from 'react'
import { Header } from "../components/Header"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { Title } from "../components/Title"
import { ShopSection } from "../components/ShopSection"
import { ProductDetailsProps } from "../props/ProductDetailsProps"
import Bukalapak from '../img/Bukalapak.png'
import Shopee from '../img/Shopee.png'
import Tokopedia from '../img/Tokopedia.png'
import AkuLaku from '../img/Akulaku.png'
import Lazada from '../img/Lazada.png'
import BliBli from '../img/Blibli.png'
import JDID from '../img/JD ID.png'
import Morrison from '../img/MorrisonFull.png'
import Sofa from '../img/Tampak Depan.png'
import MorningtonBonnel from '../img/MorningtonBonnelFull.png'
import MorningtonPocket from '../img/MorningtonPocketFull.png'
import BrightonFull from '../img/BrightonFull.png'
import BrightonTanpa from '../img/BrightonTanpaSandaran.png'
import ForlandBrighton from '../img/ForlandBrighton.png'
export const Brighton = () => {
  return (
    <>
    <Header />
    <Navbar />
    <ProductDetailsProps 
      img1={BrightonFull}
      img2={BrightonFull}
      img3={BrightonTanpa}
      img4={ForlandBrighton}
      smallimg1={BrightonFull}
      smallimg2={BrightonTanpa}
      smallimg3={ForlandBrighton}
      tag="Home / Springbed"
      title="Forland Brighton"
      details="Product Details"
      text="Forland Springbed jenis Brighton merupakan kasur yang menggunakan full busa rebounded density 50 tanpa menggunakan per dan tergolong memiliki tingkat kekerasan medium firm."
      logoimg1={Bukalapak}
      logoimg2={Shopee}
      logoimg3={Tokopedia}
      logoimg4={AkuLaku}
      logoimg5={Lazada}
      logoimg6={BliBli}
      logoimg7={JDID}
    />
    <div className="related-product">
    <Title
      tag="Related Products"
    />
    </div>
    <ShopSection 
      tag="Our Top Products"
      link1="/morrison"
      gambar1={Morrison}
      nameOne="Forland Morrison"
      link2="/morningtonpocket"
      gambar2={MorningtonPocket}
      nameTwo="Forland Mornington Pocket"
      link3="/morningtonbonnel"
      gambar3={MorningtonBonnel}
      nameThree="Forland Mornington Bonnel"
      link4="/sofa"
      gambar4={Sofa}
      nameFour="Forland Sofa"
    />
    
    <Footer />
    </>
  )
}