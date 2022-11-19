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
import MorrisonTanpa from '../img/ForlandMorrison.png'
import Sofa from '../img/Tampak Depan.png'
import MorningtonBonnel from '../img/MorningtonBonnelFull.png'
import MorningtonPocket from '../img/MorningtonPocketFull.png'
import WellingtonFull from '../img/WellingtonFull.png'

export const Morrison = () => {
  return (
    <>
    <Header />
    <Navbar />
    <ProductDetailsProps 
      img1={MorrisonFull}
      img2={MorrisonFull}
      img3={MorrisonTanpa}
      img4={MorrisonTanpa}
      smallimg1={MorrisonFull}
      smallimg2={MorrisonTanpa}
      smallimg3={MorrisonTanpa}
      tag="Home / Springbed"
      title="Forland Morrison"
      details="Product Details"
      text="Forland Springbed jenis Morrison merupakan springbed multibed yang terdiri dari kasur dan divan menjadi satu bagian dengan menggunakan per bonnel, kain quilting dan kain oscar siap meningkatkan kualitas tidur anda dan keluarga dengan gaya minimalis yang cocok untuk berbagai luas ruangan."
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
      link2="/morningtonpocket"
      link3="/morningtonbonnel"
      link4="/sofa"
      tag="Our Top Products"
      gambar1={WellingtonFull}
      nameOne="Forland Wellington"
      gambar2={MorningtonPocket}
      nameTwo="Forland Mornington Pocket"
      gambar3={MorningtonBonnel}
      nameThree="Forland Mornington Bonnel"
      gambar4={Sofa}
      nameFour="Forland Sofa"
    />
    
    <Footer />
    </>
  )
}