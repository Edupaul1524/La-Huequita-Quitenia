// ===============================
// CONFIG
// ===============================
const WHATSAPP_NUMBER = "593982230393"; // tu WhatsApp (Ecuador)

// ✅ Pega aquí tus 173 productos (mantén imagen: "img/....png")
const products = [
  {
    nombre: "100 FUEGOS 375ML",
    categoria: "RON",
    precio: 9.25,
    imagen: "img/100 Fuegos 375ml.png",
    descripcion: "Ron ecuatoriano intenso, ideal para compartir."
  },
  {
    nombre: "100 FUEGOS 750ML",
    categoria: "RON",
    precio: 16.50,
    imagen: "img/100 Fuegos 750ml.png",
    descripcion: "Presentación grande para reuniones y fiestas."
  },
  {
    nombre: "ABUELO 375ML",
    categoria: "RON",
    precio: 8.25,
    imagen: "img/Abuelo 375ml.png",
    descripcion: "Ron añejo de sabor suave y balanceado."
  },
  {
    nombre: "AGUA CIELO 1LT",
    categoria: "BEBIDAS",
    precio: 1.00,
    imagen: "img/Agua Cielo 1lt.png",
    descripcion: "Agua purificada, ideal para acompañar."
  }
  // ... PEGA AQUÍ LOS OTROS 169
];

// ===============================
// DOM
// ===============================
const categoriesEl = document.getElementById("categories");
const productsEl = document.getElementById("products");

// ===============================
// ESTADO
// ===============================
let activeCategory = "TODOS";
let page = 1;
const PAGE_SIZE = 24;

// ===============================
// HELPERS
// ===============================
function safeImgSrc(src) {
  // ✅ Arregla espacios y caracteres raros: "100 Fuegos 375ml.png" => "100%20Fuegos%20375ml.png"
  try { return encodeURI(src); } catch { return src; }
}

function money(n) {
  if (typeof n !== "number") return "$ 0.00";
  return `$ ${n.toFixed(2)}`;
}

function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function getCategories() {
  const cats = [...new Set(products.map(p => (p.categoria || "").trim()).filter(Boolean))];
  cats.sort((a,b)=>a.localeCompare(b,"es"));
  return ["TODOS", ...cats];
}

function filteredProducts() {
  return products.filter(p => activeCategory === "TODOS" || p.categoria === activeCategory);
}

// ===============================
// RENDER CATEGORÍAS (izquierda)
// ===============================
function renderCategories() {
  const categories = getCategories();

  categoriesEl.innerHTML = `
    <div class="cat-title">PRODUCTOS</div>
    <div class="cat-sub">Elige una categoría</div>
  `;

  const list = document.createElement("div");
  list.className = "cat-list";

  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "cat-btn" + (cat === activeCategory ? " active" : "");
    btn.innerHTML = `<span>${cat}</span><span class="chev">›</span>`;
    btn.onclick = () => {
      activeCategory = cat;
      page = 1;
      renderCategories();
      renderProducts(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    list.appendChild(btn);
  });

  categoriesEl.appendChild(list);
}

// ===============================
// RENDER PRODUCTOS (centro + paginación)
// ===============================
function renderProducts(reset = false) {
  const all = filteredProducts();
  const total = all.length;

  const slice = all.slice(0, page * PAGE_SIZE);

  // header premium arriba del grid
  productsEl.innerHTML = `
    <div class="prod-header">
      <div>
        <div class="prod-title">${activeCategory === "TODOS" ? "Nuestros productos" : activeCategory}</div>
        <div class="prod-sub">Mostrando ${slice.length} de ${total} productos</div>
      </div>
      <div class="prod-badge">🔥 Bien fríos · 🚚 Delivery (app/taxi)</div>
    </div>
    <div class="prod-grid" id="grid"></div>
    <div class="prod-footer">
      ${slice.length < total ? `<button id="load-more" class="load-more">Cargar más</button>` : `<div class="end-msg">Fin de la lista ✅</div>`}
    </div>
  `;

  const grid = document.getElementById("grid");

  slice.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";

    const msg =
`Hola, quiero hacer un pedido en La Huequita Quiteña:
• Producto: ${p.nombre}
• Categoría: ${p.categoria}
• Precio: ${money(p.precio)}
¿Me confirmas disponibilidad y delivery?`;

    card.innerHTML = `
      <div class="img-wrap">
        <img src="${safeImgSrc(p.imagen)}" alt="${p.nombre}" loading="lazy"
          onerror="this.onerror=null;this.src='https://via.placeholder.com/300x300?text=Producto';">
      </div>
      <div class="p-body">
        <div class="p-name">${p.nombre}</div>
        <div class="p-desc">${p.descripcion || "—"}</div>

        <div class="p-row">
          <div class="p-price">${money(p.precio)}</div>
          <div class="p-note">Delivery no incluido</div>
        </div>

        <a class="p-btn" target="_blank" href="${whatsappLink(msg)}">🟢 Pedir por WhatsApp</a>
      </div>
    `;

    grid.appendChild(card);
  });

  const btn = document.getElementById("load-more");
  if (btn) {
    btn.onclick = () => {
      page += 1;
      renderProducts();
    };
  }
}

// ===============================
// INIT
// ===============================
renderCategories();
renderProducts();


