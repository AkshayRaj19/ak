/* ==========================================================================
   HUMANLLY - Luxury International Textile & Fashion Brand Script
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* --------------------------------------------------------------------------
     1. State Management (Cart & Wishlist)
     -------------------------------------------------------------------------- */
  const state = {
    cart: [],
    wishlist: new Set(),
    darkMode: localStorage.getItem('humanlly_theme') === 'dark'
  };

  /* Sample Product Database for Quick View & Cart */
  const productCatalog = {
    1: { id: 1, name: 'Royal Mulberry Silk Saree', price: 299, oldPrice: 399, rating: 5, category: 'silk', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80', desc: 'Handwoven 100% pure Mulberry silk with intricate zari borders crafted by master artisans.' },
    2: { id: 2, name: 'Egyptian Giza Cotton Suit', price: 189, oldPrice: 249, rating: 4.8, category: 'cotton', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80', desc: 'Superfine long-staple Giza cotton fabric with a silky soft luster and tailored finish.' },
    3: { id: 3, name: 'Handspun Linen Summer Blazer', price: 220, oldPrice: 280, rating: 4.9, category: 'linen', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80', desc: 'Breathable eco-friendly organic linen designed for refined effortless summer sophistication.' },
    4: { id: 4, name: 'Bridal Raw Silk Lehenga', price: 540, oldPrice: 650, rating: 5, category: 'wedding', image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80', desc: 'Heavy embroidered opulent royal wedding ensemble featuring hand-sewn embellishments.' },
    5: { id: 5, name: 'Organic Cotton Luxury Bed Set', price: 145, oldPrice: 195, rating: 4.7, category: 'home', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80', desc: '400 thread count percale cotton sheet set for an elevated, hotel-grade night sleep.' },
    6: { id: 6, name: 'Cashmere Wool Pashmina Shawl', price: 310, oldPrice: 420, rating: 5, category: 'silk', image: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=800&q=80', desc: 'Ultra-soft authentic Himalayan cashmere shawl woven with traditional floral paisley motifs.' },
    7: { id: 7, name: 'Bespoke Linen Table Runner Set', price: 85, oldPrice: 110, rating: 4.6, category: 'home', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80', desc: 'Minimalist European flax table runner and matching napkin set for luxury dining.' },
    8: { id: 8, name: 'Kids Velvet Party Kurta Set', price: 95, oldPrice: 130, rating: 4.8, category: 'kids', image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=800&q=80', desc: 'Comfortable plush velvet festive outfit tailored with soft cotton skin lining.' },
    9: { id: 9, name: 'Hand-Printed Chanderi Dupatta', price: 115, oldPrice: 160, rating: 4.9, category: 'women', image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80', desc: 'Lightweight sheer silk-cotton blend featuring regal gold foil hand block prints.' },
    10: { id: 10, name: 'Tailored Men Velvet Sherwani', price: 480, oldPrice: 590, rating: 5, category: 'men', image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80', desc: 'Grand royal navy velvet sherwani with handcrafted antique zardozi embroidery.' },
    11: { id: 11, name: 'Pure Khadi Cotton Shirting Fabric', price: 65, oldPrice: 85, rating: 4.7, category: 'cotton', image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=800&q=80', desc: '100% hand-loomed eco-conscious Khadi cotton per meter for bespoke tailoring.' },
    12: { id: 12, name: 'Jacquard Weave Silk Cushion Covers', price: 70, oldPrice: 95, rating: 4.8, category: 'home', image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80', desc: 'Set of 4 metallic thread jacquard silk cushion covers for luxury living rooms.' }
  };

  /* --------------------------------------------------------------------------
     2. Page Preloader
     -------------------------------------------------------------------------- */
  const preloader = document.getElementById('page-preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.style.opacity = '0';
      setTimeout(() => {
        preloader.style.visibility = 'hidden';
      }, 600);
    });
  }

  /* --------------------------------------------------------------------------
     3. Dark Mode Toggle
     -------------------------------------------------------------------------- */
  const darkModeBtn = document.getElementById('dark-mode-toggle');
  const applyTheme = (isDark) => {
    if (isDark) {
      document.body.classList.add('dark-mode');
      document.documentElement.setAttribute('data-bs-theme', 'dark');
      if (darkModeBtn) darkModeBtn.innerHTML = '<i class="bi bi-sun-fill text-warning"></i>';
    } else {
      document.body.classList.remove('dark-mode');
      document.documentElement.setAttribute('data-bs-theme', 'light');
      if (darkModeBtn) darkModeBtn.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';
    }
  };

  // Init Theme
  applyTheme(state.darkMode);

  if (darkModeBtn) {
    darkModeBtn.addEventListener('click', () => {
      state.darkMode = !state.darkMode;
      localStorage.setItem('humanlly_theme', state.darkMode ? 'dark' : 'light');
      applyTheme(state.darkMode);
      showToast('Theme Changed', `Switched to ${state.darkMode ? 'Dark' : 'Light'} Mode.`, 'bi-palette');
    });
  }

  /* --------------------------------------------------------------------------
     4. Sticky Navbar & Scroll Progress Bar
     -------------------------------------------------------------------------- */
  const navbar = document.getElementById('main-navbar');
  const progressBar = document.getElementById('scroll-progress');
  const backToTopBtn = document.getElementById('btn-back-to-top');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    // Progress bar update
    if (progressBar) {
      progressBar.style.width = `${scrollPercent}%`;
    }

    // Sticky glass navbar background
    if (navbar) {
      if (scrollTop > 50) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    }

    // Back to top button visibility
    if (backToTopBtn) {
      if (scrollTop > 350) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* --------------------------------------------------------------------------
     5. Typed.js Initialization
     -------------------------------------------------------------------------- */
  if (document.getElementById('typed-text')) {
    new Typed('#typed-text', {
      strings: [
        'Premium Fabrics',
        'Luxury Collections',
        'Designed for Elegance',
        'Sustainable Fashion'
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });
  }

  /* --------------------------------------------------------------------------
     6. AOS (Animate On Scroll) Initialization
     -------------------------------------------------------------------------- */
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 90
    });
  }

  /* --------------------------------------------------------------------------
     7. GSAP Animations & Counters
     -------------------------------------------------------------------------- */
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Hero element reveals
    gsap.from('.hero-content > *', {
      duration: 1,
      y: 40,
      opacity: 0,
      stagger: 0.2,
      ease: 'power3.out'
    });

    // Count-up Statistics Animation
    const counterElements = document.querySelectorAll('.stat-counter');
    counterElements.forEach((counter) => {
      const target = +counter.getAttribute('data-target');
      ScrollTrigger.create({
        trigger: counter,
        start: 'top 85%',
        onEnter: () => {
          gsap.to(counter, {
            innerText: target,
            duration: 2,
            snap: { innerText: 1 },
            ease: 'power2.out',
            onUpdate: function () {
              counter.innerText = Math.ceil(this.targets()[0].innerText);
            }
          });
        }
      });
    });
  }

  /* --------------------------------------------------------------------------
     8. Swiper Sliders Initialization
     -------------------------------------------------------------------------- */
  if (typeof Swiper !== 'undefined') {
    // New Arrivals Swiper
    new Swiper('#swiper-new-arrivals', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false
      },
      pagination: {
        el: '.new-arrivals-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.new-arrivals-next',
        prevEl: '.new-arrivals-prev'
      },
      breakpoints: {
        576: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
        1200: { slidesPerView: 4 }
      }
    });

    // Testimonials Swiper
    new Swiper('#swiper-testimonials', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false
      },
      pagination: {
        el: '.testimonials-pagination',
        clickable: true
      },
      breakpoints: {
        768: { slidesPerView: 2 },
        1200: { slidesPerView: 3 }
      }
    });
  }

  /* --------------------------------------------------------------------------
     9. Product Category Filtering
     -------------------------------------------------------------------------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-grid-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      productCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterVal === 'all' || category === filterVal) {
          card.style.display = 'block';
          gsap.fromTo(card, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.4 });
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* --------------------------------------------------------------------------
     10. Cart & Wishlist Logic
     -------------------------------------------------------------------------- */
  const cartBadge = document.getElementById('cart-count-badge');
  const wishlistBadge = document.getElementById('wishlist-count-badge');
  const cartItemsContainer = document.getElementById('cart-items-container');
  const cartSubtotalEl = document.getElementById('cart-subtotal');
  const freeShippingProgress = document.getElementById('free-shipping-bar');

  const updateBadges = () => {
    const totalQty = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartBadge) cartBadge.innerText = totalQty;
    if (wishlistBadge) wishlistBadge.innerText = state.wishlist.size;
  };

  const renderCart = () => {
    if (!cartItemsContainer) return;

    if (state.cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div class="text-center py-5">
          <i class="bi bi-bag-x text-muted" style="font-size: 3.5rem;"></i>
          <p class="mt-3 text-muted fw-semibold">Your shopping bag is empty.</p>
          <button class="btn btn-gold btn-sm mt-2" data-bs-dismiss="offcanvas">Explore Collections</button>
        </div>
      `;
      if (cartSubtotalEl) cartSubtotalEl.innerText = '$0.00';
      if (freeShippingProgress) freeShippingProgress.style.width = '0%';
      return;
    }

    let subtotal = 0;
    let html = '';

    state.cart.forEach((item, index) => {
      const itemTotal = item.price * item.quantity;
      subtotal += itemTotal;

      html += `
        <div class="d-flex align-items-center gap-3 py-3 border-bottom border-gold">
          <img src="${item.image}" alt="${item.name}" style="width: 70px; height: 70px; object-fit: cover; border-radius: 8px;">
          <div class="flex-grow-1">
            <h6 class="mb-1 text-truncate" style="max-width: 180px;">${item.name}</h6>
            <div class="text-gold fw-bold">$${item.price}</div>
            <div class="d-flex align-items-center gap-2 mt-2">
              <button class="btn btn-sm btn-outline-secondary py-0 px-2 btn-qty-dec" data-index="${index}">-</button>
              <span class="fw-semibold px-1">${item.quantity}</span>
              <button class="btn btn-sm btn-outline-secondary py-0 px-2 btn-qty-inc" data-index="${index}">+</button>
            </div>
          </div>
          <button class="btn btn-link text-danger p-0 btn-cart-remove" data-index="${index}">
            <i class="bi bi-trash fs-5"></i>
          </button>
        </div>
      `;
    });

    cartItemsContainer.innerHTML = html;
    if (cartSubtotalEl) cartSubtotalEl.innerText = `$${subtotal.toFixed(2)}`;

    // Free shipping threshold ($200)
    const threshold = 200;
    const progress = Math.min((subtotal / threshold) * 100, 100);
    if (freeShippingProgress) freeShippingProgress.style.width = `${progress}%`;

    // Attach quantity and remove listeners
    document.querySelectorAll('.btn-qty-dec').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = e.currentTarget.getAttribute('data-index');
        if (state.cart[idx].quantity > 1) {
          state.cart[idx].quantity--;
        } else {
          state.cart.splice(idx, 1);
        }
        updateBadges();
        renderCart();
      });
    });

    document.querySelectorAll('.btn-qty-inc').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = e.currentTarget.getAttribute('data-index');
        state.cart[idx].quantity++;
        updateBadges();
        renderCart();
      });
    });

    document.querySelectorAll('.btn-cart-remove').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = e.currentTarget.getAttribute('data-index');
        const removed = state.cart.splice(idx, 1)[0];
        updateBadges();
        renderCart();
        showToast('Item Removed', `${removed.name} removed from your bag.`, 'bi-trash');
      });
    });
  };

  // Global Add to Cart listener
  document.body.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-add-cart');
    if (btn) {
      const pId = btn.getAttribute('data-id');
      const product = productCatalog[pId];

      if (product) {
        const existing = state.cart.find(i => i.id === product.id);
        if (existing) {
          existing.quantity++;
        } else {
          state.cart.push({ ...product, quantity: 1 });
        }
        updateBadges();
        renderCart();
        showToast('Added to Cart', `${product.name} has been added to your shopping bag.`, 'bi-bag-check-fill');
      }
    }

    // Wishlist Toggle Listener
    const wishBtn = e.target.closest('.btn-wishlist');
    if (wishBtn) {
      const pId = wishBtn.getAttribute('data-id');
      const icon = wishBtn.querySelector('i');
      if (state.wishlist.has(pId)) {
        state.wishlist.delete(pId);
        if (icon) {
          icon.classList.remove('bi-heart-fill', 'text-danger');
          icon.classList.add('bi-heart');
        }
        showToast('Wishlist Updated', 'Item removed from your wishlist.', 'bi-heartbreak');
      } else {
        state.wishlist.add(pId);
        if (icon) {
          icon.classList.remove('bi-heart');
          icon.classList.add('bi-heart-fill', 'text-danger');
        }
        showToast('Wishlist Saved', 'Item saved to your wishlist.', 'bi-heart-fill');
      }
      updateBadges();
    }
  });

  /* --------------------------------------------------------------------------
     11. Quick View Modal Populator
     -------------------------------------------------------------------------- */
  document.body.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-quick-view');
    if (btn) {
      const pId = btn.getAttribute('data-id');
      const product = productCatalog[pId];
      if (!product) return;

      const modalTitle = document.getElementById('qv-title');
      const modalImg = document.getElementById('qv-img');
      const modalPrice = document.getElementById('qv-price');
      const modalOldPrice = document.getElementById('qv-old-price');
      const modalDesc = document.getElementById('qv-desc');
      const modalAddCartBtn = document.getElementById('qv-add-cart-btn');

      if (modalTitle) modalTitle.innerText = product.name;
      if (modalImg) modalImg.src = product.image;
      if (modalPrice) modalPrice.innerText = `$${product.price}`;
      if (modalOldPrice) modalOldPrice.innerText = `$${product.oldPrice}`;
      if (modalDesc) modalDesc.innerText = product.desc;
      if (modalAddCartBtn) modalAddCartBtn.setAttribute('data-id', product.id);

      const qvModal = new bootstrap.Modal(document.getElementById('quickViewModal'));
      qvModal.show();
    }
  });

  /* --------------------------------------------------------------------------
     12. Search Overlay Functionality
     -------------------------------------------------------------------------- */
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results-list');

  if (searchInput && searchResults) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      if (query.length === 0) {
        searchResults.innerHTML = '<p class="text-muted text-center py-4">Start typing to search products...</p>';
        return;
      }

      const matches = Object.values(productCatalog).filter(p => p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query));

      if (matches.length === 0) {
        searchResults.innerHTML = `<p class="text-muted text-center py-4">No luxury fabrics found matching "${query}".</p>`;
        return;
      }

      searchResults.innerHTML = matches.map(p => `
        <div class="d-flex align-items-center gap-3 py-2 border-bottom border-gold search-result-item" style="cursor: pointer;" data-id="${p.id}">
          <img src="${p.image}" alt="${p.name}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 6px;">
          <div class="flex-grow-1">
            <h6 class="mb-0 text-truncate" style="max-width: 250px;">${p.name}</h6>
            <small class="text-gold">$${p.price}</small>
          </div>
          <button class="btn btn-sm btn-gold btn-quick-view" data-id="${p.id}" data-bs-dismiss="modal">View</button>
        </div>
      `).join('');
    });
  }

  /* --------------------------------------------------------------------------
     13. Humanlly+ Membership Pricing Plan Switcher
     -------------------------------------------------------------------------- */
  const pricingToggle = document.getElementById('pricing-toggle');
  const priceSilver = document.getElementById('price-silver');
  const priceGold = document.getElementById('price-gold');
  const pricePlatinum = document.getElementById('price-platinum');

  if (pricingToggle) {
    pricingToggle.addEventListener('change', (e) => {
      const isAnnual = e.target.checked;
      if (priceSilver) priceSilver.innerHTML = isAnnual ? '$190<span>/year</span>' : '$19<span>/month</span>';
      if (priceGold) priceGold.innerHTML = isAnnual ? '$490<span>/year</span>' : '$49<span>/month</span>';
      if (pricePlatinum) pricePlatinum.innerHTML = isAnnual ? '$990<span>/year</span>' : '$99<span>/month</span>';
    });
  }

  /* --------------------------------------------------------------------------
     14. Form Submissions (Newsletter & Careers)
     -------------------------------------------------------------------------- */
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      if (emailInput && emailInput.value.trim()) {
        showToast('Subscribed!', 'Thank you for subscribing to Humanlly Couture Privé.', 'bi-envelope-check');
        emailInput.value = '';
      }
    });
  }

  const careerForm = document.getElementById('career-apply-form');
  if (careerForm) {
    careerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const modalEl = document.getElementById('careerModal');
      if (modalEl) {
        const bsModal = bootstrap.Modal.getInstance(modalEl);
        if (bsModal) bsModal.hide();
      }
      showToast('Application Sent', 'Your application has been received by our HR talent team.', 'bi-check-circle-fill');
      careerForm.reset();
    });
  }

  /* --------------------------------------------------------------------------
     15. Toast Utility Function
     -------------------------------------------------------------------------- */
  function showToast(title, message, iconClass = 'bi-info-circle') {
    const toastContainer = document.getElementById('toast-wrapper');
    if (!toastContainer) return;

    const toastId = 'toast-' + Date.now();
    const toastHtml = `
      <div id="${toastId}" class="toast custom-toast align-items-center border-0 mb-3" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="d-flex">
          <div class="toast-body d-flex align-items-center gap-3">
            <i class="bi ${iconClass} fs-4 text-gold"></i>
            <div>
              <strong class="d-block text-heading">${title}</strong>
              <small class="text-muted">${message}</small>
            </div>
          </div>
          <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
      </div>
    `;

    toastContainer.insertAdjacentHTML('beforeend', toastHtml);
    const toastEl = document.getElementById(toastId);
    const bsToast = new bootstrap.Toast(toastEl, { delay: 4000 });
    bsToast.show();

    toastEl.addEventListener('hidden.bs.toast', () => {
      toastEl.remove();
    });
  }
});
