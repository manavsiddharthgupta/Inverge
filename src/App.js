import { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Message from "./components/message/Message";
import Team from "./components/team details/Team";
import Portfolio from "./components/portfolio/Portfolio";
import Highlight from "./components/highlight/Highlight";
import Footer from "./components/footer/Footer";
import Testimonial from "./components/testimonial/Testimonial";
import ScrolltoTop from "./ui/ScrolltoTop";
function App() {
  const [showToTop, onsetToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 500) {
        onsetToTop(true);
      } else {
        onsetToTop(false);
      }
    });
  }, []);

  return (
    <div className="max-w-[1280px] mx-auto relative">
      <Navbar />
      <Home />
      <Services />
      <Message />
      <Portfolio />
      <Highlight />
      <Team />
      <Testimonial />
      <Footer />
      {showToTop && <ScrolltoTop setShowtop={onsetToTop} />}
    </div>
  );
}

export default App;
