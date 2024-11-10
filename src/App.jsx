import './styles/styles.css'
import AboutUsImg from './assets/images/about-us.webp'
import CommentsImg1 from "./assets/images/comments/1.png"
import CommentsImg2 from "./assets/images/comments/2.png"
import CommentsImg3 from "./assets/images/comments/3.png"
import ProjectImg1 from './assets/images/projects/1.png'
import ProjectImg2 from './assets/images/projects/2.png'
import ProjectImg3 from './assets/images/projects/3.png'
import ProjectImg4 from './assets/images/projects/4.png'
import BlogImg1 from './assets/images/blogs/1.png'
import BlogImg2 from './assets/images/blogs/2.png'
import BlogImg3 from './assets/images/blogs/3.png'
import BlogImg4 from './assets/images/blogs/4.png'
import BlogImg5 from './assets/images/blogs/5.png'
import BlogImg6 from './assets/images/blogs/6.png'
import Logo from './assets/icons/logo.svg?react'
import RightGold from './assets/icons/right-gold.svg?react'
import RightBlack from './assets/icons/right.svg?react'
import Right from './assets/icons/reght-vector.svg?react'
import Brand1 from './assets/icons/brands/1.svg?react'
import Brand2 from './assets/icons/brands/2.svg?react'
import Brand3 from './assets/icons/brands/3.svg?react'
import Brand4 from './assets/icons/brands/4.svg?react'
import Brand5 from './assets/icons/brands/5.svg?react'
import FacebookIcon from './assets/icons/footer/1.svg?react'
import TweeterIcon from './assets/icons/footer/2.svg?react'
import LinkedinIcon from './assets/icons/footer/3.svg?react'
import InstagramIcon from './assets/icons/footer/4.svg?react'


