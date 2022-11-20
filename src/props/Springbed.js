import { Props } from './Props'
import SwanstonFull from '../img/SwanstonFull.png'
import BrightonFull from '../img/BrightonFull.png'
import GlenIrisFull from '../img/GlenIrisFull.png'
import MorrisonFull from '../img/MorrisonFull.png'
import WellingtonFull from '../img/WellingtonFull.png'
import MorningtonBonnelFull from '../img/MorningtonBonnelFull.png'
import MorningtonPocketFull from '../img/MorningtonPocketFull.png'


export const Springbed = () => {
  return (
    <div className='beds'>
      <Props 
        link="/swanston"
        tag="BEST SELLER"
        name="Forland Swanston"
        img={SwanstonFull}
      />
      <Props 
        link="/brighton"
        tag="BEST SELLER"
        name="Forland Brighton"
        img={BrightonFull}
      />
      <Props 
        link="/gleniris"
        tag="BEST SELLER"
        name="Forland Glen Iris"
        img={GlenIrisFull}
      />
      <Props 
        link="/wellington"
        tag="BEST SELLER"
        name="Forland Wellington"
        img={WellingtonFull}
      />
      <Props 
        link="/morningtonbonnel"
        tag="BEST SELLER"
        name="Forland Mornington Bonnel"
        img={MorningtonBonnelFull}
      />
      <Props 
        link="/morningtonpocket"
        tag="BEST SELLER"
        name="Forland Mornington Pocket"
        img={MorningtonPocketFull}
      />
      <Props 
        link="/morrison"
        tag="BEST SELLER"
        name="Forland Morrison"
        img={MorrisonFull}
      />
    </div>
  )
}