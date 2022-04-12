import './App.css';
import ReactPlayer from 'react-player'
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok, FaYoutube, FaKickstarterK } from "react-icons/fa"

import trailer1 from './assets/videos/jc-gangster.mp4'
import trailer from './assets/videos/lcc-main-teaser.mp4'

import LccLogo from './assets/images/lcc-logo-1.png'

import ReactGA from 'react-ga'


function App() {


  ReactGA.initialize('G-7EP1LQWD59', {
    debug: true,
    titleCase: false,
  });

  ReactGA.pageview(window.location.pathname + window.location.search);



  return (
    <div className="App">

      <div>
        <a href="/">
          <img src={LccLogo} />

        </a>
        {/* <LccLogo /> */}
      </div>

      <div className='text-center'>

        <ReactPlayer url={trailer} playing={true} loop={false} controls={true} width={"1920"} height={"1080"} />
        <h3>He will be risen</h3>
        <h3>Easter 2022</h3>

        <a href="https://www.kickstarter.com/projects/lacosacristo/la-cosa-cristo" target="_blank">
          <p>Help fund our Kickstarter!</p>
        </a>

      </div>

      <div>
        <div className='social-icons'>

          {/* <a target="_blank" href="https://www.instagram.com/ighosproductions/" >
            <FaFacebookF />
          </a> */}
          <a target="_blank" href="https://twitter.com/IghosP" >
            <FaTwitter />
          </a>
          <a target="_blank" href="https://www.instagram.com/ighosproductions/" >
            <FaInstagram />
          </a>

          <a target="_blank" href="https://www.tiktok.com/@jchrist08?lang=en" >
            <FaTiktok />
          </a>

          <a target="_blank" href="https://www.youtube.com/channel/UC6Xkhx4VsoZIHkz52YCmNVg" >
            <FaYoutube />
          </a>

          <a target="_blank" href="https://www.kickstarter.com/projects/lacosacristo/la-cosa-cristo" >
            <FaKickstarterK />
          </a>

        </div>
      </div>


    </div>
  );
}

export default App;