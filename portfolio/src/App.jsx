import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Experience from './pages/Experience';
import Testimonials from './pages/Testimonials';
import NotFound from './pages/NotFound';
import Sabhi from './pages/Sabhi';
import DynamicHelmet from './components/DynamicHelmet';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
          {/* Subtle Gradient Background */}
          <div className="absolute inset-0 z-0 opacity-50">
            <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent"></div>
          </div>
          
          <main className="relative z-10">
            <Navbar />
            <Routes>
              <Route path="/" element={<><DynamicHelmet /><Home /></>} />
              <Route path="/about" element={<><DynamicHelmet /><About /></>} />
              <Route path="/projects" element={<><DynamicHelmet /><Projects /></>} />
              <Route path="/contact" element={<><DynamicHelmet /><Contact /></>} />
              <Route path="/services" element={<><DynamicHelmet /><Services /></>} />
              <Route path="/experience" element={<><DynamicHelmet /><Experience /></>} />
              <Route path="/testimonials" element={<><DynamicHelmet /><Testimonials /></>} />
              <Route path="/sabhi" element={<><DynamicHelmet /><Sabhi /></>} />
              <Route path="*" element={<><DynamicHelmet /><NotFound /></>} />
            </Routes>
          </main>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;