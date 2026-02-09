// ====== CONFIG ======
const BUCKET = "products"; // storage bucket

// ====== VIEWS ======
const loginView = document.getElementById("loginView");
const appView = document.getElementById("appView");

// Login
const loginEmail = document.getElementById("loginEmail");
const loginPass = document.getElementById("loginPass");
const btnLogin = document.getElementById("btnLogin");
const loginStatus = document.getElementById("loginStatus");

// Top
const userEmail = document.getElementById("userEmail");
const btnLogout = document.getElementById("btnLogout");
const btnGoCatalog = document.getElementById("btnGoCatalog");

// Form
const formTitle = document.getElementById("formTitle");
const prodId = document.getElementById("prodId");
const nombre = document.getElementById("nombre");
const categoriaSelect = document.getElementById("categoriaSelect");
const descripcion = document.getElementById("descripcion");
const precio_pusuqui = document.getElementById("precio_pusuqui");
const precio_pomasqui = document.getElementById("precio_pomasqui");
const precio_carcelen = document.getElementById("precio_carcelen");
const imagenFile = document.getElementById("imagenFile");
const activo = document.getElementById("activo");
const btnSave = document.getElementById("btnSave");
const btnClear = document.getElementById("btnClear");
const formStatus = document.getElementById("formStatus");

// List
const search = document.getElementById("search");
const filterCategoria = document.getElementById("filterCategoria");
const tbody = document.getElementById("tbody");
const countLabel = document.getElementById("countLabel");
const listStatus = document.getElementById("listStatus");

let allProducts = [];
let allCategories = [];

// ====== HELPERS ======
function setStatus(el, msg, ok=true){
  el.textContent = msg || "";
  el.className = "status " + (msg ? (ok ? "ok" : "err") : "");
}

function normalize(s){ return (s || "").toString().trim().toLowerCase(); }

function toBool(v){ return String(v) === "true"; }

function resetForm(){
  prodId.value = "";
  formTitle.textContent = "Nuevo producto";
  nombre.value = "";
  descripcion.value = "";
  precio_pusuqui.value = "";
  precio_pomasqui.value = "";
  precio_carcelen.value = "";
  imagenFile.value = "";
  activo.value = "true";
  setStatus(formStatus, "");
}

// ====== AUTH ======
async function showCorrectView(){
  const { data } = await supabase.auth.getSession();
  const session = data?.session;

  if (!session){
    loginView.classList.remove("hidden");
    appView.classList.add("hidden");
    return;
  }

  userEmail.textContent = session.user.email || "-";
  loginView.classList.add("hidden");
  appView.classList.remove("hidden");

  await loadAll();
}

btnLogin.addEventListener("click", async ()=>{
  setStatus(loginStatus, "Ingresando...", true);

  const { error } = await supabase.auth.signInWithPassword({
    email: loginEmail.value.trim(),
    password: loginPass.value
  });

  if (error){
    setStatus(loginStatus, "Error: " + error.message, false);
    return;
  }

  setStatus(loginStatus, "Listo ✅", true);
  await showCorrectView();
});

btnLogout.addEventListener("click", async ()=>{
  await supabase.auth.signOut();
  location.reload();
});

btnGoCatalog.addEventListener("click", ()=>{
  window.location.href = "index.html";
});

// ====== DATA LOAD ======
async function loadAll(){
  await loadProducts();
  buildCategoriesFromProducts();
  renderCategorySelects();
  renderList();
}

async function loadProducts(){
  setStatus(listStatus, "Cargando productos...", true);

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("categoria", { ascending:true });

  if (error){
    console.error(error);
    setStatus(listStatus, "Error cargando: " + error.message, false);
    return;
  }
  allProducts = Array.isArray(data) ? data : [];
  setStatus(listStatus, "", true);
}

function buildCategoriesFromProducts(){
  const set = new Set();
  allProducts.forEach(p=>{
    if (p?.categoria) set.add(String(p.categoria).trim());
  });
  allCategories = Array.from(set).sort((a,b)=>a.localeCompare(b,"es"));
}

function renderCategorySelects(){
  // Select del formulario
  categoriaSelect.innerHTML = "";
  allCategories.forEach(c=>{
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    categoriaSelect.appendChild(opt);
  });

  // Select del filtro
  const current = filterCategoria.value || "TODOS";
  filterCategoria.innerHTML = `<option value="TODOS">TODOS</option>`;
  allCategories.forEach(c=>{
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    filterCategoria.appendChild(opt);
  });
  filterCategoria.value = current;
}

