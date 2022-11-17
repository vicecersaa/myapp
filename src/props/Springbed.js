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
        tag="BEST SELLER"
        name="Forland Swanston"
        img={SwanstonFull}
      />
      <Props 
        tag="BEST SELLER"
        name="Forland Brighton"
        img={BrightonFull}
      />
      <Props 
        tag="BEST SELLER"
        name="Forland Glen Iris"
        img={GlenIrisFull}
      />
      <Props 
        tag="BEST SELLER"
        name="Forland Wellington"
        img={WellingtonFull}
      />
      <Props 
        tag="BEST SELLER"
        name="Forland Mornington Bonnel"
        img={MorningtonBonnelFull}
      />
      <Props 
        tag="BEST SELLER"
        name="Forland Mornington Pocket"
        img={MorningtonPocketFull}
      />
      <Props 
        tag="BEST SELLER"
        name="Forland Morrison"
        img={MorrisonFull}
      />
    </div>
  )
}