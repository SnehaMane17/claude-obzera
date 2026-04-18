(function () {
  const path = window.location.pathname.split('/').pop() || 'index.html';

  const links = [
    { href: 'index.html#use-cases', label: 'Use-Cases' },
    { href: 'index.html#features',  label: 'Features'  },
    { href: 'blogs.html',           label: 'Blogs'     },
    { href: 'solutions.html',       label: 'Solutions' },
    { href: 'pricing.html',         label: 'Pricing'   },
    { href: 'contact.html',         label: 'Contact Us'},
  ];

  const liHTML = links.map(l => {
    const isActive = path === l.href || path === l.href.split('#')[0];
    return `<li><a href="${l.href}"${isActive ? ' class="active"' : ''} onclick="closeMobileMenu()">${l.label}</a></li>`;
  }).join('');

  // Inject hamburger button into nav-inner (after nav-actions)
  const navInner = document.querySelector('.nav-inner');
  if (navInner) {
    const btn = document.createElement('button');
    btn.className = 'hamburger';
    btn.id = 'hamburger';
    btn.setAttribute('aria-label', 'Open menu');
    btn.innerHTML = '<span></span><span></span><span></span>';
    btn.addEventListener('click', toggleMobileMenu);
    navInner.appendChild(btn);
  }

  // Inject mobile menu overlay after <nav>
  const nav = document.querySelector('nav');
  if (nav) {
    const menu = document.createElement('div');
    menu.className = 'mobile-menu';
    menu.id = 'mobile-menu';
    menu.innerHTML = `
      <ul>${liHTML}</ul>
      <div class="mobile-nav-actions">
        <button class="m-login" onclick="window.location='contact.html';closeMobileMenu()">Log in</button>
        <button class="m-start" onclick="window.location='pricing.html';closeMobileMenu()">Get Started</button>
      </div>`;
    nav.insertAdjacentElement('afterend', menu);
  }

  window.toggleMobileMenu = function () {
    const menu = document.getElementById('mobile-menu');
    const btn  = document.getElementById('hamburger');
    const isOpen = menu.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  window.closeMobileMenu = function () {
    const menu = document.getElementById('mobile-menu');
    const btn  = document.getElementById('hamburger');
    menu.classList.remove('open');
    btn.classList.remove('open');
    document.body.style.overflow = '';
  };

  // Close on resize back to desktop
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) closeMobileMenu();
  });
})();
