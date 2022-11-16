import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import HRAlogo from './assets/hra logo.webp'
function App() {
  return (
    <div className="m-0">
     <div className='flex justify-center  bg-neutral-200 w-full h-fit p-3 '>
      <img className='w-40 ' src={HRAlogo}></img>
    
      </div>
     <Nav/>
     <Hero/>
    </div>
  );
}

export default App;
