import { Props } from "./Props"
import SwanstonTanpa from '../img/SwanstonTanpaSandaran.png'
import GlenIrisTanpa from '../img/GlenIrisTanpaSandaran.png'
import BrightonTanpa from '../img/BrightonTanpaSandaran.png'
import WellingtonTanpa from '../img/WellingtonTanpaSandaran.png'
import MorningtonTanpa from '../img/MorningtonTanpaSandaran.png'
import MorrisonTanpa from '../img/ForlandMorrison.png'
import MorningtonPocketTanpa from '../img/ForlandMorningtonPocket.png'

export const Mattresses = () => {
  return (
    <div className='beds'>
      <Props
        tag="BEST SELLER"
        name="Forland Swanston"
        img={SwanstonTanpa}
      />
      <Props 
        tag="BEST SELLER"
        name="Forland Glen Iris"
        img={GlenIrisTanpa}
      />
      <Props 
        tag="BEST SELLER"
        name="Forland Brighton"
        img={BrightonTanpa}
      />
      <Props 
        tag="BEST SELLER"
        name="Forland Wellington"
        img={WellingtonTanpa}
      />
      <Props 
        tag="BEST SELLER"
        name="Forland Mornington Bonnel"
        img={MorningtonTanpa}
      />
      <Props 
        tag="BEST SELLER"
        name="Forland Morrison"
        img={MorrisonTanpa}
      />
      <Props 
        tag="BEST SELLER"
        name="Forland Mornington Pocket"
        img={MorningtonPocketTanpa}
      />

    </div>
  )
}