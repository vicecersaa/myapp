import { Props } from './Props'
import ForlandSofa from '../img/sofa.png'

export const Sofa = () => {
  return (
    <div className='beds'>
      <Props 
        tag="BEST SELLER"
        name="Forland Sofa"
        img={ForlandSofa}
      />
    </div>
  )
}