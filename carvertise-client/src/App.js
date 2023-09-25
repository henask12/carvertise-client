import "./App.css";
import AboutUs from "./components/Layout/AboutUs";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import HeroSection from "./components/Layout/Hero";
import Testimonials from "./components/Layout/Testimonials";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Testimonials />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
