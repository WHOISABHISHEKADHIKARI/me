import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const DynamicHelmet = () => {
  const location = useLocation();
  const path = location.pathname;

  const getMetaData = () => {
    const baseTitle = "Abhishek Adhikari";
    const baseDescription = "22+ years of expertise in UI/UX design, digital product strategy, and agricultural technology innovation.";
    
    switch(path) {
      case "/":
        return {
          title: `${baseTitle} | Senior UI/UX Designer & Agri-Tech Innovation Specialist in Nepal`,
          description: `Award-winning UI/UX designer and product strategist from Nepal with ${baseDescription} Specializing in human-centered design and sustainable digital solutions.`,
          keywords: "Abhishek Adhikari, UI UX Designer Nepal, Agri-Tech Expert, Organic Farm Designer, Figma Expert, Product Strategist, Human-Centered Design"
        };
      case "/about":
        return {
          title: `About ${baseTitle} | UI/UX Expert & Agri-Tech Specialist`,
          description: `Learn about Abhishek Adhikari's journey in UI/UX design, product strategy, and agricultural innovation. ${baseDescription}`,
          keywords: "Abhishek Adhikari biography, UI/UX portfolio, Nepal designer, agricultural technology expert, digital innovation specialist"
        };
      case "/projects":
        return {
          title: `${baseTitle}'s Portfolio | UI/UX & Agri-Tech Projects`,
          description: "Explore innovative UI/UX design projects, agricultural technology solutions, and digital transformation initiatives by Abhishek Adhikari.",
          keywords: "UI/UX projects, agricultural technology portfolio, digital design showcase, Nepal tech projects, sustainable solutions"
        };
      case "/services":
        return {
          title: `Services | ${baseTitle} - UI/UX & Agricultural Innovation`,
          description: "Comprehensive UI/UX design services, agricultural technology consulting, and digital product strategy solutions by Abhishek Adhikari.",
          keywords: "UI/UX design services, agricultural consulting, digital product strategy, Nepal tech services, sustainable design"
        };
      case "/experience":
        return {
          title: `Experience | ${baseTitle}'s Professional Journey`,
          description: "22+ years of professional experience in UI/UX design, agricultural technology, and digital innovation by Abhishek Adhikari.",
          keywords: "UI/UX experience, agricultural technology career, Nepal tech expert, digital innovation journey"
        };
      case "/testimonials":
        return {
          title: `Testimonials | ${baseTitle} - Client Success Stories`,
          description: "Read what clients say about Abhishek Adhikari's UI/UX design, agricultural technology solutions, and digital innovation expertise.",
          keywords: "UI/UX design testimonials, client reviews, Nepal tech feedback, agricultural solutions reviews"
        };
      case "/contact":
        return {
          title: `Contact ${baseTitle} | UI/UX & Agri-Tech Consultation`,
          description: "Get in touch with Abhishek Adhikari for UI/UX design, agricultural technology consulting, and digital innovation solutions.",
          keywords: "contact Abhishek Adhikari, hire UI/UX designer, agricultural technology consultant, Nepal tech expert"
        };
      case "/sabhi":
        return {
          title: `Sabhi | ${baseTitle}'s Special Projects`,
          description: "Discover Abhishek Adhikari's special projects combining UI/UX design with agricultural technology innovation.",
          keywords: "Sabhi projects, UI/UX innovation, agricultural technology solutions, Nepal tech initiatives"
        };
      default:
        return {
          title: `404 | Page Not Found - ${baseTitle}`,
          description: "The page you're looking for doesn't exist. Return to Abhishek Adhikari's portfolio for UI/UX design and agricultural technology solutions.",
          keywords: "Abhishek Adhikari, UI/UX designer Nepal, agricultural technology expert"
        };
    }
  };

  const metaData = getMetaData();

  return (
    <Helmet>
      <title>{metaData.title}</title>
      <meta name="description" content={metaData.description} />
      <meta name="keywords" content={metaData.keywords} />
      
      {/* OpenGraph Meta Tags */}
      <meta property="og:title" content={metaData.title} />
      <meta property="og:description" content={metaData.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://abhishekadhikari.com${path}`} />
      <meta property="og:image" content="https://abhishekadhikari.com/og-image.jpg" />
      <meta property="og:site_name" content="Abhishek Adhikari - UI/UX & Agri-Tech Portfolio" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaData.title} />
      <meta name="twitter:description" content={metaData.description} />
      <meta name="twitter:image" content="https://abhishekadhikari.com/twitter-image.jpg" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={`https://abhishekadhikari.com${path}`} />
      <meta name="author" content="Abhishek Adhikari" />
      <meta name="geo.region" content="NP" />
      <meta name="geo.placename" content="Nepal" />
    </Helmet>
  );
};

export default DynamicHelmet;