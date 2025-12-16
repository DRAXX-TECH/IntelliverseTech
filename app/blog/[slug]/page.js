// app/blog/[slug]/page.js
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blogPosts';
import Link from 'next/link';
import { 
  FaCalendar,
  FaUser,
  FaClock,
  FaTag,
  FaArrowLeft,
  FaShareAlt,
  FaBookmark,
  FaTwitter,
  FaLinkedin,
  FaFacebook
} from 'react-icons/fa';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  
  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="blog-post-page">
      <div className="container">
        {/* Navigation */}
        <nav className="post-navigation">
          <Link href="/blog" className="back-link">
            <FaArrowLeft /> Back to Blog
          </Link>
          <div className="post-actions">
            <button className="action-btn">
              <FaBookmark /> Save
            </button>
            <button className="action-btn">
              <FaShareAlt /> Share
            </button>
          </div>
        </nav>

        {/* Hero */}
        <header className="post-hero">
          <div className="post-category-large">{post.category}</div>
          <h1 className="post-title-large">{post.title}</h1>
          
          <div className="post-meta-large">
            <div className="author-info">
              <div className="author-avatar">
                {post.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="author-details">
                <div className="author-name">{post.author}</div>
                <div className="author-role">{post.authorRole}</div>
              </div>
            </div>
            
            <div className="meta-info">
              <span className="meta-item-large">
                <FaCalendar size={14} />
                {new Date(post.date).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </span>
              <span className="meta-item-large">
                <FaClock size={14} />
                {post.readTime}
              </span>
            </div>
          </div>
        </header>

        {/* Content */}
        <article className="post-content">
          <div className="content-wrapper">
            <div className="post-body">
              {/* Render markdown content */}
              <div className="prose">
                {post.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return <h2 key={index} className="section-title">{paragraph.substring(3)}</h2>;
                  } else if (paragraph.startsWith('### ')) {
                    return <h3 key={index} className="subsection-title">{paragraph.substring(4)}</h3>;
                  } else if (paragraph.startsWith('- ')) {
                    const items = paragraph.split('\n').filter(line => line.startsWith('- '));
                    return (
                      <ul key={index} className="bullet-list">
                        {items.map((item, idx) => (
                          <li key={idx}>{item.substring(2)}</li>
                        ))}
                      </ul>
                    );
                  } else if (paragraph.startsWith('1. ')) {
                    const items = paragraph.split('\n').filter(line => /^\d+\./.test(line));
                    return (
                      <ol key={index} className="numbered-list">
                        {items.map((item, idx) => (
                          <li key={idx}>{item.replace(/^\d+\.\s*/, '')}</li>
                        ))}
                      </ol>
                    );
                  }
                  return <p key={index} className="paragraph">{paragraph}</p>;
                })}
              </div>
              
              {/* Tags */}
              <div className="post-tags-large">
                {post.tags.map((tag, index) => (
                  <span key={index} className="tag-large">
                    <FaTag size={12} />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="post-sidebar">
              {/* Share */}
              <div className="share-widget">
                <h3 className="widget-title">Share This Article</h3>
                <div className="share-buttons">
                  <button className="share-btn twitter">
                    <FaTwitter /> Tweet
                  </button>
                  <button className="share-btn linkedin">
                    <FaLinkedin /> Share
                  </button>
                  <button className="share-btn facebook">
                    <FaFacebook /> Share
                  </button>
                </div>
              </div>

              {/* Author Bio */}
              <div className="author-widget">
                <h3 className="widget-title">About the Author</h3>
                <div className="author-bio">
                  <div className="bio-avatar">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="bio-content">
                    <h4 className="bio-name">{post.author}</h4>
                    <p className="bio-role">{post.authorRole}</p>
                    <p className="bio-text">
                      Expert in {post.category} with extensive experience helping 
                      enterprises leverage technology for business transformation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Newsletter */}
              <div className="newsletter-widget">
                <h3 className="widget-title">Stay Updated</h3>
                <p className="widget-text">
                  Get the latest insights delivered to your inbox.
                </p>
                <div className="newsletter-form">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="newsletter-input"
                  />
                  <button className="newsletter-btn">Subscribe</button>
                </div>
              </div>
            </aside>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="related-posts">
            <h2 className="related-title">Related Articles</h2>
            <div className="related-grid">
              {relatedPosts.map((related) => (
                <div key={related.id} className="related-card">
                  <div className="related-category">{related.category}</div>
                  <h3 className="related-post-title">
                    <Link href={`/blog/${related.slug}`}>
                      {related.title}
                    </Link>
                  </h3>
                  <p className="related-excerpt">{related.excerpt}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="post-cta">
          <h2 className="cta-title">Ready to Transform Your Business?</h2>
          <p className="cta-description">
            Contact our experts to discuss how these insights can be applied to your specific challenges.
          </p>
          <div className="cta-actions">
            <Link href="/#contact" className="btn">
              Schedule Consultation
            </Link>
            <Link href="/blog" className="btn btn-secondary">
              Browse More Articles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}