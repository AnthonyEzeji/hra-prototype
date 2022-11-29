import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import HRAlogo from './assets/hra logo.webp'
import Carousel from './components/Carousel'
import ForHospitalsCard from './components/ForHospitalsCard';
import ForPhysiciansCard from './components/ForPhysiciansCard';
function App() {

  return (
    <div className="z-40 m-0 bg-gray-400 flex flex-col  min-h-screen w-screen pr-2  ">
     <Nav/>
     <Hero/>
<div className=' bg-gray-400 flex flex-col h-full w-full justify-evenly items-center  bg-slte-600 mt-5 md:flex-row  '>
  <ForHospitalsCard/>
  <ForPhysiciansCard/>
</div>

    </div>
  );
}

export default App;
