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
import Sofa from '../img/Tampak Depan.png'
import MorrisonFull from '../img/MorrisonFull.png'
import MorningtonBonnel from '../img/MorningtonBonnelFull.png'
import WellingtonFull from '../img/WellingtonFull.png'
import MorningtonPocketFull from '../img/MorningtonPocketFull.png'
import ForlandMornintonPocket from '../img/ForlandMorningtonPocket.png'

export const MorningtonPocket = () => {
  return (
    <>
    <Header />
    <Navbar />
    <ProductDetailsProps 
      img1={MorningtonPocketFull}
      img2={MorningtonPocketFull}
      img3={ForlandMornintonPocket}
      img4={ForlandMornintonPocket}
      smallimg1={MorningtonPocketFull}
      smallimg2={ForlandMornintonPocket}
      smallimg3={ForlandMornintonPocket}
      tag="Home / Springbed"
      title="Forland Mornington Pocket"
      details="Product Details"
      text="Forland Springbed Jenis Mornington Pocket 2in1 Sorong merupakan springbed sorong berjenis plushtop yang menggunakan bahan dasar per pocket dilapisi lagi dengan busa rebounded untuk kasur atas. Untuk produk tertera berupa fullset yang sudah termasuk kasur atas, kasur sorong dan sandaran."
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
      link1="/wellington"
      link2="/morrison"
      link3="/morningtonbonnel"
      link4="/sofa"
      tag="Our Top Products"
      gambar1={WellingtonFull}
      nameOne="Forland Wellington"
      gambar2={MorrisonFull}
      nameTwo="Forland Morrison"
      gambar3={MorningtonBonnel}
      nameThree="Forland Mornington Bonnel"
      gambar4={Sofa}
      nameFour="Forland Sofa"
    />
    
    <Footer />
    </>
  )
}