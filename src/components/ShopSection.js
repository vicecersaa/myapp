

export const ShopSection = (props) => {
  return (
  <div className="shop-section">
      
    <div className="shop-products">
      <div className='products-img'>
        <div className='products-images'>
        <a href={props.link1}>
          <img src={props.gambar1}></img>
          <p>{props.nameOne}</p>
        </a>
        </div>
        <div className='products-images'>
        <a href={props.link2}>
          <img src={props.gambar2}></img>
          <p>{props.nameTwo}</p>
        </a>
        </div>
        <div className='products-images'>
        <a href={props.link3}>
          <img src={props.gambar3}></img>
          <p>{props.nameThree}</p>
        </a>
        </div>
        <div className='products-images'>
        <a href={props.link4}>
          <img src={props.gambar4}></img>
          <p>{props.nameFour}</p>
        </a>
        </div>
      </div>
    </div>
    
  </div>
  )
}