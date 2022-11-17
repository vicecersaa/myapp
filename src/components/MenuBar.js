import React from 'react'
import {BrowserRouter as Router, Routes, Link} from 'react-router-dom'
import { Beds } from '../props/Beds'
import { Linkings } from '../props/Linkings'
import { Mattresses } from '../props/Mattresses'
import { Sofa } from '../props/Sofa'
import { Springbed } from '../props/Springbed'

export const MenuBar = () => {
  const [mattresses, setMattresses] = React.useState(false)
  const [springbed, setSpringbed] = React.useState(false)
  const [beds, setBeds] = React.useState(false)
  const [sofa, setSofa] = React.useState(false)
  const [box, setBox] = React.useState(false)
  const [acc, setAcc] = React.useState(false)
  const [hamburger, setHamburger] = React.useState(false);
  

  const openMenu = () => {
    setHamburger((prev) => !prev)
  }

  const openSectMattresses = () => {
    setMattresses((prev) => !prev)
    setSpringbed(false)
    setBeds(false)
    setSofa(false)
    setAcc(false)
    setBox(false)
  }

  const openSectSpringbed = () => {
    setSpringbed((prev) => !prev)
    setMattresses(false)
    setBeds(false)
    setSofa(false)
    setAcc(false)
    setBox(false)
  }

  const openSectBeds = () => {
    setBeds((prev) => !prev)
    setMattresses(false)
    setSpringbed(false)
    setSofa(false)
    setAcc(false)
    setBox(false)
  }

  const openSectSofa = () => {
    setSofa((prev) => !prev)
    setMattresses(false)
    setSpringbed(false)
    setBeds(false)
    setAcc(false)
    setBox(false)
  }

  const openSectBox = () => {
    setBox((prev) => !prev)
    setMattresses(false)
    setSpringbed(false)
    setBeds(false)
    setSofa(false)
    setAcc(false)
  }

  const openSectAcc = () => {
    setAcc((prev) => !prev)
    setMattresses(false)
    setSpringbed(false)
    setBeds(false)
    setSofa(false)
    setBox(false)
  }
  

  return (
    <div className="menu-bar">
      <div className='linking'>
        <a onClick={openSectMattresses}>Mattresses <i className="fa-solid fa-caret-down"></i></a>
        <a onClick={openSectSpringbed}>Springbed <i className="fa-solid fa-caret-down"></i></a>
        <a onClick={openSectBeds}>Beds & Mattresses <i className="fa-solid fa-caret-down"></i></a>
        <a onClick={openSectSofa}>Sofas & Sofa Bed <i className="fa-solid fa-caret-down"></i></a>
        <a onClick={openSectBox}>In The Box <i className="fa-solid fa-caret-down"></i></a>
        <a onClick={openSectAcc}>Accessories <i className="fa-solid fa-caret-down"></i></a>
      </div>
      <div className='hamburger' onClick={openMenu}>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </div>

      {mattresses && <Mattresses />}
      {springbed && <Springbed />}
      {beds && <Beds />}
      {sofa && <Sofa />}
      {hamburger && <Linkings />}
    </div>
  )
}