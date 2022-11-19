import {Header} from '../components/Header'
import {Navbar} from '../components/Navbar'
import {Footer} from '../components/Footer'
import { Title } from '../components/Title'
import { ShopSection } from '../components/ShopSection'
import WellingtonFull from '../img/WellingtonFull.png'
import SwanstonFull from '../img/SwanstonFull.png'
import BrightonFull from '../img/BrightonFull.png'
import GlenIrisFull from '../img/GlenIrisFull.png'
import Sofa from '../img/Tampak Depan.png'
import MorningtonBonnel from '../img/MorningtonBonnelFull.png'
import MorningtonPocket from '../img/MorningtonPocketFull.png'
import Morrison from '../img/MorrisonFull.png'


export const Product = () => {
  return (
    <div className='product-page'>
    <Header />
    <Navbar />
    <div className='product-sect'>
      <div className='shop-title'>
        <h3>Our Featured</h3>
        <p>Here you can check out our latest product.</p>
      </div>
      
        <ShopSection 
          link1="/wellington"
          gambar1={WellingtonFull}
          nameOne="Forland Wellington"
          link2="/swanston"
          gambar2={SwanstonFull}
          nameTwo="Forland Swanston"
          link3="/brighton"
          gambar3={BrightonFull}
          nameThree="Forland Brighton"
          link4="/gleniris"
          gambar4={GlenIrisFull}
          nameFour="Forland Glen Iris"
        />

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
      <div className='pagination'>
        <a>Previous</a>
        <a>1</a>
        <a>2</a>
        <a>3</a>
        <a>Next</a>
      </div>
    </div>
    <Footer />
    </div>
  )
}