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
        link="/swanston"
        tag="BEST SELLER"
        name="Forland Swanston"
        img={SwanstonTanpa}
      />
      <Props 
        link="/gleniris"
        tag="BEST SELLER"
        name="Forland Glen Iris"
        img={GlenIrisTanpa}
      />
      <Props 
        link="/brighton"
        tag="BEST SELLER"
        name="Forland Brighton"
        img={BrightonTanpa}
      />
      <Props 
        link="/wellington"
        tag="BEST SELLER"
        name="Forland Wellington"
        img={WellingtonTanpa}
      />
      <Props 
        link="/morningtonbonnel"
        tag="BEST SELLER"
        name="Forland Mornington Bonnel"
        img={MorningtonTanpa}
      />
      <Props 
        link="/morrison"
        tag="BEST SELLER"
        name="Forland Morrison"
        img={MorrisonTanpa}
      />
      <Props 
        link="/morningtonpocket"
        tag="BEST SELLER"
        name="Forland Mornington Pocket"
        img={MorningtonPocketTanpa}
      />

    </div>
  )
}