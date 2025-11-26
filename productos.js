// ===============================
// CONFIGURACIÓN BÁSICA
// ===============================
const WHATSAPP_NUMBER = "593982230393"; // 593 + 0982230393 sin el 0

const LOCALES = [
  { id: "PUSUQUI", label: "La Huequita – Pusuqui" },
  { id: "POMASQUI", label: "La Huequita – Pomasqui" },
  { id: "CARCELEN", label: "La Huequita – Carcelen" },
];

// Local activo (por defecto, Pusuqui o lo que quedó guardado)
let activeLocal = localStorage.getItem("huequita_local") || "PUSUQUI";

// ===============================
// DATA DE PRODUCTOS
// ⚠️ EJEMPLO: aquí van TODOS tus productos reales
// ===============================

const products = [
  {
    id: 1,
    nombre: "100 FUEGOS 375ML",
    descripcion: "Ron 100 Fuegos presentación 375 ml, ideal para compartir suave.",
    categoria: "RON",
    precios: { PUSUQUI: 9.25, POMASQUI: 9.25, CARCELEN: 9.25 },
    locales: ["PUSUQUI", "POMASQUI", "CARCELEN"],
    imagen: "https://via.placeholder.com/200x260?text=100+FUEGOS+375ML",
    tag: "destacado",
  },
  {
    id: 2,
    nombre: "100 FUEGOS 750ML",
    descripcion: "Ron 100 Fuegos 750 ml, perfecto para la previa con amigos.",
    categoria: "RON",
    precios: { PUSUQUI: 16.5, POMASQUI: 16.5, CARCELEN: 16.5 },
    locales: ["PUSUQUI", "POMASQUI", "CARCELEN"],
    imagen: "https://via.placeholder.com/200x260?text=100+FUEGOS+750ML",
    tag: "destacado",
  },
  {
    id: 3,
    nombre: "ABUELO 375ML",
    descripcion: "Ron Abuelo 375 ml, sabor clásico y equilibrado.",
    categoria: "RON",
    precios: { PUSUQUI: 8.25, POMASQUI: 8.25, CARCELEN: 8.25 },
    locales: ["PUSUQUI", "POMASQUI", "CARCELEN"],
    imagen: "https://via.placeholder.com/200x260?text=ABUELO+375ML",
    tag: "destacado",
  },
  {
    id: 4,
    nombre: "ABSENTA 700ML",
    descripcion: "Licor fuerte tipo absenta, ideal para shots intensos.",
    categoria: "OTROS LICORES",
    precios: { PUSUQUI: 26.5, POMASQUI: 26.5, CARCELEN: 26.5 },
    locales: ["PUSUQUI", "POMASQUI", "CARCELEN"],
    imagen: "https://via.placeholder.com/200x260?text=ABSENTA+700ML",
    tag: "masvendido",
  },
  {
    id: 5,
    nombre: "AGUA SIN GAS",
    descripcion: "Agua sin gas individual, perfecta para hidratarse.",
    categoria: "AGUA",
    precios: { PUSUQUI: 0.5, POMASQUI: 0.5, CARCELEN: 0.5 },
    locales: ["PUSUQUI", "POMASQUI", "CARCELEN"],
    imagen: "https://via.placeholder.com/200x260?text=AGUA+SIN+GAS",
    tag: "destacado",
  },
  {
    id: 6,
    nombre: "AGUA TÓNICA",
    descripcion: "Agua tónica para mezclar con gin u otros destilados.",
    categoria: "AGUA",
    precios: { PUSUQUI: 1.25, POMASQUI: 1.25, CARCELEN: 1.25 },
    locales: ["PUSUQUI", "POMASQUI", "CARCELEN"],
    imagen: "https://via.placeholder.com/200x260?text=AGUA+TONICA",
    tag: "nuevos",
  },
  // ⚠️ AQUÍ SIGUES PEGANDO EL RESTO DE PRODUCTOS
  // Uno por uno, siguiendo este mismo formato
  // { id: 7, nombre: "...", descripcion: "...", categoria: "...", precios: {...}, locales: [...], imagen: "...", tag: "destacado|nuevos|masvendido" },
];

// ===============================
// REFERENCIAS DOM
// ===============================
const categoriesContainer = document.getElementById("categories");
const searchBox = document.getElementById("search-box");
const productsGrid = document.getElementById("products-grid");
const tabs = document.querySelectorAll(".section-tab");
const yearSpan = document.getElementById("year");
const cartPill = document.getElementById("cart-pill");
const cartCount = document.getElementById("cart-count");
const localSelectToolbar = document.getElementById("local-select");
const storeSelectPopup = document.getElementById("store-select");
const mainWhatsappBtn = document.getElementById("main-whatsapp-btn");

// Chatbot
const chatbotWindow = document.getElementById("chatbot-window");
const cbNombre = document.getElementById("cb-nombre");
const cbWhatsapp = document.getElementById("cb-whatsapp");
const cbMensaje = document.getElementById("cb-mensaje");

