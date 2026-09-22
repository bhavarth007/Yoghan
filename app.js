/**
 * YOGHAN — Advanced Fibres & Polymers
 * Commercial Application Scripts & Interactive Animations
 */

document.addEventListener('DOMContentLoaded', () => {
  renderAllProducts();
  initNavbar();
  initHeroCanvas();
  initProductFilters();
  initSpecsTabs();
  initCounters();
  initScrollReveals();
  runYarnCalculations(); // Initialize yarn calculator defaults
  checkUrlHashForProduct(); // Check if URL specifies #detail-{productId}
});

window.addEventListener('hashchange', checkUrlHashForProduct);

/* ==========================================================================
   1. RENDER ALL 20 PRODUCTS (5 PER DEPARTMENT) WITH 4K PHOTOGRAPHY
   ========================================================================== */
function renderAllProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid || typeof YOGHAN_PRODUCTS === 'undefined') return;

  grid.innerHTML = '';

  YOGHAN_PRODUCTS.forEach((p, idx) => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.setAttribute('data-id', p.id);
    card.setAttribute('data-category', p.category);
    card.setAttribute('data-series', p.series);
    card.setAttribute('data-name', p.title);
    card.setAttribute('data-denier', p.denier);

    // Badge styling
    let badgeClass = 'badge-series';
    if (p.badgeType === 'specialty') badgeClass += ' badge-crimson';
    else if (p.badgeType === 'polymer') badgeClass += ' badge-polymer';
    else if (p.badgeType === 'chem') badgeClass += ' badge-chem';

    let statusClass = `badge-status ${p.statusType || 'in-stock'}`;

    card.innerHTML = `
      <div class="card-top-tag">
        <span class="${badgeClass}">${p.badge}</span>
        <span class="${statusClass}">${p.status}</span>
      </div>

      <div class="card-visual" onclick="openProductDetail('${p.id}')" title="Click to view full details & 4K photography">
        <img class="card-visual-photo" src="${p.image}" alt="${p.title}" loading="lazy">
        <div class="card-photo-gradient"></div>
        <div class="yarn-shine"></div>
      </div>

      <div class="card-body">
        <span class="card-kicker">${p.department}</span>
        <h3 class="card-title" onclick="openProductDetail('${p.id}')" style="cursor:pointer;" title="View product specifications">${p.title}</h3>
        <p class="card-desc">${p.tagline}</p>
        
        <div class="card-specs-list">
          <div class="spec-chip"><strong>Count / Grade:</strong> ${p.denier}</div>
          <div class="spec-chip"><strong>Lustre / Form:</strong> ${p.lustre}</div>
          <div class="spec-chip"><strong>Tenacity / Purity:</strong> ${p.tenacity}</div>
          <div class="spec-chip"><strong>Elongation:</strong> ${p.elongation}</div>
        </div>
      </div>

      <div class="card-footer">
        <button class="btn-card-spec" onclick="openProductDetail('${p.id}')">View Details</button>
        <button class="btn-card-quote" onclick="openQuoteFor('${p.title}')">Enquire</button>
      </div>
    `;

    grid.appendChild(card);
  });

  const countEl = document.getElementById('productCount');
  if (countEl) {
    countEl.textContent = `Showing ${YOGHAN_PRODUCTS.length} of ${YOGHAN_PRODUCTS.length} products`;
  }
}

/* ==========================================================================
   2. NAVIGATION & MOBILE DRAWER INTERACTIONS
   ========================================================================== */
