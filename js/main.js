/* ============================================
   TRENDTROVE - MASTER JAVASCRIPT
   Version: 1.0.0
   Description: Core functionality for all pages
   ============================================ */

// ========== GLOBAL CONSTANTS ==========
const USD_TO_GHS = 15.5;

// ========== PRODUCT DATABASE ==========
const products = [
  {
    id: 1,
    name: "Apple AirPods Pro 2",
    category: "Audio",
    priceUSD: 199.99,
    originalUSD: 249.99,
    discount: "20% OFF",
    rating: 4.9,
    reviews: 12450,
    image:
      "https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?w=400&h=400&fit=crop",
    store: "Apple",
    storeUrl: "https://www.apple.com/shop/airpods",
  },
  {
    id: 2,
    name: "Sony WH-1000XM5",
    category: "Audio",
    priceUSD: 298,
    originalUSD: 399.99,
    discount: "25% OFF",
    rating: 4.8,
    reviews: 8230,
    image:
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop",
    store: "Best Buy",
    storeUrl: "https://www.bestbuy.com/site/sony-wh-1000xm5/6501030.p",
  },
  {
    id: 3,
    name: "Apple iPad 10th Gen",
    category: "Electronics",
    priceUSD: 349,
    originalUSD: 449,
    discount: "22% OFF",
    rating: 4.7,
    reviews: 5600,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
    store: "Apple",
    storeUrl: "https://www.apple.com/shop/buy-ipad/ipad",
  },
  {
    id: 4,
    name: "Dyson V15 Detect",
    category: "Home",
    priceUSD: 599.99,
    originalUSD: 749.99,
    discount: "20% OFF",
    rating: 4.8,
    reviews: 3200,
    image:
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&h=400&fit=crop",
    store: "Dyson",
    storeUrl: "https://www.dyson.com/vacuum-cleaners/cordless/v15",
  },
  {
    id: 5,
    name: "Samsung Galaxy Watch 6",
    category: "Watches",
    priceUSD: 229,
    originalUSD: 299.99,
    discount: "23% OFF",
    rating: 4.6,
    reviews: 4150,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    store: "Samsung",
    storeUrl: "https://www.samsung.com/us/watches/galaxy-watch6/",
  },
  {
    id: 6,
    name: "Instant Pot Duo Plus",
    category: "Home",
    priceUSD: 89.99,
    originalUSD: 129.99,
    discount: "30% OFF",
    rating: 4.7,
    reviews: 18900,
    image:
      "https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&h=400&fit=crop",
    store: "Amazon",
    storeUrl:
      "https://www.amazon.com/Instant-Pot-Duo-Plus-Multi-Use/dp/B08D9CQB6V",
  },
  {
    id: 7,
    name: "Nike Air Max SC",
    category: "Footwear",
    priceUSD: 65,
    originalUSD: 85,
    discount: "23% OFF",
    rating: 4.5,
    reviews: 3200,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    store: "Nike",
    storeUrl: "https://www.nike.com/t/air-max-sc-shoes",
  },
  {
    id: 8,
    name: "Apple MacBook Air M2",
    category: "Electronics",
    priceUSD: 999,
    originalUSD: 1199,
    discount: "16% OFF",
    rating: 4.9,
    reviews: 8700,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
    store: "Apple",
    storeUrl: "https://www.apple.com/shop/buy-mac/macbook-air/13-inch-m2",
  },
  {
    id: 9,
    name: "Bose QuietComfort Earbuds",
    category: "Audio",
    priceUSD: 199,
    originalUSD: 279,
    discount: "28% OFF",
    rating: 4.7,
    reviews: 5400,
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
    store: "Bose",
    storeUrl: "https://www.bose.com/quietcomfort-earbuds-ii",
  },
  {
    id: 10,
    name: "Ninja Foodi Grill",
    category: "Home",
    priceUSD: 159.99,
    originalUSD: 229.99,
    discount: "30% OFF",
    rating: 4.6,
    reviews: 2100,
    image:
      "https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&h=400&fit=crop",
    store: "Ninja",
    storeUrl:
      "https://www.ninjakitchen.com/products/ninja-foodi-6-in-1-smart-xl-grill",
  },
  {
    id: 11,
    name: "Apple Watch Series 9",
    category: "Watches",
    priceUSD: 329,
    originalUSD: 399,
    discount: "17% OFF",
    rating: 4.8,
    reviews: 9800,
    image:
      "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=400&h=400&fit=crop",
    store: "Apple",
    storeUrl: "https://www.apple.com/shop/buy-watch/apple-watch",
  },
  {
    id: 12,
    name: 'LG C3 OLED TV 55"',
    category: "Electronics",
    priceUSD: 1199.99,
    originalUSD: 1599.99,
    discount: "25% OFF",
    rating: 4.9,
    reviews: 3400,
    image:
      "https://images.unsplash.com/photo-1593784991095-a60f2f5b2f0f?w=400&h=400&fit=crop",
    store: "LG",
    storeUrl: "https://www.lg.com/us/tvs/lg-oled55c3pua-oled-4k-tv",
  },
];

// ========== HELPER FUNCTIONS ==========
function toGHS(usd) {
  return Math.round(usd * USD_TO_GHS);
}

function getCart() {
  const stored = localStorage.getItem("cart");
  if (!stored) return [];
  try {
    return JSON.parse(stored);
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartBadge() {
  const cart = getCart();
  const totalQty = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const badge = document.getElementById("cartCountBadge");
  if (badge) badge.textContent = totalQty;
  localStorage.setItem("cartCount", totalQty);
}

function showMessage(msg, isError = false) {
  const toast = document.getElementById("toastMsg");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  toast.style.background = isError ? "#dc2626" : "#1e293b";
  setTimeout(() => toast.classList.remove("show"), 3000);
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  const cart = getCart();
  const existingItem = cart.find((item) => item.id === productId);
  const priceGHS = toGHS(product.priceUSD);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, priceGHS, quantity: 1 });
  }

  saveCart(cart);
  updateCartBadge();
  showMessage(`🛍️ Added "${product.name}" to cart`);
}

function goToStore(url, storeName) {
  if (url && url !== "#" && url !== "") {
    window.open(url, "_blank", "noopener,noreferrer");
    showMessage(`🔗 Opening ${storeName} official store...`);
  } else {
    showMessage(`❌ Store link unavailable`, true);
  }
}

function storeColor(store) {
  const colorMap = {
    Apple: "#555",
    "Best Buy": "#0046be",
    Amazon: "#ff9900",
    Nike: "#000",
    Bose: "#111",
    Ninja: "#2ecc71",
    LG: "#a50034",
    Dyson: "#0055a4",
    Samsung: "#1428a0",
  };
  return colorMap[store] || "#334155";
}

function renderProductCard(product) {
  const priceGHS = toGHS(product.priceUSD);
  const originalGHS = toGHS(product.originalUSD);
  const isDiscounted = product.originalUSD > product.priceUSD;

  return `
    <div class="product-card bg-white rounded-xl shadow-sm border p-4 relative" style="width:280px; display:inline-block; vertical-align:top;">
      ${isDiscounted ? `<div class="discount-badge">${product.discount}</div>` : ""}
      <div class="store-badge" style="background:${storeColor(product.store)};">${product.store}</div>
      <div onclick="goToStore('${product.storeUrl}', '${product.store}')" class="cursor-pointer">
        <img src="${product.image}" class="w-full h-48 object-contain rounded-lg mb-3 bg-gray-50" alt="${product.name}" onerror="this.src='https://placehold.co/400x400/eeeeee/666666?text=Image+Unavailable'">
        <h4 class="font-semibold hover:text-blue-600 transition text-sm min-h-[48px] line-clamp-2">${product.name}</h4>
        <div class="flex items-center gap-1 mt-1">
          <div class="flex text-yellow-400 text-xs">${"★".repeat(Math.floor(product.rating))}${product.rating % 1 !== 0 ? "½" : ""}</div>
          <span class="text-[10px] text-slate-400">(${product.reviews.toLocaleString()})</span>
        </div>
        <div class="mt-2">
          ${isDiscounted ? `<span class="text-xs line-through text-slate-400">₵${originalGHS.toLocaleString()}</span><br>` : ""}
          <span class="text-primary font-bold text-xl">₵${priceGHS.toLocaleString()}</span>
        </div>
      </div>
      <button onclick="addToCart(${product.id})" class="mt-3 w-full bg-primary text-white px-3 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary/80 transition">
        Add to Cart
      </button>
    </div>
  `;
}

// ========== HERO CAROUSEL ==========
function initHeroCarousel() {
  const images = document.querySelectorAll("#heroCarousel .carousel-image");
  if (!images.length) return;

  let currentIndex = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      img.style.opacity = i === index ? "1" : "0";
    });
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  showImage(0);
  setInterval(nextImage, 4000);
}

// ========== TRENDING PRODUCTS SECTION ==========
let trendingCurrentIndex = 0;
const ITEMS_PER_PAGE = 4;

