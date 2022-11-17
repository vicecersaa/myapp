export const Props = (props) => {
  return (
    <div className='beds-products'>
      <div className='product-tag'>
      <span>{props.tag}</span>
      </div>
      <div className='products'>
        <p>{props.name}</p>
        <img src={props.img}></img>
      </div>
    </div>
  )
}