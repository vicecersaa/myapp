import {Props} from './Props'
import swanston from '../img/ForlandSwanston.png'
import brighton from '../img/ForlandBrighton.png'
import GlenIris from '../img/ForlandGlenIris.png'
import Wellington from '../img/ForlandWellington.png'
import MorningtonBonnel from '../img/ForlandMorningtonBonnel1.png'
import MorningtonPocket from '../img/ForlandMorningtonPocket.png'
import Morrison from '../img/ForlandMorrison.png'

export const Beds = () => {
  return (
    <div className="beds">
      <Props
        link="/swanston"
        tag="BEST SELLER"
        name="Forland Swanston"
        img={swanston}
      />
      <Props
        link="/brighton"
        tag="BEST SELLER"
        name="Forland Brighton"
        img={brighton}
      />
      <Props
        link="/gleniris"
        tag="BEST SELLER"
        name="Forland Glen Iris"
        img={GlenIris}
      />
      <Props
        link="/wellington"
        tag="BEST SELLER"
        name="Forland Wellington"
        img={Wellington}
      />
      <Props
        link="/morningtonbonnel"
        tag="BEST SELLER"
        name="Forland Mornington Bonnel"
        img={MorningtonBonnel}
      />
      <Props
        link="/morningtonpocket"
        tag="BEST SELLER"
        name="Forland Mornington Pocket"
        img={MorningtonPocket}
      />
      <Props
        link="/morrison"
        tag="BEST SELLER"
        name="Forland Morrison"
        img={Morrison}
      />
    </div>
  )
}