function renderTrendingSection() {
  const container = document.getElementById("trendingGrid");
  if (!container) return;

  const visibleProducts = products.slice(
    trendingCurrentIndex,
    trendingCurrentIndex + ITEMS_PER_PAGE,
  );
  container.innerHTML = visibleProducts.map(renderProductCard).join("");

  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (prevBtn) {
    prevBtn.disabled = trendingCurrentIndex === 0;
    prevBtn.style.opacity = trendingCurrentIndex === 0 ? "0.5" : "1";
  }
  if (nextBtn) {
    nextBtn.disabled = trendingCurrentIndex + ITEMS_PER_PAGE >= products.length;
    nextBtn.style.opacity =
      trendingCurrentIndex + ITEMS_PER_PAGE >= products.length ? "0.5" : "1";
  }
}

function initTrendingSection() {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (trendingCurrentIndex > 0) {
        trendingCurrentIndex -= ITEMS_PER_PAGE;
        renderTrendingSection();
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (trendingCurrentIndex + ITEMS_PER_PAGE < products.length) {
        trendingCurrentIndex += ITEMS_PER_PAGE;
        renderTrendingSection();
      }
    });
  }

  renderTrendingSection();
}

// ========== SEARCH FUNCTIONALITY ==========
function initGlobalSearch() {
  const searchInput = document.getElementById("searchInput");
  if (!searchInput) return;

  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const query = e.target.value.toLowerCase();
      const filtered = products.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.store.toLowerCase().includes(query),
      );

      const trendingGrid = document.getElementById("trendingGrid");
      if (trendingGrid) {
        if (filtered.length > 0) {
          trendingGrid.innerHTML = filtered.map(renderProductCard).join("");
          showMessage(`🔎 Found ${filtered.length} results`);
        } else {
          showMessage(`❌ No products found`, true);
          renderTrendingSection();
        }
      }
    }
  });
}

// ========== PAGE INITIALIZATION ==========
document.addEventListener("DOMContentLoaded", () => {
  // Global initializations
  updateCartBadge();
  initHeroCarousel();
  initTrendingSection();
  initGlobalSearch();

  // Page-specific initializations
  if (document.getElementById("sellerForm")) {
    initSellerForm();
    initSellerSearch();
  }
  if (document.querySelector(".step-card")) {
    initHowItWorksPage();
  }
  if (document.getElementById("dealsGrid")) {
    initDealsPage();
  }
  if (document.getElementById("faqListContainer")) {
    initCustomerServicePage();
  }
  if (document.getElementById("cartItemsList")) {
    initCheckoutPage();
  }
  if (document.getElementById("categoriesGrid")) {
    initCategoriesPage();
  }
  if (document.getElementById("productsGrid")) {
    initCategoryProductsPage();
  }
  if (document.getElementById("categoryContainer")) {
    initCategoriesMainPage();
  }
  if (document.getElementById("cartContainer")) {
    initCartPage();
  }
});

// Make functions globally available
window.addToCart = addToCart;
window.goToStore = goToStore;

// Include all other page-specific functions from previous responses here...
// (Seller, How It Works, Deals, Customer Service, Checkout, Categories, Cart functions)

// ========== SELLER PAGE SPECIFIC ==========
function initSellerForm() {
  const sellerForm = document.getElementById("sellerForm");
  if (!sellerForm) return;

  sellerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullName = document.getElementById("fullName")?.value.trim();
    const businessName = document.getElementById("businessName")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const phone = document.getElementById("phone")?.value.trim();

    if (!fullName || !businessName || !email || !phone) {
      showMessage("❌ Please fill in all required fields marked with *", true);
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      showMessage("❌ Please enter a valid email address", true);
      return;
    }

    const application = {
      fullName,
      businessName,
      email,
      phone,
      category: document.getElementById("category")?.value,
      description: document.getElementById("businessDesc")?.value || "",
      submittedAt: new Date().toISOString(),
    };

    const existingApps = JSON.parse(
      localStorage.getItem("seller_applications") || "[]",
    );
    existingApps.push(application);
    localStorage.setItem("seller_applications", JSON.stringify(existingApps));

    showMessage(
      `✅ Thank you ${fullName}! Your seller application has been submitted.`,
    );

    sellerForm.reset();

    setTimeout(() => {
      window.location.href = "index.html";
    }, 2500);
  });
}

function initSellerSearch() {
  const searchInput = document.getElementById("sellerSearchInput");
  if (!searchInput) return;

  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && searchInput.value.trim()) {
      window.location.href = `categories.html?search=${encodeURIComponent(searchInput.value.trim())}`;
    }
  });
}

// ========== PAGE INITIALIZATION ==========
document.addEventListener("DOMContentLoaded", () => {
  // Global initializations
  updateCartBadge();
  initHeroCarousel();
  initTrendingSection();
  initGlobalSearch();

  // Page-specific initializations
  if (document.getElementById("sellerForm")) {
    initSellerForm();
    initSellerSearch();
  }
});
/* ============================================
   HOW IT WORKS PAGE FUNCTIONS
   ============================================ */
function initHowItWorksPage() {
  const searchInput = document.getElementById("searchInputHow");
  if (searchInput) {
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        const query = searchInput.value.trim();
        if (query === "") {
          showMessage("🔍 Enter a product name to search", false);
          return;
        }
        window.location.href = `categories.html?search=${encodeURIComponent(query)}`;
      }
    });
  }

  const steps = document.querySelectorAll(".step-card");
  const stepNames = ["Browse & Discover", "Add to Cart", "Fast Delivery"];
  steps.forEach((step, idx) => {
    step.addEventListener("click", () => {
      showMessage(`✨ ${stepNames[idx]} — that's how easy it is!`, false);
    });
  });
}

/* ============================================
   DEALS PAGE FUNCTIONS
   ============================================ */
const DEALS_USD_TO_GHS = 15.5;

const hotDeals = [
  {
    id: 1,
    name: "Apple AirPods Pro 2",
    price: 199,
    original: 249,
    discount: "20% OFF",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?w=400&h=400&fit=crop",
    store: "Apple",
    storeUrl: "https://www.apple.com/shop/airpods",
    badge: "🔥 Hot Pick",
  },
  {
    id: 2,
    name: "Sony WH-1000XM5",
    price: 298,
    original: 399,
    discount: "25% OFF",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop",
    store: "Best Buy",
    storeUrl: "https://www.bestbuy.com/site/sony-wh-1000xm5/6501030.p",
    badge: "⭐ Bestseller",
  },
  {
    id: 3,
    name: "Apple iPad 10th Gen",
    price: 349,
    original: 449,
    discount: "22% OFF",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
    store: "Apple",
    storeUrl: "https://www.apple.com/shop/buy-ipad/ipad-10th-generation",
    badge: "📱 Tablet Deal",
  },
  {
    id: 4,
    name: "Dyson V15 Detect",
    price: 599,
    original: 749,
    discount: "20% OFF",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&h=400&fit=crop",
    store: "Dyson",
    storeUrl: "https://www.dyson.com/vacuum-cleaners/cordless/v15-detect",
    badge: "🧹 Home Essential",
  },
  {
    id: 5,
    name: "Samsung Galaxy Watch 6",
    price: 229,
    original: 299,
    discount: "23% OFF",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    store: "Samsung",
    storeUrl: "https://www.samsung.com/us/watches/galaxy-watch6/",
    badge: "⌚ Limited",
  },
  {
    id: 6,
    name: "Instant Pot Duo Plus",
    price: 89,
    original: 129,
    discount: "31% OFF",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&h=400&fit=crop",
    store: "Amazon",
    storeUrl:
      "https://www.amazon.com/Instant-Pot-Duo-Plus-Multi-Use/dp/B08D9CQB6V",
    badge: "🍳 Kitchen Deal",
  },
  {
    id: 7,
    name: "Nike Air Max SC",
    price: 65,
    original: 85,
    discount: "23% OFF",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    store: "Nike",
    storeUrl: "https://www.nike.com/t/air-max-sc-shoes",
    badge: "👟 Sneaker Deal",
  },
  {
    id: 8,
    name: "Apple MacBook Air M2",
    price: 999,
    original: 1199,
    discount: "16% OFF",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
    store: "Apple",
    storeUrl: "https://www.apple.com/shop/buy-mac/macbook-air/13-inch-m2",
    badge: "💻 Laptop Deal",
  },
  {
    id: 9,
    name: "Bose QuietComfort Earbuds",
    price: 199,
    original: 279,
    discount: "28% OFF",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
    store: "Bose",
    storeUrl: "https://www.bose.com/quietcomfort-earbuds-ii",
    badge: "🎧 Audio",
  },
];

let currentDeals = [...hotDeals];

function toGHSDeals(usd) {
  return Math.round(usd * DEALS_USD_TO_GHS);
}

function addToCartDeal(deal) {
  const cart = getCart();
  const existing = cart.find((item) => item.id === deal.id);
  const priceGHS = toGHSDeals(deal.price);
  if (existing) {
    existing.quantity = (existing.quantity || 1) + 1;
  } else {
    cart.push({
      id: deal.id,
      name: deal.name,
      priceUSD: deal.price,
      priceGHS: priceGHS,
      quantity: 1,
      image: deal.image,
      store: deal.store,
    });
  }
  saveCart(cart);
  updateCartBadge();
  showMessage(`🛍️ "${deal.name}" added to cart!`);
}

function goToStoreDeal(url, storeName) {
  if (url && url !== "#" && url !== "") {
    window.open(url, "_blank", "noopener,noreferrer");
    showMessage(`🔗 Opening ${storeName} official store...`);
  } else {
    showMessage(`❌ Store link not available.`, true);
  }
}

