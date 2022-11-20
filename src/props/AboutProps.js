export const AboutProps = (props) => {
  return (
    <div className="about-props">
      <div className="about-pict">
        <img src={props.img}></img>
      </div>
      <div className="about-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  )
}