
import Video from '../img/video.mp4'

export const InTheBox = () => {
    return (
      <div className='inthebox-section'>
        <div className='box'>
          <h1>In The Box?</h1>
        </div>
        <div className='myVideo'>
          <video autoPlay loop muted>
            <source src={Video} type="video/mp4" />
          </video>
        </div>
      </div>
    )
}