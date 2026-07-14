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
    heroSubtitle: 'دليلك الشامل لأبرز المدن والمعالم والفنادق والمطاعم في ليبيا. رحلة لا تُنسى عبر حضارات عريقة وطبيعة ساحرة',
    heroCta: 'استكشف الآن',
    heroBadge: 'دليل السياحة الليبي',

    // Sections
    popularCities: 'أشهر المدن الليبية',
    popularCitiesDesc: 'تعرف على أبرز المدن الليبية وما تقدمه من معالم سياحية وثقافية فريدة',
    hotelsSection: 'أفضل الفنادق',
    hotelsDesc: 'اختر من مجموعة مختارة من أفضل الفنادق في ليبيا، من الفخامة الفندقية العالمية إلى الإقامات الفريدة',
    landmarksSection: 'أبرز المعالم السياحية',
    landmarksDesc: 'استكشف الآثار الرومانية واليونانية والمواقع الطبيعية الخلابة التي تجعل ليبيا وجهة فريدة',
    restaurantsSection: 'أشهر المطاعم',
    restaurantsDesc: 'تذوق ألذ الأطباق الليبية والعالمية في أرقى المطاعم على مستوى المدن الليبية',
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
    citiesDesc: 'اكتشف 12 مدينة ليبية رئيسية وتاريخها ومعالمها السياحية',
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

    // City Cards - Home Page
    tripoliCardText: 'عاصمة ليبيا وأكبر مدنها، تجمع بين التاريخ العريق والحضارة الحديثة. تضم المدينة القديمة وسراي الحمراء والعديد من المعالم التاريخية',
    benghazi CardText: 'ثاني أكبر مدن ليبيا، مدينة الساحل الشرقي الجميلة بكورنيشها الخلاب وشواطئها الرائعة.',
    ghadamesCardText: 'لؤلؤة الصحراء، مدينة الواحات القديمة المسجلة في اليونسكو، تُعرف بعمارتها التقليدية الفريدة',
    sabhaCardText: 'عاصمة الجنوب الليبي وبوابة الصحراء الكبرى، تتميز بقربها من الكثبان الرملية والواحات.',
    baydaCardText: 'تقع في الجبل الأخضر، تتميز بمناخها المعتدل وطبيعتها الخلابة وآثار قورينا التاريخية.',
    misrataCardText: 'إحدى أهم المدن الليبية، مركز تجاري حيوي على الساحل الغربي بشواطئها الجميلة ونمط حياة عصري',

    // City Cards - Cities Page
    tripoliBayCardText: 'عاصمة ليبيا وأكبر مدنها، تأسست منذ القرن السابع قبل الميلاد. تضم المدينة القديمة وسراي الحمراء الأثرية',
    benghaziPageCardText: 'ثاني أكبر مدن ليبيا، عاصمة الشرق التاريخية. تأسست على يد اليونانيين عام 446 ق.م. تضم كورنيشًا جميلًا وشواطئ رائعة',
    ghadamesPageCardText: 'لؤلؤة الصحراء الليبية، مدينة الواحات القديمة المسجلة في مواقع التراث العالمي لليونسكو. تتميز بعمارتها التقليدية الفريدة',
    sabhaPageCardText: 'عاصمة فزان وبوابة الصحراء الكبرى، مركز تجاري مهم. تقع على حافة الكثبان الرملية وتُعتبر نقطة انطلاق للرحلات الصحراوية',
    baydaPageCardText: 'تقع في الجبل الأخضر، عاصمة البرقة سابقًا. تتميز بمناخها المعتدل وطبيعتها الخلابة. تضم آثار قورينا اليونانية',
    misrataPageCardText: 'ثالث أكبر مدن ليبيا، مركز تجاري وصناعي حيوي. تتميز بمينائها التجاري الكبير وشواطئها الجميلة',
    dernaPageCardText: 'مدينة الساحل الشرقي الجميلة، تُعرف بمنتجعها السياحي وشاطئها الأزرق. تقع بين البحر والجب��ل في موقع طبيعي خلاب',
    tobrukPageCardText: 'مدينة تاريخية على الساحل الشرقي، لعبت دورًا مهمًا في الحرب العالمية الثانية. تضم مقبرة حرب تاريخية وآثار عسكرية',
    zuwaraPageCardText: 'مدينة ساحلية في أقصى الغرب الليبي، تُعرف بشواطئها البكر ومينائها التاريخي. مركز ثقافي وسياحي مهم',
    nalutPageCardText: 'تقع في الجبل الغربي، تضم قصر نالوت التاريخي وهو أكبر قصور البربر في ليبيا. طبيعة جبلية خلابة وتراث ثقافي عريق',
    zlitenPageCardText: 'مدينة تاريخية على الساحل الغربي، تضم جامع أحمد باشا القره مانلي وجامعة الزيتونة وأسواقها القديمة',
    ghatPageCardText: 'مدينة واحة في أقصى جنوب غرب ليبيا، تقع عند سفح جبال أكاكوس. نقطة انطلاق لاكتشاف الرسومات الصخرية القديمة',

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
    heroSubtitle: 'Your comprehensive guide to Libya\'s finest cities, landmarks, hotels, and restaurants. An unforgettable journey through ancient civilizations and stunning nature.',
    heroCta: 'Explore Now',
    heroBadge: 'Libyan Tourism Guide',

    // Sections
    popularCities: 'Popular Libyan Cities',
    popularCitiesDesc: 'Discover Libya\'s top cities and their unique cultural and tourist attractions',
    hotelsSection: 'Best Hotels',
    hotelsDesc: 'Choose from a curated selection of Libya\'s finest hotels, from international luxury to unique accommodations',
    landmarksSection: 'Top Landmarks',
    landmarksDesc: 'Explore Roman and Greek ruins and stunning natural sites that make Libya a unique destination',
    restaurantsSection: 'Famous Restaurants',
    restaurantsDesc: 'Taste the best Libyan and international cuisine at top restaurants across Libyan cities',
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
    citiesDesc: 'Discover 12 major Libyan cities, their history and tourist attractions',
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

    // City Cards - Home Page
    tripoliCardText: 'Libya\'s capital and largest city, blending ancient history with modern civilization. It features the old city and Red Fort with many historical landmarks',
    benghaziCardText: 'Libya\'s second largest city, a beautiful eastern coastal city with a stunning corniche and wonderful beaches.',
    ghadamesCardText: 'The Pearl of the Desert, an ancient oasis city listed by UNESCO, known for its unique traditional architecture',
    sabhaCardText: 'The capital of Southern Libya and gateway to the Great Desert, featuring sand dunes and oases.',
    baydaCardText: 'Located in the Green Mountains, known for its moderate climate and stunning nature, with ancient ruins of Cyrene.',
    misrataCardText: 'One of Libya\'s most important cities, a vibrant commercial center on the western coast with beautiful beaches and modern lifestyle',

    // City Cards - Cities Page
    tripoliBayCardText: 'Libya\'s capital and largest city, founded in the 7th century BC. It features the old city and the historic Red Fort',
    benghaziPageCardText: 'Libya\'s second largest city, the historic capital of the East. Founded by Greeks in 446 BC. It features a beautiful corniche and wonderful beaches',
    ghadamesPageCardText: 'The Pearl of the Libyan Desert, an ancient oasis city listed on UNESCO World Heritage Sites. It features unique traditional architecture',
    sabhaPageCardText: 'The capital of Fezzan and gateway to the Great Desert, an important commercial center. Located at the edge of sand dunes and a starting point for desert trips',
    baydaPageCardText: 'Located in the Green Mountains, former capital of Cyrenaica. Known for its moderate climate and stunning nature with the ruins of Cyrene',
    misrataPageCardText: 'Libya\'s third largest city, a vital commercial and industrial center. Distinguished by its large commercial port and beautiful beaches',
    dernaPageCardText: 'A beautiful eastern coastal city, known for its tourist resort and blue beach. Located between the sea and mountains in a stunning natural setting',
    tobrukPageCardText: 'A historic city on the eastern coast, played an important role in World War II. It features a war cemetery and military ruins',
    zuwaraPageCardText: 'A coastal city in the far western part of Libya, known for its pristine beaches and historic port. An important cultural and tourist center',
    nalutPageCardText: 'Located in the Western Mountains, home to the historic Nalut Fort, the largest Berber castle in Libya. Stunning mountain nature and rich cultural heritage',
    zlitenPageCardText: 'A historic city on the western coast, featuring Ahmed Pasha Al-Qaramani Mosque, Al-Zitouna University and ancient markets',
    ghatPageCardText: 'An oasis city in the far southwest of Libya, located at the foot of the Akakus Mountains. Starting point for discovering ancient rock paintings',

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

  // Update card descriptions based on city name
  document.querySelectorAll('.card').forEach(card => {
    const searchAttr = card.getAttribute('data-search');
    const cardText = card.querySelector('.card-text');
    
    if (cardText && searchAttr) {
      if (searchAttr.includes('طرابلس') || searchAttr.includes('tripoli')) {
        cardText.textContent = currentLang === 'ar' ? t.tripoliCardText : t.tripoliBayCardText;
      } else if (searchAttr.includes('بنغازي') || searchAttr.includes('benghazi')) {
        cardText.textContent = currentLang === 'ar' ? t.benghaziCardText : t.benghaziPageCardText;
      } else if (searchAttr.includes('غدامس') || searchAttr.includes('ghadames')) {
        cardText.textContent = currentLang === 'ar' ? t.ghadamesCardText : t.ghadamesPageCardText;
      } else if (searchAttr.includes('سبها') || searchAttr.includes('sabha')) {
        cardText.textContent = currentLang === 'ar' ? t.sabhaCardText : t.sabhaPageCardText;
      } else if (searchAttr.includes('البيضاء') || searchAttr.includes('bayda')) {
        cardText.textContent = currentLang === 'ar' ? t.baydaCardText : t.baydaPageCardText;
      } else if (searchAttr.includes('مصراتة') || searchAttr.includes('misrata')) {
        cardText.textContent = currentLang === 'ar' ? t.misrataCardText : t.misrataPageCardText;
      } else if (searchAttr.includes('درنة') || searchAttr.includes('derna')) {
        cardText.textContent = t.dernaPageCardText;
      } else if (searchAttr.includes('طبرق') || searchAttr.includes('tobruk')) {
        cardText.textContent = t.tobrukPageCardText;
      } else if (searchAttr.includes('زوارة') || searchAttr.includes('zuwara')) {
        cardText.textContent = t.zuwaraPageCardText;
      } else if (searchAttr.includes('نالوت') || searchAttr.includes('nalut')) {
        cardText.textContent = t.nalutPageCardText;
      } else if (searchAttr.includes('زليتن') || searchAttr.includes('zliten')) {
        cardText.textContent = t.zlitenPageCardText;
      } else if (searchAttr.includes('غات') || searchAttr.includes('ghat')) {
        cardText.textContent = t.ghatPageCardText;
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
