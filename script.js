/**
 * cities.ly - Libya Tourism Guide
 * Main JavaScript File
 * Features: Language Toggle, Navbar Scroll, Mobile Menu, Smooth Scroll, Search
 */

// ===== Language Data =====
const translations = {
  ar: {
    // Navigation
    home: 'الرئيسية',
    cities: 'المدن',
    hotels: 'الفنادق',
    landmarks: 'المعالم',
    museums: 'المتاحف',
    transport: 'النقل',
    restaurants: 'المطاعم',
    langSwitch: 'EN',

    // Hero
    heroTitle: 'اكتشف أجمل مدن ليبيا',
    heroSubtitle: 'دليلك الشامل لأبرز المدن والمعالم والفنادق والمطاعم في ليبيا. رحلة لا تُنسى بانتظارك.',
    heroCta: 'استكشف الآن',
    heroBadge: 'دليل السياحة الليبي',

    // Sections
    popularCities: 'أشهر المدن الليبية',
    popularCitiesDesc: 'تعرف على أبرز المدن الليبية وما تقدمه من معالم سياحية وثقافية فريدة',
    hotelsSection: 'أفضل الفنادق',
    hotelsDesc: 'اختر من مجموعة مختارة من أفضل الفنادق في ليبيا',
    landmarksSection: 'أبرز المعالم السياحية',
    landmarksDesc: 'استكشف الآثار الرومانية واليونانية والمواقع الطبيعية الخلابة',
    restaurantsSection: 'أشهر المطاعم',
    restaurantsDesc: 'تذوق ألذ الأطباق الليبية والعالمية في أرقى المطاعم',
    inspiration: 'إلهام الوجهات',
    inspirationDesc: 'صور من أجمل الأماكن في ليبيا',
    viewAll: 'عرض الكل',
    readMore: 'اقرأ المزيد',
    from: 'من',

    // Stats
    citiesCount: 'مدينة',
    hotelsCount: 'فندق',
    landmarksCount: 'معلم',
    restaurantsCount: 'مطعم',

    // Footer
    aboutText: 'دليلك الشامل للسياحة في ليبيا. نساعدك في اكتشاف أجمل المدن والمعالم والفنادق والمطاعم.',
    quickLinks: 'روابط سريعة',
    contactUs: 'اتصل بنا',
    rights: 'جميع الحقوق محفوظة',

    // Page titles
    citiesTitle: 'أشهر المدن الليبية',
    citiesDesc: 'اكتشف 10 مدن ليبية رئيسية وتاريخها ومعالمها السياحية',
    hotelsTitle: 'أفضل الفنادق في ليبيا',
    hotelsPageDesc: 'مجموعة مختارة من أفضل الفنادق والمنتجعات في مختلف المدن الليبية',
    landmarksTitle: 'أبرز المعالم السياحية',
    landmarksPageDesc: 'اكتشف أهم المواقع الأثرية والطبيعية في ليبيا',
    museumsTitle: 'المتاحف الليبية',
    museumsPageDesc: 'تعرف على المتاحف التي تحكي تاريخ وحضارة ليبيا',
    transportTitle: 'شركات النقل',
    transportPageDesc: 'أفضل شركات النقل الداخلي والخارجي في ليبيا',
    restaurantsTitle: 'أشهر المطاعم الليبية',
    restaurantsPageDesc: 'دليلك لأفضل المطاعم والمأكولات في مختلف المدن الليبية',

    // Search
    searchPlaceholder: 'ابحث عن مدينة، فندق، معلم...',

    // City detail
    history: 'التاريخ',
    topLandmarks: 'أبرز المعالم',
    topHotels: 'أفضل الفنادق',
    topRestaurants: 'أفضل المطاعم',
    gettingThere: 'كيفية الوصول',
    location: 'الموقع',

    // Hotel detail
    stars: 'نجوم',
    pricePerNight: 'لليلة الواحدة',
    bookNow: 'احجز الآن',

    // Restaurant
    cuisine: 'المطبخ',
    address: 'العنوان',
    phone: 'الهاتف',

    // Transport
    landTransport: 'نقل بري',
    airTransport: 'نقل جوي',
    serviceCities: 'مدن الخدمة',
    contact: 'التواصل',
  },
  en: {
    // Navigation
    home: 'Home',
    cities: 'Cities',
    hotels: 'Hotels',
    landmarks: 'Landmarks',
    museums: 'Museums',
    transport: 'Transport',
    restaurants: 'Restaurants',
    langSwitch: 'AR',

    // Hero
    heroTitle: 'Discover Libya\'s Most Beautiful Cities',
    heroSubtitle: 'Your comprehensive guide to Libya\'s finest cities, landmarks, hotels, and restaurants. An unforgettable journey awaits.',
    heroCta: 'Explore Now',
    heroBadge: 'Libyan Tourism Guide',

    // Sections
    popularCities: 'Popular Libyan Cities',
    popularCitiesDesc: 'Discover Libya\'s top cities and their unique cultural and tourist attractions',
    hotelsSection: 'Best Hotels',
    hotelsDesc: 'Choose from a curated selection of Libya\'s finest hotels',
    landmarksSection: 'Top Landmarks',
    landmarksDesc: 'Explore Roman and Greek ruins and stunning natural sites',
    restaurantsSection: 'Famous Restaurants',
    restaurantsDesc: 'Taste the best Libyan and international cuisine at top restaurants',
    inspiration: 'Destination Inspiration',
    inspirationDesc: 'Photos from Libya\'s most beautiful places',
    viewAll: 'View All',
    readMore: 'Read More',
    from: 'From',

    // Stats
    citiesCount: 'Cities',
    hotelsCount: 'Hotels',
    landmarksCount: 'Landmarks',
    restaurantsCount: 'Restaurants',

    // Footer
    aboutText: 'Your comprehensive guide to tourism in Libya. We help you discover the most beautiful cities, landmarks, hotels, and restaurants.',
    quickLinks: 'Quick Links',
    contactUs: 'Contact Us',
    rights: 'All Rights Reserved',

    // Page titles
    citiesTitle: 'Popular Libyan Cities',
    citiesDesc: 'Discover 10 major Libyan cities, their history and tourist attractions',
    hotelsTitle: 'Best Hotels in Libya',
    hotelsPageDesc: 'A curated collection of the finest hotels and resorts across Libyan cities',
    landmarksTitle: 'Top Tourist Landmarks',
    landmarksPageDesc: 'Discover the most important archaeological and natural sites in Libya',
    museumsTitle: 'Libyan Museums',
    museumsPageDesc: 'Learn about museums that tell the history and civilization of Libya',
    transportTitle: 'Transport Companies',
    transportPageDesc: 'Best domestic and international transport companies in Libya',
    restaurantsTitle: 'Famous Libyan Restaurants',
    restaurantsPageDesc: 'Your guide to the best restaurants and cuisine across Libyan cities',

    // Search
    searchPlaceholder: 'Search for a city, hotel, landmark...',

    // City detail
    history: 'History',
    topLandmarks: 'Top Landmarks',
    topHotels: 'Best Hotels',
    topRestaurants: 'Best Restaurants',
    gettingThere: 'Getting There',
    location: 'Location',

    // Hotel detail
    stars: 'Stars',
    pricePerNight: 'per night',
    bookNow: 'Book Now',

    // Restaurant
    cuisine: 'Cuisine',
    address: 'Address',
    phone: 'Phone',

    // Transport
    landTransport: 'Land Transport',
    airTransport: 'Air Transport',
    serviceCities: 'Service Cities',
    contact: 'Contact',
  }
};

