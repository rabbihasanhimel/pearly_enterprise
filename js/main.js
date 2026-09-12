/**
 * Pearly Enterprise - Client Interaction Engine
 * Clean, lightweight vanilla JavaScript. Zero build step, blazing fast on Cloudflare Pages.
 */

// British Standard Wire Gauge (BS 3737) Data: Exactly SWG 1 to SWG 34
const wireGaugeData = [
  { swg: "1", inches: "0.3000", mm: "7.620", category: "heavy", popular: false },
  { swg: "2", inches: "0.2760", mm: "7.010", category: "heavy", popular: false },
  { swg: "3", inches: "0.2520", mm: "6.401", category: "heavy", popular: false },
  { swg: "4", inches: "0.2320", mm: "5.893", category: "heavy", popular: false },
  { swg: "5", inches: "0.2120", mm: "5.385", category: "heavy", popular: false },
  { swg: "6", inches: "0.1920", mm: "4.877", category: "medium", popular: true },
  { swg: "7", inches: "0.1760", mm: "4.470", category: "medium", popular: true },
  { swg: "8", inches: "0.1600", mm: "4.064", category: "medium", popular: true },
  { swg: "9", inches: "0.1440", mm: "3.658", category: "medium", popular: true },
  { swg: "10", inches: "0.1280", mm: "3.251", category: "medium", popular: true },
  { swg: "11", inches: "0.1160", mm: "2.946", category: "medium", popular: true },
  { swg: "12", inches: "0.1040", mm: "2.642", category: "medium", popular: true },
  { swg: "13", inches: "0.0920", mm: "2.337", category: "medium", popular: true },
  { swg: "14", inches: "0.0800", mm: "2.032", category: "medium", popular: true },
  { swg: "15", inches: "0.0720", mm: "1.829", category: "medium", popular: true },
  { swg: "16", inches: "0.0640", mm: "1.626", category: "medium", popular: true },
  { swg: "17", inches: "0.0560", mm: "1.422", category: "medium", popular: true },
  { swg: "18", inches: "0.0480", mm: "1.219", category: "medium", popular: true },
  { swg: "19", inches: "0.0400", mm: "1.016", category: "fine", popular: true },
  { swg: "20", inches: "0.0360", mm: "0.914", category: "fine", popular: true },
  { swg: "21", inches: "0.0320", mm: "0.813", category: "fine", popular: true },
  { swg: "22", inches: "0.0280", mm: "0.711", category: "fine", popular: true },
  { swg: "23", inches: "0.0240", mm: "0.610", category: "fine", popular: true },
  { swg: "24", inches: "0.0220", mm: "0.559", category: "fine", popular: true },
  { swg: "25", inches: "0.0200", mm: "0.508", category: "fine", popular: true },
  { swg: "26", inches: "0.0180", mm: "0.4572", category: "fine", popular: true },
  { swg: "27", inches: "0.0164", mm: "0.4166", category: "fine", popular: true },
  { swg: "28", inches: "0.0148", mm: "0.3759", category: "fine", popular: true },
  { swg: "29", inches: "0.0136", mm: "0.3454", category: "fine", popular: false },
  { swg: "30", inches: "0.0124", mm: "0.3150", category: "fine", popular: false },
  { swg: "31", inches: "0.0116", mm: "0.2946", category: "fine", popular: false },
  { swg: "32", inches: "0.0108", mm: "0.2743", category: "fine", popular: false },
  { swg: "33", inches: "0.0100", mm: "0.2540", category: "fine", popular: false },
  { swg: "34", inches: "0.0092", mm: "0.2337", category: "fine", popular: false }
];

// Dhaka Shop & Warehouse Photos
const shopGalleryData = [
  {
    src: "images/shop/shop-storefront.jpg",
    title: "Main Storefront & Signboard",
    subtitle: "233/E Nawabpur Mansion, Nawabpur Road, Dhaka",
    caption: "Pearly Enterprise (পার্লি এন্টারপ্রাইজ) storefront at Nawabpur Mansion, Dhaka"
  },
  {
    src: "images/shop/shop-office-3.jpg",
    title: "Direct Client Consultation Area",
    subtitle: "Welcoming wholesale buyers & small entrepreneurs",
    caption: "Order processing desk welcoming walk-in clients and business partners"
  }
];

// China Partner Mills Photos
const factoryGalleryData = [
  {
    src: "images/factory/china-factory-1.jpg",
    title: "Continuous Automated Wire Coiling Facility",
    subtitle: "Partner Supplier Mills in China",
    caption: "Partner Supplier Factory in China - Vertical continuous spooling and drawing line"
  },
  {
    src: "images/factory/china-factory-2.jpg",
    title: "High-Capacity Heavy Drawing Line",
    subtitle: "Partner Supplier Mills in China",
    caption: "Partner Supplier Factory in China - Multi-stand continuous wire drawing machinery"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  initThemeSwitcher();
  initWireGaugeTable();
  init3DCarousel("shop", shopGalleryData);
  init3DCarousel("factory", factoryGalleryData);
  initMobileMenu();
  initLightbox();
  initWeChatCopy();
  initContactForm();
  initScrollEffects();
});

