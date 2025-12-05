import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Breadcrumbs from '../components/Breadcrumbs';
import { blogPosts } from './Blog';
import { generateSlug, generateStructuredData, generateSocialShareUrls } from '../utils/seo';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => generateSlug(p.title) === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground p-4 md:p-8 pt-24 md:pt-28">
        <Breadcrumbs />
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-6">The requested blog post could not be found.</p>
          <Link to="/blog" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg">Back to Blog</Link>
        </div>
      </div>
    );
  }

  const canonicalUrl = `https://abhishekadhikari.com/blog/${slug}`;
  const meta = {
    title: `${post.title} | Abhishek Adhikari`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    canonical: canonicalUrl,
    ogType: 'article',
    ogImage: post.image
  };

  const structuredData = generateStructuredData.article({
    title: post.title,
    description: post.excerpt,
    image: post.image,
    author: post.author,
    datePublished: post.date,
    url: canonicalUrl,
    keywords: post.tags.join(', ')
  });

  const faqData = post.faqs ? post.faqs.map(f => ({ question: f.question, answer: f.answer })) : [];

  const share = generateSocialShareUrls(canonicalUrl, post.title, post.excerpt);

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <link rel="canonical" href={meta.canonical} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content={meta.ogType} />
        <meta property="og:url" content={meta.canonical} />
        <meta property="og:image" content={meta.ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.ogImage} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        {post.faqs && (
          <script type="application/ld+json">{JSON.stringify(generateStructuredData.faq(faqData))}</script>
        )}
      </Helmet>

      <div className="min-h-screen bg-background text-foreground p-4 md:p-8 pt-24 md:pt-28">
        <Breadcrumbs />
        <article className="max-w-3xl mx-auto">
          <header className="mb-6">
            <h1 className="text-4xl font-bold mb-3">{post.title}</h1>
            <div className="text-sm text-muted-foreground">
              <time dateTime={post.date}>{new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</time>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
              <span className="mx-2">•</span>
              <span>By {post.author}</span>
            </div>
          </header>

          <figure className="mb-6">
            <img src={post.image} alt={`${post.title} - cover image`} className="w-full h-auto rounded-xl" loading="eager" width="800" height="400" />
            <figcaption className="sr-only">{post.title}</figcaption>
          </figure>

          <section className="prose prose-invert max-w-none">
            {post.contentHtml ? (
              <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
            ) : (
              <p>{post.content}</p>
            )}
          </section>

          {post.faqs && (
            <section className="mt-10">
              <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {post.faqs.map((faq, i) => (
                  <div key={i}>
                    <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    {faq.links && faq.links.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {faq.links.map(title => {
                          const target = blogPosts.find(p => p.title === title);
                          const to = target ? `/blog/${generateSlug(target.title)}` : '/blog';
                          return (
                            <Link key={title} to={to} className="text-primary text-sm">
                              Read also: {title}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          <footer className="mt-8">
            <div className="flex flex-wrap gap-2 mb-6" aria-label="Tags">
              {post.tags.map(tag => (
                <span key={tag} className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full border border-primary/20">{tag}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <motion.a whileHover={{ scale: 1.03 }} href={share.facebook} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-border rounded-lg">Share on Facebook</motion.a>
              <motion.a whileHover={{ scale: 1.03 }} href={share.twitter} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-border rounded-lg">Share on X</motion.a>
              <motion.a whileHover={{ scale: 1.03 }} href={share.linkedin} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-border rounded-lg">Share on LinkedIn</motion.a>
              <motion.a whileHover={{ scale: 1.03 }} href={share.whatsapp} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-border rounded-lg">Share on WhatsApp</motion.a>
            </div>
            <div className="mt-8">
              <Link to="/blog" className="text-primary">← Back to all articles</Link>
            </div>
          </footer>
        </article>
      </div>
    </>
  );
};

export default BlogPost;
