export const PropsShops = (props) => {
  return (
    <div className='info-list'>
      {props.icon}
      <div className='services-list'>
        <h4>{props.title}</h4>
        <p>{props.text}</p>
      </div>
    </div>
  )
}