export function App() {
  return (
    <>
      <header className="container header-section">
        <Logo />
        <nav className="nav-header">
          <a href="#" className="nav-item">Home</a>
          <a href="#" className="nav-item">About Us</a>
          <a href="#" className="nav-item">Services</a>
          <a href="#" className="nav-item">Pages</a>
          <a href="#" className="nav-item">Contact Us</a>
        </nav>
      </header>
      <main>
        <section className="hero-section">
          <div className="container hero-content">
            <h2 className="hero-title">Let&#39;s Create Your Dream Interior</h2>
            <p className="hero-description">
              The world needs innovators and problem solvers who turn
              challenges into greater opportunities.
            </p>
            <button className="btn btn-dark btn-icon">
              Get Started
              <RightGold />
            </button>
          </div>
        </section>
        <section className="services-section container">
          <ul className="services-list">
            <li className="services-item">
              <h4 className="service-title">Interior Design</h4>
              <p className="service-description">Enhancing the interior to achieve a healthier
                environment for the people using
                right space.</p>
              <a href="#" className="service-link">
                View More
                <RightGold />
              </a>
            </li>
            <li className="services-item">
              <h4 className="service-title">Furniture</h4>
              <p className="service-description">Movable articles that are used to make a room or
                building suitable for living
                or working.</p>
              <a href="#" className="service-link">
                View More
                <RightGold />
              </a>
            </li>
            <li className="services-item">
              <h4 className="service-title">Flooring</h4>
              <p className="service-description">Thin object any finished material applied over a
                floor structure to provide a
                walking surface.</p>
              <a href="#" className="service-link">
                View More
                <RightGold />
              </a>
            </li>
          </ul>
        </section>
        <section className="about_us-section">
          <div className="container about_us-content">
            <div className="about_us-info">
              <h4 className="about_us-info-title">
                We Tackle The Most Challenging Designs
              </h4>
              <p className="about_us-info-description">
                The world needs innovators and problem solvers who turn challenges into greater
                opportunities. We have an
                insatiable curiosity about transformative trends challenging the status.
              </p>
              <div className="about_us-info-contact">
                <div className="contact-info">
                  <p>012345678</p>
                  <p>Call Us Anytime</p>
                </div>
              </div>
              <button className="btn btn-dark btn-icon">
                Get Free Estimate
                <RightGold />
              </button>
            </div>
            <div className="about_us-image">
              <img src={AboutUsImg} alt="About us image"/>
            </div>
          </div>
        </section>
        <section className="comments-section container">
          <div className="comments-content">
            <h4 className="comments-content_title">What the People Thinks<br/> About Interno</h4>
            <div className="comments-content_items">
              <div className="comment">
                <div className="comment-header">
                  <img src={CommentsImg1} className="user-avatar" alt=''/>
                  <div className="user-info">
                    <h5 className="user-name">Lisa Clairton</h5>
                    <span className="user-adress">New York, USA</span>
                  </div>
                </div>
                <p className="comment-text">
                  We selected Interno interior because of rigorous design background & education.
                </p>
              </div>
              <div className="comment">
                <div className="comment-header">
                  <img src={CommentsImg2} className="user-avatar" alt='avatar'/>
                  <div className="user-info">
                    <h5 className="user-name">David Knight</h5>
                    <span className="user-adress">Sydney, Australia</span>
                  </div>
                </div>
                <p className="comment-text">
                  The team exceeded our expectations and emerged as leaders of our project’s.
                </p>
              </div>
              <div className="comment">
                <div className="comment-header">
                  <img src={CommentsImg3} className="user-avatar" alt=''/>
                  <div className="user-info">
                    <h5 className="user-name">Lisa Clairton</h5>
                    <span className="user-adress">Paris, France</span>
                  </div>
                </div>
                <p className="comment-text">
                  They balanced the architectural vision and the project realities beautifully.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="brands-section container">
          <div className="brands-list">
            <Brand1 />
            <Brand2 />
            <Brand3 />
            <Brand4 />
            <Brand5 />
          </div>
        </section>
        <section className="projects-section container">
          <div className="projects-content">
            <div className="projects-content_header">
              <h3 className="projects-title">Recent Projects</h3>
              <p className="projects-description">
                With tools to make every part of your process more human and a support
                team<br/> excited to help you, getting started with us never been easier.
              </p>
            </div>
            <div className="projects-list">
              <div className="project">
                <img src={ProjectImg1} alt="image-projects"
                     className="project-image"/>
                <div className="project-info">
                  <div>
                  <h4 className="project-info_title">Winery Dry Creek Building</h4>
                    <span className="project-info_style">Art Modern</span>
                  </div>
                  <button className="btn icon"><Right/></button>
                </div>
              </div>
              <div className="project">
                <img src={ProjectImg2} alt="image-projects" className="project-image"/>
                <div className="project-info">
                  <div>
                    <h4 className="project-info_title">Creative Workplace Design</h4>
                    <span className="project-info_style">Minimalist</span>
                  </div>
                  <button className="btn icon"><Right/></button>
                </div>
              </div>
              <div className="project">
                <img src={ProjectImg3} alt="image-projects"
                     className="project-image"/>
                <div className="project-info">
                  <div>
                    <h4 className="project-info_title">Bedroom Interior Pot Work</h4>
                    <span className="project-info_style">Modern</span>
                  </div>
                  <button className="btn icon"><Right/></button>
                </div>
              </div>
              <div className="project">
              <img src={ProjectImg4} alt="image-projects"
                     className="project-image"/>
                <div className="project-info">
                  <div>
                    <h4 className="project-info_title">Light Ambience Sepia Design</h4>
                    <span className="project-info_style">Scandinavian</span>
                  </div>
                  <button className="btn btn-gold icon"><Right /></button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="statistic-section">
          <div className="container">
            <div className="statistic-info">
              <div className="statistic-item">
                <span className="statistic-title">12</span>
                <span className="statistic-description">Years Of Experiance</span>
              </div>
              <div className="statistic-item">
                <span className="statistic-title">5K</span>
                <span className="statistic-description">Success Project</span>
              </div>
              <div className="statistic-item">
                <span className="statistic-title">1K</span>
                <span className="statistic-description">Active Project</span>
              </div>
              <div className="statistic-item">
                <span className="statistic-title">4K</span>
                <span className="statistic-description">Happy Customers</span>
              </div>
            </div>
          </div>
        </section>
        <section className="blogs-section container">
          <div className="blogs-content">
            <div className="blogs-header">
              <h3 className="blogs-header_title">Recent Blogs</h3>
              <p className="blogs-header_description">Get updates about our latest trends and
                techniques used in interior design
                project works.</p>
            </div>
            <div className="blogs-list">
              <div className="blog">
                <img src={BlogImg1} alt="blog image" className="blog-image"/>
                <h4 className="blog-title">Residential Interior Designer In New York, USA</h4>
                <div className="wrap">
                  <span className="blog-date">November 23, 2021</span>
                  <button className="btn blog-btn-icon">
                   <Right />
                  </button>
                </div>
              </div>
              <div className="blog">
                <img src={BlogImg2} alt="blog image" className="blog-image"/>
                <h4 className="blog-title">How To Choose The Best Wall Art & Decor House?</h4>
                <div className="wrap">
                  <span className="blog-date">November 23, 2021</span>
                  <button className="btn blog-btn-icon">
                    <Right />
                  </button>
                </div>
              </div>
              <div className="blog">
                <img src={BlogImg3} alt="blog image" className="blog-image"/>
                <h4 className="blog-title">Tips To Increase The Interior Value Of Your House</h4>
                <div className="wrap">
                  <span className="blog-date">November 23, 2021</span>
                  <button className="btn blog-btn-icon">
                    <Right />
                  </button>
                </div>
              </div>
              <div className="blog">
                <img src={BlogImg4} alt="blog image" className="blog-image"/>
                <h4 className="blog-title">Best Solution For Any Office & Business Interior</h4>
                <div className="wrap">
                  <span className="blog-date">November 23, 2021</span>
                  <button className="btn blog-btn-icon">
                    <Right />
                  </button>
                </div>
              </div>
              <div className="blog">
                <img src={BlogImg5} alt="blog image" className="blog-image"/>
                <h4 className="blog-title">Get Solution For Building Construction Work</h4>
                <div className="wrap">
                  <span className="blog-date">November 23, 2021</span>
                  <button className="btn blog-btn-icon">
                    <Right />
                  </button>
                </div>
              </div>
              <div className="blog">
                <img src={BlogImg6} alt="blog image" className="blog-image"/>
                <h4 className="blog-title">Attain The Best Finish For The Kitchen Cabinets</h4>
                <div className="wrap">
                  <span className="blog-date">November 23, 2021</span>
                  <button className="btn blog-btn-icon">
                    <Right />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="connect-section container">
          <h3 className="connect-title">Want to join the interno?</h3>
          <span className="connect-description">Contact Us & Get a Free Consultation</span>
          <button className="btn btn-icon connect-btn btn-gold">
            Connect With us
            <RightBlack />
          </button>
        </section>
      </main>
      <footer className="footer-section">
        <div className="footer-content container">
          <div className="footer-content_item">
            <Logo />
            <p className="footer-content_item-description">We are the leading architect and interior
              design firm in the world.
            </p>
            <div className="footer-content_item-icons">
              <FacebookIcon />
              <TweeterIcon />
              <LinkedinIcon />
              <InstagramIcon />
            </div>
          </div>
          <div className="footer-content_item">
            <h4 className="footer-content_item-title">Pages</h4>
            <a href="#" className="footer-content_item-link">Style Guide</a>
            <a href="#" className="footer-content_item-link">Protected</a>
            <a href="#" className="footer-content_item-link">Licenses</a>
            <a href="#" className="footer-content_item-link">Changelog</a>
            <a href="#" className="footer-content_item-link">404</a>
          </div>
          <div className="footer-content_item">
            <h4 className="footer-content_item-title">Explore</h4>
            <a href="#" className="footer-content_item-link">About Us</a>
            <a href="#" className="footer-content_item-link">Recent Blog</a>
            <a href="#" className="footer-content_item-link">Pricing Plan</a>
            <a href="#" className="footer-content_item-link">Our Projects</a>
            <a href="#" className="footer-content_item-link">Contact Us</a>
          </div>
          <div className="footer-content_item">
            <h4 className="footer-content_item-title">Contact</h4>
            <p className="footer-content_item-description">53, East Birchwood Ave. Brooklyn, New
              York 11201, USA.</p>
            <p className="footer-content_item-description">contact@interno.com</p>
            <p className="footer-content_item-description">(123) 456 - 7890</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © Interno | Designed by <span>Victorflow</span> Templates - Powered
            by <span>Webflow</span></p>
        </div>
      </footer>
    </>
  )
}

