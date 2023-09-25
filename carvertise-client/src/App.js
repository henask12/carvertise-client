import "./App.css";
import AboutUs from "./components/Layout/AboutUs";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import HeroSection from "./components/Layout/Hero";
import Testimonials from "./components/Layout/Testimonials";
import WhyChooseUs from "./components/Layout/WhyChooseUs";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Testimonials />
      <WhyChooseUs />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