// ===== App State =====
let currentLang = localStorage.getItem('citiesly-lang') || 'ar';

// ===== DOM Ready =====
document.addEventListener('DOMContentLoaded', function() {
  initLanguage();
  initNavbar();
  initMobileMenu();
  initSmoothScroll();
  initSearch();
  initAnimations();
});

// ===== Language Functions =====
function initLanguage() {
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  updateContent();
}

function toggleLanguage() {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  localStorage.setItem('citiesly-lang', currentLang);
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  updateContent();
}

function updateContent() {
  const t = translations[currentLang];

  // Update all elements with data-key attribute
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (t[key]) {
      if (el.tagName === 'INPUT') {
        el.placeholder = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });

  // Update lang toggle button
  const langBtn = document.getElementById('langToggle');
  if (langBtn) {
    langBtn.textContent = t.langSwitch;
  }
}

// ===== Navbar Scroll Effect =====
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
      navbar.classList.remove('transparent');
    } else {
      navbar.classList.remove('scrolled');
      navbar.classList.add('transparent');
    }
  });

  // Initial state
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
    navbar.classList.remove('transparent');
  } else {
    navbar.classList.add('transparent');
  }
}

// ===== Mobile Menu =====
function initMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const menu = document.querySelector('.mobile-menu');
  const overlay = document.querySelector('.mobile-menu-overlay');
  const closeBtn = document.querySelector('.mobile-menu-close');
  const menuLinks = document.querySelectorAll('.mobile-menu-links a');

  if (!menuBtn || !menu) return;

  function openMenu() {
    menu.classList.add('active');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menu.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  menuBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);
  menuLinks.forEach(link => link.addEventListener('click', closeMenu));
}

// ===== Smooth Scroll =====
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// ===== Search Functionality =====
function initSearch() {
  const searchInputs = document.querySelectorAll('.search-bar input');

  searchInputs.forEach(input => {
    input.addEventListener('input', function() {
      const query = this.value.toLowerCase().trim();
      const searchableItems = document.querySelectorAll('[data-search]');

      searchableItems.forEach(item => {
        const text = item.getAttribute('data-search').toLowerCase();
        if (text.includes(query)) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

// ===== Scroll Animations =====
function initAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.card, .mini-card, .transport-card, .stat-item, .section-header').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
}

// ===== Helper Functions =====
function formatNumber(num) {
  return num.toLocaleString(currentLang === 'ar' ? 'ar-LY' : 'en-US');
}

// Make functions globally accessible
window.toggleLanguage = toggleLanguage;
window.currentLang = currentLang;
