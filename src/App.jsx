import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Services from './pages/Services'; // Import the new Services page
import Experience from './pages/Experience'; // Import the new Experience page
import Testimonials from './pages/Testimonials'; // Import the new Testimonials page
import Blog from './pages/Blog'; // Import the new Blog page
import NotFound from './pages/NotFound';
import Sabhi from './pages/Sabhi';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Helmet>
          <title>Abhishek Adhikari | UI/UX Designer & Product Strategist</title>
          <meta name="description" content="Innovative UI/UX Designer, Product Strategist, and Agri-Tech specialist with 22+ years of experience. Crafting user-centric digital experiences and driving product innovation." />
          <link rel="canonical" href="https://abhishekadhikari.com" />
          {/* Open Graph / Facebook Meta Tags */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://abhishekadhikari.com" />
          <meta property="og:title" content="Abhishek Adhikari | UI/UX Designer & Product Strategist" />
          <meta property="og:description" content="Innovative UI/UX Designer, Product Strategist, and Agri-Tech specialist with 22+ years of experience. Crafting user-centric digital experiences and driving product innovation." />
          <meta property="og:image" content="https://abhishekadhikari.com/og-image.jpg" /> {/* Update with actual image path */}

          {/* Twitter Card Meta Tags */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://abhishekadhikari.com" />
          <meta property="twitter:title" content="Abhishek Adhikari | UI/UX Designer & Product Strategist" />
          <meta property="twitter:description" content="Innovative UI/UX Designer, Product Strategist, and Agri-Tech specialist with 22+ years of experience. Crafting user-centric digital experiences and driving product innovation." />
          <meta property="twitter:image" content="https://abhishekadhikari.com/twitter-image.jpg" /> {/* Update with actual image path */}
        </Helmet>
        
        <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
          {/* Subtle Gradient Background */}
          <div className="absolute inset-0 z-0 opacity-50">
            <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent"></div>
          </div>
          
          <main className="relative z-10">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/sabhi" element={<Sabhi />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App;

// Add this component for dynamic meta tags
const DynamicHelmet = () => {
  const location = useLocation();
  const path = location.pathname;

  const getMetaData = () => {
    const baseTitle = "Abhishek Adhikari";
    switch(path) {
      case "/":
        return {
          title: `${baseTitle} | UI/UX Designer & Product Strategist in Nepal`,
          description: "Award-winning UI/UX designer and product strategist from Nepal with 22+ years of experience in digital innovation and agricultural technology.",
          keywords: "Abhishek Adhikari, UI/UX Designer Nepal, Product Strategy, Agricultural Technology"
        };
        case '/contact':
          return {
            title: 'Contact | Abhishek Adhikari - Get in Touch for UI/UX & Agri-Tech Projects',
            description: 'Contact Abhishek Adhikari for UI/UX design projects, agricultural technology consulting, and sustainable innovation services in Nepal.',
            keywords: 'contact Abhishek Adhikari, UI/UX designer Nepal contact, agricultural technology consultant, hire UI/UX designer Nepal, design services contact',
            canonical: 'https://abhishekadhikari.com/contact',
            ogType: 'website',
            ogImage: 'https://abhishekadhikari.com/contact-og-image.jpg'
          };
        case '/experience':
          return {
            title: 'Experience | Abhishek Adhikari - 22+ Years in UI/UX Design & Agri-Tech',
            description: 'Explore Abhishek Adhikari\'s professional experience spanning 22+ years in UI/UX design, product strategy, and agricultural technology innovation.',
            keywords: 'Abhishek Adhikari experience, UI/UX designer career, agricultural technology expert, Nepal design professional, product strategy experience',
            canonical: 'https://abhishekadhikari.com/experience',
            ogType: 'website',
            ogImage: 'https://abhishekadhikari.com/experience-og-image.jpg'
          };
        case '/testimonials':
          return {
            title: 'Testimonials | Abhishek Adhikari - Client Reviews & Success Stories',
            description: 'Read testimonials and success stories from clients who worked with Abhishek Adhikari on UI/UX design and agricultural technology projects.',
            keywords: 'Abhishek Adhikari testimonials, UI/UX designer reviews, client feedback Nepal, agricultural technology testimonials, design project reviews',
            canonical: 'https://abhishekadhikari.com/testimonials',
            ogType: 'website',
            ogImage: 'https://abhishekadhikari.com/testimonials-og-image.jpg'
          };
      case "/about":
        return {
          title: `About ${baseTitle} | UI/UX Expert & Agri-Tech Specialist`,
          description: "Learn about Abhishek Adhikari's 22+ years journey in UI/UX design, product strategy, and agricultural innovation in Nepal.",
          keywords: "Abhishek Adhikari about, UI/UX portfolio, Manahari designer, Nepal tech expert",
          canonical: "https://abhishekadhikari.com/about",
          ogType: "profile",
          ogImage: "https://abhishekadhikari.com/about-og-image.jpg"
        };
      case "/blog":
        return {
          title: `Blog | ${baseTitle} - Insights on Design, Development & Innovation`,
          description: "Read insights on UI/UX design, web development, agricultural technology, and digital innovation by Abhishek Adhikari.",
          keywords: "Abhishek Adhikari blog, UI/UX articles, development insights, agricultural innovation, Nepal tech blog, design tutorials, web development tips",
          canonical: "https://abhishekadhikari.com/blog",
          ogType: "website",
          ogImage: "https://abhishekadhikari.com/blog-og-image.jpg"
        };
      case "/projects":
        return {
          title: `Projects | ${baseTitle} - UI/UX Design & Agri-Tech Portfolio`,
          description: "Explore innovative UI/UX design projects and agricultural technology solutions by Abhishek Adhikari. View case studies and project outcomes.",
          keywords: "Abhishek Adhikari projects, UI/UX portfolio, agricultural technology projects, design case studies, Nepal designer portfolio",
          canonical: "https://abhishekadhikari.com/projects",
          ogType: "website",
          ogImage: "https://abhishekadhikari.com/projects-og-image.jpg"
        };
      case "/services":
        return {
          title: `Services | ${baseTitle} - UI/UX Design & Agricultural Technology`,
          description: "Professional UI/UX design, agricultural technology consulting, and sustainable innovation services by Abhishek Adhikari in Nepal.",
          keywords: "UI/UX design services Nepal, agricultural technology consulting, sustainable design services, Figma expert Nepal, product design services",
          canonical: "https://abhishekadhikari.com/services",
          ogType: "website",
          ogImage: "https://abhishekadhikari.com/services-og-image.jpg"
        };
      // Add cases for other routes
    }
  };

  const metaData = getMetaData();
  return (
    <Helmet>
      <title>{metaData.title}</title>
      <meta name="description" content={metaData.description} />
      <meta name="keywords" content={metaData.keywords} />
      {metaData.canonical && <link rel="canonical" href={metaData.canonical} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={metaData.title} />
      <meta property="og:description" content={metaData.description} />
      <meta property="og:type" content={metaData.ogType || 'website'} />
      <meta property="og:url" content={metaData.canonical || `https://abhishekadhikari.com${path}`} />
      {metaData.ogImage && <meta property="og:image" content={metaData.ogImage} />}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaData.title} />
      <meta name="twitter:description" content={metaData.description} />
      {metaData.ogImage && <meta name="twitter:image" content={metaData.ogImage} />}
    </Helmet>
  );
};