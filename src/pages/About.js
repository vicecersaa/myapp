import {Navbar} from '../components/Navbar'
import {Header} from '../components/Header'
import {Footer} from '../components/Footer'
import { AboutProps } from '../props/AboutProps'
import BedroomOne from '../img/bedroomOne.jpg'
import BedroomTwo from '../img/bedroomTwo.jpg'


export const About = () => {
  return (
    <div className="About">
      <Header />
      <Navbar />

      <AboutProps 

        img={BedroomOne}
        title="About Forland Living"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <div className='reverse'>
      <AboutProps 

        img={BedroomTwo}
        title="Forland Living Mission"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      </div>
      <Footer />
    </div>
  )
}