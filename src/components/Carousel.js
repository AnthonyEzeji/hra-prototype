
	import React from 'react'
    import '../css/Carousel.css' 
    import BHSLogo from'../assets/client logos/Bronx Health System.png'
    import MSHLogo from '../assets/client logos/Mount Sinai.jpg'
    import MFLogo from'../assets/client logos/Montefiore.png'
    import NyackLogo from '../assets/client logos/Nyack.jpg'
    import WPLogo from'../assets/client logos/White Plains.png'
    import BlytheLogo from '../assets/client logos/Blythedale.png'
    import STLukeLogo from '../assets/client logos/St Luke.png'
    function Carousel() {
      return (
        <div  class="marquee">
          
        <ul class="marquee-content">
         
        <li><img src={BHSLogo} alt="" /></li>
        <li><img src={MSHLogo} alt="" /></li>
        <li><img src={MFLogo} alt="" /></li>
        <li><img src={NyackLogo} alt="" /></li>
        <li><img src={WPLogo} alt="" /></li>
        <li><img src={BlytheLogo} alt="" /></li>
        <li><img src={STLukeLogo} alt="" /></li>
        <li><img src={MSHLogo} alt="" /></li>
        <li><img src={MSHLogo} alt="" /></li>
        <li><img src={MSHLogo} alt="" /></li>
        <li><img src={MSHLogo} alt="" /></li>
        <li><img src={MSHLogo} alt="" /></li>
        <li><img src={MSHLogo} alt="" /></li>

        
        
        
    
        </ul>
      </div>
      )
    }
    
    export default Carousel
    
    