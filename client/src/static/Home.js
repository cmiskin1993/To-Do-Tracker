import React from 'react';
import '../static/Home.css'
import HomeVideo from '../assets/Concert - 1630.mp4'
 
 
const Home = ( { loggedIn } ) => {


  if ( loggedIn ){
    return (
      <div>
        <div className="overlay"></div>
            <h1> Music is the <br/> soundtrack <br/> of your life.</h1>
              <video className='grayscale' src={HomeVideo} autoPlay loop ></video>
      </div>
    )
  } 
  return (
    <div>
      <div className="overlay"></div>
              <h1> One step closer to your favorite music </h1>
                <video className='grayscale' src={HomeVideo} autoPlay loop ></video>
    </div>
    )
}
 
export default Home