/**
 * ==========================================================================
 * THEME SWITCHER (Normal / Light Mode vs. Dark Blue Mode)
 * ==========================================================================
 */
function initThemeSwitcher() {
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const themeIcon = document.getElementById("themeToggleIcon");
  const themeLabel = document.getElementById("themeToggleLabel");

  let savedTheme = localStorage.getItem("pearly_theme") || "light";
  applyTheme(savedTheme);

  if (!themeToggleBtn) return;

  themeToggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
    const nextTheme = currentTheme === "dark-blue" ? "light" : "dark-blue";
    applyTheme(nextTheme);
    localStorage.setItem("pearly_theme", nextTheme);

    showToast(nextTheme === "dark-blue" 
      ? "Dark (Blue) Mode activated" 
      : "Normal (Light) Mode activated"
    );
  });

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);

    if (themeIcon) {
      if (theme === "dark-blue") {
        themeIcon.className = "fas fa-sun";
        if (themeLabel) themeLabel.textContent = "Normal Mode";
        themeToggleBtn?.setAttribute("title", "Switch to Normal (Light) Mode");
      } else {
        themeIcon.className = "fas fa-moon";
        if (themeLabel) themeLabel.textContent = "Dark Blue";
        themeToggleBtn?.setAttribute("title", "Switch to Dark (Blue) Mode");
      }
    }
  }
}

/**
 * ==========================================================================
 * 3D DEPTH CAROUSEL (Center active with left/right background peek shadows)
 * Thumbnails centered underneath with NO scrollbar.
 * ==========================================================================
 */
function init3DCarousel(prefix, items) {
  const stage = document.getElementById(`${prefix}CarouselStage`);
  const activeSlideImg = document.getElementById(`${prefix}SlideActiveImg`);
  const prevSlideImg = document.getElementById(`${prefix}SlidePrevImg`);
  const nextSlideImg = document.getElementById(`${prefix}SlideNextImg`);
  const prevSlideBox = document.getElementById(`${prefix}SlidePrev`);
  const nextSlideBox = document.getElementById(`${prefix}SlideNext`);
  const prevBtn = document.getElementById(`${prefix}CarouselPrev`);
  const nextBtn = document.getElementById(`${prefix}CarouselNext`);
  const titleEl = document.getElementById(`${prefix}CarouselTitle`);
  const subEl = document.getElementById(`${prefix}CarouselSub`);
  const counterEl = document.getElementById(`${prefix}CarouselCounter`);
  const thumbsContainer = document.getElementById(`${prefix}CarouselThumbs`);

  if (!activeSlideImg || !thumbsContainer || items.length === 0) return;

  let currentIndex = 0;

  // Render centered thumbnails (NO scrollbar)
  thumbsContainer.innerHTML = items.map((item, idx) => `
    <button type="button" class="thumb-pill-btn ${idx === 0 ? 'active' : ''}" data-index="${idx}" aria-label="Photo ${idx + 1}">
      <img src="${item.src}" alt="${item.title}" class="thumb-pill-img">
    </button>
  `).join("");

  const thumbButtons = thumbsContainer.querySelectorAll(".thumb-pill-btn");

  function renderSlide(index) {
    const total = items.length;
    currentIndex = ((index % total) + total) % total;

    const prevIndex = (currentIndex - 1 + total) % total;
    const nextIndex = (currentIndex + 1) % total;

    const currentData = items[currentIndex];
    const prevData = items[prevIndex];
    const nextData = items[nextIndex];

    // Main center active photo
    activeSlideImg.style.opacity = "0.4";
    setTimeout(() => {
      activeSlideImg.src = currentData.src;
      activeSlideImg.alt = currentData.title;
      activeSlideImg.setAttribute("data-full", currentData.src);
      activeSlideImg.setAttribute("data-caption", currentData.caption || currentData.title);
      activeSlideImg.style.opacity = "1";
    }, 120);

    // Left background preview with shadow
    if (prevSlideImg) {
      prevSlideImg.src = prevData.src;
      prevSlideImg.alt = prevData.title;
    }

    // Right background preview with shadow
    if (nextSlideImg) {
      nextSlideImg.src = nextData.src;
      nextSlideImg.alt = nextData.title;
    }

    // Centered Title & Subtitle
    if (titleEl) titleEl.textContent = currentData.title;
    if (subEl) subEl.textContent = currentData.subtitle || currentData.caption;
    if (counterEl) counterEl.textContent = `${currentIndex + 1} / ${total}`;

    // Update active thumbnail
    thumbButtons.forEach((btn, idx) => {
      btn.classList.toggle("active", idx === currentIndex);
    });
  }

  // Navigation handlers
  prevBtn?.addEventListener("click", () => renderSlide(currentIndex - 1));
  nextBtn?.addEventListener("click", () => renderSlide(currentIndex + 1));

  // Clicking the side background peek images transitions them to center!
  prevSlideBox?.addEventListener("click", () => renderSlide(currentIndex - 1));
  nextSlideBox?.addEventListener("click", () => renderSlide(currentIndex + 1));

  // Thumbnail hover & click
  thumbButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.getAttribute("data-index"), 10);
      renderSlide(idx);
    });
    btn.addEventListener("mouseenter", () => {
      const idx = parseInt(btn.getAttribute("data-index"), 10);
      renderSlide(idx);
    });
  });

  // Mobile Touch Swipe Navigation
  let touchStartX = 0;
  let touchEndX = 0;
  stage?.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  stage?.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 45) {
      renderSlide(currentIndex + 1);
    } else if (touchEndX - touchStartX > 45) {
      renderSlide(currentIndex - 1);
    }
  }, { passive: true });

  // Initial render
  renderSlide(0);
}