function renderDealsGrid(filterText = "") {
  const container = document.getElementById("dealsGrid");
  const noResultsDiv = document.getElementById("noResultsMsg");
  if (!container) return;

  let filtered = currentDeals;
  if (filterText.trim() !== "") {
    const query = filterText.toLowerCase();
    filtered = currentDeals.filter(
      (deal) =>
        deal.name.toLowerCase().includes(query) ||
        deal.store.toLowerCase().includes(query),
    );
  }
  if (filtered.length === 0) {
    container.innerHTML = "";
    if (noResultsDiv) noResultsDiv.classList.remove("hidden");
    return;
  }
  if (noResultsDiv) noResultsDiv.classList.add("hidden");

  let html = "";
  filtered.forEach((deal) => {
    const discountPercent = Math.round(
      ((deal.original - deal.price) / deal.original) * 100,
    );
    const priceGHS = toGHSDeals(deal.price);
    const originalGHS = toGHSDeals(deal.original);
    const fullStars = Math.floor(deal.rating);
    const hasHalfStar = deal.rating % 1 !== 0;
    const starDisplay =
      "★".repeat(fullStars) +
      (hasHalfStar ? "½" : "") +
      "☆".repeat(5 - Math.ceil(deal.rating));

    html += `<div class="deal-card bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 transition-all">
      <div class="relative cursor-pointer" onclick="window.goToStoreDeal('${deal.storeUrl}', '${deal.store}')">
        <img src="${deal.image}" class="w-full h-56 object-cover" alt="${deal.name}" onerror="this.src='https://placehold.co/400x400?text=${deal.name.replace(/ /g, "+")}'">
        <div class="discount-badge-overlay">⚡ -${discountPercent}%</div>
        <div class="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded-full">${deal.store}</div>
      </div>
      <div class="p-5">
        <div class="flex justify-between items-start">
          <h3 class="font-bold text-lg text-slate-800">${deal.name}</h3>
          <span class="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full">${deal.badge || "Hot"}</span>
        </div>
        <div class="flex items-center gap-1 mt-1 text-yellow-500 text-sm">
          ${starDisplay} <span class="text-gray-400 text-xs ml-1">(${deal.rating})</span>
        </div>
        <div class="mt-3 flex items-baseline gap-2 flex-wrap">
          <span class="text-2xl font-bold text-red-600">₵${priceGHS.toLocaleString()}</span>
          <span class="text-sm line-through text-gray-400">₵${originalGHS.toLocaleString()}</span>
          <span class="text-xs font-semibold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">${deal.discount}</span>
        </div>
        <div class="flex gap-2 mt-4">
          <button onclick='window.addToCartDeal(${JSON.stringify(deal).replace(/'/g, "\\'")})' class="flex-1 bg-blue-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition shadow-sm">Add to Cart</button>
          <button onclick="window.goToStoreDeal('${deal.storeUrl}', '${deal.store}')" class="px-4 py-2 border border-gray-300 rounded-xl text-sm font-medium hover:bg-gray-50 transition">Buy →</button>
        </div>
      </div>
    </div>`;
  });
  container.innerHTML = html;
}

function initDealsPage() {
  const searchDeals = document.getElementById("searchDealsInput");
  if (searchDeals) {
    searchDeals.addEventListener("input", (e) =>
      renderDealsGrid(e.target.value),
    );
  }

  const resetBtn = document.getElementById("resetDealsBtn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (searchDeals) searchDeals.value = "";
      renderDealsGrid("");
      showMessage("All hot deals restored 🔥", false);
    });
  }

  renderDealsGrid();
  updateCartBadge();

  window.addToCartDeal = addToCartDeal;
  window.goToStoreDeal = goToStoreDeal;
}

/* ============================================
   UPDATE DOM CONTENT LOADED
   ============================================ */
// Preserve existing DOMContentLoaded and add new conditions
const originalDOMListener = document.addEventListener;
document.addEventListener("DOMContentLoaded", () => {
  // Existing initializations
  updateCartBadge();
  initHeroCarousel();
  initTrendingSection();
  initGlobalSearch();

  // Page-specific initializations
  if (document.getElementById("sellerForm")) {
    initSellerForm();
    initSellerSearch();
  }
  if (document.querySelector(".step-card")) {
    initHowItWorksPage();
  }
  if (document.getElementById("dealsGrid")) {
    initDealsPage();
  }
});
/* ============================================
   CUSTOMER SERVICE PAGE FUNCTIONS
   ============================================ */

const faqData = [
  {
    question: "How do I track my order?",
    answer:
      "You can track your order by going to 'My Account' → 'Order History' and clicking on the tracking link. You'll also receive email updates with tracking information once your order ships.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy on most items. Products must be unused and in original packaging. Return shipping is free for Trendtrove members.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping: 4-6 business days. Express shipping: 2-3 business days. Overnight: Next business day delivery for orders placed before 2pm.",
  },
  {
    question: "How do I change or cancel my order?",
    answer:
      "You can modify or cancel your order within 30 minutes of placing it. Go to 'My Account' → 'Order History' and select the order you wish to modify.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes! We ship to over 100 countries worldwide. Shipping costs and delivery times vary by destination. You can see exact rates at checkout.",
  },
  {
    question: "How can I get a refund?",
    answer:
      "Refunds are processed within 5-7 business days after we receive the returned item. The refund will be issued to your original payment method.",
  },
  {
    question: "Are the products authentic?",
    answer:
      "Absolutely. Trendtrove partners exclusively with verified merchants and official brands. Every product is 100% authentic.",
  },
];

function escapeHtml(str) {
  return str.replace(/[&<>]/g, function (m) {
    if (m === "&") return "&amp;";
    if (m === "<") return "&lt;";
    if (m === ">") return "&gt;";
    return m;
  });
}

function renderFAQs(filter = "") {
  const container = document.getElementById("faqListContainer");
  if (!container) return;
  const filtered = faqData.filter(
    (f) =>
      f.question.toLowerCase().includes(filter.toLowerCase()) ||
      f.answer.toLowerCase().includes(filter.toLowerCase()),
  );
  if (filtered.length === 0) {
    container.innerHTML = `<div class="text-center py-6 text-gray-500">No matching questions found. Try another keyword or contact support.</div>`;
    return;
  }
  let html = "";
  filtered.forEach((faq, idx) => {
    html += `<div class="faq-item border rounded-xl overflow-hidden">
      <button onclick="window.toggleFAQ(this)" class="faq-question w-full text-left px-5 py-4 font-medium text-slate-800 flex justify-between items-center hover:bg-gray-50 transition">
        ${escapeHtml(faq.question)}
        <span class="material-symbols-outlined text-gray-400">expand_more</span>
      </button>
      <div class="faq-answer hidden px-5 pb-4 text-gray-500 text-sm">${escapeHtml(faq.answer)}</div>
    </div>`;
  });
  container.innerHTML = html;
}

window.toggleFAQ = function (button) {
  const answer = button.nextElementSibling;
  const icon = button.querySelector(".material-symbols-outlined");
  answer.classList.toggle("hidden");
  icon.textContent = answer.classList.contains("hidden")
    ? "expand_more"
    : "expand_less";
};

function initCustomerServicePage() {
  renderFAQs();

  const faqSearch = document.getElementById("faqSearchInput");
  if (faqSearch) {
    faqSearch.addEventListener("input", (e) => renderFAQs(e.target.value));
  }

  const supportGlobalSearch = document.getElementById("searchSupportInput");
  if (supportGlobalSearch) {
    supportGlobalSearch.addEventListener("input", (e) => {
      if (faqSearch) {
        faqSearch.value = e.target.value;
        renderFAQs(e.target.value);
      }
    });
  }

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("contactName").value;
      const email = document.getElementById("contactEmail").value;
      if (!name || !email) {
        showMessage("❌ Please fill in your name and email address.", true);
        return;
      }
      showMessage(
        `✅ Thanks ${name}! Your message has been sent. We'll respond to ${email} within 24 hours.`,
      );
      contactForm.reset();
    });
  }
}

/* ============================================
   CHECKOUT PAGE FUNCTIONS
   ============================================ */

function renderOrderSummary() {
  const cart = getCart();
  const container = document.getElementById("cartItemsList");
  const subtotalSpan = document.getElementById("cartSubtotal");
  const totalSpan = document.getElementById("cartTotal");
  if (!container) return;
  if (cart.length === 0) {
    container.innerHTML = `<div class="text-center py-4 text-gray-400 text-sm">Your cart is empty. <a href="index.html" class="text-blue-600 underline">Shop now</a></div>`;
    if (subtotalSpan) subtotalSpan.innerText = `GHS 0.00`;
    if (totalSpan) totalSpan.innerText = `GHS 0.00`;
    return;
  }
  let subtotalGHS = 0;
  let itemsHtml = "";
  cart.forEach((item) => {
    const priceGHS =
      item.priceGHS || Math.round((item.priceUSD || 0) * USD_TO_GHS);
    const quantity = item.quantity || 1;
    const itemTotal = priceGHS * quantity;
    subtotalGHS += itemTotal;
    itemsHtml += `<div class="flex gap-3 text-sm pb-2 border-b">
      <img src="${item.image || "https://placehold.co/60x60"}" class="w-12 h-12 object-cover rounded-md bg-gray-100" onerror="this.src='https://placehold.co/60x60?text=Product'">
      <div class="flex-1">
        <p class="font-medium text-slate-800 line-clamp-1">${item.name || "Product"}</p>
        <p class="text-xs text-gray-500">Qty: ${quantity}</p>
        <p class="text-blue-700 text-sm font-semibold">GHS ${itemTotal.toLocaleString()}</p>
      </div>
    </div>`;
  });
  container.innerHTML = itemsHtml;
  if (subtotalSpan)
    subtotalSpan.innerText = `GHS ${subtotalGHS.toLocaleString()}`;
  if (totalSpan) totalSpan.innerText = `GHS ${subtotalGHS.toLocaleString()}`;
}