// Popup edad
const ageModal = document.getElementById("age-modal");

let activeCategory = "Todos";
let activeTabFilter = "destacados";

// ===============================
// UTILIDADES
// ===============================
function getLocalLabel(id) {
  const loc = LOCALES.find((l) => l.id === id);
  return loc ? loc.label : id;
}

// ===============================
// WHATSAPP
// ===============================
function openWhatsapp() {
  const text = encodeURIComponent(
    "Hola, vengo de la web de La Huequita Quiteña y quiero hacer un pedido 🍾"
  );
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
}

if (mainWhatsappBtn) {
  mainWhatsappBtn.addEventListener("click", openWhatsapp);
}

// Hacemos accesible para el botón flotante (onclick en HTML)
window.openWhatsapp = openWhatsapp;

// ===============================
// CHATBOT
// ===============================
function toggleChatbot() {
  if (!chatbotWindow) return;
  const isVisible = chatbotWindow.style.display === "flex";
  chatbotWindow.style.display = isVisible ? "none" : "flex";
}

function sendChatbotForm(event) {
  if (event) event.preventDefault();

  const nombre = cbNombre?.value.trim() || "";
  const whatsapp = cbWhatsapp?.value.trim();
  const mensaje = cbMensaje?.value.trim();

  if (!whatsapp || !mensaje) {
    alert("Por favor ingresa tu WhatsApp y tu mensaje.");
    return false;
  }

  const text = encodeURIComponent(
    `Hola, soy *${nombre || "cliente"}*.\n` +
      `Mi número de WhatsApp: ${whatsapp}\n\n` +
      `Mensaje desde el chatbot de La Huequita:\n` +
      `${mensaje}`
  );

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");

  // Limpiar y cerrar
  if (cbMensaje) cbMensaje.value = "";
  toggleChatbot();

  return false;
}

// Para que los onclick del HTML funcionen
window.toggleChatbot = toggleChatbot;
window.sendChatbotForm = sendChatbotForm;

// ===============================
// POPUP EDAD (SIEMPRE SALE AL RECARGAR)
// ===============================
function acceptAge() {
  // Tomamos el local elegido en el popup
  if (storeSelectPopup) {
    activeLocal = storeSelectPopup.value;
  }

  // Guardamos el local para usarlo en la barra superior
  localStorage.setItem("huequita_local", activeLocal);

  // Sincronizar el select de arriba
  if (localSelectToolbar) {
    localSelectToolbar.value = activeLocal;
  }

  // Ocultar el popup
  if (ageModal) {
    ageModal.style.display = "none";
  }

  // Renderizar productos del local elegido
  renderProducts();
}

function rejectAge() {
  alert("Lo sentimos, debes ser mayor de edad para ingresar 🍾");
  window.location.href = "https://google.com";
}

// Hacer disponibles para los botones del HTML
window.acceptAge = acceptAge;
window.rejectAge = rejectAge;

// OJO: NO usamos un flag de “edad aceptada” en localStorage,
// así que SIEMPRE va a salir el popup al recargar.

// ===============================
// CATEGORÍAS
// ===============================
function getCategories() {
  const set = new Set(products.map((p) => p.categoria));
  return ["Todos", ...Array.from(set)];
}

function renderCategories() {
  if (!categoriesContainer) return;
  categoriesContainer.innerHTML = "";

  getCategories().forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = "category-chip" + (cat === activeCategory ? " active" : "");
    btn.textContent = cat;
    btn.dataset.category = cat;
    btn.addEventListener("click", () => {
      activeCategory = cat;
      document
        .querySelectorAll(".category-chip")
        .forEach((c) => c.classList.remove("active"));
      btn.classList.add("active");
      renderProducts();
    });
    categoriesContainer.appendChild(btn);
  });
}

