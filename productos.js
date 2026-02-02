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
];

const categoriesEl = document.getElementById("categories");
const productsEl = document.getElementById("products");

const categories = ["TODOS", ...new Set(products.map(p => p.categoria))];

let activeCategory = "TODOS";

function renderCategories() {
  categoriesEl.innerHTML = "<h2>Categorías</h2>";
  categories.forEach(cat => {
    const div = document.createElement("div");
    div.className = "category" + (cat === activeCategory ? " active" : "");
    div.textContent = cat;
    div.onclick = () => {
      activeCategory = cat;
      renderCategories();
      renderProducts();
    };
    categoriesEl.appendChild(div);
  });
}

function renderProducts() {
  productsEl.innerHTML = "";
  products
    .filter(p => activeCategory === "TODOS" || p.categoria === activeCategory)
    .forEach(p => {
      const card = document.createElement("div");
      card.className = "product";
      card.innerHTML = `
        <img src="${p.imagen}" alt="${p.nombre}">
        <h3>${p.nombre}</h3>
        <p>${p.descripcion}</p>
        <div class="price">$ ${p.precio.toFixed(2)}</div>
        <button class="btn">Pedir por WhatsApp</button>
      `;
      productsEl.appendChild(card);
    });
}

renderCategories();
renderProducts();