function initCheckoutPage() {
  renderOrderSummary();

  const cardBtn = document.getElementById("cardBtn");
  const momoBtn = document.getElementById("momoBtn");
  const cardSection = document.getElementById("cardSection");
  const momoSection = document.getElementById("momoSection");

  if (cardBtn && momoBtn) {
    cardBtn.onclick = () => {
      if (cardSection) cardSection.classList.remove("hidden");
      if (momoSection) momoSection.classList.add("hidden");
      cardBtn.className =
        "px-5 py-2.5 bg-blue-600 text-white rounded-xl font-medium shadow-sm";
      momoBtn.className =
        "px-5 py-2.5 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition";
    };
    momoBtn.onclick = () => {
      if (momoSection) momoSection.classList.remove("hidden");
      if (cardSection) cardSection.classList.add("hidden");
      momoBtn.className =
        "px-5 py-2.5 bg-blue-600 text-white rounded-xl font-medium shadow-sm";
      cardBtn.className =
        "px-5 py-2.5 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition";
    };
  }

  const placeOrderBtn = document.getElementById("placeOrderBtn");
  if (placeOrderBtn) {
    placeOrderBtn.addEventListener("click", () => {
      const firstName = document.getElementById("firstName")?.value.trim();
      const lastName = document.getElementById("lastName")?.value.trim();
      const address = document.getElementById("address")?.value.trim();
      const city = document.getElementById("city")?.value.trim();
      const phone = document.getElementById("phone")?.value.trim();
      const cart = getCart();
      if (cart.length === 0) {
        showMessage("❌ Your cart is empty. Add items before checkout.", true);
        return;
      }
      if (!firstName || !lastName || !address || !city || !phone) {
        showMessage("⚠️ Please fill in all shipping fields.", true);
        return;
      }
      const isCardVisible =
        cardSection && !cardSection.classList.contains("hidden");
      let paymentValid = false;
      if (isCardVisible) {
        const cardNum = document.getElementById("cardNumber")?.value.trim();
        const expiry = document.getElementById("expiry")?.value.trim();
        const cvv = document.getElementById("cvv")?.value.trim();
        if (!cardNum || !expiry || !cvv) {
          showMessage("💳 Please enter card details", true);
          return;
        }
        paymentValid = true;
      } else {
        const network = document.getElementById("momoNetwork")?.value;
        const momoNum = document.getElementById("momoNumber")?.value.trim();
        if (!network || !momoNum) {
          showMessage(
            "📱 Please select mobile money network and enter number.",
            true,
          );
          return;
        }
        paymentValid = true;
      }
      if (paymentValid) {
        showMessage(
          `✅ Order placed successfully, ${firstName}! Thank you for shopping with Trendtrove.`,
        );
        localStorage.removeItem("cart");
        updateCartBadge();
        renderOrderSummary();
        setTimeout(() => {
          window.location.href = "index.html";
        }, 2000);
      }
    });
  }

  const checkoutSearch = document.getElementById("checkoutSearch");
  if (checkoutSearch) {
    checkoutSearch.addEventListener("keypress", (e) => {
      if (e.key === "Enter" && checkoutSearch.value.trim()) {
        window.location.href = `categories.html?search=${encodeURIComponent(checkoutSearch.value.trim())}`;
      }
    });
  }

  window.addEventListener("storage", (e) => {
    if (e.key === "cart") {
      renderOrderSummary();
      updateCartBadge();
    }
  });
}

/* ============================================
   CATEGORY PRODUCTS PAGE FUNCTIONS
   ============================================ */