// ===============================
// RENDER DE PRODUCTOS
// ===============================
function renderProducts() {
  if (!productsGrid) return;

  const search = (searchBox?.value || "").trim().toLowerCase();
  productsGrid.innerHTML = "";

  const filtered = products.filter((p) => {
    // 1) local
    const matchesLocal = !p.locales || p.locales.includes(activeLocal);

    // 2) categoría
    const matchesCategory =
      activeCategory === "Todos" || p.categoria === activeCategory;

    // 3) pestañas
    const matchesTab =
      !activeTabFilter ||
      (activeTabFilter === "destacados" && p.tag === "destacado") ||
      (activeTabFilter === "nuevos" && p.tag === "nuevos") ||
      (activeTabFilter === "masvendidos" && p.tag === "masvendido");

    // 4) buscador
    const matchesSearch =
      !search ||
      p.nombre.toLowerCase().includes(search) ||
      p.categoria.toLowerCase().includes(search) ||
      (p.descripcion && p.descripcion.toLowerCase().includes(search));

    return matchesLocal && matchesCategory && matchesTab && matchesSearch;
  });

  if (!filtered.length) {
    productsGrid.innerHTML =
      "<p style='color:#a0a0b5;font-size:13px;'>No encontramos productos para esta sucursal con esos filtros.</p>";
    return;
  }

  filtered.forEach((p) => {
    const card = document.createElement("article");
    card.className = "product-card";

    // Badge
    const badge = document.createElement("div");
    badge.className = "product-badge";
    if (p.tag === "masvendido") badge.classList.add("product-badge--hot");

    let badgeText = "";
    if (p.tag === "destacado") badgeText = "DESTACADO";
    if (p.tag === "nuevos") badgeText = "NUEVO";
    if (p.tag === "masvendido") badgeText = "MÁS VENDIDO";
    badge.textContent = badgeText || "DISPONIBLE";

    // Imagen
    const imgWrap = document.createElement("div");
    imgWrap.className = "product-image-wrap";

    const img = document.createElement("img");
    img.className = "product-image";
    img.src = p.imagen;
    img.alt = p.nombre;

    imgWrap.appendChild(img);

    // Título
    const title = document.createElement("h3");
    title.className = "product-title";
    title.textContent = p.nombre;

    // Descripción
    const desc = document.createElement("p");
    desc.className = "product-desc";
    desc.textContent = p.descripcion || "";

    // Meta (precio + nota)
    const meta = document.createElement("div");
    meta.className = "product-meta";

    const price = document.createElement("div");
    price.className = "product-price";

    const priceForLocal = p.precios?.[activeLocal];
    const priceText = priceForLocal
      ? `$ ${priceForLocal.toFixed(2)}`
      : "No disponible";

    price.innerHTML = `
      ${priceText}
      <small>Precio en tienda (${getLocalLabel(activeLocal)})</small>
    `;

    const note = document.createElement("div");
    note.className = "product-note";
    note.innerHTML = `
      Delivery vía app / taxi no está incluido.<br>
      Pago con tarjeta + recargo % en el local.
    `;

    meta.appendChild(price);
    meta.appendChild(note);

    // Botones
    const actions = document.createElement("div");
    actions.className = "product-actions";

    const btnWp = document.createElement("button");
    btnWp.className = "btn btn-primary";
    btnWp.innerHTML = `<span>💬</span> Pedir por WhatsApp`;
    btnWp.addEventListener("click", () => {
      const text = encodeURIComponent(
        `Hola, quiero hacer un pedido en *La Huequita Quiteña* (${getLocalLabel(
          activeLocal
        )}):\n` +
          `• Producto: ${p.nombre}\n` +
          `• Precio en tienda: ${priceText}\n` +
          `¿Me ayudas con disponibilidad y delivery?`
      );
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    });

    const btnInfo = document.createElement("button");
    btnInfo.className = "btn btn-ghost";
    btnInfo.textContent = "Detalle / info";
    btnInfo.addEventListener("click", () => {
      alert(
        `Producto: ${p.nombre}\n` +
          `Sucursal: ${getLocalLabel(activeLocal)}\n` +
          `Categoría: ${p.categoria}\n` +
          `Precio en tienda: ${priceText}`
      );
    });

    actions.appendChild(btnWp);
    actions.appendChild(btnInfo);

    // Armar card
    card.appendChild(badge);
    card.appendChild(imgWrap);
    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(meta);
    card.appendChild(actions);

    productsGrid.appendChild(card);
  });
}

// ===============================
// EVENTOS INICIALES
// ===============================

// Tabs (destacados / nuevos / más vendidos)
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    activeTabFilter = tab.dataset.filterTab;
    renderProducts();
  });
});

// Buscador
if (searchBox) {
  searchBox.addEventListener("input", () => {
    renderProducts();
  });
}

// "Carrito"
if (cartPill) {
  cartPill.addEventListener("click", () => {
    alert("Por ahora los pedidos se gestionan por WhatsApp 💚");
  });
}

// Select local barra principal
if (localSelectToolbar) {
  // llenamos con LOCALES (por si acaso, futuro)
  localSelectToolbar.innerHTML = "";
  LOCALES.forEach((loc) => {
    const opt = document.createElement("option");
    opt.value = loc.id;
    opt.textContent = loc.label;
    localSelectToolbar.appendChild(opt);
  });
  localSelectToolbar.value = activeLocal;

  localSelectToolbar.addEventListener("change", () => {
    activeLocal = localSelectToolbar.value;
    localStorage.setItem("huequita_local", activeLocal);
    if (storeSelectPopup) storeSelectPopup.value = activeLocal;
    renderProducts();
  });
}

// Select local en popup edad
if (storeSelectPopup) {
  storeSelectPopup.innerHTML = "";
  LOCALES.forEach((loc) => {
    const opt = document.createElement("option");
    opt.value = loc.id;
    opt.textContent = loc.label;
    storeSelectPopup.appendChild(opt);
  });
  storeSelectPopup.value = activeLocal;
}

// Año en footer
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Render inicial de categorías y productos (mientras está el modal abierto igual se prepara)
renderCategories();
renderProducts();

