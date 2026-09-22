/**
 * YOGHAN — Advanced Fibres & Polymers
 * Commercial Application Scripts & Interactive Animations
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHeroCanvas();
  initProductFilters();
  initSpecsTabs();
  initCounters();
  initScrollReveals();
  runYarnCalculations(); // Initialize yarn calculator defaults
});

/* ==========================================================================
   1. NAVIGATION & MOBILE DRAWER INTERACTIONS
   ========================================================================== */
function initNavbar() {
  const navbar = document.getElementById('mainNavbar');
  const navToggle = document.getElementById('navToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const navLinks = document.querySelectorAll('.nav-link');
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
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
  }

  // Close mobile drawer on link click
  mobileLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      closeMobileNav();
      // If link contains data-filter, apply it
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
   2. HERO INTERACTIVE WEAVING FIBER CANVAS ANIMATION
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

      // Mouse subtle wave interaction
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
   3. PRODUCT FILTERING, SEARCH & GRID ANIMATIONS
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
      // Trigger subtle entrance transition
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
   4. TECHNICAL SPECIFICATIONS TABS
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
   5. ANIMATED NUMBER COUNTERS (HERO & ABOUT SECTIONS)
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
    // Ease out expo curve
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
   6. SCROLL REVEALS (INTERSECTION OBSERVER)
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
   7. COMMERCIAL QUOTE MODAL & PRE-FILL ACTIONS
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
    for (let i = 0; i < selectEl.options.length; i++) {
      if (selectEl.options[i].value.includes(productName) || productName.includes(selectEl.options[i].value)) {
        selectEl.selectedIndex = i;
        break;
      }
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
   8. YARN YIELD CALCULATOR LOGIC
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

  // Linear Meters = (9000 * weight in grams) / denier
  const weightGrams = weightKg * 1000;
  const meters = (9000 * weightGrams) / denier;

  // Decitex (dtex) = Denier * 1.1111
  const dtex = denier * 1.1111;

  // English Cotton Count (Ne) = 5315 / Denier
  const ne = 5315 / denier;

  // Metric Count (Nm) = 9000 / Denier
  const nm = 9000 / denier;

  document.getElementById('resMeters').textContent = Math.round(meters).toLocaleString() + ' m';
  document.getElementById('resDtex').textContent = dtex.toFixed(1) + ' dtex';
  document.getElementById('resNe').textContent = ne.toFixed(1) + ' Ne';
  document.getElementById('resNm').textContent = nm.toFixed(1) + ' Nm';
}

/* ==========================================================================
   9. PRODUCT TECHNICAL DATA SHEET QUICK VIEW
   ========================================================================== */
const SPEC_DATA = {
  'fdy-reg': {
    title: 'Nylon 6 Fully Drawn Yarn (FDY)',
    kicker: 'CONTINUOUS DRAW GODET FILAMENT',
    specs: [
      { label: 'Denier Availability', val: '20D, 30D, 40D, 50D, 70D, 100D, 210D' },
      { label: 'Filament Matrix', val: '1f (mono) up to 68f (micro-filament)' },
      { label: 'Tenacity (Breaking Strength)', val: '4.80 – 5.50 grams / denier' },
      { label: 'Elongation at Break', val: '28.0% – 32.0% (± 2.5%)' },
      { label: 'Boiling Water Shrinkage', val: '7.0% – 8.5%' },
      { label: 'Evenness CV%', val: '< 1.05% (Uster Tester 5)' },
      { label: 'Spin Finish Oil Pick-up (OPU)', val: '0.85% – 1.10% (Low splash water-jet finish)' },
      { label: 'Package Weight & Tube', val: '5.0 kg / 6.0 kg on 290mm paper tube' }
    ]
  },
  'dty-reg': {
    title: 'Nylon 6 Drawn Textured Yarn (DTY)',
    kicker: 'CRIMPED & HIGH-BULK INTERLACED',
    specs: [
      { label: 'Denier / Ply', val: '30D/24f, 40D/34f, 70D/24f, 70D/68f (1-ply & 2-ply)' },
      { label: 'Crimp Contraction (CC)', val: '43.0% – 48.0%' },
      { label: 'Crimp Stability (CS)', val: '84.0% – 88.0%' },
      { label: 'Interlace Intensity', val: 'Non-interlaced (NIM), Soft (SIM), High (HIM 80+ knots/m)' },
      { label: 'Tenacity', val: '4.20 – 4.70 grams / denier' },
      { label: 'Boiling Water Shrinkage', val: '3.2% – 4.0%' },
      { label: 'Coning Package', val: '5.5 kg bi-conical paper cone, shrink-wrapped' },
      { label: 'Primary Use', val: 'Seamless lingerie, activewear, circular jersey & raschel knit' }
    ]
  },
  'poy-reg': {
    title: 'Nylon 6 Partially Oriented Yarn (POY)',
    kicker: 'FEEDSTOCK FOR TEXTURIZING & DRAW-TWISTING',
    specs: [
      { label: 'Feed Denier Range', val: '50D, 85D, 115D, 170D, 280D' },
      { label: 'Elongation Range', val: '68% – 76%' },
      { label: 'Uster Unevenness U%', val: '< 0.70%' },
      { label: 'Residual Tension', val: 'Uniform across cheese inner and outer layers' },
      { label: 'Cheese Dimensions', val: 'Outer Dia 420mm, Traverse 150mm' },
      { label: 'Net Package Weight', val: '10.5 kg – 12.0 kg per cheese' }
    ]
  },
  'hoy-reg': {
    title: 'Nylon 6 Highly Oriented Yarn (HOY)',
    kicker: 'DIRECT WEAVING SINGLE STEP FILAMENT',
    specs: [
      { label: 'Denier Counts', val: '30D/12f, 40D/24f, 70D/36f' },
      { label: 'Spinning Velocity', val: '4,800 – 5,200 meters/min' },
      { label: 'Boiling Shrinkage', val: '6.5% – 8.5%' },
      { label: 'Tenacity', val: '4.6 – 5.0 gpd' },
      { label: 'Direct Weaving Benefit', val: 'Eliminates sizing process on modern rapier & air jet looms' }
    ]
  },
  'dope-dyed': {
    title: 'Dope-Dyed & Bright Trilobal Specialty Nylon',
    kicker: 'PIGMENT SPUN-DYED FILAMENT',
    specs: [
      { label: 'Standard Shades', val: 'Jet Black (Carbon Black), Ruby Red, Royal Blue, Emerald Green' },
      { label: 'Custom Shade Matching', val: 'Available for order quantities ≥ 5 MT' },
      { label: 'Washing Fastness', val: 'Grade 5 (ISO 105-C06)' },
      { label: 'Light Fastness', val: 'Grade 7-8 (ISO 105-B02 Xenon Arc)' },
      { label: 'Environmental Benefit', val: 'Zero water consumption and zero wastewater dyehouse discharge' }
    ]
  },
  'high-tenacity': {
    title: 'High-Tenacity Industrial Nylon 6 (HT)',
    kicker: 'HEAVY-DUTY TECHNICAL FILAMENT',
    specs: [
      { label: 'Industrial Deniers', val: '210D/36f, 420D/72f, 840D/144f' },
      { label: 'Breaking Tenacity', val: '≥ 7.5 to 8.2 grams / denier' },
      { label: 'Elongation at Break', val: '18.0% – 22.0%' },
      { label: 'Hot Air Shrinkage (177°C)', val: '5.5% – 7.0%' },
      { label: 'Applications', val: 'Military parachutes, marine rope cordage, conveyor webbing, industrial fishnets' }
    ]
  },
  'pa6-chips': {
    title: 'Polyamide 6 Polymer Chips (Virgin)',
    kicker: 'CONTINUOUS HYDROLYTIC POLYMERIZATION',
    specs: [
      { label: 'Available Relative Viscosities', val: '2.45 ± 0.03 (Textile), 2.70 ± 0.03 (Compounding), 3.30 ± 0.04 (Extrusion)' },
      { label: 'Extractable Caprolactam Monomer', val: '≤ 0.55% w/w (Hot water extraction)' },
      { label: 'Moisture in Packed Granules', val: '≤ 0.06% w/w (Karl Fischer)' },
      { label: 'Melting Point (DSC)', val: '220°C – 222°C' },
      { label: 'Packing Formats', val: '25 kg multi-wall moisture-barrier paper bags, 1,000 kg PP Jumbo Bags, Bulk Silo' }
    ]
  },
  'ammo-sulphate': {
    title: 'Industrial & Agro Ammonium Sulphate — (NH₄)₂SO₄',
    kicker: 'HIGH-PURITY BYPRODUCT CRYSTALS',
    specs: [
      { label: 'Ammoniacal Nitrogen Content', val: '20.95% by weight (Guaranteed Min 20.6%)' },
      { label: 'Available Sulphur (as S)', val: '24.10% by weight (Guaranteed Min 23.0%)' },
      { label: 'Free Moisture', val: '≤ 0.25%' },
      { label: 'Free Acidity (as H₂SO₄)', val: '≤ 0.03%' },
      { label: 'Grain Size Distribution', val: 'Free-flowing white crystalline powder / granules, anti-caking treated' },
      { label: 'Regulatory Compliance', val: '100% compliant with Indian Fertilizer Control Order (FCO) 1985' }
    ]
  }
};

function openProductDetail(key) {
  const data = SPEC_DATA[key];
  if (!data) return;

  const modal = document.getElementById('specModal');
  const badge = document.getElementById('specModalBadge');
  const title = document.getElementById('specModalTitle');
  const subtitle = document.getElementById('specModalSubtitle');
  const body = document.getElementById('specModalBody');

  if (badge) badge.textContent = data.kicker;
  if (title) title.textContent = data.title;
  if (subtitle) subtitle.textContent = 'Surat Quality Assurance Lab certified specifications & physical parameters.';

  let html = '<div class="spec-grid-info">';
  data.specs.forEach(s => {
    html += `<div class="spec-kv"><span style="color:var(--ash); display:block; font-size:11.5px;">${s.label}:</span><strong>${s.val}</strong></div>`;
  });
  html += '</div>';

  body.innerHTML = html;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function openSpecSheetModal() {
  openProductDetail('fdy-reg');
}

function closeSpecModal() {
  const modal = document.getElementById('specModal');
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

// Close modals on clicking overlay backdrop
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('open');
    e.target.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
});

// Close modals on Escape key
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

/* ==========================================================================
   10. TOAST NOTIFICATIONS
   ========================================================================== */
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