const categoryProducts = {
  accessories: [
    {
      id: 101,
      name: "Leather Watch Strap",
      price: 49.99,
      orig: 79.99,
      discount: "38% OFF",
      rating: 4.5,
      reviews: 128,
      image:
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&h=400&fit=crop",
      store: "Amazon",
      storeUrl: "https://www.amazon.com/s?k=leather+watch+strap",
    },
    {
      id: 102,
      name: "Designer Sunglasses",
      price: 129.99,
      orig: 199.99,
      discount: "35% OFF",
      rating: 4.8,
      reviews: 234,
      image:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
      store: "Best Buy",
      storeUrl: "https://www.bestbuy.com/site/sunglasses",
    },
    {
      id: 103,
      name: "Premium Leather Wallet",
      price: 45.0,
      orig: 65.0,
      discount: "30% OFF",
      rating: 4.7,
      reviews: 312,
      image:
        "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
      store: "Walmart",
      storeUrl: "https://www.walmart.com/browse/wallets",
    },
    {
      id: 104,
      name: "Silver Cufflinks",
      price: 89.99,
      orig: 149.99,
      discount: "40% OFF",
      rating: 4.7,
      reviews: 56,
      image:
        "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&h=400&fit=crop",
      store: "Amazon",
      storeUrl: "https://www.amazon.com/s?k=cufflinks",
    },
    {
      id: 105,
      name: "Gold Plated Necklace",
      price: 149.99,
      orig: 249.99,
      discount: "40% OFF",
      rating: 4.9,
      reviews: 178,
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
      store: "Amazon",
      storeUrl: "https://www.amazon.com/gold-necklace",
    },
    {
      id: 106,
      name: "Designer Watch Box",
      price: 79.99,
      orig: 119.99,
      discount: "33% OFF",
      rating: 4.7,
      reviews: 94,
      image:
        "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=400&h=400&fit=crop",
      store: "Amazon",
      storeUrl: "https://www.amazon.com/watch-box",
    },
    {
      id: 107,
      name: "Silk Tie Set",
      price: 44.99,
      orig: 69.99,
      discount: "36% OFF",
      rating: 4.5,
      reviews: 203,
      image:
        "https://images.unsplash.com/photo-1589756823695-278bc923f962?w=400&h=400&fit=crop",
      store: "Amazon",
      storeUrl: "https://www.amazon.com/silk-tie",
    },
    {
      id: 108,
      name: "Leather Gloves",
      price: 39.99,
      orig: 59.99,
      discount: "33% OFF",
      rating: 4.4,
      reviews: 167,
      image:
        "https://images.unsplash.com/photo-1551024705-6286f6f6e571?w=400&h=400&fit=crop",
      store: "Amazon",
      storeUrl: "https://www.amazon.com/leather-gloves",
    },
  ],
  footwear: [
    {
      id: 201,
      name: "Running Shoes",
      price: 89.99,
      orig: 129.99,
      discount: "31% OFF",
      rating: 4.7,
      reviews: 445,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
      store: "Nike",
      storeUrl: "https://www.nike.com/running",
    },
    {
      id: 202,
      name: "Casual Sneakers",
      price: 69.99,
      orig: 99.99,
      discount: "30% OFF",
      rating: 4.5,
      reviews: 678,
      image:
        "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=400&fit=crop",
      store: "Adidas",
      storeUrl: "https://www.adidas.com/us/sneakers",
    },
    {
      id: 203,
      name: "Formal Leather Shoes",
      price: 149.99,
      orig: 249.99,
      discount: "40% OFF",
      rating: 4.8,
      reviews: 234,
      image:
        "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=400&h=400&fit=crop",
      store: "Best Buy",
      storeUrl: "https://www.bestbuy.com/site/shoes",
    },
    {
      id: 204,
      name: "White Urban Sneakers",
      price: 79.99,
      orig: 110.0,
      discount: "27% OFF",
      rating: 4.6,
      reviews: 520,
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
      store: "Amazon",
      storeUrl: "https://www.amazon.com/sneakers",
    },
    {
      id: 205,
      name: "Slip-on Loafers",
      price: 59.99,
      orig: 89.99,
      discount: "33% OFF",
      rating: 4.4,
      reviews: 312,
      image:
        "https://images.unsplash.com/photo-1595750765732-a7d2e5f6d335?w=400&h=400&fit=crop",
      store: "Amazon",
      storeUrl: "https://www.amazon.com/loafers",
    },
    {
      id: 206,
      name: "Sport Sandals",
      price: 49.99,
      orig: 79.99,
      discount: "38% OFF",
      rating: 4.5,
      reviews: 278,
      image:
        "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=400&h=400&fit=crop",
      store: "Amazon",
      storeUrl: "https://www.amazon.com/sandals",
    },
    {
      id: 207,
      name: "Winter Boots",
      price: 129.99,
      orig: 189.99,
      discount: "32% OFF",
      rating: 4.7,
      reviews: 198,
      image:
        "https://images.unsplash.com/photo-1542838132-92f2b3ee8ce3?w=400&h=400&fit=crop",
      store: "Amazon",
      storeUrl: "https://www.amazon.com/winter-boots",
    },
    {
      id: 208,
      name: "Canvas Sneakers",
      price: 39.99,
      orig: 59.99,
      discount: "33% OFF",
      rating: 4.3,
      reviews: 445,
      image:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=400&fit=crop",
      store: "Amazon",
      storeUrl: "https://www.amazon.com/canvas-sneakers",
    },
  ],
  electronics: [
    {
      id: 301,
      name: "Wireless Headphones",
      price: 199.99,
      orig: 299.99,
      discount: "33% OFF",
      rating: 4.9,
      reviews: 892,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      store: "Best Buy",
      storeUrl: "https://www.bestbuy.com/site/headphones",
    },
    {
      id: 302,
      name: "Smart Watch",
      price: 299.99,
      orig: 399.99,
      discount: "25% OFF",
      rating: 4.7,
      reviews: 523,
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop",
      store: "Apple",
      storeUrl: "https://www.apple.com/watch/",
    },
    {
      id: 303,
      name: "Portable BT Speaker",
      price: 59.99,
      orig: 89.99,
      discount: "33% OFF",
      rating: 4.8,
      reviews: 412,
      image:
        "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?w=400&h=400&fit=crop",
      store: "Amazon",
      storeUrl: "https://www.amazon.com/speakers",
    },
    {
      id: 304,
      name: "Mechanical Keyboard",
      price: 89.99,
      orig: 129.99,
      discount: "31% OFF",
      rating: 4.8,
      reviews: 534,
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop",
      store: "Amazon",
      storeUrl: "https://www.amazon.com/mechanical-keyboard",
    },
    {
      id: 305,
      name: "Gaming Mouse",
      price: 49.99,
      orig: 79.99,
      discount: "38% OFF",
      rating: 4.7,
      reviews: 678,
      image:
        "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400&h=400&fit=crop",
      store: "Amazon",
      storeUrl: "https://www.amazon.com/gaming-mouse",
    },
    {
      id: 306,
      name: "Laptop Backpack",
      price: 69.99,
      orig: 99.99,
      discount: "30% OFF",
      rating: 4.6,
      reviews: 289,
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      store: "Amazon",
      storeUrl: "https://www.amazon.com/laptop-backpack",
    },
    {
      id: 307,
      name: "USB-C Hub",
      price: 45.99,
      orig: 69.99,
      discount: "34% OFF",
      rating: 4.5,
      reviews: 342,
      image:
        "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=400&fit=crop",
      store: "Amazon",
      storeUrl: "https://www.amazon.com/usb-hub",
    },
    {
      id: 308,
      name: "Wireless Charger",
      price: 35.99,
      orig: 59.99,
      discount: "40% OFF",
      rating: 4.4,
      reviews: 567,
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop",
      store: "Amazon",
      storeUrl: "https://www.amazon.com/wireless-charger",
    },
  ],
  home: [
    {
      id: 401,
      name: "Smart Aroma Diffuser",
      price: 55.0,
      orig: 85.0,
      discount: "35% OFF",
      rating: 4.6,
      reviews: 215,
      image:
        "https://images.unsplash.com/photo-1602928321679-560bb453f190?w=400&h=400&fit=crop",
      store: "Home Depot",
      storeUrl: "https://www.homedepot.com/diffuser",
    },
    {
      id: 402,
      name: "Solid Wood Frame",
      price: 24.0,
      orig: 40.0,
      discount: "40% OFF",
      rating: 4.7,
      reviews: 104,
      image:
        "https://images.unsplash.com/photo-1583847268964-b28dc2f51ac9?w=400&h=400&fit=crop",
      store: "IKEA",
      storeUrl: "https://www.ikea.com/frames",
    },
    {
      id: 403,
      name: "Luxury Scented Candle",
      price: 22.0,
      orig: 40.0,
      discount: "45% OFF",
      rating: 4.5,
      reviews: 156,
      image:
        "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=400&h=400&fit=crop",
      store: "Walmart",
      storeUrl: "https://www.walmart.com/candles",
    },
    {
      id: 404,
      name: "Minimalist Wall Clock",
      price: 35.0,
      orig: 55.0,
      discount: "36% OFF",
      rating: 4.7,
      reviews: 210,
      image:
        "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400&h=400&fit=crop",
      store: "Amazon",
      storeUrl: "https://www.amazon.com/wall-clocks",
    },
    {
      id: 405,
      name: "Modern Floor Lamp",
      price: 79.99,
      orig: 129.99,
      discount: "38% OFF",
      rating: 4.5,
      reviews: 189,
      image:
        "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?w=400&h=400&fit=crop",
      store: "Walmart",
      storeUrl: "https://www.walmart.com/ip/lamps",
    },
    {
      id: 406,
      name: "Ceramic Decorative Vase",
      price: 39.99,
      orig: 59.99,
      discount: "33% OFF",
      rating: 4.4,
      reviews: 128,
      image:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?w=400&h=400&fit=crop",
      store: "Amazon",
      storeUrl: "https://www.amazon.com/vases",
    },
    {
      id: 407,
      name: "Cozy Throw Blanket",
      price: 49.99,
      orig: 79.99,
      discount: "38% OFF",
      rating: 4.7,
      reviews: 234,
      image:
        "https://images.pexels.com/photos/4465824/pexels-photo-4465824.jpeg?w=400&h=400&fit=crop",
      store: "Best Buy",
      storeUrl: "https://www.bestbuy.com/site/blankets",
    },
    {
      id: 408,
      name: "Abstract Wall Art",
      price: 59.99,
      orig: 99.99,
      discount: "40% OFF",
      rating: 4.6,
      reviews: 167,
      image:
        "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?w=400&h=400&fit=crop",
      store: "Amazon",
      storeUrl: "https://www.amazon.com/wall-art",
    },
  ],
};

const categoryNames = {
  accessories: "Premium Accessories",
  footwear: "Trending Footwear",
  electronics: "Top Electronics",
  home: "Home Essentials",
};

let currentCategory = "";
let currentCategorySearchTerm = "";

function renderCategoryProducts() {
  const container = document.getElementById("productsGrid");
  const emptyDiv = document.getElementById("emptyState");
  const countSpan = document.getElementById("productCountSpan");
  if (!container) return;
  let productsArray = categoryProducts[currentCategory] || [];
  if (currentCategorySearchTerm.trim() !== "") {
    const term = currentCategorySearchTerm.toLowerCase();
    productsArray = productsArray.filter(
      (p) =>
        p.name.toLowerCase().includes(term) ||
        p.store.toLowerCase().includes(term),
    );
  }
  if (productsArray.length === 0) {
    container.innerHTML = "";
    if (emptyDiv) emptyDiv.classList.remove("hidden");
    if (countSpan) countSpan.textContent = "0";
    return;
  }
  if (emptyDiv) emptyDiv.classList.add("hidden");
  if (countSpan) countSpan.textContent = productsArray.length;
  const html = productsArray
    .map((p) => {
      const priceGHS = toGHS(p.price);
      const originalGHS = toGHS(p.orig);
      const fullStars = Math.floor(p.rating);
      const hasHalfStar = p.rating % 1 !== 0;
      const starDisplay =
        "★".repeat(fullStars) +
        (hasHalfStar ? "½" : "") +
        "☆".repeat(5 - Math.ceil(p.rating));
      return `<div class="product-card bg-white rounded-xl shadow-sm border border-slate-200 p-4 relative">
      <div class="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full z-10">${p.discount}</div>
      <div class="absolute top-2 right-2 bg-black/70 text-white text-[9px] font-bold px-2 py-1 rounded-full z-10">${p.store}</div>
      <img src="${p.image}" class="w-full h-48 object-cover rounded-lg mb-3 cursor-pointer" onclick="window.goToStore('${p.storeUrl}', '${p.store}')" onerror="this.src='https://placehold.co/400x400/3B82F6/white?text=${encodeURIComponent(p.name)}'">
      <h3 class="font-semibold text-slate-900 text-base line-clamp-1">${p.name}</h3>
      <div class="flex items-center gap-1 mt-1">
        <div class="text-yellow-400 text-sm">${starDisplay}</div>
        <span class="text-xs text-slate-400">(${p.reviews.toLocaleString()})</span>
      </div>
      <div class="mt-2">
        <span class="text-sm line-through text-slate-400">₵${originalGHS.toLocaleString()}</span><br>
        <span class="text-primary font-bold text-xl">₵${priceGHS.toLocaleString()}</span>
      </div>
      <button onclick='window.addToCartCategoryProduct(${JSON.stringify(p).replace(/'/g, "\\'")})' class="mt-3 w-full bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
        Add to Cart
      </button>
    </div>`;
    })
    .join("");
  container.innerHTML = html;
}

function addToCartCategoryProduct(product) {
  const cart = getCart();
  const existing = cart.find((item) => item.id === product.id);
  const priceGHS = toGHS(product.price);
  if (existing) {
    existing.quantity = (existing.quantity || 1) + 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      priceUSD: product.price,
      priceGHS: priceGHS,
      quantity: 1,
      image: product.image,
      store: product.store,
    });
  }
  saveCart(cart);
  updateCartBadge();
  showMessage(
    `🛍️ Added "${product.name}" to cart (₵${priceGHS.toLocaleString()})`,
  );
}

