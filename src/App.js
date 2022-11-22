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
    <div className="z-40 m-0 bg-red-900 flex flex-col  min-h-screen  ">
     <Nav/>
     <Hero/>
<div className=' md:flex h-full w-full justify-evenly items-center z-40 bg-red-900   '>
  <ForHospitalsCard/>
  <ForPhysiciansCard/>
</div>

    </div>
  );
}

export default App;
