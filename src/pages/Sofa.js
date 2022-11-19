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
import MorrisonFull from '../img/MorrisonFull.png'
import WellingtonFull from '../img/WellingtonFull.png'
import MorningtonBonnelFull from '../img/MorningtonBonnelFull.png'
import BrightonFull from '../img/BrightonFull.png'
import TampakDepan from '../img/Tampak Depan.png'
import SofaFullset from '../img/SofaFullset.png'
import SatuSofa from '../img/1 Seater.png'
export const Sofa = () => {
  return (
    <>
    <Header />
    <Navbar />
    <ProductDetailsProps 
      img1={TampakDepan}
      img2={TampakDepan}
      img3={SofaFullset}
      img4={SatuSofa}
      smallimg1={TampakDepan}
      smallimg2={SofaFullset}
      smallimg3={SatuSofa}
      tag="Home / Springbed"
      title="Forland Sofa"
      details="Product Details"
      text="Forland Sofa Series Sofa minimalist Button edition dibuat dengan desain modern minimalis yang sangat cocok untuk segala ruangan, dibuat dengan per springbed, busa berdensity tinggi dilengkapi dengan rangka kokoh beserta rangka dan kaki kayu yang berkualitas meningkatkan tingkat kenyamanan kualitas rumah anda."
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
      link4="/morningtonbonnel"
      tag="Our Top Products"
      gambar1={WellingtonFull}
      nameOne="Forland Wellington"
      gambar2={MorrisonFull}
      nameTwo="Forland Morrison"
      gambar3={BrightonFull}
      nameThree="Forland Brighton"
      gambar4={MorningtonBonnelFull}
      nameFour="Forland Mornington Bonnel"
    />
    
    <Footer />
    </>
  )
}