/**
 * ==========================================================================
 * WIRE GAUGE SPECIFICATION TABLE SEARCH & FILTER (SWG 1 to SWG 34)
 * ==========================================================================
 */
function initWireGaugeTable() {
  const tableBody = document.getElementById("gaugeTableBody");
  const searchInput = document.getElementById("gaugeSearchInput");
  const categoryButtons = document.querySelectorAll(".gauge-tab-btn");
  const countBadge = document.getElementById("gaugeMatchCount");

  if (!tableBody) return;

  let currentCategory = "all";
  let currentSearch = "";

  function renderTable() {
    const filtered = wireGaugeData.filter(item => {
      let matchCat = true;
      if (currentCategory === "popular") matchCat = item.popular;
      else if (currentCategory === "heavy") matchCat = item.category === "heavy";
      else if (currentCategory === "medium") matchCat = item.category === "medium";
      else if (currentCategory === "fine") matchCat = item.category === "fine";

      let matchSearch = true;
      if (currentSearch.trim()) {
        const q = currentSearch.toLowerCase().trim();
        const swgStr = item.swg.toLowerCase();
        const mmStr = item.mm.toLowerCase();
        const inchStr = item.inches.toLowerCase();

        matchSearch = swgStr.includes(q) ||
                      mmStr.includes(q) ||
                      inchStr.includes(q) ||
                      (swgStr + " swg").includes(q) ||
                      (mmStr + "mm").includes(q);
      }

      return matchCat && matchSearch;
    });

    if (countBadge) {
      countBadge.textContent = `${filtered.length} size${filtered.length === 1 ? "" : "s"} available`;
    }

    if (filtered.length === 0) {
      tableBody.innerHTML = `
        <tr>
          <td colspan="4" class="empty-search-state">
            <div class="empty-icon"><i class="fas fa-search"></i></div>
            <p class="empty-title">No wire sizes match "${escapeHtml(currentSearch)}"</p>
            <p class="empty-sub">Try searching by SWG (e.g. 14), millimeters (e.g. 2.0), or inches.</p>
          </td>
        </tr>
      `;
      return;
    }

    tableBody.innerHTML = filtered.map(item => {
      const popularBadge = item.popular 
        ? `<span class="badge-popular-star"><i class="fas fa-star"></i> High Demand</span>` 
        : "";
      const rowClass = item.popular ? "gauge-row row-popular" : "gauge-row";
      const waLink = `https://wa.me/8801731658448?text=${encodeURIComponent(`Hello Pearly Enterprise, I would like to inquire about ${item.swg} SWG (${item.mm}mm) Spring Steel Wire.`)}`;

      return `
        <tr class="${rowClass}">
          <td class="swg-col">
            <span class="swg-pill">${item.swg} SWG</span>
            ${popularBadge}
          </td>
          <td class="mm-col">
            <span class="val">${item.mm}</span> <span class="unit">mm</span>
          </td>
          <td class="inch-col">
            <span class="val">${item.inches}</span> <span class="unit">in</span>
          </td>
          <td class="action-col">
            <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn-quote-row" title="Inquire size ${item.swg} SWG on WhatsApp">
              <i class="fab fa-whatsapp"></i> Inquire
            </a>
          </td>
        </tr>
      `;
    }).join("");
  }

  renderTable();

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value;
      renderTable();
    });
  }

  categoryButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      categoryButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-category") || "all";
      renderTable();
    });
  });
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, m => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[m]));
}

