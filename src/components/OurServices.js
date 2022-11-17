import { PropsShops } from "../props/PropsShops"


export const OurServices = () => {
  return (
    <div className="our-services">
      <PropsShops 
        icon={<i className="fa-solid fa-truck"></i>}
        title="Fast & Flexible Delivery"
        text="Free delivery across Jabodetabek!"
      />

      <PropsShops 
        icon={<i className="fa-solid fa-calendar"></i>}
        title="We build a quality products"
        text="Returns are easy, with no catch! We'll pick up for free in metro areas."
      />

      <PropsShops 
        icon={<i className="fa-solid fa-shield"></i>}
        title="World Class Warranty"
        text="All our mattresses have a 10-year warranty."
      />
    </div>
  )
}