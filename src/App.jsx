import { useState } from "react";
import "./App.css";
function App() {
  const [submitted, setSubmitted] = useState(false);
 const [menuOpen, setMenuOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); 
  const [showFullGallery, setShowFullGallery] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const handleSubmit = (event) => {
  event.preventDefault();
  const form = event.target;
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  setSubmitted(true);
  form.reset();
};
  return (
    <div className="app">
      <nav className="navbar">

  <div className="logo">
  ÉLVARA<span>°</span>
</div>

  <div className={`nav-links ${menuOpen ? "active" : ""}`}>
    <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
    <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
    <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
    <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
    <a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a>
    <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

    <a href="#appointment" className="mobile-book" onClick={() => setMenuOpen(false)}>
      Book Appointment
    </a>
  </div>

  <a href="#appointment" className="book-btn">
    Book Appointment
  </a>

  <button
    className="menu-toggle"
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label="Toggle menu"
  >
    ☰
  </button>

</nav>
      <section className="hero" id="home">
        <div className="hero-content">

          <p className="small-title">WELCOME TO ÉLVARA</p>

          <h1>
            Beauty,
            <br />
            <span>Refined Around You</span>
          </h1>

          <p className="hero-text">
            Premium beauty care, personalized just for you.
            Relax, refresh and rediscover your confidence.
          </p>

          <div className="hero-buttons">
            <a href="#appointment" className="primary-btn">
  Book Appointment
</a>

            <a href="#services" className="secondary-btn">
  Explore Services
</a>
          </div>

          <div className="stats">
            <div>
              <h3>500+</h3>
              <p>Happy Clients</p>
            </div>

            <div>
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>

            <div>
              <h3>4.9★</h3>
              <p>Client Rating</p>
            </div>
          </div>

        </div>

        <div className="hero-image">
          <div className="image-frame">
            <img
  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80"
  alt="Beauty salon"
  onClick={() =>
    setSelectedImage(
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80"
    )
  }
/>
          </div>
        </div>
      </section>
    {/* Services */}
<section className="services reveal" id="services">
  <div className="section-heading">
    <p className="small-title">OUR SERVICES</p>
    <h2>Beauty, Tailored <span>to You</span></h2>
    <p>
      From everyday beauty to special occasions, enjoy personalized
      treatments designed to make you feel your best.
    </p>
  </div>

  <div className="service-grid">

  <div className="service-card">
  <div className="service-icon">✂</div>

  <h3>Hair Styling</h3>

  <p>
    Professional cuts, styling and treatments designed for you.
  </p>

  <span>From ₹799</span>

  <a href="#appointment" className="service-book">
    Book Now →
  </a>
</div>

    <div className="service-card">
      <div className="service-icon">✂</div>
      <h3>Facial & Skincare</h3>
      <p>Relaxing skincare treatments for a fresh natural glow.</p>
      <span>From ₹999</span>
      <a href="#appointment" className="service-book">
  Book Now →
</a>
    </div>

    <div className="service-card featured">
      <div className="service-icon">♡</div>
      <h3>Bridal Makeup</h3>
      <p>Elegant bridal looks created specially for your big day.</p>
      <span>From ₹8,999</span>
      <a href="#appointment" className="service-book">
  Book Now →
</a>
    </div>

    <div className="service-card">
      <div className="service-icon">◌</div>
      <h3>Hair Spa</h3>
      <p>Deep nourishment and rejuvenation for healthy-looking hair.</p>
      <span>From ₹1,499</span>
      <a href="#appointment" className="service-book">
  Book Now →
</a>
    </div>

    <div className="service-card">
      <div className="service-icon">◇</div>
      <h3>Manicure & Pedicure</h3>
      <p>Luxury nail and hand care for a polished, beautiful finish.</p>
      <span>From ₹699</span>
      <a href="#appointment" className="service-book">
  Book Now →
</a>
    </div>

    <div className="service-card">
      <div className="service-icon">❋</div>
      <h3>Beauty Care</h3>
      <p>Personalized beauty services to complete your look.</p>
      <span>From ₹299</span>
      <a href="#appointment" className="service-book">
  Book Now →
</a>
    </div>

  </div>

  <div className="services-button">
    <button
  className="primary-btn"
  onClick={() => setShowServices(true)}>
  View All Services
</button>
  </div>
</section>

{/* About */}
<section className="about reveal" id="about">

  <div className="about-image">
    <img
      src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80"
      alt="Beauty studio"
      onClick={() =>
        setSelectedImage(
          "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80"
        )
      }
    />
  </div>
  <div className="about-content">
    <p className="small-title">ABOUT OUR STUDIO</p>
    <h2>
      Beauty that feels
      <span> naturally yours.</span>
    </h2>
    <p className="about-intro">
      We believe beauty is not about changing who you are.
      It's about bringing out the confidence that is already within you.
    </p>
    <p>
      Our studio combines thoughtful beauty treatments, premium products
      and a calm atmosphere to create an experience that feels personal
      from the moment you walk through our doors.
    </p>
    <div className="about-features">
      <div>
        <span>01</span>
        <h3>Personalized Care</h3>
        <p>
          Every treatment is tailored to your individual needs.
        </p>
      </div>
      <div>
        <span>02</span>
        <h3>Premium Products</h3>
        <p>
          We carefully select products that care for your skin and hair.
        </p>
      </div>
      <div>
        <span>03</span>
        <h3>Relaxing Experience</h3>
        <p>
          A peaceful environment designed for you to slow down.
        </p>
      </div>
    </div>
    <a href="#contact" className="primary-btn">
  Discover Our Story
</a>
  </div>
</section>
{/* Gallery */}
<section className="gallery reveal" id="gallery">
  <div className="section-heading">
    <p className="small-title">OUR GALLERY</p>

    <h2>
      A glimpse into
      <span> our world.</span>
    </h2>

    <p>
      Explore moments from our studio, from beautiful transformations
      to the little details that make every visit special.
    </p>
  </div>

  <div className="gallery-grid">

    <div className="gallery-item gallery-large">
      <img
  src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1000&q=80"
  alt="Hair styling"
  onClick={() =>
    setSelectedImage(
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1000&q=80"
    )
  }
/>
      <div className="gallery-overlay">
        <span>Hair Styling</span>
      </div>
    </div>

    <div className="gallery-item">
      <img
        src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=700&q=80"
        alt="Beauty treatment"
        onClick={()=>setSelectedImage("https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=700&q=80")}
      />
      <div className="gallery-overlay">
        <span>Beauty Care</span>
      </div>
    </div>

    <div className="gallery-item">
      <img
        src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=700&q=80"
        alt="Nail care"
        onClick={()=>setSelectedImage("https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=700&q=80")}
      />
      <div className="gallery-overlay">
        <span>Nail Care</span>
      </div>
    </div>

    <div className="gallery-item gallery-wide">
      <img
        src="https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=1000&q=80"
        alt="Makeup"
        onClick={()=>setSelectedImage("https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=1000&q=80")}
      />
      <div className="gallery-overlay">
        <span>Makeup</span>
      </div>
    </div>

    <div className="gallery-item">
      <img
  src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=700&q=80"
  alt="Skincare"
  onClick={() =>
    setSelectedImage(
      "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=700&q=80"
    )
  }
/>
      <div className="gallery-overlay">
        <span>Skincare</span>
      </div>
    </div>

  </div>

  <div className="gallery-button">
    <button
  className="secondary-btn"
  onClick={() => setShowFullGallery(true)}
>
  View Full Gallery
</button>
  </div>
</section>
{/* Testimonials */}
<section className="testimonials reveal" id="testimonials">
  <div className="section-heading">
    <p className="small-title">CLIENT LOVE</p>

    <h2>
      Kind words from
      <span> our clients.</span>
    </h2>

    <p>
      Every visit is personal. Here's what some of our clients
      have to say about their experience.
    </p>
  </div>

  <div className="testimonial-grid">

    <div className="testimonial-card">
      <div className="stars">★★★★★</div>

      <p className="quote">
        “The entire experience was beautiful. The team understood
        exactly what I wanted and made me feel completely comfortable.”
      </p>

      <div className="client">
        <div className="client-avatar">A</div>
        <div>
          <h4>Ananya R.</h4>
          <span>Regular Client</span>
        </div>
      </div>
    </div>
    <div className="testimonial-card featured-testimonial">
      <div className="stars">★★★★★</div>
      <p className="quote">
        “From the ambience to the service, everything felt thoughtful
        and luxurious. I absolutely loved my transformation.”
      </p>
      <div className="client">
        <div className="client-avatar">M</div>
        <div>
          <h4>Meera S.</h4>
          <span>Bridal Client</span>
        </div>
      </div>
    </div>
    <div className="testimonial-card">
      <div className="stars">★★★★★</div>
      <p className="quote">
        “Finally found a studio where beauty feels relaxing instead
        of rushed. The attention to detail is incredible.”
      </p>
      <div className="client">
        <div className="client-avatar">K</div>
        <div>
          <h4>Kavya P.</h4>
          <span>Regular Client</span>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Special Offer */}
<section className="offer reveal">
  <div className="offer-content">
    <p className="small-title">A LITTLE SOMETHING FOR YOU</p>

    <h2>
      Make time for
      <span> yourself.</span>
    </h2>

    <p>
      New to our studio? Enjoy 20% off your first beauty
      experience and discover your new self-care ritual.
    </p>

    <a href="#appointment" className="primary-btn">
  Claim Your Offer
</a>
  </div>

  <div className="offer-badge">
    <span>NEW CLIENT</span>
    <strong>20%</strong>
    <span>OFF</span>
  </div>
</section>
{/* Appointment */}
<section className="appointment reveal" id="appointment">
  <div className="appointment-info">
    <p className="small-title">BOOK YOUR VISIT</p>

    <h2>
      Your time to
      <span> unwind.</span>
    </h2>

    <p>
      Choose your preferred service, date and time.
      We'll take care of the rest.
    </p>

    <div className="appointment-details">
      <div>
        <span>01</span>
        <h3>Choose a service</h3>
        <p>Select the treatment that's right for you.</p>
      </div>

      <div>
        <span>02</span>
        <h3>Pick your time</h3>
        <p>Choose a convenient date and appointment time.</p>
      </div>

      <div>
        <span>03</span>
        <h3>We'll confirm</h3>
        <p>Our team will contact you to confirm your booking.</p>
      </div>
    </div>
  </div>

  <div className="appointment-form">
    <h3>Book an Appointment</h3>

    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label>Your Name</label>
          <input
  type="text"
  placeholder="Enter your name"
  required
/>
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            placeholder="+91 XXXXX XXXXX"
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label>Select Service</label>

        <select defaultValue=""required>
          <option value="" disabled>
            Choose a service
          </option>
          <option>Hair Styling</option>
          <option>Facial & Skincare</option>
          <option>Bridal Makeup</option>
          <option>Hair Spa</option>
          <option>Manicure & Pedicure</option>
          <option>Beauty Care</option>
        </select>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Preferred Date</label>
          <input type="date" required />
        </div>

        <div className="form-group">
          <label>Preferred Time</label>

          <select defaultValue="" required>
            <option value="" disabled>
              Select time
            </option>
            <option>10:00 AM</option>
            <option>11:00 AM</option>
            <option>12:00 PM</option>
            <option>2:00 PM</option>
            <option>3:00 PM</option>
            <option>4:00 PM</option>
            <option>5:00 PM</option>
            <option>6:00 PM</option>
            <option>7:00 PM</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label>Message</label>

        <textarea
          rows="4"
          placeholder="Anything you'd like us to know?" required
        ></textarea>
      </div>

    <button type="submit" className="form-submit">
  {submitted ? "Appointment Requested ✓" : "Request Appointment"}
</button>
{submitted && (
  <div className="success-area">
    <p className="success-message">
      Appointment Requested Successfully!
      We'll contact you shortly to confirm your appointment.
    </p>

    <button
      type="button"
      className="book-again-btn"
      onClick={() => setSubmitted(false)}
    >
      Book Another Appointment
    </button>
  </div>
)}

      <p className="form-note">
        We'll contact you shortly to confirm your appointment.
      </p>
    </form>
  </div>
</section>
{/* Contact */}
<section className="contact reveal" id="contact">
  <div className="contact-heading">
    <p className="small-title">COME VISIT US</p>

    <h2>
      Let's make your
      <span> day beautiful.</span>
    </h2>

    <p>
      Have a question or want to plan your visit?
      We'd love to hear from you.
    </p>
  </div>

  <div className="contact-grid">
      <div className="contact-card">
  <div className="contact-icon">⌖</div>
  <h3>Visit Us</h3>
  <p>
    Chennai, Tamil Nadu<br />
  </p>
  <a href="#appointment">Book Online →</a>
</div>
    <div className="contact-card">
      <div className="contact-icon">◉</div>
      <h3>Call Us</h3>
      <p>
        +91 98765 43210<br />
        Mon – Sat, 10 AM – 8 PM
      </p>
      <a href="tel:6379340694">Call Now →</a>
    </div>

    <div className="contact-card">
      <div className="contact-icon">✉</div>
      <h3>Email Us</h3>
      <p>
        hello@beautystudio.com<br />
        We reply within 24 hours
      </p>
      <a href="mailto:hello@beautystudio.com">
        Send Email →
      </a>
    </div>

  </div>

  <div className="map-placeholder">
    <div>
      <span>⌖</span>
<p>Chennai, Tamil Nadu</p>
      <button
  className="secondary-btn"
  onClick={() =>
    alert("Google Maps will be connected to the client's actual location.")
  }
>
  Open Google Maps
</button>
    </div>
  </div>
</section>

{/* Footer */}
<footer className="footer">

  <div className="footer-main">

    <div className="footer-brand">
  <div className="footer-logo">
    ÉLVARA
  </div>

  <p>
    Thoughtful beauty experiences designed
    to help you feel confident, calm and completely yourself.
  </p>

  <div className="social-links">
    <a href="#contact">Instagram</a>
    <a href="#contact">Facebook</a>
    <a href="#contact">Pinterest</a>
  </div>
</div>

    <div className="footer-column">
      <h4>Explore</h4>
      <a href="#home">Home</a>
      <a href="#services">Services</a>
      <a href="#about">About</a>
      <a href="#gallery">Gallery</a>
    </div>

    <div className="footer-column">
      <h4>Visit</h4>
      <p>Chennai, Tamil Nadu</p>
<p>10 AM – 8 PM</p>
    </div>

    <div className="footer-column">
      <h4>Stay Connected</h4>
      <p>Get beauty tips and studio updates.</p>

      <div className="newsletter">
  {!subscribed ? (
    <>
      <input
        type="email"
        placeholder="Your email"
        required
        id="newsletter-email"
      />

      <button
        type="button"
        onClick={() => {
          const email = document.getElementById("newsletter-email");

          if (!email.checkValidity()) {
            email.reportValidity();
            return;
          }

          setSubscribed(true);
        }}
      >
        →
      </button>
    </>
  ) : (
    <p className="newsletter-success">
      ✓ You're on the list!
    </p>
  )}
</div>
    </div>
  </div>

  <div className="footer-bottom">
    <p>© 2026 ÉLVARA Beauty & Wellness Studio.</p>

    <div>
      <a href="#">Privacy</a>
      <a href="#">Terms</a>
    </div>
  </div>

</footer>
{showServices && (
  <div
    className="services-modal"
    onClick={() => setShowServices(false)}
  >
    <div
      className="services-modal-content"
      onClick={(event) => event.stopPropagation()}
    >
      <button
        className="modal-close"
        onClick={() => setShowServices(false)}
      >
        ×
      </button>

      <p className="small-title">OUR COMPLETE MENU</p>

      <h2>All <span>Services</span></h2>

      <div className="all-services-list">
        <div>
          <h3>Hair Styling</h3>
          <p>Cuts, styling and professional treatments</p>
          <strong>₹799+</strong>
        </div>

        <div>
          <h3>Facial & Skincare</h3>
          <p>Personalized facial and skincare treatments</p>
          <strong>₹999+</strong>
        </div>

        <div>
          <h3>Bridal Makeup</h3>
          <p>Complete bridal makeup experience</p>
          <strong>₹8,999+</strong>
        </div>

        <div>
          <h3>Hair Spa</h3>
          <p>Deep nourishment and rejuvenation</p>
          <strong>₹1,499+</strong>
        </div>

        <div>
          <h3>Manicure & Pedicure</h3>
          <p>Luxury hand, foot and nail care</p>
          <strong>₹699+</strong>
        </div>

        <div>
          <h3>Beauty Care</h3>
          <p>Threading and personalized beauty services</p>
          <strong>₹299+</strong>
        </div>
      </div>

      <a
        href="#appointment"
        className="primary-btn"
        onClick={() => setShowServices(false)}
      >
        Book Appointment
      </a>
    </div>
  </div>
)}
{showFullGallery && (
  <div
    className="full-gallery-modal"
    onClick={() => setShowFullGallery(false)}
  >
    <div
      className="full-gallery-content"
      onClick={(event) => event.stopPropagation()}
    >
      <button
        className="full-gallery-close"
        onClick={() => setShowFullGallery(false)}
      >
        ×
      </button>

      <p className="small-title">OUR COMPLETE GALLERY</p>

      <h2>
        Beauty in
        <span> every detail.</span>
      </h2>

      <div className="full-gallery-grid">

        <img
          src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=80"
          alt="Hair styling"
        />

        <img
          src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=80"
          alt="Beauty care"
        />

        <img
          src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=80"
          alt="Nail care"
        />

        <img
          src="https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=900&q=80"
          alt="Makeup"
        />

        <img
          src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=900&q=80"
          alt="Skincare"
        />

        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80"
          alt="Beauty studio"
        />

      </div>
    </div>
  </div>
)}
{selectedImage && (
  <div
    className="lightbox"
    onClick={() => setSelectedImage(null)}
  >
    <button
      className="lightbox-close"
      onClick={() => setSelectedImage(null)}
    >
      ×
    </button>

    <img
      src={selectedImage}
      alt="Gallery preview"
      onClick={(event) => event.stopPropagation()}
    />
  </div>
)}
{showWhatsApp && (
  <div
    className="whatsapp-modal"
    onClick={() => setShowWhatsApp(false)}
  >
    <div
      className="whatsapp-modal-content"
      onClick={(event) => event.stopPropagation()}
    >
      <button
        className="whatsapp-close"
        onClick={() => setShowWhatsApp(false)}
      >
        ×
      </button>

      <div className="whatsapp-icon">
        WA
      </div>

      <h2>
        WhatsApp
        <span> Booking</span>
      </h2>



      <a
        href="#appointment"
        className="primary-btn"
        onClick={() => setShowWhatsApp(false)}
      >
        Book an Appointment
      </a>

      <p className="demo-note">
        Client WhatsApp number will be connected here.
      </p>
    </div>
  </div>
)}
<button
  className="whatsapp-button"
  onClick={() => setShowWhatsApp(true)}
>
  WhatsApp
</button>
    </div>
  );
}

export default App;