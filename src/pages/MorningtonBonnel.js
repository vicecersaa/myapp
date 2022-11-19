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
import WellingtonFull from '../img/WellingtonFull.png'
import MorningtonBonnelFull from '../img/MorningtonBonnelFull.png'
import ForlandMorningtonBonnel from '../img/ForlandMorningtonBonnel.png'
import ForlandMorningtonBonnel1 from '../img/ForlandMorningtonBonnel1.png'
import BrightonFull from '../img/BrightonFull.png'

export const MorningtonBonnel = () => {
  return (
    <>
    <Header />
    <Navbar />
    <ProductDetailsProps 
      img1={MorningtonBonnelFull}
      img2={MorningtonBonnelFull}
      img3={ForlandMorningtonBonnel}
      img4={ForlandMorningtonBonnel1}
      smallimg1={MorningtonBonnelFull}
      smallimg2={ForlandMorningtonBonnel}
      smallimg3={ForlandMorningtonBonnel1}
      tag="Home / Springbed"
      title="Forland Mornington Bonnel"
      details="Product Details"
      text="Forland Springbed Jenis Mornington Bonnel 2in1 Sorong merupakan springbed sorong berjenis plushtop yang menggunakan bahan dasar per bonnel dilapisi lagi dengan busa rebounded untuk kasur atas. Untuk produk tertera berupa sudah termasuk kasur atas + sandaran / headboard."
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
      link3="/brighton"
      link4="/sofa"
      tag="Our Top Products"
      gambar1={WellingtonFull}
      nameOne="Forland Wellington"
      gambar2={MorrisonFull}
      nameTwo="Forland Morrison"
      gambar3={BrightonFull}
      nameThree="Forland Brighton"
      gambar4={Sofa}
      nameFour="Forland Sofa"
    />
    
    <Footer />
    </>
  )
}