function initNavbar() {
  const navbar = document.getElementById('mainNavbar');
  const navToggle = document.getElementById('navToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-sub-link');
  const mobileAccordion = document.getElementById('mobileProductsAccordion');
  const mobileSubMenu = document.getElementById('mobileProductsSub');

  // Navbar scroll background elevation
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    updateActiveNavLink();
  }, { passive: true });

  // Mobile toggle click
  if (navToggle && mobileDrawer) {
    navToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      mobileDrawer.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
  }

  // Dedicated close button in mobile drawer
  const drawerCloseBtn = document.getElementById('mobileDrawerClose');
  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener('click', closeMobileNav);
  }

  // Close mobile drawer on link click
  mobileLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      closeMobileNav();
      const cat = link.getAttribute('data-filter');
      const series = link.getAttribute('data-series');
      if (cat) {
        setTimeout(() => applyFilterFromNav(cat, series), 150);
      }
    });
  });

  // Mobile Products Accordion toggle
  if (mobileAccordion && mobileSubMenu) {
    mobileAccordion.addEventListener('click', () => {
      mobileAccordion.classList.toggle('active');
      mobileSubMenu.classList.toggle('open');
    });
  }

  // Desktop dropdown items click handler
  document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', (e) => {
      const cat = item.getAttribute('data-filter');
      const series = item.getAttribute('data-series');
      if (cat) {
        applyFilterFromNav(cat, series);
      }
    });
  });

  // Mobile Search input
  const mobileSearchInput = document.getElementById('mobileSearchInput');
  if (mobileSearchInput) {
    mobileSearchInput.addEventListener('input', (e) => {
      const searchBox = document.getElementById('productSearch');
      if (searchBox) {
        searchBox.value = e.target.value;
        filterProducts();
      }
    });
  }
}

function closeMobileNav() {
  const mobileDrawer = document.getElementById('mobileDrawer');
  const navToggle = document.getElementById('navToggle');
  if (mobileDrawer && navToggle) {
    mobileDrawer.classList.remove('open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id], header[id]');
  const scrollPos = window.scrollY + 140;

  sections.forEach(sec => {
    const top = sec.offsetTop;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');
    if (scrollPos >= top && scrollPos < top + height) {
      document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  });
}

function applyFilterFromNav(cat, series = 'all') {
  // Scroll to product catalogue
  const productSec = document.getElementById('product');
  if (productSec) {
    productSec.scrollIntoView({ behavior: 'smooth' });
  }

  // Activate corresponding category tab
  document.querySelectorAll('.filter-tab-btn').forEach(btn => {
    if (btn.getAttribute('data-cat') === cat) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Activate series pill if specified
  if (series && series !== 'all') {
    document.querySelectorAll('.series-pill').forEach(pill => {
      if (pill.getAttribute('data-series') === series) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });
  } else {
    document.querySelectorAll('.series-pill').forEach(pill => {
      pill.classList.toggle('active', pill.getAttribute('data-series') === 'all');
    });
  }

  filterProducts();
}

/* ==========================================================================
   3. HERO WEAVING FIBER CANVAS ANIMATION
   ========================================================================== */
function initHeroCanvas() {
  const canvas = document.getElementById('heroFiberCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let strands = [];
  const strandCount = 28;
  let mouse = { x: null, y: null, radius: 140 };

  function resize() {
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
    initStrands();
  }

  function initStrands() {
    strands = [];
    for (let i = 0; i < strandCount; i++) {
      strands.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.35,
        length: 120 + Math.random() * 240,
        curve: (Math.random() - 0.5) * 60,
        color: Math.random() > 0.85 ? 'rgba(193, 31, 44, 0.4)' : 'rgba(244, 238, 226, 0.12)',
        width: 0.75 + Math.random() * 1.2
      });
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < strands.length; i++) {
      const s = strands[i];
      s.x += s.vx;
      s.y += s.vy;

      if (s.x < -100) s.x = width + 100;
      if (s.x > width + 100) s.x = -100;
      if (s.y < -100) s.y = height + 100;
      if (s.y > height + 100) s.y = -100;

      let mx = s.x;
      let my = s.y;
      if (mouse.x !== null) {
        const dx = mouse.x - s.x;
        const dy = mouse.y - s.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          mx -= dx * force * 0.18;
          my -= dy * force * 0.18;
        }
      }

      ctx.beginPath();
      ctx.moveTo(mx, my);
      ctx.quadraticCurveTo(mx + s.curve, my + s.length / 2, mx, my + s.length);
      ctx.strokeStyle = s.color;
      ctx.lineWidth = s.width;
      ctx.lineCap = 'round';
      ctx.stroke();
    }

    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', resize, { passive: true });
  window.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    if (e.clientY <= rect.bottom) {
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    } else {
      mouse.x = null;
      mouse.y = null;
    }
  }, { passive: true });

  resize();
  animate();
}

/* ==========================================================================
   4. PRODUCT FILTERING, SEARCH & GRID ANIMATIONS
   ========================================================================== */
function initProductFilters() {
  const tabBtns = document.querySelectorAll('.filter-tab-btn');
  const seriesPills = document.querySelectorAll('.series-pill');
  const searchInput = document.getElementById('productSearch');
  const clearBtn = document.getElementById('clearSearch');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterProducts();
    });
  });

  seriesPills.forEach(pill => {
    pill.addEventListener('click', () => {
      seriesPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      filterProducts();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      if (clearBtn) {
        clearBtn.style.display = searchInput.value.length > 0 ? 'inline-block' : 'none';
      }
      filterProducts();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        clearBtn.style.display = 'none';
        filterProducts();
        searchInput.focus();
      }
    });
  }
}

