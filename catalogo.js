// ====== CONFIG ======
const WHATSAPP_NUMBER = "593982230393"; // 0982230393 con código país sin "+"
const WHATSAPP_DEFAULT = "Hola, vengo del catálogo de La Huequita Quiteña. Quiero hacer un pedido.";

// ====== ELEMENTOS ======
const elCategories = document.getElementById("categories");
const elProducts = document.getElementById("products");
const elSearch = document.getElementById("searchBox");
const elStore = document.getElementById("storeSelect");
const elBannerTitle = document.getElementById("bannerTitle");
const elBannerSub = document.getElementById("bannerSub");
const elEmpty = document.getElementById("emptyState");
const elCatCount = document.getElementById("catCount");

const ageModal = document.getElementById("ageModal");
const ageYesBtn = document.getElementById("ageYesBtn");
const ageNoBtn = document.getElementById("ageNoBtn");

const btnConsiderarWhatsapp = document.getElementById("btnConsiderarWhatsapp");

// ====== ESTADO ======
let allProducts = [];
let categories = [];
let activeCategory = "TODOS";

// ====== HELPERS ======
function normalize(s){ return (s || "").toString().trim().toLowerCase(); }

function getPrecioPorSucursal(p){
  const s = elStore.value;
  if (s === "PUSUQUI") return Number(p.precio_pusuqui ?? p.precio ?? 0);
  if (s === "POMASQUI") return Number(p.precio_pomasqui ?? p.precio ?? 0);
  return Number(p.precio_carcelen ?? p.precio ?? 0);
}

function money(n){
  const v = Number(n || 0);
  return "$ " + v.toFixed(2);
}

function waLink(message){
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  return url;
}

function openWhatsappFor(product){
  const suc = elStore.options[elStore.selectedIndex].text.replace("📍 ","");
  const price = money(getPrecioPorSucursal(product));
  const msg =
`${WHATSAPP_DEFAULT}

✅ Producto: ${product.nombre}
🏷️ Categoría: ${product.categoria}
📍 Sucursal: ${suc}
💵 Precio: ${price}

¿Me ayudas con disponibilidad y delivery?`;
  window.open(waLink(msg), "_blank");
}

function openWhatsappGeneral(){
  const suc = elStore.options[elStore.selectedIndex].text.replace("📍 ","");
  const msg = `${WHATSAPP_DEFAULT}\n\n📍 Estoy comprando en: ${suc}\nQuiero información para hacer un pedido.`;
  window.open(waLink(msg), "_blank");
}

// ====== RENDER ======
function renderCategories(){
  elCategories.innerHTML = "";

  const cats = ["TODOS", ...categories];
  elCatCount.textContent = `${cats.length}`;

  cats.forEach(cat=>{
    const btn = document.createElement("button");
    btn.className = "catBtn" + (cat === activeCategory ? " active" : "");
    btn.innerHTML = `<span>${cat}</span><span>›</span>`;
    btn.onclick = () => {
      activeCategory = cat;
      renderCategories();
      renderProducts();
    };
    elCategories.appendChild(btn);
  });
}

function renderProducts(){
  const q = normalize(elSearch.value);

  const filtered = allProducts
    .filter(p => p.activo === true) // solo visibles
    .filter(p => activeCategory === "TODOS" ? true : normalize(p.categoria) === normalize(activeCategory))
    .filter(p => {
      if (!q) return true;
      return normalize(p.nombre).includes(q) || normalize(p.categoria).includes(q);
    });

  elProducts.innerHTML = "";
  elEmpty.style.display = filtered.length ? "none" : "block";

  elBannerTitle.textContent = activeCategory === "TODOS" ? "Todos los productos" : activeCategory;
  elBannerSub.textContent = `Mostrando ${filtered.length} producto(s). Precios según sucursal seleccionada.`;

  filtered.forEach(p=>{
    const card = document.createElement("div");
    card.className = "card";

    // imagen_url debe ser URL pública completa de Supabase Storage
    const imgSrc = p.imagen_url || "";

    card.innerHTML = `
      <div class="imgBox">
        ${imgSrc ? `<img src="${imgSrc}" alt="${p.nombre}" loading="lazy">` : `<div style="color:rgba(255,255,255,.45);font-size:12px">Sin imagen</div>`}
      </div>
      <div class="cardBody">
        <div class="name">${p.nombre}</div>
        <div class="desc">${p.descripcion || ""}</div>
        <div class="priceRow">
          <div class="price">${money(getPrecioPorSucursal(p))}</div>
          <button class="btn">🟢 Pedir</button>
        </div>
      </div>
    `;

    card.querySelector(".btn").onclick = () => openWhatsappFor(p);
    elProducts.appendChild(card);
  });
}

// ====== DATA LOAD ======
async function loadProducts(){
  // Tabla: public.products
  // Campos esperados:
  // id, nombre, categoria, descripcion, precio_pusuqui, precio_pomasqui, precio_carcelen, activo, imagen_url
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("categoria", { ascending: true });

  if (error){
    console.error("Error cargando products:", error);
    elEmpty.style.display = "block";
    elEmpty.textContent = "Error cargando productos. Revisa consola.";
    return;
  }

  allProducts = Array.isArray(data) ? data : [];

  const set = new Set();
  allProducts.forEach(p=>{
    if (p?.categoria) set.add(String(p.categoria).trim());
  });
  categories = Array.from(set).sort((a,b)=>a.localeCompare(b,"es"));

  renderCategories();
  renderProducts();
}

// ====== AGE GATE ======
function checkAgeGate(){
  const ok = localStorage.getItem("HQ_AGE_OK") === "1";
  if (!ok) ageModal.style.display = "flex";
}

ageYesBtn.onclick = ()=>{
  localStorage.setItem("HQ_AGE_OK", "1");
  ageModal.style.display = "none";
};
ageNoBtn.onclick = ()=>{
  // puedes redirigir o bloquear
  alert("Debes ser mayor de edad para continuar.");
};

// ====== EVENTS ======
elSearch.addEventListener("input", renderProducts);
elStore.addEventListener("change", renderProducts);
btnConsiderarWhatsapp.onclick = openWhatsappGeneral;

// ====== INIT ======
checkAgeGate();
loadProducts();
