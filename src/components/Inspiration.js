export const Inspiration = (props) => {
  return (
    <div className='decor'>
      <a href={props.link1}>
      <img src={props.img1}></img>
      </a>
      <a href={props.link2}>
      <img src={props.img2}></img>
      </a>
      <a href={props.link3}>
      <img src={props.img3}></img>
      </a>
    </div>
  )
}