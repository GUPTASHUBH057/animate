
import './App.css';
import Home from './screens/Home.js';
import About from './screens/About.js'
import Features from './screens/Features'
import Extra from './screens/Extra.js'
import "./style.css";
import Footer from './screens/Footer.js';
import Faq from './screens/Faq.js';
import Servicesb from './screens/Servicesb'
import Pricing from './screens/Pricing.js';
import Testimonial from './screens/Testimonial.js';
import Header from "./screens/Header.js";

function App() {
  
  return (
    <div>
    <Header></Header>
    <Home></Home>
      <main id="main">
        <About></About>
        <Features></Features>
        <Extra></Extra>
        <Servicesb></Servicesb>
        <Testimonial></Testimonial>
        <Pricing></Pricing>
        <Faq></Faq>
      </main>
      <Footer></Footer>
      
    </div>

  );
}

export default App;
