export const ContactProps = (props) => {
  return (
  <div className="contact-sect">
    <div className="contact">
      <a href={props.link}>
      <img src={props.icon}></img>
      <h3>{props.tag}</h3>
      <span>{props.phone}</span>
      <p>{props.time}</p>
      <p>{props.timezone}</p> 
      </a>
    </div>
  </div>
  )
}