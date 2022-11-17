
import Video from '../img/video.mp4'

export const InTheBox = () => {
    return (
      <div className='inthebox-section'>
        <div className='box'>
          <h1>In The Box?</h1>
        </div>
        <div className='myVideo'>
          <video src={Video} muted loop autoPlay></video>
        </div>
      </div>
    )
}