function initCategoryProductsPage() {
  const urlParams = new URLSearchParams(window.location.search);
  let cat = urlParams.get("cat");
  let searchQuery = urlParams.get("search");
  if (!cat || !categoryProducts[cat]) cat = "accessories";
  currentCategory = cat;
  currentCategorySearchTerm = searchQuery || "";
  const titleEl = document.getElementById("categoryTitle");
  if (titleEl) titleEl.innerHTML = categoryNames[cat];
  document.title = `${categoryNames[cat]} | Trendtrove`;
  const searchInput = document.getElementById("searchCategoryProducts");
  if (searchInput && currentCategorySearchTerm)
    searchInput.value = currentCategorySearchTerm;
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentCategorySearchTerm = e.target.value;
      renderCategoryProducts();
    });
  }
  const clearBtn = document.getElementById("clearSearchBtn");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      currentCategorySearchTerm = "";
      renderCategoryProducts();
    });
  }
  renderCategoryProducts();
  updateCartBadge();
  window.addToCartCategoryProduct = addToCartCategoryProduct;
}

/* ============================================
   UPDATE DOM CONTENT LOADED
   ============================================ */
// Preserve existing listener and add new conditions
const existingListener = document.addEventListener;
document.addEventListener("DOMContentLoaded", () => {
  updateCartBadge();
  initHeroCarousel();
  initTrendingSection();
  initGlobalSearch();
  if (document.getElementById("sellerForm")) {
    initSellerForm();
    initSellerSearch();
  }
  if (document.querySelector(".step-card")) {
    initHowItWorksPage();
  }
  if (document.getElementById("dealsGrid")) {
    initDealsPage();
  }
  if (document.getElementById("faqListContainer")) {
    initCustomerServicePage();
  }
  if (document.getElementById("cartItemsList")) {
    initCheckoutPage();
  }
  if (document.getElementById("productsGrid")) {
    initCategoryProductsPage();
  }
});
/* ============================================
   CATEGORIES PAGE FUNCTIONS (categories.html)
   ============================================ */

const CATEGORY_PRODUCTS = {
  accessories: [
    {
      id: 101,
      name: "Leather Watch Strap",
      price: 49.99,
      orig: 79.99,
      discount: "38% OFF",
      rating: 4.5,
      reviews: 128,
      image:
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&h=400&fit=crop",
      store: "Amazon",
      storeUrl: "https://www.amazon.com/s?k=leather+watch+strap",
    },
    {
      id: 102,
      name: "Designer Sunglasses",
      price: 129.99,
      orig: 199.99,
      discount: "35% OFF",
      rating: 4.8,
      reviews: 234,
      image:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
      store: "Best Buy",
      storeUrl: "https://www.bestbuy.com/site/sunglasses",
    },
    {
      id: 103,
      name: "Premium Leather Wallet",
      price: 45.0,
      orig: 65.0,
      discount: "30% OFF",
      rating: 4.7,
      reviews: 312,
      image:
        "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
      store: "Walmart",
      storeUrl: "https://www.walmart.com/browse/wallets",
    },
    {
      id: 104,
      name: "Silver Cufflinks",
      price: 89.99,
      orig: 149.99,
      discount: "40% OFF",
      rating: 4.7,
      reviews: 56,
      image:
        "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&h=400&fit=crop",
      store: "Amazon",
      storeUrl: "https://www.amazon.com/s?k=cufflinks",
    },
    {
      id: 105,
      name: "Gold Plated Necklace",
      price: 149.99,
      orig: 249.99,
      discount: "40% OFF",
      rating: 4.9,
      reviews: 178,
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
      store: "Amazon",
      storeUrl: "https://www.amazon.com/s?k=gold+necklace",
    },
    {
      id: 106,
      name: "Designer Watch Box",
      price: 79.99,
      orig: 119.99,
      discount: "33% OFF",
      rating: 4.7,
      reviews: 94,
      image:
        "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=400&h=400&fit=crop",
      store: "Amazon",
      storeUrl: "https://www.amazon.com/s?k=watch+box",
    },
    {
      id: 107,
      name: "Silk Tie Set",
      price: 44.99,
      orig: 69.99,
      discount: "36% OFF",
      rating: 4.5,
      reviews: 203,
      image:
        "https://images.unsplash.com/photo-1589756823695-278bc923f962?w=400&h=400&fit=crop",
      store: "Amazon",
      storeUrl: "https://www.amazon.com/s?k=silk+tie",
    },
    {
      id: 108,
      name: "Leather Gloves",
      price: 39.99,
      orig: 59.99,
      discount: "33% OFF",
      rating: 4.4,
      reviews: 167,
      image:
        "https://images.unsplash.com/photo-1551024705-6286f6f6e571?w=400&h=400&fit=crop",
      store: "Amazon",
      storeUrl: "https://www.amazon.com/s?k=leather+gloves",
    },
  ],
  footwear: [
    {
      id: 201,
      name: "Running Shoes",
      price: 89.99,
      orig: 129.99,
      discount: "31% OFF",
      rating: 4.7,
      reviews: 445,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
      store: "Nike",
      storeUrl: "https://www.nike.com/running",
    },
    {
      id: 202,
      name: "Casual Sneakers",
      price: 69.99,
      orig: 99.99,
      discount: "30% OFF",
      rating: 4.5,
      reviews: 678,
      image:
        "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=400&fit=crop",
      store: "Adidas",
      storeUrl: "https://www.adidas.com/us/sneakers",
    },
    {
      id: 203,
      name: "Formal Leather Shoes",
      price: 149.99,
      orig: 249.99,
      discount: "40% OFF",
      rating: 4.8,
      reviews: 234,
      image:
        "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=400&h=400&fit=crop",
      store: "Best Buy",
      storeUrl: "https://www.bestbuy.com/site/shoes",
    },
    {
      id: 204,
      name: "White Urban Sneakers",
      price: 79.99,
      orig: 110.0,
      discount: "27% OFF",
      rating: 4.6,
      reviews: 520,
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
      store: "Amazon",
      storeUrl: "https://www.amazon.com/s?k=white+sneakers",
    },
    {
      id: 205,
      name: "Slip-on Loafers",
      price: 59.99,
      orig: 89.99,
      discount: "33% OFF",
      rating: 4.4,
      reviews: 312,
      image:
        "https://images.unsplash.com/photo-1595750765732-a7d2e5f6d335?w=400&h=400&fit=crop",
      store: "Amazon",
      storeUrl: "https://www.amazon.com/s?k=loafers",
    },
    {
      id: 206,
      name: "Sport Sandals",
      price: 49.99,
      orig: 79.99,
      discount: "38% OFF",
      rating: 4.5,
      reviews: 278,
      image:
        "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=400&h=400&fit=crop",
      store: "Amazon",
      storeUrl: "https://www.amazon.com/s?k=sport+sandals",
    },
    {
      id: 207,
      name: "Winter Boots",
      price: 129.99,
      orig: 189.99,
      discount: "32% OFF",
      rating: 4.7,
      reviews: 198,
      image:
        "https://images.unsplash.com/photo-1542838132-92f2b3ee8ce3?w=400&h=400&fit=crop",
      store: "Amazon",
      storeUrl: "https://www.amazon.com/s?k=winter+boots",
    },
    {
      id: 208,
      name: "Canvas Sneakers",
      price: 39.99,
      orig: 59.99,
      discount: "33% OFF",
      rating: 4.3,
      reviews: 445,
      image:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=400&fit=crop",
      store: "Amazon",
      storeUrl: "https://www.amazon.com/s?k=canvas+sneakers",
    },
  ],
  electronics: [
    {
      id: 301,
      name: "Wireless Headphones",
      price: 199.99,
      orig: 299.99,
      discount: "33% OFF",
      rating: 4.9,
      reviews: 892,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      store: "Best Buy",
      storeUrl: "https://www.bestbuy.com/site/headphones",
    },
    {
      id: 302,
      name: "Smart Watch",
      price: 299.99,
      orig: 399.99,
      discount: "25% OFF",
      rating: 4.7,
      reviews: 523,
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop",
      store: "Apple",
      storeUrl: "https://www.apple.com/watch/",
    },
    {
      id: 303,
      name: "Portable BT Speaker",
      price: 59.99,
      orig: 89.99,
      discount: "33% OFF",
      rating: 4.8,
      reviews: 412,
      image:
        "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?w=400&h=400&fit=crop",
      store: "Amazon",
      storeUrl: "https://www.amazon.com/s?k=bluetooth+speaker",
    },
    {
      id: 304,
      name: "Mechanical Keyboard",
      price: 89.99,
      orig: 129.99,
      discount: "31% OFF",
      rating: 4.8,
      reviews: 534,
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop",
      store: "Amazon",
      storeUrl: "https://www.amazon.com/s?k=mechanical+keyboard",
    },
    {
      id: 305,
      name: "Gaming Mouse",
      price: 49.99,
      orig: 79.99,
      discount: "38% OFF",
      rating: 4.7,
      reviews: 678,
      image:
        "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400&h=400&fit=crop",
      store: "Amazon",
      storeUrl: "https://www.amazon.com/s?k=gaming+mouse",
    },
    {
      id: 306,
      name: "Laptop Backpack",
      price: 69.99,
      orig: 99.99,
      discount: "30% OFF",
      rating: 4.6,
      reviews: 289,
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      store: "Amazon",
      storeUrl: "https://www.amazon.com/s?k=laptop+backpack",
    },
    {
      id: 307,
      name: "USB-C Hub",
      price: 45.99,
      orig: 69.99,
      discount: "34% OFF",
      rating: 4.5,
      reviews: 342,
      image:
        "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=400&fit=crop",
      store: "Amazon",
      storeUrl: "https://www.amazon.com/s?k=usb+c+hub",
    },
    {
      id: 308,
      name: "Wireless Charger",
      price: 35.99,
      orig: 59.99,
      discount: "40% OFF",
      rating: 4.4,
      reviews: 567,
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop",
      store: "Amazon",
      storeUrl: "https://www.amazon.com/s?k=wireless+charger",
    },
  ],
  home: [
    {
      id: 401,
      name: "Smart Aroma Diffuser",
      price: 55.0,
      orig: 85.0,
      discount: "35% OFF",
      rating: 4.6,
      reviews: 215,
      image:
        "https://images.unsplash.com/photo-1602928321679-560bb453f190?w=400&h=400&fit=crop",
      store: "Home Depot",
      storeUrl: "https://www.homedepot.com/s/diffuser",
    },
    {
      id: 402,
      name: "Solid Wood Frame",
      price: 24.0,
      orig: 40.0,
      discount: "40% OFF",
      rating: 4.7,
      reviews: 104,
      image:
        "https://images.unsplash.com/photo-1583847268964-b28dc2f51ac9?w=400&h=400&fit=crop",
      store: "IKEA",
      storeUrl: "https://www.ikea.com/frames",
    },
    {
      id: 403,
      name: "Luxury Scented Candle",
      price: 22.0,
      orig: 40.0,
      discount: "45% OFF",
      rating: 4.5,
      reviews: 156,
      image:
        "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=400&h=400&fit=crop",
      store: "Walmart",
      storeUrl: "https://www.walmart.com/candles",
    },
    {
      id: 404,
      name: "Minimalist Wall Clock",
      price: 35.0,
      orig: 55.0,
      discount: "36% OFF",
      rating: 4.7,
      reviews: 210,
      image:
        "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400&h=400&fit=crop",
      store: "Amazon",
      storeUrl: "https://www.amazon.com/s?k=wall+clock",
    },
    {
      id: 405,
      name: "Modern Floor Lamp",
      price: 79.99,
      orig: 129.99,
      discount: "38% OFF",
      rating: 4.5,
      reviews: 189,
      image:
        "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?w=400&h=400&fit=crop",
      store: "Walmart",
      storeUrl: "https://www.walmart.com/ip/lamps",
    },
    {
      id: 406,
      name: "Ceramic Decorative Vase",
      price: 39.99,
      orig: 59.99,
      discount: "33% OFF",
      rating: 4.4,
      reviews: 128,
      image:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?w=400&h=400&fit=crop",
      store: "Amazon",
      storeUrl: "https://www.amazon.com/s?k=vase",
    },
    {
      id: 407,
      name: "Cozy Throw Blanket",
      price: 49.99,
      orig: 79.99,
      discount: "38% OFF",
      rating: 4.7,
      reviews: 234,
      image:
        "https://images.pexels.com/photos/4465824/pexels-photo-4465824.jpeg?w=400&h=400&fit=crop",
      store: "Best Buy",
      storeUrl: "https://www.bestbuy.com/site/blankets",
    },
    {
      id: 408,
      name: "Abstract Wall Art",
      price: 59.99,
      orig: 99.99,
      discount: "40% OFF",
      rating: 4.6,
      reviews: 167,
      image:
        "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?w=400&h=400&fit=crop",
      store: "Amazon",
      storeUrl: "https://www.amazon.com/s?k=wall+art",
    },
  ],
};