function filterProducts() {
  const activeTab = document.querySelector('.filter-tab-btn.active');
  const activeSeries = document.querySelector('.series-pill.active');
  const searchInput = document.getElementById('productSearch');

  const catVal = activeTab ? activeTab.getAttribute('data-cat') : 'all';
  const seriesVal = activeSeries ? activeSeries.getAttribute('data-series') : 'all';
  const query = searchInput ? searchInput.value.trim().toLowerCase() : '';

  const cards = document.querySelectorAll('.product-card');
  const countEl = document.getElementById('productCount');
  const noResultsBox = document.getElementById('noResultsMsg');

  let visibleCount = 0;

  cards.forEach(card => {
    const cardCat = card.getAttribute('data-category');
    const cardSeries = card.getAttribute('data-series');
    const cardName = (card.getAttribute('data-name') || '').toLowerCase();
    const cardDenier = (card.getAttribute('data-denier') || '').toLowerCase();
    const cardText = card.innerText.toLowerCase();

    // Match category
    const catMatch = (catVal === 'all') || (cardCat === catVal);

    // Match series
    const seriesMatch = (seriesVal === 'all') || (cardSeries === seriesVal) || (cardSeries === 'all');

    // Match search query
    const searchMatch = !query || cardName.includes(query) || cardDenier.includes(query) || cardText.includes(query);

    if (catMatch && seriesMatch && searchMatch) {
      card.style.display = 'flex';
      card.style.opacity = '0';
      card.style.transform = 'scale(0.96) translateY(8px)';
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'scale(1) translateY(0)';
      }, 30);
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });

  if (countEl) {
    countEl.textContent = `Showing ${visibleCount} of ${cards.length} products`;
  }

  if (noResultsBox) {
    noResultsBox.style.display = visibleCount === 0 ? 'block' : 'none';
  }
}

function resetAllFilters() {
  document.querySelectorAll('.filter-tab-btn').forEach((btn, i) => {
    btn.classList.toggle('active', i === 0);
  });
  document.querySelectorAll('.series-pill').forEach((pill, i) => {
    pill.classList.toggle('active', i === 0);
  });
  const searchInput = document.getElementById('productSearch');
  const clearBtn = document.getElementById('clearSearch');
  if (searchInput) {
    searchInput.value = '';
    if (clearBtn) clearBtn.style.display = 'none';
  }
  filterProducts();
}

/* ==========================================================================
   5. DEEP PRODUCT DETAIL MODAL & URL HASH ROUTING
   ========================================================================== */
