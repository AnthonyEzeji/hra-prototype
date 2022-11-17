import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import HRAlogo from './assets/hra logo.webp'
import Carousel from './components/Carousel'
function App() {

  return (
    <div className="m-0 bg-white h-screen">
     {/*<div className='flex justify-center  bg-zinc-200 w-full h-fit p-3 '>
      <img className='w-40 ' src={HRAlogo}></img>
    
  </div>*/}
      
     <Nav/>

     <Hero/>
  
     <Carousel/>
 
   
     
    </div>
  );
}

export default App;
