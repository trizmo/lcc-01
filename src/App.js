import './App.css';
import ReactPlayer from 'react-player'
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa"

import trailer from './assets/videos/jc-gangster.mp4'

import LccLogo from './assets/images/lcc-logo-1.png'


function App() {
  return (
    <div className="App">

      <div>
        <img src={LccLogo} />
        {/* <LccLogo /> */}
      </div>

      <div>

        <ReactPlayer url={trailer} playing={true} loop={false} controls={true} width={"1920"} height={"1080"} />

      </div>

      <div>
        <div className='social-icons'>
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaTiktok />
        </div>
      </div>


    </div>
  );
}

export default App;
