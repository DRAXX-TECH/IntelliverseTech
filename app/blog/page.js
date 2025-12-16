// app/blog/page.js
import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';
import { 
  FaCalendar,
  FaUser,
  FaClock,
  FaTag,
  FaSearch,
  FaFilter
} from 'react-icons/fa';

export default function BlogPage() {
  const categories = [...new Set(blogPosts.map(post => post.category))];
  
  return (
    <div className="blog-page">
      <div className="container">
        {/* Hero */}
        <div className="blog-hero">
          <h1 className="blog-title">Technology Insights & Trends</h1>
          <p className="blog-subtitle">
            Expert analysis, case studies, and thought leadership on AI, blockchain, 
            cloud computing, and emerging technologies.
          </p>
          
          <div className="blog-search">
            <div className="search-container">
              <FaSearch className="search-icon" />
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="search-input"
              />
              <button className="search-btn">Search</button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="blog-content">
          {/* Sidebar */}
          <aside className="blog-sidebar">
            <div className="sidebar-section">
              <h3 className="sidebar-title">
                <FaFilter /> Categories
              </h3>
              <div className="categories-list">
                <button className="category-btn active">All Articles</button>
                {categories.map((category, index) => (
                  <button key={index} className="category-btn">
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="sidebar-section">
              <h3 className="sidebar-title">Popular Tags</h3>
              <div className="tags-cloud">
                {Array.from(new Set(blogPosts.flatMap(post => post.tags)))
                  .slice(0, 15)
                  .map((tag, index) => (
                    <span key={index} className="tag-cloud-item">
                      <FaTag size={10} /> {tag}
                    </span>
                  ))}
              </div>
            </div>
            
            <div className="sidebar-section">
              <h3 className="sidebar-title">Subscribe</h3>
              <p className="sidebar-text">
                Get weekly insights delivered to your inbox.
              </p>
              <div className="subscribe-form">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="subscribe-input"
                />
                <button className="subscribe-btn">Subscribe</button>
              </div>
            </div>
          </aside>

          {/* Posts Grid */}
          <main className="blog-posts-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-post-card">
                <div className="post-header">
                  <div className="post-category">{post.category}</div>
                  <h2 className="post-title">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="post-excerpt">{post.excerpt}</p>
                </div>
                
                <div className="post-meta">
                  <span className="meta-item">
                    <FaUser size={12} />
                    {post.author}
                  </span>
                  <span className="meta-item">
                    <FaCalendar size={12} />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'long', 
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
                  {post.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      <FaTag size={10} />
                      {tag}
                    </span>
                  ))}
                </div>
                
              </article>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}