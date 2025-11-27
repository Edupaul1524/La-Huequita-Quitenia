// ==========================
// CONFIGURACIÓN BÁSICA
// ==========================
const WHATSAPP_NUMBER = "593982230393";
const LOCALES = [
  { id: "PUSUQUI", label: "La Huequita – Pusuqui" },
  { id: "POMASQUI", label: "La Huequita – Pomasqui" },
  { id: "CARCELEN", label: "La Huequita – Carcelen" },
];
let activeLocal = localStorage.getItem("huequita_local") || "PUSUQUI";

// ==========================
// DATA DE PRODUCTOS
// ==========================
const products = [
  {
    id: 1,
    nombre: "100 FUEGOS 375ML",
    descripcion: "100 Fuegos 375Ml \u00b7 Ron perfecto para cocteles, cuba libre o para disfrutarlo bien fr\u00edo con tus panas.",
    categoria: "RON",
    precios: { PUSUQUI: 9.25, POMASQUI: 9.25, CARCELEN: 9.25 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "img/100 Fuegos 375ml.png",
    tag: "destacado",
  },
  {
    id: 2,
    nombre: "100 FUEGOS 750ML",
    descripcion: "100 Fuegos 750Ml \u00b7 Ron perfecto para cocteles, cuba libre o para disfrutarlo bien fr\u00edo con tus panas.",
    categoria: "RON",
    precios: { PUSUQUI: 16.50, POMASQUI: 16.50, CARCELEN: 16.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "img/100 Fuegos 750ml.png",
    tag: "destacado",
  },
  {
    id: 3,
    nombre: "100 FUEGOS LATA 350ML",
    descripcion: "100 Fuegos Lata 350Ml \u00b7 Ron perfecto para cocteles, cuba libre o para disfrutarlo bien fr\u00edo con tus panas.",
    categoria: "RON",
    precios: { PUSUQUI: 2.50, POMASQUI: 2.50, CARCELEN: 2.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "img/100 Fuegos Lata.png",
    tag: "destacado",
  },
  {
    id: 4,
    nombre: "ABUELO 375ML",
    descripcion: "Abuelo 375Ml \u00b7 Ron perfecto para cocteles, cuba libre o para disfrutarlo bien fr\u00edo con tus panas.",
    categoria: "RON",
    precios: { PUSUQUI: 8.25, POMASQUI: 8.25, CARCELEN: 8.25 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "img/Abuelo 375ml.png",
    tag: "destacado",
  },
  {
    id: 5,
    nombre: "ABUELO 750ML",
    descripcion: "Abuelo 750Ml \u00b7 Ron perfecto para cocteles, cuba libre o para disfrutarlo bien fr\u00edo con tus panas.",
    categoria: "RON",
    precios: { PUSUQUI: 16.00, POMASQUI: 16.00, CARCELEN: 16.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Abuelo 750Ml",
    tag: "destacado",
  },
  {
    id: 6,
    nombre: "AGOGO MENTA COOL GRANDE",
    descripcion: "Agogo Menta Cool Grande \u00b7 Snack perfecto para picar mientras disfrutas tus tragos.",
    categoria: "CONFITERIA",
    precios: { PUSUQUI: 0.40, POMASQUI: 0.40, CARCELEN: 0.40 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Agogo Menta Cool Grande",
    tag: "destacado",
  },
  {
    id: 7,
    nombre: "AGOGO MENTA COOL PEQUE\u00d1O",
    descripcion: "Agogo Menta Cool Peque\u00f1o \u00b7 Snack perfecto para picar mientras disfrutas tus tragos.",
    categoria: "CONFITERIA",
    precios: { PUSUQUI: 0.25, CARCELEN: 0.25 },
    locales: ["CARCELEN", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Agogo Menta Cool Peque\u00f1o",
    tag: "destacado",
  },
  {
    id: 8,
    nombre: "AGUA CIELO 1LT",
    descripcion: "Agua Cielo 1Lt \u00b7 Bebida sin alcohol para mezclar tus tragos o disfrutar bien fr\u00eda.",
    categoria: "BEBIDAS NO ALCOHOLICAS",
    precios: { PUSUQUI: 1.00, POMASQUI: 1.00, CARCELEN: 1.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "img/Agua Cielo 1lt.png",
    tag: "destacado",
  },
  {
    id: 9,
    nombre: "AGUA CIELO PEQUE\u00d1A",
    descripcion: "Agua Cielo Peque\u00f1a \u00b7 Bebida sin alcohol para mezclar tus tragos o disfrutar bien fr\u00eda.",
    categoria: "BEBIDAS NO ALCOHOLICAS",
    precios: { PUSUQUI: 0.50, POMASQUI: 0.50, CARCELEN: 0.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "img/Agua Cielo peque\u00f1a.png",
    tag: "destacado",
  },
  {
    id: 10,
    nombre: "AGUA TONICA",
    descripcion: "Agua Tonica \u00b7 Bebida sin alcohol para mezclar tus tragos o disfrutar bien fr\u00eda.",
    categoria: "BEBIDAS NO ALCOHOLICAS",
    precios: { PUSUQUI: 3.25, POMASQUI: 3.25, CARCELEN: 3.25 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "img/Agua Tonica.png",
    tag: "destacado",
  },
  {
    id: 11,
    nombre: "AGUARDIENTE AMARILLO",
    descripcion: "Aguardiente Amarillo \u00b7 Aguardiente para encender la noche, ideal para shots entre amigos.",
    categoria: "AGUARDIENTE",
    precios: { PUSUQUI: 20.00, POMASQUI: 20.00, CARCELEN: 20.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "img/Aguardiente Amarillo.png",
    tag: "destacado",
  },
  {
    id: 12,
    nombre: "AGUARDIENTE AMARILLO 1LT",
    descripcion: "Aguardiente Amarillo 1Lt \u00b7 Aguardiente para encender la noche, ideal para shots entre amigos.",
    categoria: "AGUARDIENTE",
    precios: { PUSUQUI: 25.00, POMASQUI: 25.00, CARCELEN: 25.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "img/Aguardiente Amarillo.png",
    tag: "destacado",
  },
  {
    id: 13,
    nombre: "AGUARDIENTE DON COCO",
    descripcion: "Aguardiente Don Coco \u00b7 Aguardiente para encender la noche, ideal para shots entre amigos.",
    categoria: "AGUARDIENTE",
    precios: { PUSUQUI: 11.00, POMASQUI: 11.00, CARCELEN: 11.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Aguardiente Don Coco",
    tag: "destacado",
  },
  {
    id: 14,
    nombre: "AGUARDIENTE MEDALLO",
    descripcion: "Aguardiente Medallo \u00b7 Aguardiente para encender la noche, ideal para shots entre amigos.",
    categoria: "AGUARDIENTE",
    precios: { PUSUQUI: 14.00, POMASQUI: 14.00, CARCELEN: 14.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Aguardiente Medallo",
    tag: "destacado",
  },
  {
    id: 15,
    nombre: "AGUARDIENTE POZO 350ML",
    descripcion: "Aguardiente Pozo 350Ml \u00b7 Aguardiente para encender la noche, ideal para shots entre amigos.",
    categoria: "AGUARDIENTE",
    precios: { PUSUQUI: 2.50, POMASQUI: 2.50, CARCELEN: 2.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Aguardiente Pozo 350Ml",
    tag: "destacado",
  },
  {
    id: 16,
    nombre: "AMPER",
    descripcion: "Amper \u00b7 Bebida sin alcohol para mezclar tus tragos o disfrutar bien fr\u00eda.",
    categoria: "BEBIDAS NO ALCOHOLICAS",
    precios: { PUSUQUI: 1.70, POMASQUI: 1.70, CARCELEN: 1.70 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "img/Amper.png",
    tag: "destacado",
  },
  {
    id: 17,
    nombre: "ANTHONY FRESA 750ML",
    descripcion: "Anthony Fresa 750Ml \u00b7 Vino para brindar y acompa\u00f1ar tus comidas o momentos especiales.",
    categoria: "VINO",
    precios: { PUSUQUI: 10.50, POMASQUI: 10.50, CARCELEN: 10.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "img/Anthony Fresa.png",
    tag: "destacado",
  },
  {
    id: 18,
    nombre: "ANTHONY LATA",
    descripcion: "Anthony Lata \u00b7 Vino para brindar y acompa\u00f1ar tus comidas o momentos especiales.",
    categoria: "VINO",
    precios: { PUSUQUI: 2.50, POMASQUI: 2.50, CARCELEN: 2.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Anthony Lata",
    tag: "destacado",
  },
  {
    id: 19,
    nombre: "ANTIOQUE\u00d1O 1LT",
    descripcion: "Antioque\u00f1o 1Lt \u00b7 Aguardiente para encender la noche, ideal para shots entre amigos.",
    categoria: "AGUARDIENTE",
    precios: { PUSUQUI: 25.70, POMASQUI: 25.70, CARCELEN: 25.70 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "img/Antioque\u00f1o 1lt.png",
    tag: "destacado",
  },
  {
    id: 20,
    nombre: "ANTIOQUE\u00d1O 375ML",
    descripcion: "Antioque\u00f1o 375Ml \u00b7 Aguardiente para encender la noche, ideal para shots entre amigos.",
    categoria: "AGUARDIENTE",
    precios: { PUSUQUI: 12.50, POMASQUI: 12.50, CARCELEN: 12.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Antioque\u00f1o 375Ml",
    tag: "destacado",
  },
  {
    id: 21,
    nombre: "ANTIOQUE\u00d1O 750ML",
    descripcion: "Antioque\u00f1o 750Ml \u00b7 Aguardiente para encender la noche, ideal para shots entre amigos.",
    categoria: "AGUARDIENTE",
    precios: { PUSUQUI: 20.75, POMASQUI: 20.75, CARCELEN: 20.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Antioque\u00f1o 750Ml",
    tag: "destacado",
  },
  {
    id: 22,
    nombre: "BACARDI BLANCO 980ML",
    descripcion: "Bacardi Blanco 980Ml \u00b7 Ron perfecto para cocteles, cuba libre o para disfrutarlo bien fr\u00edo con tus panas.",
    categoria: "RON",
    precios: { PUSUQUI: 22.75, POMASQUI: 22.75, CARCELEN: 22.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "img/Bacardi.png",
    tag: "destacado",
  },
  {
    id: 23,
    nombre: "BALDORE  DURAZNO BAG IN BOX 600ML",
    descripcion: "Baldore  Durazno Bag In Box 600Ml \u00b7 Vino para brindar y acompa\u00f1ar tus comidas o momentos especiales.",
    categoria: "VINO",
    precios: { PUSUQUI: 3.00, POMASQUI: 3.00, CARCELEN: 3.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "img/Baldore.png",
    tag: "destacado",
  },
  {
    id: 24,
    nombre: "BALLANTINES 700ML",
    descripcion: "Ballantines 700Ml \u00b7 Whisky ideal para compartir en shots, en las rocas o mezclado con tu gaseosa favorita.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 22.75, POMASQUI: 22.75, CARCELEN: 22.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "img/Ballantines.png",
    tag: "destacado",
  },
  {
    id: 25,
    nombre: "BELLOWS 750ML",
    descripcion: "Bellows 750Ml \u00b7 Whisky ideal para compartir en shots, en las rocas o mezclado con tu gaseosa favorita.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 15.50, POMASQUI: 15.50, CARCELEN: 15.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "img/Bellows.png",
    tag: "destacado",
  },
  {
    id: 26,
    nombre: "BLACK AND WHITE 750ML",
    descripcion: "Black And White 750Ml \u00b7 Whisky ideal para compartir en shots, en las rocas o mezclado con tu gaseosa favorita.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 24.75, POMASQUI: 24.75, CARCELEN: 24.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Black And White 750Ml",
    tag: "destacado",
  },
  {
    id: 27,
    nombre: "BLACK CASTLE NEGRO 750ML",
    descripcion: "Black Castle Negro 750Ml \u00b7 Whisky ideal para compartir en shots, en las rocas o mezclado con tu gaseosa favorita.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 16.00, POMASQUI: 16.00, CARCELEN: 16.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Black Castle Negro 750Ml",
    tag: "destacado",
  },
  {
    id: 28,
    nombre: "BLACK CASTLE ROJO 750ML",
    descripcion: "Black Castle Rojo 750Ml \u00b7 Whisky ideal para compartir en shots, en las rocas o mezclado con tu gaseosa favorita.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 17.00, POMASQUI: 17.00, CARCELEN: 17.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Black Castle Rojo 750Ml",
    tag: "destacado",
  },
  {
    id: 29,
    nombre: "BLACK KING 750ML",
    descripcion: "Black King 750Ml \u00b7 Whisky ideal para compartir en shots, en las rocas o mezclado con tu gaseosa favorita.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 11.50, POMASQUI: 11.50, CARCELEN: 11.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Black King 750Ml",
    tag: "destacado",
  },
  {
    id: 30,
    nombre: "BLACK OWL 750ML",
    descripcion: "Black Owl 750Ml \u00b7 Whisky ideal para compartir en shots, en las rocas o mezclado con tu gaseosa favorita.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 18.00, POMASQUI: 18.00, CARCELEN: 18.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "img/Black Owl.png",
    tag: "destacado",
  },
  {
    id: 31,
    nombre: "BLACK OWL FIRE 750ML",
    descripcion: "Black Owl Fire 750Ml \u00b7 Whisky ideal para compartir en shots, en las rocas o mezclado con tu gaseosa favorita.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 18.00, POMASQUI: 18.00, CARCELEN: 18.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Black Owl Fire 750Ml",
    tag: "destacado",
  },
  {
    id: 32,
    nombre: "BOTELLA LT",
    descripcion: "Botella Lt \u00b7 Cerveza refrescante para cualquier momento, perfecta para acompa\u00f1ar tus reuniones.",
    categoria: "CERVEZA",
    precios: { PUSUQUI: 0.30, POMASQUI: 0.30, CARCELEN: 0.30 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Botella Lt",
    tag: "destacado",
  },
  {
    id: 33,
    nombre: "BUCHANANS 750ML",
    descripcion: "Buchanans 750Ml \u00b7 Whisky ideal para compartir en shots, en las rocas o mezclado con tu gaseosa favorita.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 74.00, POMASQUI: 74.00, CARCELEN: 74.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Buchanans 750Ml",
    tag: "destacado",
  },
  {
    id: 34,
    nombre: "CANTACLARO 385ML",
    descripcion: "Cantaclaro 385Ml \u00b7 Aguardiente para encender la noche, ideal para shots entre amigos.",
    categoria: "AGUARDIENTE",
    precios: { PUSUQUI: 4.50, POMASQUI: 4.50, CARCELEN: 4.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Cantaclaro 385Ml",
    tag: "destacado",
  },
  {
    id: 35,
    nombre: "CANTACLARO 750 ML",
    descripcion: "Cantaclaro 750 Ml \u00b7 Aguardiente para encender la noche, ideal para shots entre amigos.",
    categoria: "AGUARDIENTE",
    precios: { PUSUQUI: 9.25, POMASQUI: 9.25, CARCELEN: 9.25 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "img/Canta Claro 750ml.png",
    tag: "destacado",
  },
  {
    id: 36,
    nombre: "CARNIVAL",
    descripcion: "Carnival \u00b7 Producto para acompa\u00f1ar tu noche de fiesta. Consumo responsable.",
    categoria: "CIGARRILLOS",
    precios: { PUSUQUI: 0.30, POMASQUI: 0.30, CARCELEN: 0.30 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Carnival",
    tag: "destacado",
  },
  {
    id: 37,
    nombre: "CASILLERO DEL DIABLO 750ML",
    descripcion: "Casillero Del Diablo 750Ml \u00b7 Vino para brindar y acompa\u00f1ar tus comidas o momentos especiales.",
    categoria: "VINO",
    precios: { PUSUQUI: 26.75, POMASQUI: 26.75, CARCELEN: 26.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Casillero Del Diablo 750Ml",
    tag: "destacado",
  },
  {
    id: 38,
    nombre: "CASTILLO A\u00d1EJO 750ML",
    descripcion: "Castillo A\u00f1ejo 750Ml \u00b7 Ron perfecto para cocteles, cuba libre o para disfrutarlo bien fr\u00edo con tus panas.",
    categoria: "RON",
    precios: { PUSUQUI: 14.50, POMASQUI: 14.50, CARCELEN: 14.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "img/Castillo A\u00f1ejo.png",
    tag: "destacado",
  },
  {
    id: 39,
    nombre: "CA\u00d1A BLANCA 750ML",
    descripcion: "Ca\u00f1a Blanca 750Ml \u00b7 Ron perfecto para cocteles, cuba libre o para disfrutarlo bien fr\u00edo con tus panas.",
    categoria: "RON",
    precios: { PUSUQUI: 11.00, POMASQUI: 11.00, CARCELEN: 11.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "img/Ca\u00f1a Blanca.png",
    tag: "destacado",
  },
  {
    id: 40,
    nombre: "CA\u00d1A MANABITA 375ML",
    descripcion: "Ca\u00f1a Manabita 375Ml \u00b7 Aguardiente para encender la noche, ideal para shots entre amigos.",
    categoria: "AGUARDIENTE",
    precios: { PUSUQUI: 6.25, POMASQUI: 6.25, CARCELEN: 6.25 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "img/Ca\u00f1a Manabita 375ml.png",
    tag: "destacado",
  },
  {
    id: 41,
    nombre: "CA\u00d1A MANABITA 750ML",
    descripcion: "Ca\u00f1a Manabita 750Ml \u00b7 Aguardiente para encender la noche, ideal para shots entre amigos.",
    categoria: "AGUARDIENTE",
    precios: { PUSUQUI: 12.00, POMASQUI: 12.00, CARCELEN: 12.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "img/Ca\u00f1a Manabita 750ml.png",
    tag: "destacado",
  },
  {
    id: 42,
    nombre: "CERVEZA CLUB 1LT",
    descripcion: "Cerveza Club 1Lt \u00b7 Cerveza refrescante para cualquier momento, perfecta para acompa\u00f1ar tus reuniones.",
    categoria: "CERVEZA",
    precios: { PUSUQUI: 2.90, POMASQUI: 2.90, CARCELEN: 2.90 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Cerveza Club 1Lt",
    tag: "destacado",
  },
  {
    id: 43,
    nombre: "CERVEZA CLUB LATA",
    descripcion: "Cerveza Club Lata \u00b7 Cerveza refrescante para cualquier momento, perfecta para acompa\u00f1ar tus reuniones.",
    categoria: "CERVEZA",
    precios: { PUSUQUI: 2.00, POMASQUI: 2.00, CARCELEN: 2.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Cerveza Club Lata",
    tag: "destacado",
  },
  {
    id: 44,
    nombre: "CERVEZA CLUB LATA 473CC",
    descripcion: "Cerveza Club Lata 473Cc \u00b7 Cerveza refrescante para cualquier momento, perfecta para acompa\u00f1ar tus reuniones.",
    categoria: "CERVEZA",
    precios: { PUSUQUI: 2.50, POMASQUI: 2.50, CARCELEN: 2.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Cerveza Club Lata 473Cc",
    tag: "destacado",
  },
  {
    id: 45,
    nombre: "CERVEZA CLUB PEQUE\u00d1A 330CC",
    descripcion: "Cerveza Club Peque\u00f1a 330Cc \u00b7 Cerveza refrescante para cualquier momento, perfecta para acompa\u00f1ar tus reuniones.",
    categoria: "CERVEZA",
    precios: { PUSUQUI: 2.00, POMASQUI: 2.00, CARCELEN: 2.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Cerveza Club Peque\u00f1a 330Cc",
    tag: "destacado",
  },
  {
    id: 46,
    nombre: "CERVEZA CORONA 355CC",
    descripcion: "Cerveza Corona 355Cc \u00b7 Cerveza refrescante para cualquier momento, perfecta para acompa\u00f1ar tus reuniones.",
    categoria: "CERVEZA",
    precios: { PUSUQUI: 2.60, POMASQUI: 2.60, CARCELEN: 2.60 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Cerveza Corona 355Cc",
    tag: "destacado",
  },
  {
    id: 47,
    nombre: "CERVEZA PILSENER 1LT",
    descripcion: "Cerveza Pilsener 1Lt \u00b7 Cerveza refrescante para cualquier momento, perfecta para acompa\u00f1ar tus reuniones.",
    categoria: "CERVEZA",
    precios: { PUSUQUI: 2.85, POMASQUI: 2.85, CARCELEN: 2.85 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Cerveza Pilsener 1Lt",
    tag: "destacado",
  },
  {
    id: 48,
    nombre: "CERVEZA PILSENER LATA PEQUE\u00d1A 269CC",
    descripcion: "Cerveza Pilsener Lata Peque\u00f1a 269Cc \u00b7 Cerveza refrescante para cualquier momento, perfecta para acompa\u00f1ar tus reuniones.",
    categoria: "CERVEZA",
    precios: { CARCELEN: 1.50 },
    locales: ["CARCELEN"],
    imagen: "https://via.placeholder.com/200x260?text=Cerveza Pilsener Lata Peque\u00f1a 269Cc",
    tag: "destacado",
  },
  {
    id: 49,
    nombre: "CERVEZA PILSENER LATOTA 473CC",
    descripcion: "Cerveza Pilsener Latota 473Cc \u00b7 Cerveza refrescante para cualquier momento, perfecta para acompa\u00f1ar tus reuniones.",
    categoria: "CERVEZA",
    precios: { PUSUQUI: 2.00, POMASQUI: 2.00, CARCELEN: 2.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Cerveza Pilsener Latota 473Cc",
    tag: "destacado",
  },
  {
    id: 50,
    nombre: "CERVEZA PILSENER PEQUE\u00d1A 330CC",
    descripcion: "Cerveza Pilsener Peque\u00f1a 330Cc \u00b7 Cerveza refrescante para cualquier momento, perfecta para acompa\u00f1ar tus reuniones.",
    categoria: "CERVEZA",
    precios: { PUSUQUI: 2.00, POMASQUI: 2.00, CARCELEN: 2.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Cerveza Pilsener Peque\u00f1a 330Cc",
    tag: "destacado",
  },
  {
    id: 51,
    nombre: "CHIVAS REGAL 12 A\u00d1OS 750ML",
    descripcion: "Chivas Regal 12 A\u00f1os 750Ml \u00b7 Whisky ideal para compartir en shots, en las rocas o mezclado con tu gaseosa favorita.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 59.75, POMASQUI: 59.75, CARCELEN: 59.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "img/Chivas.png",
    tag: "destacado",
  },
  {
    id: 52,
    nombre: "CLOSS DE PIRQUE CABERNET 1LT",
    descripcion: "Closs De Pirque Cabernet 1Lt \u00b7 Vino para brindar y acompa\u00f1ar tus comidas o momentos especiales.",
    categoria: "VINO",
    precios: { PUSUQUI: 10.50, POMASQUI: 10.50, CARCELEN: 10.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "img/Clos.png",
    tag: "destacado",
  },
  {
    id: 53,
    nombre: "COCA COLA 1LT",
    descripcion: "Coca Cola 1Lt \u00b7 Bebida sin alcohol para mezclar tus tragos o disfrutar bien fr\u00eda.",
    categoria: "BEBIDAS NO ALCOHOLICAS",
    precios: { PUSUQUI: 1.75, POMASQUI: 1.75, CARCELEN: 1.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Coca Cola 1Lt",
    tag: "destacado",
  },
  {
    id: 54,
    nombre: "COCA COLA 500ML",
    descripcion: "Coca Cola 500Ml \u00b7 Bebida sin alcohol para mezclar tus tragos o disfrutar bien fr\u00eda.",
    categoria: "BEBIDAS NO ALCOHOLICAS",
    precios: { PUSUQUI: 0.95, POMASQUI: 0.95, CARCELEN: 0.95 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Coca Cola 500Ml",
    tag: "destacado",
  },
  {
    id: 55,
    nombre: "CONCHA Y TORO CABERNET RESERVADO 750ML",
    descripcion: "Concha Y Toro Cabernet Reservado 750Ml \u00b7 Vino para brindar y acompa\u00f1ar tus comidas o momentos especiales.",
    categoria: "VINO",
    precios: { PUSUQUI: 14.50, POMASQUI: 14.50, CARCELEN: 14.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Concha Y Toro Cabernet Reservado 750Ml",
    tag: "destacado",
  },
  {
    id: 56,
    nombre: "CONCHA Y TORO MERLOT RESERVADO 750ML",
    descripcion: "Concha Y Toro Merlot Reservado 750Ml \u00b7 Vino para brindar y acompa\u00f1ar tus comidas o momentos especiales.",
    categoria: "VINO",
    precios: { PUSUQUI: 14.50, POMASQUI: 14.50, CARCELEN: 14.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "img/Concha y Toro Merlot.png",
    tag: "destacado",
  },
  {
    id: 57,
    nombre: "CORONITA LATA",
    descripcion: "Coronita Lata \u00b7 Cerveza refrescante para cualquier momento, perfecta para acompa\u00f1ar tus reuniones.",
    categoria: "CERVEZA",
    precios: { PUSUQUI: 2.00, POMASQUI: 2.00, CARCELEN: 2.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Coronita Lata",
    tag: "destacado",
  },
  {
    id: 58,
    nombre: "CRISTAL 375ML",
    descripcion: "Cristal 375Ml \u00b7 Aguardiente para encender la noche, ideal para shots entre amigos.",
    categoria: "AGUARDIENTE",
    precios: { PUSUQUI: 5.75, POMASQUI: 5.75, CARCELEN: 5.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "img/Cristal 375ml.png",
    tag: "destacado",
  },
  {
    id: 59,
    nombre: "CRISTAL 750 ML",
    descripcion: "Cristal 750 Ml \u00b7 Aguardiente para encender la noche, ideal para shots entre amigos.",
    categoria: "AGUARDIENTE",
    precios: { PUSUQUI: 11.00, POMASQUI: 11.00, CARCELEN: 11.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "img/Cristal 750.png",
    tag: "destacado",
  },
  {
    id: 60,
    nombre: "CUBATA",
    descripcion: "Cubata \u00b7 Producto ideal para tus previas y reuniones en La Huequita.",
    categoria: "VODKA",
    precios: { PUSUQUI: 3.75, POMASQUI: 3.75, CARCELEN: 3.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "img/Cubata.png",
    tag: "destacado",
  },
  {
    id: 61,
    nombre: "CUNINGHAM 375ML",
    descripcion: "Cuningham 375Ml \u00b7 Whisky ideal para compartir en shots, en las rocas o mezclado con tu gaseosa favorita.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 7.25, POMASQUI: 7.25, CARCELEN: 7.25 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "img/Cuningham 375ml.png",
    tag: "destacado",
  },
  {
    id: 62,
    nombre: "CUNINGHAM 750ML",
    descripcion: "Cuningham 750Ml \u00b7 Whisky ideal para compartir en shots, en las rocas o mezclado con tu gaseosa favorita.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 14.00, POMASQUI: 14.00, CARCELEN: 14.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "img/Cuningham 750ml.png",
    tag: "destacado",
  },
  {
    id: 63,
    nombre: "DON CASTELO 1LT",
    descripcion: "Don Castelo 1Lt \u00b7 Ron perfecto para cocteles, cuba libre o para disfrutarlo bien fr\u00edo con tus panas.",
    categoria: "RON",
    precios: { PUSUQUI: 9.25, POMASQUI: 9.25, CARCELEN: 9.25 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "img/Don Castelo 1lt.png",
    tag: "destacado",
  },
  {
    id: 64,
    nombre: "ELEPHANT",
    descripcion: "Elephant \u00b7 Producto para acompa\u00f1ar tu noche de fiesta. Consumo responsable.",
    categoria: "CIGARRILLOS",
    precios: { PUSUQUI: 0.25, POMASQUI: 0.25, CARCELEN: 0.25 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "img/Elephant.png",
    tag: "destacado",
  },
  {
    id: 65,
    nombre: "ESTELAR NARANJILLA 750ML",
    descripcion: "Estelar Naranjilla 750Ml \u00b7 Ron perfecto para cocteles, cuba libre o para disfrutarlo bien fr\u00edo con tus panas.",
    categoria: "RON",
    precios: { PUSUQUI: 9.00, POMASQUI: 9.00, CARCELEN: 9.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "img/Estelar Naranjilla.png",
    tag: "destacado",
  },
  {
    id: 66,
    nombre: "ESTELAR ORO 375ML",
    descripcion: "Estelar Oro 375Ml \u00b7 Ron perfecto para cocteles, cuba libre o para disfrutarlo bien fr\u00edo con tus panas.",
    categoria: "RON",
    precios: { PUSUQUI: 6.50, POMASQUI: 6.50, CARCELEN: 6.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "img/Estelar Oro 375 ml.png",
    tag: "destacado",
  },
  {
    id: 67,
    nombre: "ESTELAR ORO 750ML",
    descripcion: "Estelar Oro 750Ml \u00b7 Ron perfecto para cocteles, cuba libre o para disfrutarlo bien fr\u00edo con tus panas.",
    categoria: "RON",
    precios: { PUSUQUI: 12.00, POMASQUI: 12.00, CARCELEN: 12.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "img/Estelar Oro 750ml.png",
    tag: "destacado",
  },
  {
    id: 68,
    nombre: "FOSFOROS",
    descripcion: "Fosforos \u00b7 Producto ideal para tus previas y reuniones en La Huequita.",
    categoria: "VARIOS",
    precios: { PUSUQUI: 0.15, POMASQUI: 0.15, CARCELEN: 0.15 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "img/Fosforos.png",
    tag: "destacado",
  },
  {
    id: 69,
    nombre: "FUZE TEA 1LT",
    descripcion: "Fuze Tea 1Lt \u00b7 Bebida sin alcohol para mezclar tus tragos o disfrutar bien fr\u00eda.",
    categoria: "BEBIDAS NO ALCOHOLICAS",
    precios: { PUSUQUI: 1.55, POMASQUI: 1.55, CARCELEN: 1.55 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "img/Fuze Tea.png",
    tag: "destacado",
  },
  {
    id: 70,
    nombre: "GATO NEGRO 750ML",
    descripcion: "Gato Negro 750Ml \u00b7 Vino para brindar y acompa\u00f1ar tus comidas o momentos especiales.",
    categoria: "VINO",
    precios: { PUSUQUI: 15.50, POMASQUI: 15.50, CARCELEN: 15.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "img/Gato Negro.png",
    tag: "destacado",
  },
  {
    id: 71,
    nombre: "GENIO TAPA NEGRA 750ML",
    descripcion: "Genio Tapa Negra 750Ml \u00b7 Ron perfecto para cocteles, cuba libre o para disfrutarlo bien fr\u00edo con tus panas.",
    categoria: "RON",
    precios: { PUSUQUI: 8.25, POMASQUI: 8.25, CARCELEN: 8.25 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "img/Genio Tapa Negra.png",
    tag: "destacado",
  },
  {
    id: 72,
    nombre: "GENIO TAPA ROJA 750ML",
    descripcion: "Genio Tapa Roja 750Ml \u00b7 Ron perfecto para cocteles, cuba libre o para disfrutarlo bien fr\u00edo con tus panas.",
    categoria: "RON",
    precios: { PUSUQUI: 5.75, POMASQUI: 5.75, CARCELEN: 5.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "img/Genio Tapa Roja.png",
    tag: "destacado",
  },
  {
    id: 73,
    nombre: "GIN BOND 750ML",
    descripcion: "Gin Bond 750Ml \u00b7 Producto ideal para tus previas y reuniones en La Huequita.",
    categoria: "GINEBRA",
    precios: { PUSUQUI: 14.50, POMASQUI: 14.50, CARCELEN: 14.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "img/GINBOND.png",
    tag: "destacado",
  },
  {
    id: 74,
    nombre: "GIN UNDER LONDON DRY",
    descripcion: "Gin Under London Dry \u00b7 Producto ideal para tus previas y reuniones en La Huequita.",
    categoria: "GINEBRA",
    precios: { PUSUQUI: 17.00, POMASQUI: 17.00, CARCELEN: 17.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Gin Under London Dry",
    tag: "destacado",
  },
  {
    id: 75,
    nombre: "GIN W LONDON AZUL",
    descripcion: "Gin W London Azul \u00b7 Producto ideal para tus previas y reuniones en La Huequita.",
    categoria: "GINEBRA",
    precios: { PUSUQUI: 18.50, POMASQUI: 18.50, CARCELEN: 18.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "img/Gin W London.png",
    tag: "destacado",
  },
  {
    id: 76,
    nombre: "GRAN VANDUSH",
    descripcion: "Gran Vandush \u00b7 Producto ideal para tus previas y reuniones en La Huequita.",
    categoria: "CHAMPAGNE",
    precios: { PUSUQUI: 8.75, POMASQUI: 8.75, CARCELEN: 8.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Gran Vandush",
    tag: "destacado",
  },
  {
    id: 77,
    nombre: "GRAND OLD PARR 750ML",
    descripcion: "Grand Old Parr 750Ml \u00b7 Whisky ideal para compartir en shots, en las rocas o mezclado con tu gaseosa favorita.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 62.75, CARCELEN: 62.75 },
    locales: ["CARCELEN", "PUSUQUI"],
    imagen: "img/Grand Old Parr.png",
    tag: "destacado",
  },
  {
    id: 78,
    nombre: "GRANTS 750ML",
    descripcion: "Grants 750Ml \u00b7 Whisky ideal para compartir en shots, en las rocas o mezclado con tu gaseosa favorita.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 21.75, POMASQUI: 21.75, CARCELEN: 21.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "img/Grants.png",
    tag: "destacado",
  },
  {
    id: 79,
    nombre: "GREEN MATE 345ML",
    descripcion: "Green Mate 345Ml \u00b7 Producto ideal para tus previas y reuniones en La Huequita.",
    categoria: "LICOR DE HIERBAS",
    precios: { PUSUQUI: 5.00, POMASQUI: 5.00, CARCELEN: 5.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "img/Green Mate.png",
    tag: "destacado",
  },
  {
    id: 80,
    nombre: "GREEN MATE 750ML",
    descripcion: "Green Mate 750Ml \u00b7 Producto ideal para tus previas y reuniones en La Huequita.",
    categoria: "LICOR DE HIERBAS",
    precios: { PUSUQUI: 13.50, POMASQUI: 13.50, CARCELEN: 13.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "img/Green Mate 750ml.png",
    tag: "destacado",
  },
  {
    id: 81,
    nombre: "GUITIG 1.5LT",
    descripcion: "Guitig 1.5Lt \u00b7 Bebida sin alcohol para mezclar tus tragos o disfrutar bien fr\u00eda.",
    categoria: "BEBIDAS NO ALCOHOLICAS",
    precios: { PUSUQUI: 1.75, POMASQUI: 1.75, CARCELEN: 1.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "img/Guitig.png",
    tag: "destacado",
  },
  {
    id: 82,
    nombre: "HALLS BARRA SURTIDO",
    descripcion: "Halls Barra Surtido \u00b7 Snack perfecto para picar mientras disfrutas tus tragos.",
    categoria: "CONFITERIA",
    precios: { PUSUQUI: 0.80, POMASQUI: 0.80, CARCELEN: 0.80 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "img/Halls Barra.png",
    tag: "destacado",
  },
  {
    id: 83,
    nombre: "HALLS UNIDAD",
    descripcion: "Halls Unidad \u00b7 Snack perfecto para picar mientras disfrutas tus tragos.",
    categoria: "CONFITERIA",
    precios: { PUSUQUI: 0.05, POMASQUI: 0.05, CARCELEN: 0.05 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "img/Halls Unidad.png",
    tag: "destacado",
  },
  {
    id: 84,
    nombre: "JABAS VACIAS CERVEZA",
    descripcion: "Jabas Vacias Cerveza \u00b7 Cerveza refrescante para cualquier momento, perfecta para acompa\u00f1ar tus reuniones.",
    categoria: "CERVEZA",
    precios: { PUSUQUI: 2.60, POMASQUI: 2.60, CARCELEN: 2.60 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Jabas Vacias Cerveza",
    tag: "destacado",
  },
  {
    id: 85,
    nombre: "JACK DANIELS N 7 750ML",
    descripcion: "Jack Daniels N 7 750Ml \u00b7 Whisky ideal para compartir en shots, en las rocas o mezclado con tu gaseosa favorita.",
    categoria: "WHISKY",
    precios: { CARCELEN: 77.00 },
    locales: ["CARCELEN"],
    imagen: "img/Jack Daniels.png",
    tag: "destacado",
  },
  {
    id: 86,
    nombre: "JAGERMEISTER 1LITRO",
    descripcion: "Jagermeister 1Litro \u00b7 Producto ideal para tus previas y reuniones en La Huequita.",
    categoria: "LICOR DE HIERBAS",
    precios: { PUSUQUI: 42.00, POMASQUI: 42.00, CARCELEN: 42.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Jagermeister 1Litro",
    tag: "destacado",
  },
  {
    id: 87,
    nombre: "JAGERMEISTER 750ML",
    descripcion: "Jagermeister 750Ml \u00b7 Producto ideal para tus previas y reuniones en La Huequita.",
    categoria: "LICOR DE HIERBAS",
    precios: { PUSUQUI: 36.00, POMASQUI: 36.00, CARCELEN: 36.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Jagermeister 750Ml",
    tag: "destacado",
  },
  {
    id: 88,
    nombre: "JHON MORRIS NEGRO 1LT",
    descripcion: "Jhon Morris Negro 1Lt \u00b7 Whisky ideal para compartir en shots, en las rocas o mezclado con tu gaseosa favorita.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 19.50, POMASQUI: 19.50, CARCELEN: 19.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Jhon Morris Negro 1Lt",
    tag: "destacado",
  },
  {
    id: 89,
    nombre: "JHON MORRIS NEGRO 750ML",
    descripcion: "Jhon Morris Negro 750Ml \u00b7 Whisky ideal para compartir en shots, en las rocas o mezclado con tu gaseosa favorita.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 16.50, POMASQUI: 16.50, CARCELEN: 16.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Jhon Morris Negro 750Ml",
    tag: "destacado",
  },
  {
    id: 90,
    nombre: "JHON MORRIS ROJO 1LT",
    descripcion: "Jhon Morris Rojo 1Lt \u00b7 Whisky ideal para compartir en shots, en las rocas o mezclado con tu gaseosa favorita.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 18.50, POMASQUI: 18.50, CARCELEN: 18.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Jhon Morris Rojo 1Lt",
    tag: "destacado",
  },
  {
    id: 91,
    nombre: "JHON MORRIS ROJO 750ML",
    descripcion: "Jhon Morris Rojo 750Ml \u00b7 Whisky ideal para compartir en shots, en las rocas o mezclado con tu gaseosa favorita.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 15.50, POMASQUI: 15.50, CARCELEN: 15.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Jhon Morris Rojo 750Ml",
    tag: "destacado",
  },
  {
    id: 92,
    nombre: "JHONNY ROJO 750ML",
    descripcion: "Jhonny Rojo 750Ml \u00b7 Whisky ideal para compartir en shots, en las rocas o mezclado con tu gaseosa favorita.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 27.25, POMASQUI: 27.25, CARCELEN: 27.25 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "img/Jhonny Rojo.png",
    tag: "destacado",
  },
  {
    id: 93,
    nombre: "JUGO DEL VALLE  500ML",
    descripcion: "Jugo Del Valle  500Ml \u00b7 Bebida sin alcohol para mezclar tus tragos o disfrutar bien fr\u00eda.",
    categoria: "BEBIDAS NO ALCOHOLICAS",
    precios: { PUSUQUI: 0.75, POMASQUI: 0.75, CARCELEN: 0.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Jugo Del Valle  500Ml",
    tag: "destacado",
  },
  {
    id: 94,
    nombre: "JUGO DEL VALLE 1,75LT",
    descripcion: "Jugo Del Valle 1,75Lt \u00b7 Bebida sin alcohol para mezclar tus tragos o disfrutar bien fr\u00eda.",
    categoria: "BEBIDAS NO ALCOHOLICAS",
    precios: { PUSUQUI: 1.75, POMASQUI: 1.75, CARCELEN: 1.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Jugo Del Valle 1,75Lt",
    tag: "destacado",
  },
  {
    id: 95,
    nombre: "JUGO PULP",
    descripcion: "Jugo Pulp \u00b7 Bebida sin alcohol para mezclar tus tragos o disfrutar bien fr\u00eda.",
    categoria: "BEBIDAS NO ALCOHOLICAS",
    precios: { PUSUQUI: 1.05 },
    locales: ["PUSUQUI"],
    imagen: "img/Jugo Pulp.png",
    tag: "destacado",
  },
  {
    id: 96,
    nombre: "LARK",
    descripcion: "Lark \u00b7 Producto para acompa\u00f1ar tu noche de fiesta. Consumo responsable.",
    categoria: "CIGARRILLOS",
    precios: { PUSUQUI: 0.60, POMASQUI: 0.60, CARCELEN: 0.60 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "img/Lark.png",
    tag: "destacado",
  },
  {
    id: 97,
    nombre: "LIDER",
    descripcion: "Lider \u00b7 Producto para acompa\u00f1ar tu noche de fiesta. Consumo responsable.",
    categoria: "CIGARRILLOS",
    precios: { PUSUQUI: 0.60, POMASQUI: 0.60, CARCELEN: 0.60 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "img/Lider.png",
    tag: "destacado",
  },
  {
    id: 98,
    nombre: "MAIPO TINTO CABERNET 750ML",
    descripcion: "Maipo Tinto Cabernet 750Ml \u00b7 Vino para brindar y acompa\u00f1ar tus comidas o momentos especiales.",
    categoria: "VINO",
    precios: { PUSUQUI: 10.50, POMASQUI: 10.50, CARCELEN: 10.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Maipo Tinto Cabernet 750Ml",
    tag: "destacado",
  },
  {
    id: 99,
    nombre: "MAIPO TINTO MERLOT 750ML",
    descripcion: "Maipo Tinto Merlot 750Ml \u00b7 Vino para brindar y acompa\u00f1ar tus comidas o momentos especiales.",
    categoria: "VINO",
    precios: { PUSUQUI: 10.50, POMASQUI: 10.50, CARCELEN: 10.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Maipo Tinto Merlot 750Ml",
    tag: "destacado",
  },
  {
    id: 100,
    nombre: "MALBORO BLANCO",
    descripcion: "Malboro Blanco \u00b7 Producto para acompa\u00f1ar tu noche de fiesta. Consumo responsable.",
    categoria: "CIGARRILLOS",
    precios: { PUSUQUI: 0.60, POMASQUI: 0.60, CARCELEN: 0.60 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Malboro Blanco",
    tag: "destacado",
  },
  {
    id: 101,
    nombre: "MALBORO MENTOLADO",
    descripcion: "Malboro Mentolado \u00b7 Producto para acompa\u00f1ar tu noche de fiesta. Consumo responsable.",
    categoria: "CIGARRILLOS",
    precios: { PUSUQUI: 0.50, POMASQUI: 0.50, CARCELEN: 0.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Malboro Mentolado",
    tag: "destacado",
  },
  {
    id: 102,
    nombre: "MALBORO ROJO",
    descripcion: "Malboro Rojo \u00b7 Producto para acompa\u00f1ar tu noche de fiesta. Consumo responsable.",
    categoria: "CIGARRILLOS",
    precios: { PUSUQUI: 0.60, POMASQUI: 0.60, CARCELEN: 0.60 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Malboro Rojo",
    tag: "destacado",
  },
  {
    id: 103,
    nombre: "MENTAS",
    descripcion: "Mentas \u00b7 Snack perfecto para picar mientras disfrutas tus tragos.",
    categoria: "CONFITERIA",
    precios: { PUSUQUI: 0.05, POMASQUI: 0.05, CARCELEN: 0.05 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Mentas",
    tag: "destacado",
  },
  {
    id: 104,
    nombre: "NORTE\u00d1O 375ML",
    descripcion: "Norte\u00f1o 375Ml \u00b7 Aguardiente para encender la noche, ideal para shots entre amigos.",
    categoria: "AGUARDIENTE",
    precios: { PUSUQUI: 4.75, POMASQUI: 4.75, CARCELEN: 4.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Norte\u00f1o 375Ml",
    tag: "destacado",
  },
  {
    id: 105,
    nombre: "NORTE\u00d1O 750ML",
    descripcion: "Norte\u00f1o 750Ml \u00b7 Aguardiente para encender la noche, ideal para shots entre amigos.",
    categoria: "AGUARDIENTE",
    precios: { PUSUQUI: 9.25, POMASQUI: 9.25, CARCELEN: 9.25 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Norte\u00f1o 750Ml",
    tag: "destacado",
  },
  {
    id: 106,
    nombre: "NORTE\u00d1O DE HIERBAS",
    descripcion: "Norte\u00f1o De Hierbas \u00b7 Aguardiente para encender la noche, ideal para shots entre amigos.",
    categoria: "AGUARDIENTE",
    precios: { PUSUQUI: 13.00, POMASQUI: 13.00, CARCELEN: 13.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Norte\u00f1o De Hierbas",
    tag: "destacado",
  },
  {
    id: 107,
    nombre: "NORTE\u00d1O GOLD",
    descripcion: "Norte\u00f1o Gold \u00b7 Aguardiente para encender la noche, ideal para shots entre amigos.",
    categoria: "AGUARDIENTE",
    precios: { PUSUQUI: 13.00, POMASQUI: 13.00, CARCELEN: 13.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Norte\u00f1o Gold",
    tag: "destacado",
  },
  {
    id: 108,
    nombre: "OLD TIME FIRE CANELA 750ML",
    descripcion: "Old Time Fire Canela 750Ml \u00b7 Whisky ideal para compartir en shots, en las rocas o mezclado con tu gaseosa favorita.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 11.50, POMASQUI: 11.50, CARCELEN: 11.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Old Time Fire Canela 750Ml",
    tag: "destacado",
  },
  {
    id: 109,
    nombre: "OLD TIMES  VAINILLA 750ML",
    descripcion: "Old Times  Vainilla 750Ml \u00b7 Whisky ideal para compartir en shots, en las rocas o mezclado con tu gaseosa favorita.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 11.50, POMASQUI: 11.50, CARCELEN: 11.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Old Times  Vainilla 750Ml",
    tag: "destacado",
  },
  {
    id: 110,
    nombre: "OLD TIMES MANZANA 750ML",
    descripcion: "Old Times Manzana 750Ml \u00b7 Whisky ideal para compartir en shots, en las rocas o mezclado con tu gaseosa favorita.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 11.50, POMASQUI: 11.50, CARCELEN: 11.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Old Times Manzana 750Ml",
    tag: "destacado",
  },
  {
    id: 111,
    nombre: "OLD TIMES NEGRO 375ML",
    descripcion: "Old Times Negro 375Ml \u00b7 Whisky ideal para compartir en shots, en las rocas o mezclado con tu gaseosa favorita.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 9.25, POMASQUI: 9.25, CARCELEN: 9.25 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Old Times Negro 375Ml",
    tag: "destacado",
  },
  {
    id: 112,
    nombre: "OLD TIMES NEGRO 750ML",
    descripcion: "Old Times Negro 750Ml \u00b7 Whisky ideal para compartir en shots, en las rocas o mezclado con tu gaseosa favorita.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 17.00, POMASQUI: 17.00, CARCELEN: 17.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Old Times Negro 750Ml",
    tag: "destacado",
  },
  {
    id: 113,
    nombre: "OLD TIMES ROJO 375ML",
    descripcion: "Old Times Rojo 375Ml \u00b7 Whisky ideal para compartir en shots, en las rocas o mezclado con tu gaseosa favorita.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 8.75, POMASQUI: 8.75, CARCELEN: 8.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Old Times Rojo 375Ml",
    tag: "destacado",
  },
  {
    id: 114,
    nombre: "OLD TIMES ROJO 750ML",
    descripcion: "Old Times Rojo 750Ml \u00b7 Whisky ideal para compartir en shots, en las rocas o mezclado con tu gaseosa favorita.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 14.50, POMASQUI: 14.50, CARCELEN: 14.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Old Times Rojo 750Ml",
    tag: "destacado",
  },
  {
    id: 115,
    nombre: "PANCHITOS",
    descripcion: "Panchitos \u00b7 Snack perfecto para picar mientras disfrutas tus tragos.",
    categoria: "CONFITERIA",
    precios: { PUSUQUI: 0.50, POMASQUI: 0.50, CARCELEN: 0.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Panchitos",
    tag: "destacado",
  },
  {
    id: 116,
    nombre: "PAPAS SIN MARCA",
    descripcion: "Papas Sin Marca \u00b7 Snack perfecto para picar mientras disfrutas tus tragos.",
    categoria: "CONFITERIA",
    precios: { PUSUQUI: 1.25, POMASQUI: 1.25, CARCELEN: 1.25 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Papas Sin Marca",
    tag: "destacado",
  },
  {
    id: 117,
    nombre: "PEPSI 1 LT",
    descripcion: "Pepsi 1 Lt \u00b7 Bebida sin alcohol para mezclar tus tragos o disfrutar bien fr\u00eda.",
    categoria: "BEBIDAS NO ALCOHOLICAS",
    precios: { PUSUQUI: 1.00, POMASQUI: 1.00, CARCELEN: 1.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Pepsi 1 Lt",
    tag: "destacado",
  },
  {
    id: 118,
    nombre: "PEPSI 2LT",
    descripcion: "Pepsi 2Lt \u00b7 Bebida sin alcohol para mezclar tus tragos o disfrutar bien fr\u00eda.",
    categoria: "BEBIDAS NO ALCOHOLICAS",
    precios: { POMASQUI: 1.50 },
    locales: ["POMASQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Pepsi 2Lt",
    tag: "destacado",
  },
  {
    id: 119,
    nombre: "PI\u00d1A COLADA 355ML",
    descripcion: "Pi\u00f1a Colada 355Ml \u00b7 Producto ideal para tus previas y reuniones en La Huequita.",
    categoria: "COCTEL",
    precios: { PUSUQUI: 2.00, POMASQUI: 2.00, CARCELEN: 2.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Pi\u00f1a Colada 355Ml",
    tag: "destacado",
  },
  {
    id: 120,
    nombre: "PI\u00d1A COLADA ZHUMIR 750ML",
    descripcion: "Pi\u00f1a Colada Zhumir 750Ml \u00b7 Producto ideal para tus previas y reuniones en La Huequita.",
    categoria: "COCTEL",
    precios: { PUSUQUI: 14.00, POMASQUI: 14.00 },
    locales: ["POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Pi\u00f1a Colada Zhumir 750Ml",
    tag: "destacado",
  },
  {
    id: 121,
    nombre: "PON PON 375ML",
    descripcion: "Pon Pon 375Ml \u00b7 Ron perfecto para cocteles, cuba libre o para disfrutarlo bien fr\u00edo con tus panas.",
    categoria: "RON",
    precios: { PUSUQUI: 3.25, POMASQUI: 3.25, CARCELEN: 3.25 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Pon Pon 375Ml",
    tag: "destacado",
  },
  {
    id: 122,
    nombre: "PON PON 750ML",
    descripcion: "Pon Pon 750Ml \u00b7 Ron perfecto para cocteles, cuba libre o para disfrutarlo bien fr\u00edo con tus panas.",
    categoria: "RON",
    precios: { PUSUQUI: 6.25, POMASQUI: 6.25, CARCELEN: 6.25 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Pon Pon 750Ml",
    tag: "destacado",
  },
  {
    id: 123,
    nombre: "POWERADE MARACUYA",
    descripcion: "Powerade Maracuya \u00b7 Bebida sin alcohol para mezclar tus tragos o disfrutar bien fr\u00eda.",
    categoria: "BEBIDAS NO ALCOHOLICAS",
    precios: { PUSUQUI: 1.60, POMASQUI: 1.60, CARCELEN: 1.60 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Powerade Maracuya",
    tag: "destacado",
  },
  {
    id: 124,
    nombre: "POWERADE MORAZUL",
    descripcion: "Powerade Morazul \u00b7 Bebida sin alcohol para mezclar tus tragos o disfrutar bien fr\u00eda.",
    categoria: "BEBIDAS NO ALCOHOLICAS",
    precios: { PUSUQUI: 1.60, POMASQUI: 1.60, CARCELEN: 1.60 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Powerade Morazul",
    tag: "destacado",
  },
  {
    id: 125,
    nombre: "POWERADE MZN CLEAR",
    descripcion: "Powerade Mzn Clear \u00b7 Bebida sin alcohol para mezclar tus tragos o disfrutar bien fr\u00eda.",
    categoria: "BEBIDAS NO ALCOHOLICAS",
    precios: { PUSUQUI: 1.60, POMASQUI: 1.60, CARCELEN: 1.60 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Powerade Mzn Clear",
    tag: "destacado",
  },
  {
    id: 126,
    nombre: "POWERADE ROJO",
    descripcion: "Powerade Rojo \u00b7 Bebida sin alcohol para mezclar tus tragos o disfrutar bien fr\u00eda.",
    categoria: "BEBIDAS NO ALCOHOLICAS",
    precios: { PUSUQUI: 1.60, POMASQUI: 1.60, CARCELEN: 1.60 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Powerade Rojo",
    tag: "destacado",
  },
  {
    id: 127,
    nombre: "POZO 250ML",
    descripcion: "Pozo 250Ml \u00b7 Aguardiente para encender la noche, ideal para shots entre amigos.",
    categoria: "AGUARDIENTE",
    precios: { PUSUQUI: 1.25, POMASQUI: 1.25, CARCELEN: 1.25 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Pozo 250Ml",
    tag: "destacado",
  },
  {
    id: 128,
    nombre: "QUINDIANO 350 ML",
    descripcion: "Quindiano 350 Ml \u00b7 Aguardiente para encender la noche, ideal para shots entre amigos.",
    categoria: "AGUARDIENTE",
    precios: { PUSUQUI: 4.50, POMASQUI: 4.50, CARCELEN: 4.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Quindiano 350 Ml",
    tag: "destacado",
  },
  {
    id: 129,
    nombre: "QUINDIANO 750 Ml",
    descripcion: "Quindiano 750 Ml \u00b7 Aguardiente para encender la noche, ideal para shots entre amigos.",
    categoria: "AGUARDIENTE",
    precios: { PUSUQUI: 9.00, POMASQUI: 9.00, CARCELEN: 9.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Quindiano 750 Ml",
    tag: "destacado",
  },
  {
    id: 130,
    nombre: "RON FLOR DE CA\u00d1A BLANCO",
    descripcion: "Ron Flor De Ca\u00f1a Blanco \u00b7 Ron perfecto para cocteles, cuba libre o para disfrutarlo bien fr\u00edo con tus panas.",
    categoria: "RON",
    precios: { PUSUQUI: 21.75, POMASQUI: 21.75, CARCELEN: 21.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Ron Flor De Ca\u00f1a Blanco",
    tag: "destacado",
  },
  {
    id: 131,
    nombre: "RONERO 750ML",
    descripcion: "Ronero 750Ml \u00b7 Ron perfecto para cocteles, cuba libre o para disfrutarlo bien fr\u00edo con tus panas.",
    categoria: "RON",
    precios: { PUSUQUI: 9.25, POMASQUI: 9.25, CARCELEN: 9.25 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Ronero 750Ml",
    tag: "destacado",
  },
  {
    id: 132,
    nombre: "RUSSKAYA 750ML",
    descripcion: "Russkaya 750Ml \u00b7 Producto ideal para tus previas y reuniones en La Huequita.",
    categoria: "VODKA",
    precios: { PUSUQUI: 14.50, POMASQUI: 14.50, CARCELEN: 14.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Russkaya 750Ml",
    tag: "destacado",
  },
  {
    id: 133,
    nombre: "SAN MIGUEL ORO 750ML",
    descripcion: "San Miguel Oro 750Ml \u00b7 Ron perfecto para cocteles, cuba libre o para disfrutarlo bien fr\u00edo con tus panas.",
    categoria: "RON",
    precios: { PUSUQUI: 13.50, POMASQUI: 13.50, CARCELEN: 13.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=San Miguel Oro 750Ml",
    tag: "destacado",
  },
  {
    id: 134,
    nombre: "SAN MIGUEL SILVER PLATA 750ML",
    descripcion: "San Miguel Silver Plata 750Ml \u00b7 Ron perfecto para cocteles, cuba libre o para disfrutarlo bien fr\u00edo con tus panas.",
    categoria: "RON",
    precios: { PUSUQUI: 13.50, POMASQUI: 13.50, CARCELEN: 13.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=San Miguel Silver Plata 750Ml",
    tag: "destacado",
  },
  {
    id: 135,
    nombre: "SANGRIA FIESTA BRAVA 1LT",
    descripcion: "Sangria Fiesta Brava 1Lt \u00b7 Producto ideal para tus previas y reuniones en La Huequita.",
    categoria: "COCTEL",
    precios: { PUSUQUI: 6.70, POMASQUI: 6.70, CARCELEN: 6.70 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Sangria Fiesta Brava 1Lt",
    tag: "destacado",
  },
  {
    id: 136,
    nombre: "SKY 750ML",
    descripcion: "Sky 750Ml \u00b7 Producto ideal para tus previas y reuniones en La Huequita.",
    categoria: "VODKA",
    precios: { PUSUQUI: 20.75, POMASQUI: 20.75, CARCELEN: 20.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Sky 750Ml",
    tag: "destacado",
  },
  {
    id: 137,
    nombre: "SMIRNOFF ROJA 750ML",
    descripcion: "Smirnoff Roja 750Ml \u00b7 Producto ideal para tus previas y reuniones en La Huequita.",
    categoria: "VODKA",
    precios: { PUSUQUI: 21.00, POMASQUI: 21.00, CARCELEN: 21.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Smirnoff Roja 750Ml",
    tag: "destacado",
  },
  {
    id: 138,
    nombre: "SOMETHING SPECIAL 750ML",
    descripcion: "Something Special 750Ml \u00b7 Whisky ideal para compartir en shots, en las rocas o mezclado con tu gaseosa favorita.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 25.00, POMASQUI: 25.00, CARCELEN: 25.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Something Special 750Ml",
    tag: "destacado",
  },
  {
    id: 139,
    nombre: "SPRITE  1.35LT",
    descripcion: "Sprite  1.35Lt \u00b7 Bebida sin alcohol para mezclar tus tragos o disfrutar bien fr\u00eda.",
    categoria: "BEBIDAS NO ALCOHOLICAS",
    precios: { PUSUQUI: 1.60, POMASQUI: 1.60, CARCELEN: 1.60 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Sprite  1.35Lt",
    tag: "destacado",
  },
  {
    id: 140,
    nombre: "SWITCH",
    descripcion: "Switch \u00b7 Producto ideal para tus previas y reuniones en La Huequita.",
    categoria: "VODKA",
    precios: { PUSUQUI: 3.75, POMASQUI: 3.75, CARCELEN: 3.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Switch",
    tag: "destacado",
  },
  {
    id: 141,
    nombre: "TEQUILA AZTECA BLANCO 750ML",
    descripcion: "Tequila Azteca Blanco 750Ml \u00b7 Producto ideal para tus previas y reuniones en La Huequita.",
    categoria: "TEQUILA",
    precios: { PUSUQUI: 20.50, POMASQUI: 20.50, CARCELEN: 20.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Tequila Azteca Blanco 750Ml",
    tag: "destacado",
  },
  {
    id: 142,
    nombre: "TEQUILA CANIJO",
    descripcion: "Tequila Canijo \u00b7 Producto ideal para tus previas y reuniones en La Huequita.",
    categoria: "TEQUILA",
    precios: { PUSUQUI: 25.00, POMASQUI: 25.00, CARCELEN: 25.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Tequila Canijo",
    tag: "destacado",
  },
  {
    id: 143,
    nombre: "TEQUILA COYOTE",
    descripcion: "Tequila Coyote \u00b7 Producto ideal para tus previas y reuniones en La Huequita.",
    categoria: "TEQUILA",
    precios: { PUSUQUI: 16.50, POMASQUI: 16.50, CARCELEN: 16.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Tequila Coyote",
    tag: "destacado",
  },
  {
    id: 144,
    nombre: "TEQUILA EL CHARRO 750ML",
    descripcion: "Tequila El Charro 750Ml \u00b7 Producto ideal para tus previas y reuniones en La Huequita.",
    categoria: "TEQUILA",
    precios: { PUSUQUI: 21.75, POMASQUI: 21.75, CARCELEN: 21.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Tequila El Charro 750Ml",
    tag: "destacado",
  },
  {
    id: 145,
    nombre: "TEQUILA EL GRAN MALO 750ML",
    descripcion: "Tequila El Gran Malo 750Ml \u00b7 Producto ideal para tus previas y reuniones en La Huequita.",
    categoria: "TEQUILA",
    precios: { PUSUQUI: 45.00, POMASQUI: 45.00, CARCELEN: 45.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Tequila El Gran Malo 750Ml",
    tag: "destacado",
  },
  {
    id: 146,
    nombre: "TRANSPPRTE",
    descripcion: "Transpprte \u00b7 Producto ideal para tus previas y reuniones en La Huequita.",
    categoria: "VARIOS",
    precios: { PUSUQUI: 0.05, POMASQUI: 0.05 },
    locales: ["POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Transpprte",
    tag: "destacado",
  },
  {
    id: 147,
    nombre: "TRIDENT UNIDAD",
    descripcion: "Trident Unidad \u00b7 Snack perfecto para picar mientras disfrutas tus tragos.",
    categoria: "CONFITERIA",
    precios: { PUSUQUI: 0.15, POMASQUI: 0.15, CARCELEN: 0.15 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Trident Unidad",
    tag: "destacado",
  },
  {
    id: 148,
    nombre: "TRIDENT X3 SURTIDO",
    descripcion: "Trident X3 Surtido \u00b7 Snack perfecto para picar mientras disfrutas tus tragos.",
    categoria: "CONFITERIA",
    precios: { PUSUQUI: 0.40, POMASQUI: 0.40, CARCELEN: 0.40 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Trident X3 Surtido",
    tag: "destacado",
  },
  {
    id: 149,
    nombre: "TRIDENT X6 SURTIDO",
    descripcion: "Trident X6 Surtido \u00b7 Snack perfecto para picar mientras disfrutas tus tragos.",
    categoria: "CONFITERIA",
    precios: { PUSUQUI: 0.75, POMASQUI: 0.75, CARCELEN: 0.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Trident X6 Surtido",
    tag: "destacado",
  },
  {
    id: 150,
    nombre: "TROPICO 375ML",
    descripcion: "Tropico 375Ml \u00b7 Aguardiente para encender la noche, ideal para shots entre amigos.",
    categoria: "AGUARDIENTE",
    precios: { PUSUQUI: 4.75, POMASQUI: 4.75, CARCELEN: 4.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Tropico 375Ml",
    tag: "destacado",
  },
  {
    id: 151,
    nombre: "TROPICO 750ML",
    descripcion: "Tropico 750Ml \u00b7 Aguardiente para encender la noche, ideal para shots entre amigos.",
    categoria: "AGUARDIENTE",
    precios: { PUSUQUI: 9.25, POMASQUI: 9.25, CARCELEN: 9.25 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Tropico 750Ml",
    tag: "destacado",
  },
  {
    id: 152,
    nombre: "TUMIX SANDIA",
    descripcion: "Tumix Sandia \u00b7 Snack perfecto para picar mientras disfrutas tus tragos.",
    categoria: "CONFITERIA",
    precios: { PUSUQUI: 0.40, CARCELEN: 0.40 },
    locales: ["CARCELEN", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Tumix Sandia",
    tag: "destacado",
  },
  {
    id: 153,
    nombre: "V220",
    descripcion: "V220 \u00b7 Bebida sin alcohol para mezclar tus tragos o disfrutar bien fr\u00eda.",
    categoria: "BEBIDAS NO ALCOHOLICAS",
    precios: { PUSUQUI: 1.60, POMASQUI: 1.60, CARCELEN: 1.60 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=V220",
    tag: "destacado",
  },
  {
    id: 154,
    nombre: "V220 330ML",
    descripcion: "V220 330Ml \u00b7 Bebida sin alcohol para mezclar tus tragos o disfrutar bien fr\u00eda.",
    categoria: "BEBIDAS NO ALCOHOLICAS",
    precios: { POMASQUI: 0.75 },
    locales: ["POMASQUI"],
    imagen: "https://via.placeholder.com/200x260?text=V220 330Ml",
    tag: "destacado",
  },
  {
    id: 155,
    nombre: "VAT 69 750ML",
    descripcion: "Vat 69 750Ml \u00b7 Whisky ideal para compartir en shots, en las rocas o mezclado con tu gaseosa favorita.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 18.00, POMASQUI: 18.00, CARCELEN: 18.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Vat 69 750Ml",
    tag: "destacado",
  },
  {
    id: 156,
    nombre: "VENETTO",
    descripcion: "Venetto \u00b7 Producto ideal para tus previas y reuniones en La Huequita.",
    categoria: "COCTEL",
    precios: { PUSUQUI: 3.50, POMASQUI: 3.50, CARCELEN: 3.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Venetto",
    tag: "destacado",
  },
  {
    id: 157,
    nombre: "VIEJO DE CALDAS 750ML",
    descripcion: "Viejo De Caldas 750Ml \u00b7 Ron perfecto para cocteles, cuba libre o para disfrutarlo bien fr\u00edo con tus panas.",
    categoria: "RON",
    precios: { PUSUQUI: 17.50, POMASQUI: 17.50, CARCELEN: 17.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Viejo De Caldas 750Ml",
    tag: "destacado",
  },
  {
    id: 158,
    nombre: "VINO MIRAFLORES",
    descripcion: "Vino Miraflores \u00b7 Vino para brindar y acompa\u00f1ar tus comidas o momentos especiales.",
    categoria: "VINO",
    precios: { PUSUQUI: 9.00, POMASQUI: 9.00, CARCELEN: 9.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Vino Miraflores",
    tag: "destacado",
  },
  {
    id: 159,
    nombre: "VINO SAVIONE",
    descripcion: "Vino Savione \u00b7 Vino para brindar y acompa\u00f1ar tus comidas o momentos especiales.",
    categoria: "VINO",
    precios: { PUSUQUI: 10.50 },
    locales: ["PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Vino Savione",
    tag: "destacado",
  },
  {
    id: 160,
    nombre: "VODKA 40 750ML",
    descripcion: "Vodka 40 750Ml \u00b7 Producto ideal para tus previas y reuniones en La Huequita.",
    categoria: "VODKA",
    precios: { PUSUQUI: 6.25 },
    locales: ["PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Vodka 40 750Ml",
    tag: "destacado",
  },
  {
    id: 161,
    nombre: "VODKA ROMANOSKI",
    descripcion: "Vodka Romanoski \u00b7 Producto ideal para tus previas y reuniones en La Huequita.",
    categoria: "VODKA",
    precios: { PUSUQUI: 13.00, POMASQUI: 13.00, CARCELEN: 13.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Vodka Romanoski",
    tag: "destacado",
  },
  {
    id: 162,
    nombre: "WILD SEX ON THE BEACH",
    descripcion: "Wild Sex On The Beach \u00b7 Producto ideal para tus previas y reuniones en La Huequita.",
    categoria: "COCTEL",
    precios: { PUSUQUI: 2.00, POMASQUI: 2.00, CARCELEN: 2.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Wild Sex On The Beach",
    tag: "destacado",
  },
  {
    id: 163,
    nombre: "ZHUMIR AGUARDIENTE 700ML",
    descripcion: "Zhumir Aguardiente 700Ml \u00b7 Producto ideal para tus previas y reuniones en La Huequita.",
    categoria: "ZHUMIR",
    precios: { PUSUQUI: 11.00, POMASQUI: 11.00, CARCELEN: 11.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Zhumir Aguardiente 700Ml",
    tag: "destacado",
  },
  {
    id: 164,
    nombre: "ZHUMIR CITRUS PINK 700ML",
    descripcion: "Zhumir Citrus Pink 700Ml \u00b7 Producto ideal para tus previas y reuniones en La Huequita.",
    categoria: "ZHUMIR",
    precios: { PUSUQUI: 8.25, POMASQUI: 8.25, CARCELEN: 8.25 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Zhumir Citrus Pink 700Ml",
    tag: "destacado",
  },
  {
    id: 165,
    nombre: "ZHUMIR COCO 700ML",
    descripcion: "Zhumir Coco 700Ml \u00b7 Producto ideal para tus previas y reuniones en La Huequita.",
    categoria: "ZHUMIR",
    precios: { PUSUQUI: 8.25, POMASQUI: 8.25, CARCELEN: 8.25 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Zhumir Coco 700Ml",
    tag: "destacado",
  },
  {
    id: 166,
    nombre: "ZHUMIR DURAZNO 375ML",
    descripcion: "Zhumir Durazno 375Ml \u00b7 Producto ideal para tus previas y reuniones en La Huequita.",
    categoria: "ZHUMIR",
    precios: { PUSUQUI: 4.75, POMASQUI: 4.75, CARCELEN: 4.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Zhumir Durazno 375Ml",
    tag: "destacado",
  },
  {
    id: 167,
    nombre: "ZHUMIR DURAZNO 700ML",
    descripcion: "Zhumir Durazno 700Ml \u00b7 Producto ideal para tus previas y reuniones en La Huequita.",
    categoria: "ZHUMIR",
    precios: { PUSUQUI: 8.25, POMASQUI: 8.25, CARCELEN: 8.25 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Zhumir Durazno 700Ml",
    tag: "destacado",
  },
  {
    id: 168,
    nombre: "ZHUMIR MANGO 700ML",
    descripcion: "Zhumir Mango 700Ml \u00b7 Producto ideal para tus previas y reuniones en La Huequita.",
    categoria: "ZHUMIR",
    precios: { PUSUQUI: 8.25, POMASQUI: 8.25, CARCELEN: 8.25 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Zhumir Mango 700Ml",
    tag: "destacado",
  },
  {
    id: 169,
    nombre: "ZHUMIR NARANJILLA 375ML",
    descripcion: "Zhumir Naranjilla 375Ml \u00b7 Producto ideal para tus previas y reuniones en La Huequita.",
    categoria: "ZHUMIR",
    precios: { PUSUQUI: 4.75, POMASQUI: 4.75, CARCELEN: 4.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Zhumir Naranjilla 375Ml",
    tag: "destacado",
  },
  {
    id: 170,
    nombre: "ZHUMIR NARANJILLA 750",
    descripcion: "Zhumir Naranjilla 750 \u00b7 Producto ideal para tus previas y reuniones en La Huequita.",
    categoria: "ZHUMIR",
    precios: { PUSUQUI: 8.25, POMASQUI: 8.25, CARCELEN: 8.25 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Zhumir Naranjilla 750",
    tag: "destacado",
  },
  {
    id: 171,
    nombre: "ZHUMIR SANDIA PINK 750ML",
    descripcion: "Zhumir Sandia Pink 750Ml \u00b7 Producto ideal para tus previas y reuniones en La Huequita.",
    categoria: "ZHUMIR",
    precios: { PUSUQUI: 11.50, CARCELEN: 11.50 },
    locales: ["CARCELEN", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Zhumir Sandia Pink 750Ml",
    tag: "destacado",
  },
  {
    id: 172,
    nombre: "ZHUMIR SECO 350ML",
    descripcion: "Zhumir Seco 350Ml \u00b7 Producto ideal para tus previas y reuniones en La Huequita.",
    categoria: "ZHUMIR",
    precios: { PUSUQUI: 4.75, POMASQUI: 4.75, CARCELEN: 4.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Zhumir Seco 350Ml",
    tag: "destacado",
  },
  {
    id: 173,
    nombre: "ZHUMIR SECO 700ML",
    descripcion: "Zhumir Seco 700Ml \u00b7 Producto ideal para tus previas y reuniones en La Huequita.",
    categoria: "ZHUMIR",
    precios: { PUSUQUI: 8.25, POMASQUI: 8.25, CARCELEN: 8.25 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260?text=Zhumir Seco 700Ml",
    tag: "destacado",
  },
];


// ==========================
// UTILIDADES
// ==========================
function getLocalLabel(id) {
  const loc = LOCALES.find((l) => l.id === id);
  return loc ? loc.label : id;
}

function openWhatsapp() {
  const text = encodeURIComponent(
    "Hola, vengo de la web de La Huequita Quiteña y quiero hacer un pedido 🍾"
  );
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
}

// ==========================
// CHATBOT
// ==========================
function toggleChatbot() {
  const win = document.getElementById("chatbot-window");
  if (!win) return;
  const isVisible = win.style.display === "flex";
  win.style.display = isVisible ? "none" : "flex";
}

function sendChatbotForm(event) {
  event.preventDefault();
  const nombre = document.getElementById("cb-nombre")?.value || "";
  const whatsapp = document.getElementById("cb-whatsapp")?.value || "";
  const mensaje = document.getElementById("cb-mensaje")?.value || "";

  if (!whatsapp || !mensaje) {
    alert("Por favor llena al menos WhatsApp y el mensaje 🙏");
    return false;
  }

  const texto = encodeURIComponent(
    `Hola, soy ${nombre || "un cliente"} y vengo del chatbot de la web:\n` +
    `📱 WhatsApp: ${whatsapp}\n` +
    `🗺️ Sucursal seleccionada: ${getLocalLabel(activeLocal)}\n` +
    `📝 Pedido / consulta: ${mensaje}`
  );

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${texto}`, "_blank");
  alert("Te vamos a responder por WhatsApp en breve 💚");
  toggleChatbot();
  return false;
}

window.toggleChatbot = toggleChatbot;
window.sendChatbotForm = sendChatbotForm;
window.openWhatsapp = openWhatsapp;

// ==========================
// POPUP MAYOR DE EDAD
// ==========================
function acceptAge() {
  const modal = document.getElementById("age-modal");
  const storeSelectPopup = document.getElementById("store-select");
  const localSelectToolbar = document.getElementById("local-select");

  if (storeSelectPopup) {
    activeLocal = storeSelectPopup.value;
    localStorage.setItem("huequita_local", activeLocal);
    if (localSelectToolbar) localSelectToolbar.value = activeLocal;
  }
  if (modal) modal.style.display = "none";
  renderProducts();
}

function rejectAge() {
  alert("Lo sentimos, debes ser mayor de edad para ingresar 🍾");
  window.location.href = "https://google.com";
}

window.acceptAge = acceptAge;
window.rejectAge = rejectAge;

// ==========================
// CATEGORÍAS
// ==========================
const categoriesContainer = document.getElementById("categories");
const searchBox = document.getElementById("search-box");
const productsGrid = document.getElementById("products-grid");
const tabs = document.querySelectorAll(".section-tab");
const yearSpan = document.getElementById("year");
const cartPill = document.getElementById("cart-pill");
const localSelectToolbar = document.getElementById("local-select");
const storeSelectPopup = document.getElementById("store-select");

let activeCategory = "Todos";
let activeTabFilter = "destacados";

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
      document.querySelectorAll(".category-chip").forEach((c) => c.classList.remove("active"));
      btn.classList.add("active");
      renderProducts();
    });
    categoriesContainer.appendChild(btn);
  });
}

// ==========================
// RENDER DE PRODUCTOS
// ==========================
function renderProducts() {
  if (!productsGrid) return;
  const search = (searchBox?.value || "").trim().toLowerCase();
  productsGrid.innerHTML = "";

  const filtered = products.filter((p) => {
    const matchesLocal = !p.locales || p.locales.includes(activeLocal);
    const matchesCategory =
      activeCategory === "Todos" || p.categoria === activeCategory;
    const matchesTab =
      !activeTabFilter ||
      (activeTabFilter === "destacados" && p.tag === "destacado") ||
      (activeTabFilter === "nuevos" && p.tag === "nuevos") ||
      (activeTabFilter === "masvendidos" && p.tag === "masvendido");
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

    const badge = document.createElement("div");
    badge.className = "product-badge";
    if (p.tag === "masvendido") badge.classList.add("product-badge--hot");
    let badgeText = "";
    if (p.tag === "destacado") badgeText = "DESTACADO";
    if (p.tag === "nuevos") badgeText = "NUEVO";
    if (p.tag === "masvendido") badgeText = "MÁS VENDIDO";
    badge.textContent = badgeText || "DISPONIBLE";

    const imgWrap = document.createElement("div");
    imgWrap.className = "product-image-wrap";

    const img = document.createElement("img");
    img.className = "product-image";
    img.src = p.imagen;
    img.alt = p.nombre;
    imgWrap.appendChild(img);

    const title = document.createElement("h3");
    title.className = "product-title";
    title.textContent = p.nombre;

    const desc = document.createElement("p");
    desc.className = "product-desc";
    desc.textContent = p.descripcion || "";

    const meta = document.createElement("div");
    meta.className = "product-meta";

    const price = document.createElement("div");
    price.className = "product-price";

    const priceForLocal = p.precios?.[activeLocal];
    const priceText = priceForLocal ? `$ ${priceForLocal.toFixed(2)}` : "No disponible";

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

    card.appendChild(badge);
    card.appendChild(imgWrap);
    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(meta);
    card.appendChild(actions);

    productsGrid.appendChild(card);
  });
}

// ==========================
// EVENTOS INICIALES
// ==========================
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    activeTabFilter = tab.dataset.filterTab;
    renderProducts();
  });
});

if (searchBox) {
  searchBox.addEventListener("input", () => {
    renderProducts();
  });
}

if (cartPill) {
  cartPill.addEventListener("click", () => {
    alert("Por ahora los pedidos se gestionan por WhatsApp 💚");
  });
}

if (localSelectToolbar) {
  localSelectToolbar.addEventListener("change", () => {
    activeLocal = localSelectToolbar.value;
    localStorage.setItem("huequita_local", activeLocal);
    if (storeSelectPopup) storeSelectPopup.value = activeLocal;
    renderProducts();
  });
}

if (storeSelectPopup) {
  storeSelectPopup.addEventListener("change", () => {
    activeLocal = storeSelectPopup.value;
  });
}

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Render inicial
renderCategories();
renderProducts();
