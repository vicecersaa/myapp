export const Props = (props) => {
  return (
    <div className='beds-products'>
      <a href={props.link}>
      <div className='product-tag'>
      <span>{props.tag}</span>
      </div>
      <div className='products'>
        <p>{props.name}</p>
        <img src={props.img}></img>
      </div>
      </a>

    </div>
  )
}