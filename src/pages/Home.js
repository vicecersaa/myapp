import { Navbar } from "../components/Navbar"
import { Header } from "../components/Header"
import { MainSection } from "../components/MainSection"
import { ShopSection } from "../components/ShopSection"
import { BannerSection } from "../components/BannerSection"
import { InTheBox } from "../components/InTheBox"
import { AboutUs } from "../components/AboutUs"
import { Inspiration } from "../components/Inspiration"
import { Footer } from "../components/Footer"
import { MenuBar } from "../components/MenuBar"
import { OurServices } from "../components/OurServices"
import { Title } from "../components/Title"
import WellingtonFull from '../img/WellingtonFull.png'
import SwanstonFull from '../img/SwanstonFull.png'
import BrightonFull from '../img/BrightonFull.png'
import GlenIrisFull from '../img/GlenIrisFull.png'
import Sofa from '../img/Tampak Depan.png'
import MorningtonBonnel from '../img/MorningtonBonnelFull.png'
import MorningtonPocket from '../img/MorningtonPocketFull.png'
import Morrison from '../img/MorrisonFull.png'
import Bedroom from '../img/bedroom1.jpg'
import Bedroom1 from '../img/bedroom2.jpg'
import Bedroom2 from '../img/bedroom3.jpg'
import Bedroom3 from '../img/bedroom4.jpg'
import Bedroom4 from '../img/bedroom5.jpg'
import Bedroom5 from '../img/gambar.jpg'

export const Home = () => {
  return (
    <div className="home-section">
      <Header />
      <Navbar />
      <MenuBar />
      <MainSection />
      <Title
        tag="See Whats New"
      />
      <ShopSection 
        gambar1={WellingtonFull}
        nameOne="Forland Wellington"
        gambar2={SwanstonFull}
        nameTwo="Forland Swanston"
        gambar3={BrightonFull}
        nameThree="Forland Brighton"
        gambar4={GlenIrisFull}
        nameFour="Forland Glen Iris"
      />

      
      <BannerSection />

      <Title
        tag="Our Top Products"
      />

      <ShopSection 
        tag="Our Top Products"
        gambar1={Morrison}
        nameOne="Forland Morrison"
        gambar2={MorningtonPocket}
        nameTwo="Forland Mornington Pocket"
        gambar3={MorningtonBonnel}
        nameThree="Forland Mornington Bonnel"
        gambar4={Sofa}
        nameFour="Forland Sofa"
      />

      <InTheBox />

      <Title
        tag="Our Services"
      />

      <OurServices />

      <Title
        tag="Inspiration For You"
      />

      <Inspiration 

      img1={Bedroom}
      img2={Bedroom1}
      img3={Bedroom2}

      />
      <Inspiration 
      
      img1={Bedroom3}
      img2={Bedroom4}
      img3={Bedroom5}
      
      />

       <Title
        tag="About Us"
      /> 

      <AboutUs />
      <Footer />
    </div>
  )
}