import { Props } from './Props'
import ForlandSofa from '../img/sofa.png'

export const Sofa = () => {
  return (
    <div className='beds'>
      <Props 
        link="/sofa"
        tag="BEST SELLER"
        name="Forland Sofa"
        img={ForlandSofa}
      />
    </div>
  )
}