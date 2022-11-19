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
import GlenIrisFull from '../img/GlenIrisFull.png'
import GlenIrisTanpa from '../img/GlenIrisTanpaSandaran.png'
import ForlandGlenIris from '../img/ForlandGlenIris.png'

export const GlenIris = () => {
  return (
    <>
    <Header />
    <Navbar />
    <ProductDetailsProps 
      img1={GlenIrisFull}
      img2={GlenIrisFull}
      img3={GlenIrisTanpa}
      img4={ForlandGlenIris}
      smallimg1={GlenIrisFull}
      smallimg2={GlenIrisTanpa}
      smallimg3={ForlandGlenIris}
      tag="Home / Springbed"
      title="Forland Glen Iris"
      details="Product Details"
      text="Forland Springbed jenis Glen Iris merupakan springbed berjenis plushtop yang menggunakan bahan dasar per pocket yang dilapisi lagi oleh busa rebounded. Dilengkapi dengan tekonologi busa encasement yang mampu menopang kasur dengan jauh lebih kokoh."
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