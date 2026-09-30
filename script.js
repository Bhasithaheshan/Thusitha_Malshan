/**
 * Thusiya 👣🇱🇰 - Personal Travel Portfolio
 * Script: Journey Photo Album Viewer, Category Filtering, Firefly Particles, Back to Top & Clipboard Toasts
 */

// Comprehensive Journey Data & Photos
const journeysData = {
  kabaragala: {
    title: "Kabaragala",
    badge: "Featured Expedition",
    location: "📍 Dolosbage Mountain Range, Sri Lanka • 1,506m Peak",
    photos: [
      { src: "images/kabaragala/1.jpeg", caption: "Summit Ridge Camp • Tent set up amidst rolling morning mists" },
      { src: "images/kabaragala/2.jpeg", caption: "Through The Pines • Looking out toward distant blue horizons" },
      { src: "images/kabaragala/3.jpeg", caption: "Forest Sanctuary • Camping fellowship settled in towering pine trees" },
      { src: "images/kabaragala/4.jpeg", caption: "Above The Clouds • Welcoming dawn with open arms atop the cliff" },
      { src: "images/kabaragala/5.jpeg", caption: "Golden Hour Edge • Sea of fog glowing under the morning sun" },
      { src: "images/kabaragala/6.jpeg", caption: "Morning Radiance • Silhouetted pines facing the brilliant sunrise" },
      { src: "images/kabaragala/7.jpeg", caption: "Dawn Vista • Tent perched high over endless valley clouds" },
      { src: "images/kabaragala/8.jpeg", caption: "Emerald Wilderness • Overlooking deep tropical slopes and valleys" },
      { src: "images/kabaragala/9.jpeg", caption: "Solitary Reflection • Watching the morning sun ascend over the peaks" },
      { src: "images/kabaragala/10.jpeg", caption: "Highland Tea Trails • Rolling tea plantations under clear skies" }
    ]
  },
  dolukanda: {
    title: "Dolukanda",
    badge: "Sacred Peak",
    location: "📍 Kurunegala, Sri Lanka • Legendary Medicinal Forest",
    photos: [
      { src: "images/dolukanda/1.jpeg", caption: "Ridge Feast • Delicious campsite meal cooked on the rocky ridge" },
      { src: "images/dolukanda/2.jpeg", caption: "Ancient Forest Canopy • Trekking through sacred healing woods" },
      { src: "images/dolukanda/3.jpeg", caption: "North Western Plains • Sweeping views over Kurunegala from the summit" },
      { src: "images/dolukanda/4.jpeg", caption: "Monolithic Cliffs • Gigantic rock formations lining the mountain path" },
      { src: "images/dolukanda/5.jpeg", caption: "Steep Ascent • Climbing along the rugged trails to the upper plateau" },
      { src: "images/dolukanda/6.jpeg", caption: "Forest Shadows • Golden sunbeams cutting through medicinal trees" },
      { src: "images/dolukanda/7.jpeg", caption: "High Horizons • Expansive green wilderness seen from above" }
    ]
  },
  pathpokuna: {
    title: "Pathpokuna",
    badge: "Hidden Oasis",
    location: "📍 Natural Forest Trail, Sri Lanka • Sacred Stone Pools",
    photos: [
      { src: "images/pathpokuna/1.jpeg", caption: "Plateau Camp • Setting camp on high stone cliffs facing the sunrise" },
      { src: "images/pathpokuna/2.jpeg", caption: "Ancient Stone Pond • Natural water basin carved by nature and time" },
      { src: "images/pathpokuna/3.jpeg", caption: "Forest Trails • Quiet hiking pathway through untouched wilderness" },
      { src: "images/pathpokuna/4.jpeg", caption: "Rock Pathways • Giant stone boulders along the mountain ridge" },
      { src: "images/pathpokuna/5.jpeg", caption: "Crystal Reflections • Calm, undisturbed waters in the forest pond" },
      { src: "images/pathpokuna/6.jpeg", caption: "Horizon Vista • Endless mountain silhouettes and morning clouds" }
    ]
  },
  beddagana: {
    title: "Beddagana",
    badge: "Tranquil Wetlands",
    location: "📍 Sri Jayawardenepura Kotte, Sri Lanka • Wetland Park",
    photos: [
      { src: "images/beddagana/1.jpeg", caption: "Wetland Boardwalk • Sun-dappled wooden path winding through the marsh" },
      { src: "images/beddagana/2.jpeg", caption: "Waterway Reflections • Lush green tree canopies mirroring on the water" },
      { src: "images/beddagana/3.jpeg", caption: "Still Lakescape • Peaceful morning across the Kotte wetlands" },
      { src: "images/beddagana/4.jpeg", caption: "Bird Sanctuary • Protected wetland habitats and reed fields" },
      { src: "images/beddagana/5.jpeg", caption: "Canopy Trail • Shaded nature boardwalk illuminated by morning light" },
      { src: "images/beddagana/6.jpeg", caption: "Water Pathways • Serene canals tucked inside the bustling capital" },
      { src: "images/beddagana/7.jpeg", caption: "Tropical Flora • Lush ferns and native wetland vegetation" },
      { src: "images/beddagana/8.jpeg", caption: "Golden Afternoon • Gentle warm light across aquatic vegetation" },
      { src: "images/beddagana/9.jpeg", caption: "Nature's Mirror • Tranquil waters capturing cloud reflections" }
    ]
  },
  rawana_ella: {
    title: "Rawana Ella",
    badge: "Wild Cascade",
    location: "📍 Ella, Sri Lanka • Thundering Mountain Waterfall",
    photos: [
      { src: "images/rawana_ella/1.jpeg", caption: "Rawana Falls • Majestic mountain waters cascading down rugged rock cliffs" }
    ]
  },
  thalpe_beach: {
    title: "Thalpe Beach",
    badge: "Southern Coast",
    location: "📍 Galle, Sri Lanka • Coral Rock Pools",
    photos: [
      { src: "images/thalpe_beach/1.jpeg", caption: "Thalpe Rock Pools • Unique historical rock cut pools in the Indian Ocean" }
    ]
  },
  yakdessagala: {
    title: "Yakdessagala",
    badge: "Rocky Fortress",
    location: "📍 Kurunegala, Sri Lanka • Ancient Rock Fortress",
    photos: [
      { src: "images/yakdessagala/1.jpeg", caption: "Yakdessagala Summit • High rocky precipice overlooking valley villages" }
    ]
  },
  hulangala: {
    title: "Hulangala",
    badge: "Windy Ridge",
    location: "📍 Matale, Sri Lanka • Highland Viewpoint",
    photos: [
      { src: "images/hulangala/1.jpeg", caption: "Hulangala Viewpoint • High mountain wind gap over tea-carpeted slopes" }
    ]
  },
  ginipetti_palama: {
    title: "Ginipetti Palama",
    badge: "Historic Crossing",
    location: "📍 Dolosbage, Sri Lanka • Matchbox Bridge",
    photos: [
      { src: "images/ginipetti_palama/1.jpeg", caption: "Ginipetti Palama • Historic narrow crossing bridge over mountain streams" }
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHeroVideo();
  initFireflies();
  initJourneyCategoryFilter();
  initJourneyPhotoModal();
  initBackToTop();
  initConnectActions();
  updateCopyrightYear();
});

/* ==========================================================================
   1. Navbar & Smooth Scroll
   ========================================================================== */
function initNavbar() {
  const header = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const links = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Active section spy
  const sections = document.querySelectorAll('section[id]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        links.forEach(l => {
          l.classList.toggle('active', l.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-25% 0px -65% 0px' });

  sections.forEach(s => observer.observe(s));
}

/* ==========================================================================
   2. Atmospheric Fireflies / Floating Golden Embers
   ========================================================================== */
function initFireflies() {
  const container = document.getElementById('fireflies');
  if (!container) return;

  const particleCount = 18;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < particleCount; i++) {
    const firefly = document.createElement('div');
    firefly.className = 'firefly';

    const left = Math.random() * 95;
    const top = 15 + Math.random() * 70;
    const duration = 6 + Math.random() * 7;
    const delay = Math.random() * 6;
    const size = 3 + Math.random() * 3.5;

    firefly.style.left = `${left}%`;
    firefly.style.top = `${top}%`;
    firefly.style.width = `${size}px`;
    firefly.style.height = `${size}px`;
    firefly.style.animationDuration = `${duration}s`;
    firefly.style.animationDelay = `${delay}s`;

    fragment.appendChild(firefly);
  }

  container.appendChild(fragment);
}

/* ==========================================================================
   3. Journey Category Filter Tabs
   ========================================================================== */
function initJourneyCategoryFilter() {
  const tabs = document.querySelectorAll('.cat-pill');
  const cards = document.querySelectorAll('.journey-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const filter = tab.dataset.filter;

      cards.forEach(card => {
        const cat = card.dataset.category;
        if (filter === 'all' || cat === filter) {
          card.classList.remove('hidden');
          card.classList.add('fade-in');
          setTimeout(() => card.classList.remove('fade-in'), 350);
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

/* ==========================================================================
   4. Journey Photo Album Viewer Modal
   ========================================================================== */
function initJourneyPhotoModal() {
  const modal = document.getElementById('journeyModal');
  const backdrop = document.getElementById('journeyModalBackdrop');
  const closeBtn = document.getElementById('modalCloseBtn');
  const prevBtn = document.getElementById('modalPrevBtn');
  const nextBtn = document.getElementById('modalNextBtn');
  const mainImg = document.getElementById('modalMainImg');
  const titleEl = document.getElementById('modalJourneyTitle');
  const badgeEl = document.getElementById('modalBadge');
  const locationEl = document.getElementById('modalJourneyLocation');
  const counterEl = document.getElementById('modalCounterBadge');
  const captionEl = document.getElementById('modalCaptionText');
  const thumbsStrip = document.getElementById('modalThumbsStrip');

  if (!modal || !mainImg) return;

  let currentDestination = null;
  let currentPhotos = [];
  let currentIndex = 0;

  function preloadAdjacent() {
    if (!currentPhotos.length) return;
    const nextIdx = (currentIndex + 1) % currentPhotos.length;
    const prevIdx = (currentIndex - 1 + currentPhotos.length) % currentPhotos.length;
    const imgNext = new Image();
    imgNext.src = currentPhotos[nextIdx].src;
    const imgPrev = new Image();
    imgPrev.src = currentPhotos[prevIdx].src;
  }

  // Open modal for a specific journey
  function openJourney(destKey) {
    const data = journeysData[destKey];
    if (!data || !data.photos || !data.photos.length) return;

    currentDestination = data;
    currentPhotos = data.photos;
    currentIndex = 0;

    // Header info
    titleEl.textContent = data.title;
    badgeEl.textContent = data.badge;
    locationEl.textContent = data.location;

    // Build thumbnail strip
    thumbsStrip.innerHTML = '';
    currentPhotos.forEach((photo, idx) => {
      const btn = document.createElement('button');
      btn.className = `thumb-btn ${idx === 0 ? 'active' : ''}`;
      btn.setAttribute('aria-label', `Thumbnail ${idx + 1}`);
      
      const thumbImg = document.createElement('img');
      thumbImg.src = photo.src;
      thumbImg.alt = `${data.title} photo ${idx + 1}`;
      thumbImg.loading = 'lazy';

      btn.appendChild(thumbImg);
      btn.addEventListener('click', () => {
        showPhoto(idx);
      });

      thumbsStrip.appendChild(btn);
    });

    // Render initial photo
    showPhoto(0);

    // Show modal
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeJourney() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function showPhoto(idx) {
    if (!currentPhotos.length) return;
    currentIndex = idx;
    const photo = currentPhotos[currentIndex];

    // Quick subtle transition
    mainImg.classList.add('fade-out');
    setTimeout(() => {
      mainImg.src = photo.src;
      mainImg.alt = photo.caption || currentDestination.title;
      captionEl.textContent = photo.caption || '';
      counterEl.textContent = `${currentIndex + 1} / ${currentPhotos.length}`;
      mainImg.classList.remove('fade-out');
      preloadAdjacent();
    }, 120);

    // Update active thumbnail
    const thumbButtons = thumbsStrip.querySelectorAll('.thumb-btn');
    thumbButtons.forEach((btn, i) => {
      if (i === currentIndex) {
        btn.classList.add('active');
        btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } else {
        btn.classList.remove('active');
      }
    });
  }

  function nextPhoto() {
    if (!currentPhotos.length) return;
    const nextIdx = (currentIndex + 1) % currentPhotos.length;
    showPhoto(nextIdx);
  }

  function prevPhoto() {
    if (!currentPhotos.length) return;
    const prevIdx = (currentIndex - 1 + currentPhotos.length) % currentPhotos.length;
    showPhoto(prevIdx);
  }

  // Bind click & keydown on all Journey Cards
  const cards = document.querySelectorAll('.journey-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const dest = card.dataset.destination;
      if (dest) openJourney(dest);
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const dest = card.dataset.destination;
        if (dest) openJourney(dest);
      }
    });
  });

  // Controls
  closeBtn?.addEventListener('click', closeJourney);
  backdrop?.addEventListener('click', closeJourney);
  nextBtn?.addEventListener('click', nextPhoto);
  prevBtn?.addEventListener('click', prevPhoto);

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeJourney();
    if (e.key === 'ArrowRight') nextPhoto();
    if (e.key === 'ArrowLeft') prevPhoto();
  });

  // Mobile Touch Swipe
  let touchStartX = 0;
  let touchEndX = 0;

  mainImg.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  mainImg.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 40) {
      if (diff < 0) nextPhoto();
      else prevPhoto();
    }
  }, { passive: true });
}

