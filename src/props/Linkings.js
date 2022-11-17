import React from 'react'
import { Beds } from './Beds';
import { Springbed } from './Springbed';
import { Mattresses } from './Mattresses';
import { Sofa } from './Sofa';

export const Linkings = () => {
  const [bed, setBed] = React.useState(false);
  const [springbed, setSpringbed] = React.useState(false);
  const [mattresses, setMattresses] = React.useState(false);
  const [sofas, setSofas] = React.useState(false);
  

 
  const openSectSofa = () => {
    setSofas((prev) => !prev)
    setSpringbed(false)
    setBed(false)
    setMattresses(false)
    
  }

  const openSectMattresses = () => {
    setMattresses((prev) => !prev)
    setSpringbed(false)
    setBed(false)
    setSofas(false)
  }

  const openSectBed = () => {
    setBed((prev) => !prev)
    setSpringbed(false)
    setMattresses(false)
    setSofas(false)
  }

  const openSectSpringbed = () => {
    setSpringbed((prev) => !prev)
    setBed(false)
    setMattresses(false)
    setSofas(false)
  }

  return (
    <div className='Linkings'>
      <h3>Shop</h3>
      <div onClick={openSectBed} className='nav-link'>
        <a>Mattresses</a>
        <i className="fa-solid fa-angle-right"></i>
      </div>
      {bed && <Beds />}
      <div onClick={openSectSpringbed} className='nav-link'>
        <a>Springbed</a>
        <i className="fa-solid fa-angle-right"></i>
      </div>
      {springbed && <Springbed />}
      <div onClick={openSectMattresses} className='nav-link'>
        <a>Beds & Mattresses</a>
        <i className="fa-solid fa-angle-right"></i>
      </div>
      {mattresses && <Mattresses />}
      <div onClick={openSectSofa} className='nav-link'>
        <a>Sofas & Sofa Bed</a>
        <i className="fa-solid fa-angle-right"></i>
      </div>
      {sofas && <Sofa />}
    </div>
  )
}