/**
 * Mobile Navigation Drawer
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById("menuToggleBtn");
  const navMenu = document.getElementById("mainNavMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    toggleBtn.classList.toggle("active");
    const isExpanded = navMenu.classList.contains("open");
    toggleBtn.setAttribute("aria-expanded", isExpanded);
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      toggleBtn.classList.remove("active");
      toggleBtn.setAttribute("aria-expanded", "false");
    });
  });
}

/**
 * Image Lightbox Modal
 */
function initLightbox() {
  const modal = document.getElementById("lightboxModal");
  const modalImg = document.getElementById("lightboxImg");
  const modalCaption = document.getElementById("lightboxCaption");
  const modalClose = document.getElementById("lightboxClose");

  if (!modal || !modalImg) return;

  document.addEventListener("click", (e) => {
    const trigger = e.target.closest(".lightbox-trigger");
    if (!trigger) return;

    const src = trigger.getAttribute("data-full") || trigger.getAttribute("src");
    const caption = trigger.getAttribute("data-caption") || trigger.getAttribute("alt") || "";

    modalImg.src = src;
    if (modalCaption) modalCaption.textContent = caption;
    modal.classList.add("visible");
    document.body.style.overflow = "hidden";
  });

  function closeModal() {
    modal.classList.remove("visible");
    document.body.style.overflow = "";
    modalImg.src = "";
  }

  if (modalClose) modalClose.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("visible")) {
      closeModal();
    }
  });
}

/**
 * 1-Click Copy WeChat IDs with Toast
 */
function initWeChatCopy() {
  const copyButtons = document.querySelectorAll(".copy-wechat-btn");

  copyButtons.forEach(btn => {
    btn.addEventListener("click", async () => {
      const wechatId = btn.getAttribute("data-wechat");
      if (!wechatId) return;

      try {
        await navigator.clipboard.writeText(wechatId);
        showToast(`WeChat ID "${wechatId}" copied to clipboard!`);

        const originalText = btn.innerHTML;
        btn.innerHTML = `<i class="fas fa-check"></i> Copied!`;
        btn.classList.add("copied");
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.classList.remove("copied");
        }, 2200);
      } catch (err) {
        prompt("Copy this WeChat ID:", wechatId);
      }
    });
  });
}

/**
 * Toast Notifications
 */
function showToast(message) {
  let toast = document.getElementById("pearlyToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "pearlyToast";
    toast.className = "pearly-toast";
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

/**
 * Contact & Quote Form Handler (Directs to WhatsApp)
 */
function initContactForm() {
  const form = document.getElementById("quoteContactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("formName")?.value || "Valued Client";
    const phone = document.getElementById("formPhone")?.value || "N/A";
    const wireType = document.getElementById("formWireType")?.value || "High Carbon Spring Steel Wire (China)";
    const gauge = document.getElementById("formGauge")?.value || "Standard Size";
    const quantity = document.getElementById("formQuantity")?.value || "Unspecified";
    const notes = document.getElementById("formNotes")?.value || "Please quote price and stock availability.";

    const message = `Hello Pearly Enterprise!%0A%0A*Spring Steel Wire Inquiry / Quote Request*%0A` +
      `• Name: ${encodeURIComponent(name)}%0A` +
      `• Phone/Mobile: ${encodeURIComponent(phone)}%0A` +
      `• Material: ${encodeURIComponent(wireType)}%0A` +
      `• Gauge/Size: ${encodeURIComponent(gauge)}%0A` +
      `• Estimated Quantity: ${encodeURIComponent(quantity)}%0A` +
      `• Requirements: ${encodeURIComponent(notes)}`;

    const waUrl = `https://wa.me/8801731658448?text=${message}`;
    window.open(waUrl, "_blank");

    showToast("Redirecting to WhatsApp with your inquiry details...");
  });
}

/**
 * Navbar blur, scroll styling, and active section scroll-spy
 */
function initScrollEffects() {
  const navbar = document.querySelector(".header-navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = [];

  // Build a list of sections that correspond to nav links
  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href && href.startsWith("#")) {
      const section = document.getElementById(href.substring(1));
      if (section) {
        sections.push({ el: section, link: link });
      }
    }
  });

  function updateActiveLink() {
    const scrollPos = window.scrollY + 120; // offset for sticky navbar height

    let currentSection = null;
    for (let i = sections.length - 1; i >= 0; i--) {
      if (sections[i].el.offsetTop <= scrollPos) {
        currentSection = sections[i];
        break;
      }
    }

    navLinks.forEach((link) => link.classList.remove("active"));
    if (currentSection) {
      currentSection.link.classList.add("active");
    }
  }

  window.addEventListener("scroll", () => {
    if (navbar) {
      if (window.scrollY > 30) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }
    updateActiveLink();
  });

  // Set initial active on load
  updateActiveLink();
}