/* ==========================================================================
   5. Floating Back to Top Button
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================================
   6. Connect Actions & Toast Feedback
   ========================================================================== */
function initConnectActions() {
  const copyButtons = document.querySelectorAll('.copy-btn');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const textToCopy = btn.dataset.copy;
      const label = btn.dataset.label || 'Text';
      if (!textToCopy) return;

      copyToClipboard(textToCopy, `${label} copied to clipboard!`);

      // Micro-interaction feedback on the button itself
      const span = btn.querySelector('span');
      const originalText = span ? span.textContent : 'Copy';
      if (span) {
        span.textContent = 'Copied!';
        btn.classList.add('copied');
        setTimeout(() => {
          span.textContent = originalText;
          btn.classList.remove('copied');
        }, 1800);
      }
    });
  });
}

function copyToClipboard(text, successMessage) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMessage);
    }).catch(() => {});
  } else {
    showToast(successMessage);
  }
}

function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

/* ==========================================================================
   7. Dynamic Copyright Year
   ========================================================================== */
function updateCopyrightYear() {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* ==========================================================================
   8. Hero Cinematic Background Video & Hero Actions
   ========================================================================== */
function initHeroVideo() {
  const video = document.getElementById('heroBgVideo');
  if (!video) return;

  // Ensure muted and playsinline programmatically for strict browser policies
  video.muted = true;
  video.defaultMuted = true;
  video.setAttribute('playsinline', '');
  video.setAttribute('webkit-playsinline', '');

  // Attempt autoplay
  const playPromise = video.play();
  if (playPromise !== undefined) {
    playPromise.catch((err) => {
      console.log('Autoplay deferred or restricted:', err);
      // Resume video playback on first user touch/scroll/click
      const resumeVideo = () => {
        video.play().catch(() => {});
        window.removeEventListener('touchstart', resumeVideo);
        window.removeEventListener('scroll', resumeVideo);
        window.removeEventListener('click', resumeVideo);
      };
      window.addEventListener('touchstart', resumeVideo, { once: true, passive: true });
      window.addEventListener('scroll', resumeVideo, { once: true, passive: true });
      window.addEventListener('click', resumeVideo, { once: true });
    });
  }
}

