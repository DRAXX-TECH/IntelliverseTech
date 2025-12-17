// components/BlogSection.js
'use client';

import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';
import { 
  FaCalendar,
  FaUser,
  FaClock,
  FaTag,
  FaArrowRight,
  FaBookOpen
} from 'react-icons/fa';

export default function BlogSection() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 4);

  return (
    <section id="blog" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Insights & Trends</div>
          <h2>Latest from Our Blog</h2>
          <p className="section-description">
            Expert insights on AI, blockchain, cloud computing, and emerging technologies 
            that are shaping the future of business.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="featured-posts">
          <h3 className="subsection-title">Featured Articles</h3>
          <div className="featured-grid">
            {featuredPosts.map((post) => (
              <div key={post.id} className="featured-post-card">
                <div className="post-category">{post.category}</div>
                <h3 className="post-title">{post.title}</h3>
                <p className="post-excerpt">{post.excerpt}</p>
                
                <div className="post-meta">
                  <span className="meta-item">
                    <FaUser size={12} />
                    {post.author}
                  </span>
                  <span className="meta-item">
                    <FaCalendar size={12} />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </span>
                  <span className="meta-item">
                    <FaClock size={12} />
                    {post.readTime}
                  </span>
                </div>
                
                <div className="post-tags">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="tag">
                      <FaTag size={10} />
                      {tag}
                    </span>
                  ))}
                </div>
            
              </div>
            ))}
          </div>
        </div>

        {/* Recent Posts Grid */}
        <div className="recent-posts">
          <div className="subsection-header">
            <h3 className="subsection-title">Recent Insights</h3>
            <Link href="/blog" className="view-all-link">
              View All Articles <FaArrowRight />
            </Link>
          </div>
          
          <div className="recent-grid">
            {recentPosts.map((post) => (
              <div key={post.id} className="recent-post-card">
                <div className="post-header">
                  <div className="post-category-small">{post.category}</div>
                  <h4 className="post-title-small">{post.title}</h4>
                </div>
                
                <div className="post-meta-small">
                  <span className="meta-item-small">
                    <FaCalendar size={10} />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </span>
                  <span className="meta-item-small">
                    <FaClock size={10} />
                    {post.readTime}
                  </span>
                </div>
                
                <p className="post-excerpt-small">{post.excerpt}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="blog-cta">
          <div className="cta-content">
            <FaBookOpen size={48} className="cta-icon" />
            <h3 className="cta-title">Stay Ahead with Our Insights</h3>
            <p className="cta-description">
              Subscribe to our newsletter for weekly updates on technology trends, 
              case studies, and expert analysis delivered to your inbox.
            </p>
          </div>
          <div className="cta-actions">
            <Link href="/blog" className="btn">
              Explore All Articles
            </Link>
            <Link href="/newsletter" className="btn btn-secondary">
              Subscribe to Newsletter
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}