// ====== STORAGE UPLOAD ======
async function uploadImageIfAny(){
  const file = imagenFile.files?.[0];
  if (!file) return null;

  // Nombre de archivo seguro
  const safeName = file.name
    .replaceAll("/", "-")
    .replaceAll("\\", "-")
    .replaceAll(" ", " ")
    .trim();

  const ext = safeName.split(".").pop() || "png";
  const path = `${Date.now()}-${Math.random().toString(16).slice(2)}.${ext}`;

  // Subir
  const { error: upErr } = await supabase
    .storage
    .from(BUCKET)
    .upload(path, file, { upsert: true, contentType: file.type });

  if (upErr) throw upErr;

  // URL pública
  const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
  return data?.publicUrl || null;
}

// ====== CRUD ======
btnSave.addEventListener("click", async ()=>{
  try{
    setStatus(formStatus, "Guardando...", true);

    const payload = {
      nombre: nombre.value.trim(),
      categoria: categoriaSelect.value,
      descripcion: descripcion.value.trim(),
      precio_pusuqui: Number(precio_pusuqui.value || 0),
      precio_pomasqui: Number(precio_pomasqui.value || 0),
      precio_carcelen: Number(precio_carcelen.value || 0),
      activo: toBool(activo.value),
    };

    if (!payload.nombre) {
      setStatus(formStatus, "Falta el nombre.", false);
      return;
    }
    if (!payload.categoria){
      setStatus(formStatus, "Falta la categoría.", false);
      return;
    }

    // subir imagen si hay
    const imgUrl = await uploadImageIfAny();
    if (imgUrl) payload.imagen_url = imgUrl;

    const id = prodId.value;

    if (!id){
      // INSERT
      const { error } = await supabase.from("products").insert(payload);
      if (error) throw error;
      setStatus(formStatus, "Producto creado ✅", true);
    } else {
      // UPDATE
      const { error } = await supabase.from("products").update(payload).eq("id", id);
      if (error) throw error;
      setStatus(formStatus, "Producto actualizado ✅", true);
    }

    resetForm();
    await loadAll();

  }catch(err){
    console.error(err);
    setStatus(formStatus, "Error: " + (err?.message || "desconocido"), false);
  }
});

btnClear.addEventListener("click", resetForm);

function renderList(){
  const q = normalize(search.value);
  const cat = filterCategoria.value;

  const filtered = allProducts.filter(p=>{
    if (cat !== "TODOS" && normalize(p.categoria) !== normalize(cat)) return false;
    if (!q) return true;
    return normalize(p.nombre).includes(q) || normalize(p.categoria).includes(q);
  });

  countLabel.textContent = `Mostrando ${filtered.length} de ${allProducts.length}`;

  tbody.innerHTML = "";
  filtered.forEach(p=>{
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${p.nombre || ""}</td>
      <td>${p.categoria || ""}</td>
      <td>${p.activo ? "✅ Sí" : "⛔ No"}</td>
      <td style="display:flex; gap:8px; flex-wrap:wrap">
        <button class="miniBtn" data-act="edit">Editar</button>
        <button class="miniBtn danger" data-act="del">Eliminar</button>
      </td>
    `;

    tr.querySelector('[data-act="edit"]').onclick = ()=>loadToForm(p);
    tr.querySelector('[data-act="del"]').onclick = ()=>deleteProduct(p);

    tbody.appendChild(tr);
  });
}

function loadToForm(p){
  prodId.value = p.id;
  formTitle.textContent = "Editar producto";
  nombre.value = p.nombre || "";
  descripcion.value = p.descripcion || "";
  precio_pusuqui.value = p.precio_pusuqui ?? "";
  precio_pomasqui.value = p.precio_pomasqui ?? "";
  precio_carcelen.value = p.precio_carcelen ?? "";
  activo.value = String(!!p.activo);

  // categoría seleccionada
  categoriaSelect.value = p.categoria || (allCategories[0] || "");
  setStatus(formStatus, "Editando: " + (p.nombre || ""), true);
}

async function deleteProduct(p){
  const ok = confirm(`¿Eliminar "${p.nombre}"?`);
  if (!ok) return;

  setStatus(listStatus, "Eliminando...", true);
  const { error } = await supabase.from("products").delete().eq("id", p.id);
  if (error){
    setStatus(listStatus, "Error: " + error.message, false);
    return;
  }
  setStatus(listStatus, "Eliminado ✅", true);
  await loadAll();
}

// ====== EVENTS ======
search.addEventListener("input", renderList);
filterCategoria.addEventListener("change", renderList);

// ====== INIT ======
showCorrectView();
