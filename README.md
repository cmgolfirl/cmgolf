
<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>CTM Golf</title>
  <link rel="stylesheet" href="style.css" />
  <script defer src="script.js"></script>
</head>
<body>
  <div id="scroll-progress"></div>

  <header class="header">
  <div class="container header-container">
<a href="index.html" class="logo" aria-label="CTM Golf Home">
  <img src="images/logo.png" alt="CTM Golf Logo" class="logo-image" />
</a>
    <nav>
      <ul class="nav-links" id="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="stats.html">Stats</a></li>
        <li><a href="witb.html">WITB</a></li>
        <li><a href="training.html">Training Log</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
      <button 
        aria-label="Toggle menu" 
        class="hamburger" 
        id="hamburger" 
        aria-expanded="false" 
        aria-controls="nav-links"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  </div>
</header>

  <section class="hero fade-in" id="hero" aria-label="Hero section with welcome message">
    <div class="hero-overlay"></div>
    <div class="hero-content container">
    <img src="images/logo.png" alt="CTM Golf Logo" class="logo-image" />
      <h1>Welcome to CM Golf</h1>
      <p>Golf. Passion. Performance.</p>
     
    </div>
  </section>

  <main>
    <section class="section fade-in" id="about" tabindex="0">
      <div class="container">
        <h2>About CM Golf</h2>
        <p>CTM Golf represents passion, precision, and purpose on and off the course. Discover what makes us unique in the world of professional golf.</p>
      <section class="section-container">
	<a href="about.html" class="btn-primary">learn More</a>
      </section>
      </div>
    </section>

    <section class="section fade-in" id="news" tabindex="0">
      <div class="container">
        <h2>Latest Stats</h2>
        <p>Stay up to date with CTM Golf's latest performances, events, and more.</p>
      <section class="section-container">
        <a href="stats.html" class="btn-primary">learn More</a>
      </section>
      </div>
    </section>
    
    <section class="section fade-in" id="media" tabindex="0">
      <div class="container">
        <h2>WITB</h2>
        <p>What is currently in the bag as gamers.</p>
      <section class="section-container">
        <a href="witb.html" class="btn-primary">learn More</a>
      </section>
      </div>
    </section>

    <section class="section fade-in" id="media" tabindex="0">
      <div class="container">
        <h2>Training Log</h2>
        <p>Photos, videos, and highlights from tournaments and behind-the-scenes moments.</p>
      <section class="section-container">
        <a href="training.html" class="btn-primary">learn More</a>
      </section>
      </div>
    </section>

    <section class="section fade-in" id="contact" tabindex="0">
      <div class="container">
        <h2>Contact</h2>
        <p>For media, partnerships, or general inquiries, please get in touch with us.</p>
      <section class="section-container">
        <a href="contact.html" class="btn-primary">learn More</a>
      </section>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container footer-container">
      <div>
        <p>&copy; 2025 CM Golf. All rights reserved.</p>
        <p>Email: <a href="mailto:info@ctmgolf.com" class="footer-link">info@ctmgolf.com</a>
      </div>
      <div class="social-icons" aria-label="Social media links">
        <a href="#" aria-label="Instagram" class="social-icon" role="link" tabindex="0">📸</a>
        <a href="#" aria-label="YouTube" class="social-icon" role="link" tabindex="0">▶️</a>
        <a href="#" aria-label="Twitter" class="social-icon" role="link" tabindex="0">🐦</a>
      </div>
    </div>
  </footer>
</body>
</html>
