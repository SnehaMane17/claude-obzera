// Shared nav & footer injected into every page
(function () {
  const NAV_HTML = `
  <nav>
    <div class="nav-inner">
      <a href="index.html" class="nav-logo">
        <div class="logo-icon">O</div>
        obzera
      </a>
      <ul class="nav-links">
        <li><a href="index.html#use-cases">Use-Cases</a></li>
        <li><a href="index.html#features">Features</a></li>
        <li><a href="blogs.html">Blogs</a></li>
        <li><a href="solutions.html">Solutions</a></li>
        <li><a href="pricing.html">Pricing</a></li>
        <li><a href="contact.html">Contact Us</a></li>
      </ul>
      <div class="nav-actions">
        <button class="btn-ghost" onclick="window.location='contact.html'">Log in</button>
        <button class="btn-primary" onclick="window.location='pricing.html'">Get Started</button>
      </div>
    </div>
  </nav>`;

  const FOOTER_HTML = `
  <footer>
    <div class="footer-inner">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" style="display:flex;align-items:center;gap:9px;text-decoration:none;color:#fff;font-size:20px;font-weight:700">
            <div class="logo-icon">O</div> obzera
          </a>
          <p>Experience the next generation of cloud cost analytics.</p>
          <p class="footer-trial">Unlimited trial for 14 days</p>
        </div>
        <div class="footer-col">
          <h4>Platform</h4>
          <ul>
            <li><a href="pricing.html">Pricing</a></li>
            <li><a href="solutions.html">Solutions</a></li>
            <li><a href="blogs.html">Blog</a></li>
            <li><a href="contact.html">Contact Us</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Legals</h4>
          <ul>
            <li><a href="#">Terms of Services</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Obzera for</h4>
          <ul>
            <li><a href="solutions.html">Engineering</a></li>
            <li><a href="solutions.html">Finance</a></li>
            <li><a href="solutions.html">Security</a></li>
            <li><a href="solutions.html">Startups</a></li>
          </ul>
        </div>
        <div class="footer-col footer-contact">
          <h4>Get in touch</h4>
          <p>
            <a href="mailto:hello@obzera.ai">hello@obzera.ai</a><br/>
            <a href="tel:+918149526674">+91 8149526674</a><br/><br/>
            Obzera Inc.<br/>
            Delaware, United States
          </p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>©2024 Obzera. All rights reserved.</p>
        <div class="socials">
          <a href="#" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".5" fill="currentColor" stroke="none"/></svg></a>
          <a href="#" aria-label="YouTube"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/></svg></a>
          <a href="#" aria-label="LinkedIn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
          <a href="#" aria-label="Twitter"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
        </div>
      </div>
    </div>
  </footer>`;

  // Inject nav before first child of body
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);

  // Append footer
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

  // Highlight active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();
