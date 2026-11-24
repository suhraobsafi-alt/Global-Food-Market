const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 60);
}
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

navToggle.addEventListener("click", () => {
  const open = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!open));
  navToggle.setAttribute("aria-label", open ? "Open navigation" : "Close navigation");
  navToggle.classList.toggle("active", !open);
  mainNav.classList.toggle("open", !open);
  document.body.classList.toggle("menu-open", !open);
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation");
    navToggle.classList.remove("active");
    mainNav.classList.remove("open");
    document.body.classList.remove("menu-open");
  });
});

const departments = [
  { name: "Middle Eastern Grocery", country: "Middle Eastern", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=700&q=82" },
  { name: "International Grocery", country: "International", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=700&q=82" },
  { name: "World Grocery Foods", country: "International", image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=700&q=82" },
  { name: "Bread & Bakery", country: "International", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=82" },
  { name: "Spices & Seasonings", country: "International", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=700&q=82" },
  { name: "Rice, Flour & Grains", country: "International", image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=700&q=82" },
  { name: "Fresh Produce", country: "International", image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=700&q=82" },
  { name: "Drinks & Beverages", country: "International", image: "https://images.unsplash.com/photo-1629203849820-fdd70d49c38e?auto=format&fit=crop&w=700&q=82" },
  { name: "Snacks & Sweets", country: "International", image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&w=700&q=82" },
  { name: "Frozen Foods", country: "International", image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=700&q=82" },
  { name: "Dairy & Refrigerated", country: "International", image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=700&q=82" },
  { name: "Halal & Household", country: "International", image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=700&q=82" }
];

const departmentGrid = document.getElementById("department-grid");
departmentGrid.innerHTML = departments.map((department, index) => `
  <button class="department-card" type="button" data-country="${department.country}" data-category="${department.name}" aria-label="Browse ${department.name}">
    <img src="${department.image}" alt="${department.name} supermarket department" loading="lazy" width="700" height="520">
    <div><span>${String(index + 1).padStart(2, "0")}</span><h3>${department.name}</h3></div>
  </button>
`).join("");

const catalogSeeds = [
  ["Afghan Basmati Rice", "Afghan", "Rice, Flour & Grains", "Imported rice", "5 lb", "Illustrative package"],
  ["Afghan Sella Rice", "Afghan", "Rice, Flour & Grains", "Premium grain", "10 lb", "Illustrative package"],
  ["Afghan Raisins", "Afghan", "Snacks & Sweets", "Dried fruit", "14 oz", "Illustrative package"],
  ["Afghan Dried Apricots", "Afghan", "Snacks & Sweets", "Dried fruit", "12 oz", "Illustrative package"],
  ["Afghan Almonds", "Afghan", "Snacks & Sweets", "Mixed nuts", "16 oz", "Illustrative package"],
  ["Afghan Pistachios", "Afghan", "Snacks & Sweets", "Mixed nuts", "12 oz", "Illustrative package"],
  ["Afghan Walnuts", "Afghan", "Snacks & Sweets", "Mixed nuts", "12 oz", "Illustrative package"],
  ["Afghan Black Tea", "Afghan", "Drinks & Beverages", "Tea", "454 g", "Illustrative package"],
  ["Afghan Green Tea", "Afghan", "Drinks & Beverages", "Tea", "454 g", "Illustrative package"],
  ["Afghan Wheat Flour", "Afghan", "Rice, Flour & Grains", "Flour", "4 lb", "Illustrative package"],
  ["Afghan Spice Mix", "Afghan", "Spices & Seasonings", "Seasoning", "200 g", "Illustrative package"],
  ["Afghan Breads", "Afghan", "Bread & Bakery", "Packaged bread", "Varies", "Illustrative package"],
  ["Basmati Rice", "Indian", "Rice, Flour & Grains", "Indian grain", "10 lb", "Illustrative package"],
  ["Sona Masoori Rice", "Indian", "Rice, Flour & Grains", "Indian grain", "10 lb", "Illustrative package"],
  ["Atta Flour", "Indian", "Rice, Flour & Grains", "Whole wheat flour", "10 lb", "Illustrative package"],
  ["Besan Flour", "Indian", "Rice, Flour & Grains", "Chickpea flour", "2 lb", "Illustrative package"],
  ["Poha", "Indian", "Rice, Flour & Grains", "Flattened rice", "1 lb", "Illustrative package"],
  ["Semolina", "Indian", "Rice, Flour & Grains", "Milled grain", "2 lb", "Illustrative package"],
  ["Toor Daal", "Indian", "Rice, Flour & Grains", "Lentils", "2 lb", "Illustrative package"],
  ["Masoor Daal", "Indian", "Rice, Flour & Grains", "Lentils", "2 lb", "Illustrative package"],
  ["Chickpeas", "Indian", "Rice, Flour & Grains", "Legumes", "2 lb", "Illustrative package"],
  ["Garbanzo Beans", "Indian", "Rice, Flour & Grains", "Legumes", "2 lb", "Illustrative package"],
  ["Garam Masala", "Indian", "Spices & Seasonings", "Ground spice blend", "100 g", "Illustrative package"],
  ["Turmeric Powder", "Indian", "Spices & Seasonings", "Ground spice", "200 g", "Illustrative package"],
  ["Cumin Seeds", "Indian", "Spices & Seasonings", "Whole spice", "100 g", "Illustrative package"],
  ["Coriander Powder", "Indian", "Spices & Seasonings", "Ground spice", "200 g", "Illustrative package"],
  ["Cardamom", "Indian", "Spices & Seasonings", "Whole spice", "50 g", "Illustrative package"],
  ["Papad", "Indian", "Snacks & Sweets", "Packaged crisp", "200 g", "Illustrative package"],
  ["Indian Namkeen", "Indian", "Snacks & Sweets", "Savory snack", "250 g", "Illustrative package"],
  ["Chai Tea", "Indian", "Drinks & Beverages", "Tea", "454 g", "Illustrative package"],
  ["Mango Juice", "Indian", "Drinks & Beverages", "Fruit beverage", "1 L", "Illustrative package"],
  ["Pakistani Basmati Rice", "Pakistani", "Rice, Flour & Grains", "Long-grain rice", "10 lb", "Illustrative package"],
  ["Chapati Flour", "Pakistani", "Rice, Flour & Grains", "Wheat flour", "10 lb", "Illustrative package"],
  ["Cooking Oil", "Pakistani", "Pantry & Condiments", "Vegetable oil", "1 L", "Illustrative package"],
  ["Cooking Ghee", "Pakistani", "Pantry & Condiments", "Clarified butter", "16 oz", "Illustrative package"],
  ["Biryani Seasoning", "Pakistani", "Spices & Seasonings", "Seasoning packet", "50 g", "Illustrative package"],
  ["Nihari Seasoning", "Pakistani", "Spices & Seasonings", "Seasoning packet", "50 g", "Illustrative package"],
  ["Karahi Seasoning", "Pakistani", "Spices & Seasonings", "Seasoning packet", "50 g", "Illustrative package"],
  ["Haleem Spice Mix", "Pakistani", "Spices & Seasonings", "Seasoning packet", "50 g", "Illustrative package"],
  ["Pakistani Nimco", "Pakistani", "Snacks & Sweets", "Savory snack", "250 g", "Illustrative package"],
  ["Rooh Afza-style Syrup", "Pakistani", "Drinks & Beverages", "Fruit syrup", "800 ml", "Illustrative package"],
  ["Rose Sharbat", "Pakistani", "Drinks & Beverages", "Syrup", "750 ml", "Illustrative package"],
  ["Bottled Lassi", "Pakistani", "Drinks & Beverages", "Yogurt drink", "500 ml", "Illustrative package"],
  ["Frozen Parathas", "Pakistani", "Frozen Foods", "Packaged bread", "Varies", "Illustrative package"],
  ["Frozen Samosas", "Pakistani", "Frozen Foods", "Packaged snack", "Varies", "Illustrative package"],
  ["Afghan Naan", "International", "Bread & Bakery", "Packaged flatbread", "Varies", "Illustrative package"],
  ["Pita Bread", "International", "Bread & Bakery", "Packaged flatbread", "Varies", "Illustrative package"],
  ["Lavash", "International", "Bread & Bakery", "Packaged flatbread", "Varies", "Illustrative package"],
  ["Kulcha", "International", "Bread & Bakery", "Packaged bread", "Varies", "Illustrative package"],
  ["Sheermal", "International", "Bread & Bakery", "Packaged bread", "Varies", "Illustrative package"],
  ["Frozen Mixed Vegetables", "International", "Frozen Foods", "Frozen produce", "2 lb", "Illustrative package"],
  ["Frozen Okra", "International", "Frozen Foods", "Frozen produce", "2 lb", "Illustrative package"],
  ["Frozen Mango", "International", "Frozen Foods", "Frozen fruit", "2 lb", "Illustrative package"],
  ["Plain Yogurt", "International", "Dairy & Refrigerated", "Dairy", "32 oz", "Illustrative package"],
  ["Paneer", "International", "Dairy & Refrigerated", "Fresh cheese", "14 oz", "Illustrative package"],
  ["Cooking Butter", "International", "Dairy & Refrigerated", "Dairy", "16 oz", "Illustrative package"],
  ["Olive Oil", "International", "Pantry & Condiments", "Cooking oil", "1 L", "Illustrative package"],
  ["Tomato Paste", "International", "Pantry & Condiments", "Condiment", "12 oz", "Illustrative package"],
  ["Packaged Pickles", "International", "Pantry & Condiments", "Condiment", "16 oz", "Illustrative package"],
  ["Fresh Mangoes", "International", "Fresh Produce", "Fresh fruit", "Market weight", "Availability varies"],
  ["Fresh Pomegranates", "International", "Fresh Produce", "Fresh fruit", "Market weight", "Availability varies"],
  ["Fresh Ginger", "International", "Fresh Produce", "Fresh produce", "Market weight", "Availability varies"],
  ["Fresh Cilantro", "International", "Fresh Produce", "Fresh herb", "Bunch", "Availability varies"],
  ["Fresh Green Chilies", "International", "Fresh Produce", "Fresh produce", "Market weight", "Availability varies"]
];

const productImages = [
  "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6",
  "https://images.unsplash.com/photo-1596040033229-a9821ebd058d",
  "https://images.unsplash.com/photo-1585032226651-759b368d7246",
  "https://images.unsplash.com/photo-1629203849820-fdd70d49c38e",
  "https://images.unsplash.com/photo-1610348725531-843dff563e2c",
  "https://images.unsplash.com/photo-1509440159596-0249088772ff",
  "https://images.unsplash.com/photo-1578916171728-46686eac8d58",
  "https://images.unsplash.com/photo-1628088062854-d1870b4553da"
];

const products = catalogSeeds.map((seed, index) => ({
  name: seed[0].replace(/\b(Afghan|Indian|Pakistani)\b/g, "").replace(/\s+/g, " ").trim(),
  country: seed[1],
  category: seed[2],
  brand: seed[3].replace(/\b(Afghan|Indian|Pakistani)\b/g, "").replace(/\s+/g, " ").trim(),
  size: seed[4],
  status: seed[5],
  image: `${productImages[index % productImages.length]}?auto=format&fit=crop&w=700&q=82`,
  description: `${seed[0].replace(/\b(Afghan|Indian|Pakistani)\b/g, "").replace(/\s+/g, " ").trim()} selected as an illustrative retail grocery item. Ask the store team for current brands, package sizes and availability.`,
}));

const categoryFilter = document.getElementById("category-filter");
const styleFilter = document.getElementById("style-filter");
const sortProducts = document.getElementById("sort-products");
const catalogSearch = document.getElementById("catalog-search");
const productGrid = document.getElementById("product-grid");
const catalogCount = document.getElementById("catalog-count");
const loadMore = document.getElementById("load-more");
let visibleCount = 16;

if (categoryFilter) {
  [...new Set(products.map((product) => product.category))].sort().forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });
}

function getFilteredProducts() {
  const query = catalogSearch.value.trim().toLowerCase();
  let filtered = products.filter((product) => {
    const matchesSearch = !query || `${product.name} ${product.brand} ${product.category}`.toLowerCase().includes(query);
    const matchesCategory = !categoryFilter || categoryFilter.value === "all" || product.category === categoryFilter.value;
    const matchesStyle = !styleFilter || styleFilter.value === "all"
      || (styleFilter.value === "International" && product.country === "International")
      || (styleFilter.value === "Middle Eastern" && ["Afghan", "Pakistani", "Indian"].includes(product.country));
    return matchesSearch && matchesCategory && matchesStyle;
  });

  if (sortProducts && sortProducts.value === "name") filtered.sort((a, b) => a.name.localeCompare(b.name));
  if (sortProducts && sortProducts.value === "category") filtered.sort((a, b) => a.category.localeCompare(b.category));
  return filtered;
}

function renderProducts() {
  const filtered = getFilteredProducts();
  const shown = filtered.slice(0, visibleCount);
  productGrid.innerHTML = shown.map((product, index) => `
    <article class="catalog-card">
      <button type="button" data-product="${products.indexOf(product)}" aria-label="View details for ${product.name}">
        <div class="catalog-card-image">
          <img src="${product.image}" alt="${product.name} packaged grocery product" loading="lazy" width="700" height="520">
          <span class="catalog-card-status">${product.status === "Availability varies" ? "Fresh" : "In-store"}</span>
        </div>
        <div class="catalog-card-copy">
          <small>${product.category}</small>
          <h3>${product.name}</h3>
          <p>${product.brand} · ${product.size}</p>
          <strong>View details →</strong>
        </div>
      </button>
    </article>
  `).join("");
  catalogCount.textContent = `${shown.length} of ${filtered.length} catalog items`;
  loadMore.classList.toggle("hidden", shown.length >= filtered.length);
}

catalogSearch.addEventListener("input", () => { visibleCount = 16; renderProducts(); });
[categoryFilter, styleFilter, sortProducts].forEach((control) => {
  if (control) control.addEventListener("change", () => { visibleCount = 16; renderProducts(); });
});
loadMore.addEventListener("click", () => { visibleCount += 16; renderProducts(); });

departmentGrid.querySelectorAll(".department-card").forEach((card) => {
  card.addEventListener("click", () => {
    const category = card.dataset.category;
    if (category === "Middle Eastern Grocery") { categoryFilter.value = "all"; styleFilter.value = "Middle Eastern"; }
    else if (category === "International Grocery" || category === "World Grocery Foods") { categoryFilter.value = "all"; styleFilter.value = "International"; }
    else {
      styleFilter.value = "all";
      const matchingCategory = [...categoryFilter.options].find((option) => option.value === category);
      categoryFilter.value = matchingCategory ? category : "all";
    }
    visibleCount = 16;
    renderProducts();
    document.getElementById("catalog").scrollIntoView({ behavior: "smooth" });
  });
});

document.getElementById("hero-search").addEventListener("submit", (event) => {
  event.preventDefault();
  catalogSearch.value = document.getElementById("hero-search-input").value;
  visibleCount = 16;
  renderProducts();
  document.getElementById("catalog").scrollIntoView({ behavior: "smooth" });
});

const productModal = document.getElementById("product-modal");
const modalImage = document.getElementById("product-modal-image");
document.getElementById("product-modal").querySelector(".modal-close").addEventListener("click", () => productModal.close());

productGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-product]");
  if (!button) return;
  const product = products[Number(button.dataset.product)];
  modalImage.src = product.image;
  modalImage.alt = `${product.name} grocery product`;
  document.getElementById("product-modal-category").textContent = product.category;
  document.getElementById("product-modal-title").textContent = product.name;
  document.getElementById("product-modal-brand").textContent = `Brand / type: ${product.brand}`;
  document.getElementById("product-modal-description").textContent = product.description;
  document.getElementById("product-modal-size").textContent = `Package: ${product.size}`;
  document.getElementById("product-modal-status").textContent = product.status;
  productModal.showModal();
});

const galleryImages = [
  ["https://images.unsplash.com/photo-1542838132-92c53300491e", "Fresh produce supermarket aisle"],
  ["https://images.unsplash.com/photo-1604719312566-8912e9227c6a", "International grocery shelves"],
  ["https://images.unsplash.com/photo-1596040033229-a9821ebd058d", "Spices and seasonings"],
  ["https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6", "Rice and grain products"],
  ["https://images.unsplash.com/photo-1488459716781-31db52582fe9", "Fresh fruits and vegetables"]
];

const galleryGrid = document.getElementById("gallery-grid");
galleryGrid.innerHTML = galleryImages.map(([image, alt], index) => `
  <button class="gallery-item ${index === 0 ? "gallery-large" : ""}" type="button" data-full="${image}?auto=format&fit=crop&w=1600&q=90" aria-label="View ${alt} in larger format">
    <img src="${image}?auto=format&fit=crop&w=700&q=82" alt="${alt}" loading="lazy" width="700" height="700">
  </button>
`).join("");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
document.querySelector(".lightbox-close").addEventListener("click", () => lightbox.close());
galleryGrid.addEventListener("click", (event) => {
  const item = event.target.closest(".gallery-item");
  if (!item) return;
  lightboxImage.src = item.dataset.full;
  lightboxImage.alt = item.querySelector("img").alt;
  lightbox.showModal();
});
lightbox.addEventListener("click", (event) => { if (event.target === lightbox) lightbox.close(); });
productModal.addEventListener("click", (event) => { if (event.target === productModal) productModal.close(); });

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const submittedName = document.getElementById("name").value.trim();
  formStatus.textContent = `Thank you, ${submittedName}. This form is ready to connect to the store's email or contact service.`;
  contactForm.reset();
});

renderProducts();
document.getElementById("year").textContent = new Date().getFullYear();