function openProductDetail(productId) {
  if (typeof YOGHAN_PRODUCTS === 'undefined') return;

  const product = YOGHAN_PRODUCTS.find(p => p.id === productId) || YOGHAN_PRODUCTS[0];
  if (!product) return;

  const modal = document.getElementById('specModal');
  const badge = document.getElementById('specModalBadge');
  const title = document.getElementById('specModalTitle');
  const subtitle = document.getElementById('specModalSubtitle');
  const body = document.getElementById('specModalBody');

  if (badge) badge.textContent = `${product.department.toUpperCase()} • ${product.badge}`;
  if (title) title.textContent = product.title;
  if (subtitle) subtitle.textContent = product.summary || product.tagline;

  // Build rich modal body with 4K image, specs, and applications
  let html = `
    <div class="modal-product-visual-wrap">
      <img src="${product.image}" alt="${product.title}">
      <div class="modal-visual-overlay-tag">
        <span class="badge-series">${product.badge}</span>
      </div>
    </div>

    <div class="spec-grid-info">
  `;

  if (product.keySpecs) {
    Object.entries(product.keySpecs).forEach(([k, v]) => {
      html += `<div class="spec-kv"><span>${k}:</span><strong>${v}</strong></div>`;
    });
  }

  html += `</div>`;

  if (product.applications && product.applications.length > 0) {
    html += `
      <div class="modal-apps-wrap">
        <h4>Target Commercial Applications:</h4>
        <div class="modal-apps-chips">
          ${product.applications.map(a => `<span class="modal-app-chip">${a}</span>`).join('')}
        </div>
      </div>
    `;
  }

  if (product.packaging) {
    html += `
      <div class="modal-pkg-note">
        <strong>Export Packaging:</strong> ${product.packaging}
      </div>
    `;
  }

  body.innerHTML = html;

  // Update modal footer actions
  const modalFooter = modal.querySelector('.modal-footer-actions');
  if (modalFooter) {
    modalFooter.innerHTML = `
      <a href="product.html?id=${product.id}" target="_blank" class="btn-ghost" style="text-decoration:none;" title="Open in separate tab">
        <span>Open Standalone Page</span>
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
      </a>
      <button class="btn-primary" onclick="closeSpecModal(); openQuoteFor('${product.title}');">
        <span>Request Mill Quote for this Grade</span>
      </button>
    `;
  }

  // Update URL hash for sharing
  window.location.hash = `detail-${product.id}`;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeSpecModal() {
  const modal = document.getElementById('specModal');
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

function checkUrlHashForProduct() {
  const hash = window.location.hash;
  if (hash && hash.startsWith('#detail-')) {
    const prodId = hash.replace('#detail-', '');
    openProductDetail(prodId);
  }
}

function openSpecSheetModal() {
  openProductDetail('fdy-semi-dull');
}

/* ==========================================================================
   6. TECHNICAL SPECIFICATIONS BENCH TABS
   ========================================================================== */
function initSpecsTabs() {
  const specTabs = document.querySelectorAll('.spec-tab-btn');
  specTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      specTabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetId = btn.getAttribute('data-spec-target');
      document.querySelectorAll('.spec-table-card').forEach(card => {
        if (card.id === targetId) {
          card.classList.add('active');
        } else {
          card.classList.remove('active');
        }
      });
    });
  });
}

/* ==========================================================================
   7. ANIMATED NUMBER COUNTERS
   ========================================================================== */