const CATEGORY_META = {
  accessories: {
    name: "Premium Accessories",
    heroImg:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&h=300&fit=crop",
  },
  footwear: {
    name: "Trending Footwear",
    heroImg:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=300&fit=crop",
  },
  electronics: {
    name: "Top Electronics",
    heroImg:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=300&fit=crop",
  },
  home: {
    name: "Home Essentials",
    heroImg:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&h=300&fit=crop",
  },
};

function renderFullCategoryPage() {
  const container = document.getElementById("categoryContainer");
  if (!container) return;
  let html = "";
  for (const [catKey, products] of Object.entries(CATEGORY_PRODUCTS)) {
    const meta = CATEGORY_META[catKey];
    if (!meta) continue;
    html += `<div class="rounded-2xl overflow-hidden shadow-md bg-white">
      <div class="relative h-48 bg-cover bg-center" style="background-image: linear-gradient(to right, rgba(0,0,0,0.65), rgba(0,0,0,0.4)), url('${meta.heroImg}');">
        <div class="absolute inset-0 flex items-center justify-between px-8">
          <div><h2 class="text-3xl font-bold text-white drop-shadow">${meta.name}</h2><p class="text-white/80 text-sm mt-1">${products.length} premium products</p></div>
          <a href="category-products.html?cat=${catKey}" class="bg-white/20 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-white/30 transition">View All (${products.length}) →</a>
        </div>
      </div>
      <div class="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">`;
    products.slice(0, 4).forEach((p) => {
      const fullStars = Math.floor(p.rating);
      const hasHalf = p.rating % 1 !== 0;
      let starHtml = "★".repeat(fullStars) + (hasHalf ? "½" : "");
      const emptyStars = "☆".repeat(5 - Math.ceil(p.rating));
      starHtml += emptyStars;
      const priceGHS = toGHS(p.price);
      const originalGHS = toGHS(p.orig);
      html += `<div class="product-card bg-gray-50 rounded-xl p-3 border border-gray-200 hover:border-blue-300 transition">
        <div class="relative cursor-pointer" onclick="window.goToStore('${p.storeUrl}', '${p.store}')">
          <img src="${p.image}" class="w-full h-40 object-cover rounded-lg" alt="${p.name}" onerror="this.src='https://placehold.co/400x400?text=${p.name.replace(/ /g, "+")}'">
          <span class="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">${p.discount}</span>
          <span class="absolute top-2 right-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded-full">${p.store}</span>
        </div>
        <div class="mt-2">
          <h3 class="font-semibold text-gray-800 text-sm line-clamp-2">${p.name}</h3>
          <div class="flex items-center gap-1 text-yellow-500 text-xs mt-1">${starHtml}<span class="text-gray-400 text-[10px] ml-1">(${p.reviews})</span></div>
          <div class="mt-1"><span class="text-gray-400 line-through text-xs">₵${originalGHS.toLocaleString()}</span><span class="text-blue-700 font-bold text-lg ml-2">₵${priceGHS.toLocaleString()}</span></div>
          <button onclick="window.addToCartCategory({ id: ${p.id}, name: '${p.name.replace(/'/g, "\\'")}', price: ${p.price}, image: '${p.image}', store: '${p.store}' })" class="mt-2 w-full bg-blue-600 text-white py-1.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition">Add to Cart</button>
        </div>
      </div>`;
    });
    html += `</div></div>`;
  }
  container.innerHTML = html;
}

function addToCartCategory(product) {
  const cart = getCart();
  const existing = cart.find((item) => item.id === product.id);
  const priceGHS = toGHS(product.price);
  if (existing) {
    existing.quantity = (existing.quantity || 1) + 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      priceUSD: product.price,
      priceGHS: priceGHS,
      quantity: 1,
      image: product.image,
      store: product.store,
    });
  }
  saveCart(cart);
  updateCartBadge();
  showMessage(
    `🛍️ Added "${product.name}" to cart (₵${priceGHS.toLocaleString()})`,
  );
}

function setupCategorySearch() {
  const searchInput = document.getElementById("searchInputCat");
  if (!searchInput) return;
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const query = searchInput.value.toLowerCase().trim();
      if (query === "") {
        renderFullCategoryPage();
        showMessage("Showing all categories", false);
        return;
      }
      let allProducts = [];
      for (const cat of Object.values(CATEGORY_PRODUCTS)) {
        allProducts = allProducts.concat(cat);
      }
      const filtered = allProducts.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.store.toLowerCase().includes(query),
      );
      if (filtered.length === 0) {
        showMessage(`❌ No products found for "${query}"`, true);
        renderFullCategoryPage();
        return;
      }
      const container = document.getElementById("categoryContainer");
      container.innerHTML = `<div class="bg-white rounded-2xl shadow-sm p-6">
        <h2 class="text-xl font-bold mb-4 flex items-center gap-2">🔍 Search results for "${query}" <span class="text-sm text-gray-500">(${filtered.length} items)</span></h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          ${filtered
            .map((p) => {
              const fullStars = Math.floor(p.rating);
              const hasHalf = p.rating % 1 !== 0;
              let starHtml = "★".repeat(fullStars) + (hasHalf ? "½" : "");
              const emptyStars = "☆".repeat(5 - Math.ceil(p.rating));
              starHtml += emptyStars;
              const priceGHS = toGHS(p.price);
              const originalGHS = toGHS(p.orig);
              return `<div class="product-card bg-gray-50 rounded-xl p-3 border border-gray-200">
              <div class="relative cursor-pointer" onclick="window.goToStore('${p.storeUrl}', '${p.store}')">
                <img src="${p.image}" class="w-full h-40 object-cover rounded-lg" onerror="this.src='https://placehold.co/400x400?text=${p.name.replace(/ /g, "+")}'">
                <span class="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">${p.discount}</span>
                <span class="absolute top-2 right-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded-full">${p.store}</span>
              </div>
              <div class="mt-2">
                <h3 class="font-semibold text-gray-800 text-sm">${p.name}</h3>
                <div class="flex items-center gap-1 text-yellow-500 text-xs">${starHtml}<span class="text-gray-400 text-[10px]">(${p.reviews})</span></div>
                <div><span class="text-gray-400 line-through text-xs">₵${originalGHS.toLocaleString()}</span><span class="text-blue-700 font-bold text-lg ml-2">₵${priceGHS.toLocaleString()}</span></div>
                <button onclick="window.addToCartCategory({ id: ${p.id}, name: '${p.name.replace(/'/g, "\\'")}', price: ${p.price}, image: '${p.image}', store: '${p.store}' })" class="mt-2 w-full bg-blue-600 text-white py-1.5 rounded-lg text-sm font-medium">Add to Cart</button>
              </div>
            </div>`;
            })
            .join("")}
        </div>
        <div class="text-center mt-8"><button onclick="renderFullCategoryPage()" class="text-blue-600 underline text-sm">← Back to all categories</button></div>
      </div>`;
    }
  });
}

