const NotFound = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;