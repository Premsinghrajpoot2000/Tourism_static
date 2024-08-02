import './App.css';
import Cars from './Components/Cars/Cars';
import Footer from './Components/Footer';
import Guides from './Components/Guides/Guides';
import HeroSection from './Components/HeroSection';
import Hotels from './Components/Hotels/Hotels';
import NavBar from './Components/NavBar';

function App() {
  
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Cars />
      <Hotels />
      <Guides />
      <Footer />
    </div>
  );
}

export default App;
