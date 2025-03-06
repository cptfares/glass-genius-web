
import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  schema?: any;
}

const Seo = ({ 
  title, 
  description, 
  canonicalUrl, 
  ogImage = "/og-image.png", 
  schema 
}: SeoProps) => {
  const siteUrl = window.location.origin;
  const pageUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : window.location.href;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={pageUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={pageUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* JSON-LD Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default Seo;