function initCategoriesMainPage() {
  renderFullCategoryPage();
  updateCartBadge();
  setupCategorySearch();
  window.addToCartCategory = addToCartCategory;
  window.goToStore = goToStore;
}

/* ============================================
   CART PAGE FUNCTIONS (cart.html)
   ============================================ */

let cartItemsArray = [];
let cartSearchTermLocal = "";

function getCartItems() {
  const stored = localStorage.getItem("cart");
  if (!stored) return [];
  try {
    let cart = JSON.parse(stored);
    cart = cart.map((item) => ({
      ...item,
      priceGHS: item.priceGHS || toGHS(item.priceUSD || item.price || 0),
      quantity: item.quantity || 1,
      priceUSD: item.priceUSD || item.price || 0,
      image:
        item.image || "https://placehold.co/400x400/3B82F6/white?text=Product",
    }));
    return cart;
  } catch (e) {
    return [];
  }
}

function saveCartItems(newCart) {
  localStorage.setItem("cart", JSON.stringify(newCart));
  cartItemsArray = newCart;
  updateCartBadge();
  renderCartPage();
}

function updateCartBadgeGlobal() {
  const totalQty = cartItemsArray.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0,
  );
  const badge = document.getElementById("cartCountBadge");
  if (badge) badge.textContent = totalQty;
  localStorage.setItem("cartCount", totalQty);
}

window.updateCartItemQtyGlobal = (id, delta) => {
  const itemIndex = cartItemsArray.findIndex((i) => i.id === id);
  if (itemIndex === -1) return;
  const newQty = cartItemsArray[itemIndex].quantity + delta;
  if (newQty < 1) {
    cartItemsArray.splice(itemIndex, 1);
    showMessage(`Item removed from cart`);
  } else {
    cartItemsArray[itemIndex].quantity = newQty;
  }
  saveCartItems(cartItemsArray);
};

window.removeCartItemGlobal = (id) => {
  cartItemsArray = cartItemsArray.filter((i) => i.id !== id);
  saveCartItems(cartItemsArray);
  showMessage(`Item removed`, false);
};

window.clearCartGlobal = () => {
  if (confirm("Remove all items from your cart?")) {
    cartItemsArray = [];
    saveCartItems(cartItemsArray);
    showMessage("Cart cleared");
  }
};

window.clearCartSearchGlobal = () => {
  const searchInput = document.getElementById("cartSearchInput");
  if (searchInput) searchInput.value = "";
  cartSearchTermLocal = "";
  renderCartPage();
};

function renderCartPage() {
  const container = document.getElementById("cartContainer");
  const emptyDiv = document.getElementById("emptyCartMessage");
  const footerDiv = document.getElementById("cartFooter");
  if (!container) return;
  if (cartItemsArray.length === 0) {
    container.innerHTML = "";
    if (emptyDiv) emptyDiv.classList.remove("hidden");
    if (footerDiv) footerDiv.classList.add("hidden");
    return;
  }
  if (emptyDiv) emptyDiv.classList.add("hidden");
  let filteredCart = [...cartItemsArray];
  if (cartSearchTermLocal.trim() !== "") {
    const term = cartSearchTermLocal.toLowerCase();
    filteredCart = cartItemsArray.filter((item) =>
      item.name.toLowerCase().includes(term),
    );
  }
  if (filteredCart.length === 0) {
    container.innerHTML = `<div class="p-8 text-center text-gray-500"><span class="material-symbols-outlined text-4xl">search</span><p class="mt-2">No items match "${cartSearchTermLocal}"</p><button onclick="window.clearCartSearchGlobal()" class="mt-2 text-blue-600 text-sm underline">Clear search</button></div>`;
    if (footerDiv) footerDiv.classList.add("hidden");
    return;
  }
  let subtotalGHS = 0;
  let totalItems = 0;
  const cartRows = filteredCart
    .map((item) => {
      const qty = item.quantity;
      const priceGHS = item.priceGHS || toGHS(item.priceUSD || 0);
      const itemTotal = priceGHS * qty;
      subtotalGHS += itemTotal;
      totalItems += qty;
      const imageUrl =
        item.image || "https://placehold.co/400x400/3B82F6/white?text=Product";
      return `<div class="cart-item flex flex-col sm:flex-row gap-4 border-b p-5 last:border-0">
      <img src="${imageUrl}" class="w-24 h-24 object-cover rounded-lg bg-gray-100" onerror="this.src='https://placehold.co/400x400/3B82F6/white?text=Item'">
      <div class="flex-1">
        <h3 class="font-semibold text-slate-800 text-lg">${escapeHtml(item.name)}</h3>
        <p class="text-sm text-gray-500 mt-0.5">Store: ${item.store || "Trendtrove"}</p>
        <div class="flex flex-wrap items-center gap-4 mt-2">
          <div class="flex items-center gap-2 border rounded-lg">
            <button onclick="window.updateCartItemQtyGlobal(${item.id}, -1)" class="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-l-lg">-</button>
            <span class="w-10 text-center font-medium">${qty}</span>
            <button onclick="window.updateCartItemQtyGlobal(${item.id}, 1)" class="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-r-lg">+</button>
          </div>
          <button onclick="window.removeCartItemGlobal(${item.id})" class="text-red-500 text-sm flex items-center gap-1 hover:text-red-700"><span class="material-symbols-outlined text-base">delete</span> Remove</button>
        </div>
      </div>
      <div class="text-right sm:text-left min-w-[120px]">
        <p class="text-sm text-gray-400 line-through">₵${(item.priceGHS || 0).toLocaleString()}</p>
        <p class="text-2xl font-bold text-primary">₵${itemTotal.toLocaleString()}</p>
        <p class="text-xs text-gray-400">₵${priceGHS.toLocaleString()} each</p>
      </div>
    </div>`;
    })
    .join("");
  container.innerHTML = `<div class="overflow-x-auto"><div class="divide-y">${cartRows}</div></div><div class="border-t p-5 bg-gray-50 flex justify-between items-center flex-wrap gap-3"><div class="text-sm text-gray-600"><span class="font-semibold">${totalItems}</span> item(s) in cart<button onclick="window.clearCartGlobal()" class="ml-4 text-red-500 text-xs underline">Clear Cart</button></div><div class="text-right"><p class="text-slate-500 text-sm">Subtotal (GHS)</p><p class="text-3xl font-bold text-slate-900">₵${subtotalGHS.toLocaleString()}</p></div></div>`;
  const itemCountSpan = document.getElementById("itemCountSpan");
  const subtotalDisplay = document.getElementById("cartSubtotalDisplay");
  if (itemCountSpan) itemCountSpan.textContent = totalItems;
  if (subtotalDisplay)
    subtotalDisplay.textContent = `₵${subtotalGHS.toLocaleString()}`;
  if (footerDiv) footerDiv.classList.remove("hidden");
}

function initCartPage() {
  cartItemsArray = getCartItems();
  renderCartPage();
  updateCartBadgeGlobal();
  const searchInput = document.getElementById("cartSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      cartSearchTermLocal = e.target.value;
      renderCartPage();
    });
  }
}

/* ============================================
   UPDATE DOM CONTENT LOADED
   ============================================ */
// Update the existing DOMContentLoaded listener
const existingListenerCart = document.addEventListener;
document.addEventListener("DOMContentLoaded", () => {
  updateCartBadge();
  initHeroCarousel();
  initTrendingSection();
  initGlobalSearch();
  if (document.getElementById("sellerForm")) {
    initSellerForm();
    initSellerSearch();
  }
  if (document.querySelector(".step-card")) {
    initHowItWorksPage();
  }
  if (document.getElementById("dealsGrid")) {
    initDealsPage();
  }
  if (document.getElementById("faqListContainer")) {
    initCustomerServicePage();
  }
  if (document.getElementById("cartItemsList")) {
    initCheckoutPage();
  }
  if (document.getElementById("categoriesGrid")) {
    initCategoriesPage();
  }
  if (document.getElementById("productsGrid")) {
    initCategoryProductsPage();
  }
  if (document.getElementById("categoryContainer")) {
    initCategoriesMainPage();
  }
  if (document.getElementById("cartContainer")) {
    initCartPage();
  }
});
