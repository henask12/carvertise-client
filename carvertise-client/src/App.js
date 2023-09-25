import "./App.css";
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
      <Footer />
    </div>
  );
}

export default App;
