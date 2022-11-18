export const ShopSection = (props) => {
  return (
  <div className="shop-section">
      
    <div className="shop-products">
      <div className='products-img'>
        <div className='products-images'>
          <img src={props.gambar1}></img>
          <p>{props.nameOne}</p>
        </div>
        <div className='products-images'>
          <img src={props.gambar2}></img>
          <p>{props.nameTwo}</p>
        </div>
        <div className='products-images'>
          <img src={props.gambar3}></img>
          <p>{props.nameThree}</p>
        </div>
        <div className='products-images'>
          <img src={props.gambar4}></img>
          <p>{props.nameFour}</p>
        </div>
      </div>
    </div>
    
  </div>
  )
}