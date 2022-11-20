import { Navbar } from "../components/Navbar"
import {Header} from "../components/Header"
import {Footer} from "../components/Footer"
import { ContactProps } from "../props/ContactProps"
import Tokopedia from '../img/Tokopedia.png'
import Instagram from '../img/instagram.png'
import Email from '../img/email.png'
import WhatsApp from '../img/whatsapp.png'
import Shopee from '../img/Shopee.png'
import Bukalapak from '../img/Bukalapak.png'
import BliBli from '../img/Blibli.png'
import AkuLaku from '../img/Akulaku.png'
import Lazada from '../img/Lazada.png'
import JDID from '../img/JD ID.png'

export const Contact = () => {
  return (
    <> 
    <Header />
    <Navbar />
    <div className="contacts-pages">
    
    <ContactProps 
      link="https://web.whatsapp.com/"
      icon={WhatsApp}
      tag="WhatsApp"
      phone="+62 12345678901"
      time= "Mon-Fri 8am-10pm | Sat-Sun 10am-5pm"
      timezone="WIB"
    />

    <ContactProps 
      link="https://www.gmail.com"
      icon={Email}
      tag="Email"
      phone="Forland@Living.com"
      time= "Mon-Fri 8am-10pm | Sat-Sun 10am-5pm"
      timezone="WIB"
    />

    <ContactProps 
      link="https://www.instagram.com"
      icon={Instagram}
      tag="Instagram"
      phone="forland.living"
      time= "Mon-Fri 8am-10pm | Sat-Sun 10am-5pm"
      timezone="WIB"
    />

    <ContactProps 
      link="https://www.tokopedia.com"
      icon={Tokopedia}
      tag="Tokopedia"
      phone="Pusat Springbed Bogor"
      time= "Mon-Fri 8am-10pm | Sat-Sun 10am-5pm"
      timezone="WIB"
    />
    </div>

    <div className="contacts-pages">
    <ContactProps 
      link="https://www.shopee.com"
      icon={Shopee}
      tag="Shopee"
      phone="Pusat Springbed Bogor"
      time= "Mon-Fri 8am-10pm | Sat-Sun 10am-5pm"
      timezone="WIB"
    />

    <ContactProps 
      link="https://www.bukalapak.com"
      icon={Bukalapak}
      tag="Bukalapak"
      phone="Pusat Springbed Bogor"
      time= "Mon-Fri 8am-10pm | Sat-Sun 10am-5pm"
      timezone="WIB"
    />

    <ContactProps 
      link="https://www.blibli.com"
      icon={BliBli}
      tag="Bli bli"
      phone="Pusat Springbed Bogor"
      time= "Mon-Fri 8am-10pm | Sat-Sun 10am-5pm"
      timezone="WIB"
    />

    <ContactProps 
      link="https://www.akulaku.com"
      icon={AkuLaku}
      tag="Aku Laku"
      phone="Pusat Springbed Bogor"
      time= "Mon-Fri 8am-10pm | Sat-Sun 10am-5pm"
      timezone="WIB"
    />
    </div>

    <div className="contacts-pages">
    <ContactProps 
      link="https://www.lazada.com"
      icon={Lazada}
      tag="Lazada"
      phone="Pusat Springbed Bogor"
      time= "Mon-Fri 8am-10pm | Sat-Sun 10am-5pm"
      timezone="WIB"
    />

    <ContactProps 
      link="https://www.jd.id/"
      icon={JDID}
      tag="JD ID"
      phone="Pusat Springbed Bogor"
      time= "Mon-Fri 8am-10pm | Sat-Sun 10am-5pm"
      timezone="WIB"
    />
    </div>
    
    <Footer />
    </>
  )
}