function initCounters() {
  const counters = document.querySelectorAll('.counter');
  if (!('IntersectionObserver' in window)) {
    counters.forEach(c => c.textContent = c.getAttribute('data-target'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-target'));
        const decimal = parseInt(el.getAttribute('data-decimal') || '0', 10);
        animateCounter(el, target, decimal);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(c => observer.observe(c));
}

function animateCounter(element, target, decimal = 0) {
  const duration = 1600;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    const currentVal = target * easeProgress;

    if (decimal > 0) {
      element.textContent = currentVal.toFixed(decimal);
    } else {
      element.textContent = Math.floor(currentVal).toLocaleString();
    }

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      if (decimal > 0) {
        element.textContent = target.toFixed(decimal);
      } else {
        element.textContent = target.toLocaleString();
      }
    }
  }

  requestAnimationFrame(update);
}

/* ==========================================================================
   8. SCROLL REVEALS
   ========================================================================== */
function initScrollReveals() {
  const targets = document.querySelectorAll('.reveal, .reveal-stagger');
  if (!('IntersectionObserver' in window)) {
    targets.forEach(el => el.classList.add('in-view'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  targets.forEach(el => io.observe(el));
}

/* ==========================================================================
   9. COMMERCIAL QUOTE MODAL & PRE-FILL
   ========================================================================== */
function openQuoteModal() {
  const modal = document.getElementById('quoteModal');
  if (modal) {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
}

function closeQuoteModal() {
  const modal = document.getElementById('quoteModal');
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

function openQuoteFor(productName) {
  openQuoteModal();
  const selectEl = document.getElementById('quoteProduct');
  if (selectEl) {
    let matched = false;
    for (let i = 0; i < selectEl.options.length; i++) {
      if (selectEl.options[i].text.includes(productName) || productName.includes(selectEl.options[i].text) || selectEl.options[i].value.includes(productName)) {
        selectEl.selectedIndex = i;
        matched = true;
        break;
      }
    }
    if (!matched) {
      // Add or set custom
      const opt = new Option(productName, productName, true, true);
      selectEl.add(opt);
    }
  }
}

function handleProductChange(val) {
  const denierInput = document.getElementById('quoteDenier');
  if (!denierInput) return;

  if (val.includes('FDY')) {
    denierInput.placeholder = 'e.g. 20D/1f, 40D/12f, 70D/24f Bright/Semi-Dull';
  } else if (val.includes('DTY')) {
    denierInput.placeholder = 'e.g. 40D/34f, 70D/24f/1, 70D/68f/2';
  } else if (val.includes('Chips')) {
    denierInput.placeholder = 'e.g. RV 2.45, RV 2.70, or RV 3.30 High Viscosity';
  } else if (val.includes('Ammonium')) {
    denierInput.placeholder = 'e.g. 50kg bags or bulk tanker/hopper load';
  } else {
    denierInput.placeholder = 'Specify required count, ply, or finish';
  }
}

function handleQuoteSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('quoteForm');
  const successCard = document.getElementById('quoteSuccessMsg');
  const refNum = document.getElementById('quoteRefNumber');

  if (refNum) {
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    refNum.textContent = `#YOG-2026-${randomCode}`;
  }

  form.style.display = 'none';
  successCard.style.display = 'block';

  showToast('✓ Quotation request registered with Surat sales desk.', 'success');
}

/* ==========================================================================
   10. YARN YIELD CALCULATOR LOGIC
   ========================================================================== */
function openCalculatorModal() {
  const modal = document.getElementById('calcModal');
  if (modal) {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    runYarnCalculations();
  }
}

function closeCalculatorModal() {
  const modal = document.getElementById('calcModal');
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

function runYarnCalculations() {
  const denierInput = document.getElementById('calcDenier');
  const weightInput = document.getElementById('calcWeightKg');

  if (!denierInput || !weightInput) return;

  const denier = parseFloat(denierInput.value) || 40;
  const weightKg = parseFloat(weightInput.value) || 1;

  const weightGrams = weightKg * 1000;
  const meters = (9000 * weightGrams) / denier;
  const dtex = denier * 1.1111;
  const ne = 5315 / denier;
  const nm = 9000 / denier;

  document.getElementById('resMeters').textContent = Math.round(meters).toLocaleString() + ' m';
  document.getElementById('resDtex').textContent = dtex.toFixed(1) + ' dtex';
  document.getElementById('resNe').textContent = ne.toFixed(1) + ' Ne';
  document.getElementById('resNm').textContent = nm.toFixed(1) + ' Nm';
}

/* ==========================================================================
   11. MODAL BACKDROP & KEY LISTENERS
   ========================================================================== */
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('open');
    e.target.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(modal => {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
    });
    document.body.style.overflow = '';
    closeMobileNav();
  }
});

function showToast(message, type = 'info') {
  const box = document.getElementById('toastBox');
  if (!box) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;

  box.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'opacity 0.3s, transform 0.3s';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
