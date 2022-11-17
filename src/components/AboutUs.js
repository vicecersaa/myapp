import { PropsShops } from "../props/PropsShops"


export const AboutUs = () => {
  return (
    <div className="our-services">
      <PropsShops 
        icon={<i className="fa-solid fa-bed"></i>}
        title="We care about your sleep"
        text="We are committed to give you the best comfort for good sleep experiences."
      />
      <PropsShops 
        icon={<i className="fa-solid fa-warehouse"></i>}
        title="We build a quality products"
        text="We ensure you get the best quality out of our products."
      />
      <PropsShops 
        icon={<i className="fa-solid fa-envelope"></i>}
        title="We always take feedbacks"
        text="We're making sure that our customer satisfied with our products and services."
      />
      <PropsShops 
        icon={<i className="fa-solid fa-box-open"></i>}
        title="We ship orders fast and safely"
        text="We're making sure all shippings is fast but also maintain the products quality when shipping."
      />
    </div>
  )
}