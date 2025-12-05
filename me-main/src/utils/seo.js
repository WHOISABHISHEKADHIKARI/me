// SEO utilities for better search engine optimization

// Generate structured data for different content types
export const generateStructuredData = {
  // Article/Blog Post structured data
  article: (article) => {
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": article.title,
      "description": article.description,
      "image": article.image,
      "author": {
        "@type": "Person",
        "name": article.author || "Abhishek Adhikari",
        "url": "https://abhishekadhikari.com"
      },
      "publisher": {
        "@type": "Person",
        "name": "Abhishek Adhikari",
        "logo": {
          "@type": "ImageObject",
          "url": "https://abhishekadhikari.com/logo.png"
        }
      },
      "datePublished": article.datePublished,
      "dateModified": article.dateModified || article.datePublished,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": article.url
      },
      "keywords": article.keywords
    };
  },

  // Portfolio/Creative Work structured data
  portfolio: (project) => {
    return {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": project.title,
      "description": project.description,
      "image": project.image,
      "creator": {
        "@type": "Person",
        "name": "Abhishek Adhikari",
        "url": "https://abhishekadhikari.com"
      },
      "dateCreated": project.dateCreated,
      "genre": project.category,
      "keywords": project.tags?.join(", "),
      "url": project.url
    };
  },

  // Service structured data
  service: (service) => {
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": service.name,
      "description": service.description,
      "provider": {
        "@type": "Person",
        "name": "Abhishek Adhikari",
        "url": "https://abhishekadhikari.com"
      },
      "areaServed": "Nepal",
      "serviceType": service.type,
      "offers": {
        "@type": "Offer",
        "description": service.description,
        "priceRange": service.priceRange || "$$"
      }
    };
  },

  // Breadcrumb structured data
  breadcrumb: (breadcrumbs) => {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": crumb.url
      }))
    };
  },

  // FAQ structured data
  faq: (faqs) => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  }
};

// Generate meta tags for different pages
export const generateMetaTags = (pageData) => {
  const baseTags = {
    title: pageData.title,
    description: pageData.description,
    keywords: pageData.keywords,
    canonical: pageData.canonical,
    robots: pageData.robots || "index, follow",
    author: "Abhishek Adhikari",
    viewport: "width=device-width, initial-scale=1.0"
  };

  // Open Graph tags
  const ogTags = {
    "og:title": pageData.title,
    "og:description": pageData.description,
    "og:type": pageData.ogType || "website",
    "og:url": pageData.canonical,
    "og:image": pageData.ogImage,
    "og:site_name": "Abhishek Adhikari Portfolio",
    "og:locale": "en_US"
  };

  // Twitter Card tags
  const twitterTags = {
    "twitter:card": "summary_large_image",
    "twitter:title": pageData.title,
    "twitter:description": pageData.description,
    "twitter:image": pageData.ogImage,
    "twitter:creator": "@abhishek_adhikari",
    "twitter:site": "@abhishek_adhikari"
  };

  return { ...baseTags, ...ogTags, ...twitterTags };
};

// SEO-friendly URL slug generator
export const generateSlug = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
};

// Calculate reading time for blog posts
export const calculateReadingTime = (text) => {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const readingTime = Math.ceil(words / wordsPerMinute);
  return `${readingTime} min read`;
};

// Generate sitemap data
export const generateSitemapData = (pages) => {
  return pages.map(page => ({
    loc: page.url,
    lastmod: page.lastModified || new Date().toISOString().split('T')[0],
    changefreq: page.changeFreq || 'monthly',
    priority: page.priority || '0.5'
  }));
};

// SEO audit utilities
export const seoAudit = {
  // Check if title is within recommended length
  checkTitleLength: (title) => {
    const length = title.length;
    return {
      isValid: length >= 30 && length <= 60,
      length,
      recommendation: length < 30 ? 'Title too short' : length > 60 ? 'Title too long' : 'Title length is good'
    };
  },

  // Check if description is within recommended length
  checkDescriptionLength: (description) => {
    const length = description.length;
    return {
      isValid: length >= 120 && length <= 160,
      length,
      recommendation: length < 120 ? 'Description too short' : length > 160 ? 'Description too long' : 'Description length is good'
    };
  },

  // Check if image has alt text
  checkImageAlt: (images) => {
    const imagesWithoutAlt = images.filter(img => !img.alt || img.alt.trim() === '');
    return {
      isValid: imagesWithoutAlt.length === 0,
      missingAltCount: imagesWithoutAlt.length,
      totalImages: images.length
    };
  },

  // Check heading structure
  checkHeadingStructure: (headings) => {
    const issues = [];
    let hasH1 = false;
    let previousLevel = 0;

    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      
      if (level === 1) {
        if (hasH1) {
          issues.push(`Multiple H1 tags found at position ${index + 1}`);
        }
        hasH1 = true;
      }

      if (level > previousLevel + 1) {
        issues.push(`Heading level skipped from H${previousLevel} to H${level} at position ${index + 1}`);
      }

      previousLevel = level;
    });

    if (!hasH1) {
      issues.push('No H1 tag found');
    }

    return {
      isValid: issues.length === 0,
      issues
    };
  }
};

// Generate robots.txt content
export const generateRobotsTxt = (config) => {
  const { userAgent = '*', allow = [], disallow = [], sitemap, crawlDelay } = config;
  
  let robotsTxt = `User-agent: ${userAgent}\n`;
  
  allow.forEach(path => {
    robotsTxt += `Allow: ${path}\n`;
  });
  
  disallow.forEach(path => {
    robotsTxt += `Disallow: ${path}\n`;
  });
  
  if (crawlDelay) {
    robotsTxt += `Crawl-delay: ${crawlDelay}\n`;
  }
  
  if (sitemap) {
    robotsTxt += `\nSitemap: ${sitemap}`;
  }
  
  return robotsTxt;
};

// Social media sharing utilities
export const generateSocialShareUrls = (url, title, description) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);

  return {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%20${encodedUrl}`
  };
};

// Performance monitoring for SEO
export const monitorSEOPerformance = () => {
  // Monitor Core Web Vitals
  if (typeof window !== 'undefined' && 'performance' in window) {
    // Largest Contentful Paint
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.startTime);
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        console.log('FID:', entry.processingStart - entry.startTime);
      });
    }).observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift
    new PerformanceObserver((entryList) => {
      let clsValue = 0;
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      console.log('CLS:', clsValue);
    }).observe({ entryTypes: ['layout-shift'] });
  }
};

export default {
  generateStructuredData,
  generateMetaTags,
  generateSlug,
  calculateReadingTime,
  generateSitemapData,
  seoAudit,
  generateRobotsTxt,
  generateSocialShareUrls,
  monitorSEOPerformance
};