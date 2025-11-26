// Configuración básica
const WHATSAPP_NUMBER = "593982230393"; // tu número en formato internacional

const LOCALES = [
  { id: "PUSUQUI", label: "La Huequita – Pusuqui" },
  { id: "POMASQUI", label: "La Huequita – Pomasqui" },
  { id: "CARCELEN", label: "La Huequita – Carcelen" },
];

let activeLocal = localStorage.getItem("huequita_local") || "PUSUQUI";
// Leer categoría desde la URL (?categoria=RON, ?categoria=CERVEZA, etc.)
const params = new URLSearchParams(window.location.search);
let activeCategory = params.get("categoria") || "Todos";

let activeTabFilter = "destacados";


const products = [
  {
    id: 1,
    nombre: "100 FUEGOS 375ML",
    descripcion: "Ron ideal para preparar tragos y compartir en La Huequita. Presentación pequeña, ideal para grupos reducidos.",
    categoria: "RON",
    precios: { PUSUQUI: 9.25, POMASQUI: 9.25, CARCELEN: 9.25 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=100+FUEGOS+375ML",
    tag: "destacado",
  },
  {
    id: 2,
    nombre: "100 FUEGOS 750ML",
    descripcion: "Ron ideal para preparar tragos y compartir en La Huequita. Botella de tamaño estándar para compartir en la noche.",
    categoria: "RON",
    precios: { PUSUQUI: 16.50, POMASQUI: 16.50, CARCELEN: 16.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=100+FUEGOS+750ML",
    tag: "destacado",
  },
  {
    id: 3,
    nombre: "100 FUEGOS LATA 350ML",
    descripcion: "Ron ideal para preparar tragos y compartir en La Huequita. Presentación pequeña, ideal para grupos reducidos. Formato en lata, fácil de llevar y servir.",
    categoria: "RON",
    precios: { PUSUQUI: 2.50, POMASQUI: 2.50, CARCELEN: 2.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=100+FUEGOS+LATA+350ML",
    tag: "destacado",
  },
  {
    id: 4,
    nombre: "ABUELO 375ML",
    descripcion: "Ron ideal para preparar tragos y compartir en La Huequita. Presentación pequeña, ideal para grupos reducidos.",
    categoria: "RON",
    precios: { PUSUQUI: 8.25, POMASQUI: 8.25, CARCELEN: 8.25 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=ABUELO+375ML",
    tag: "destacado",
  },
  {
    id: 5,
    nombre: "ABUELO 750ML",
    descripcion: "Ron ideal para preparar tragos y compartir en La Huequita. Botella de tamaño estándar para compartir en la noche.",
    categoria: "RON",
    precios: { PUSUQUI: 16.00, POMASQUI: 16.00, CARCELEN: 16.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=ABUELO+750ML",
    tag: "destacado",
  },
  {
    id: 6,
    nombre: "AGOGO MENTA COOL GRANDE",
    descripcion: "Snacks dulces para picar mientras disfrutas.",
    categoria: "CONFITERIA",
    precios: { PUSUQUI: 0.40, POMASQUI: 0.40, CARCELEN: 0.40 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=AGOGO+MENTA+COOL+GRANDE",
    tag: "destacado",
  },
  {
    id: 7,
    nombre: "AGOGO MENTA COOL PEQUEÑO",
    descripcion: "Snacks dulces para picar mientras disfrutas.",
    categoria: "CONFITERIA",
    precios: { PUSUQUI: 0.25, POMASQUI: null, CARCELEN: 0.25 },
    locales: ["CARCELEN", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=AGOGO+MENTA+COOL+PEQUE%C3%91O",
    tag: "destacado",
  },
  {
    id: 8,
    nombre: "AGUA CIELO 1LT",
    descripcion: "Bebida sin alcohol ideal para mezclar o refrescar. Botella de tamaño estándar para compartir en la noche.",
    categoria: "BEBIDAS NO ALCOHOLICAS",
    precios: { PUSUQUI: 1.00, POMASQUI: 1.00, CARCELEN: 1.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=AGUA+CIELO+1LT",
    tag: "destacado",
  },
  {
    id: 9,
    nombre: "AGUA CIELO PEQUEÑA",
    descripcion: "Bebida sin alcohol ideal para mezclar o refrescar.",
    categoria: "BEBIDAS NO ALCOHOLICAS",
    precios: { PUSUQUI: 0.50, POMASQUI: 0.50, CARCELEN: 0.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=AGUA+CIELO+PEQUE%C3%91A",
    tag: "destacado",
  },
  {
    id: 10,
    nombre: "AGUA TONICA",
    descripcion: "Bebida sin alcohol ideal para mezclar o refrescar.",
    categoria: "BEBIDAS NO ALCOHOLICAS",
    precios: { PUSUQUI: 3.25, POMASQUI: 3.25, CARCELEN: 3.25 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=AGUA+TONICA",
    tag: "destacado",
  },
  {
    id: 11,
    nombre: "AGUARDIENTE AMARILLO",
    descripcion: "Aguardiente tradicional para compartir en grupo.",
    categoria: "AGUARDIENTE",
    precios: { PUSUQUI: 20.00, POMASQUI: 20.00, CARCELEN: 20.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=AGUARDIENTE+AMARILLO",
    tag: "destacado",
  },
  {
    id: 12,
    nombre: "AGUARDIENTE AMARILLO 1LT",
    descripcion: "Aguardiente tradicional para compartir en grupo. Botella de tamaño estándar para compartir en la noche.",
    categoria: "AGUARDIENTE",
    precios: { PUSUQUI: 25.00, POMASQUI: 25.00, CARCELEN: 25.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=AGUARDIENTE+AMARILLO+1LT",
    tag: "destacado",
  },
  {
    id: 13,
    nombre: "AGUARDIENTE DON COCO",
    descripcion: "Aguardiente tradicional para compartir en grupo.",
    categoria: "AGUARDIENTE",
    precios: { PUSUQUI: 11.00, POMASQUI: 11.00, CARCELEN: 11.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=AGUARDIENTE+DON+COCO",
    tag: "destacado",
  },
  {
    id: 14,
    nombre: "AGUARDIENTE MEDALLO",
    descripcion: "Aguardiente tradicional para compartir en grupo.",
    categoria: "AGUARDIENTE",
    precios: { PUSUQUI: 14.00, POMASQUI: 14.00, CARCELEN: 14.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=AGUARDIENTE+MEDALLO",
    tag: "destacado",
  },
  {
    id: 15,
    nombre: "AGUARDIENTE POZO 350ML",
    descripcion: "Aguardiente tradicional para compartir en grupo. Presentación pequeña, ideal para grupos reducidos.",
    categoria: "AGUARDIENTE",
    precios: { PUSUQUI: 2.50, POMASQUI: 2.50, CARCELEN: 2.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=AGUARDIENTE+POZO+350ML",
    tag: "destacado",
  },
  {
    id: 16,
    nombre: "AMPER",
    descripcion: "Bebida sin alcohol ideal para mezclar o refrescar.",
    categoria: "BEBIDAS NO ALCOHOLICAS",
    precios: { PUSUQUI: 1.70, POMASQUI: 1.70, CARCELEN: 1.70 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=AMPER",
    tag: "destacado",
  },
  {
    id: 17,
    nombre: "ANTHONY FRESA 750ML",
    descripcion: "Vino perfecto para acompañar comidas o una buena charla. Botella de tamaño estándar para compartir en la noche.",
    categoria: "VINO",
    precios: { PUSUQUI: 10.50, POMASQUI: 10.50, CARCELEN: 10.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=ANTHONY+FRESA+750ML",
    tag: "destacado",
  },
  {
    id: 18,
    nombre: "ANTHONY LATA",
    descripcion: "Vino perfecto para acompañar comidas o una buena charla. Formato en lata, fácil de llevar y servir.",
    categoria: "VINO",
    precios: { PUSUQUI: 2.50, POMASQUI: 2.50, CARCELEN: 2.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=ANTHONY+LATA",
    tag: "destacado",
  },
  {
    id: 19,
    nombre: "ANTIOQUEÑO 1LT",
    descripcion: "Aguardiente tradicional para compartir en grupo. Botella de tamaño estándar para compartir en la noche.",
    categoria: "AGUARDIENTE",
    precios: { PUSUQUI: 25.70, POMASQUI: 25.70, CARCELEN: 25.70 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=ANTIOQUE%C3%91O+1LT",
    tag: "destacado",
  },
  {
    id: 20,
    nombre: "ANTIOQUEÑO 375ML",
    descripcion: "Aguardiente tradicional para compartir en grupo. Presentación pequeña, ideal para grupos reducidos.",
    categoria: "AGUARDIENTE",
    precios: { PUSUQUI: 12.50, POMASQUI: 12.50, CARCELEN: 12.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=ANTIOQUE%C3%91O+375ML",
    tag: "destacado",
  },
  {
    id: 21,
    nombre: "ANTIOQUEÑO 750ML",
    descripcion: "Aguardiente tradicional para compartir en grupo. Botella de tamaño estándar para compartir en la noche.",
    categoria: "AGUARDIENTE",
    precios: { PUSUQUI: 20.75, POMASQUI: 20.75, CARCELEN: 20.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=ANTIOQUE%C3%91O+750ML",
    tag: "destacado",
  },
  {
    id: 22,
    nombre: "BACARDI BLANCO 980ML",
    descripcion: "Ron ideal para preparar tragos y compartir en La Huequita.",
    categoria: "RON",
    precios: { PUSUQUI: 22.75, POMASQUI: 22.75, CARCELEN: 22.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=BACARDI+BLANCO+980ML",
    tag: "destacado",
  },
  {
    id: 23,
    nombre: "BALDORE  DURAZNO BAG IN BOX 600ML",
    descripcion: "Vino perfecto para acompañar comidas o una buena charla.",
    categoria: "VINO",
    precios: { PUSUQUI: 3.00, POMASQUI: 3.00, CARCELEN: 3.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=BALDORE++DURAZNO+BAG+IN+BOX+600ML",
    tag: "destacado",
  },
  {
    id: 24,
    nombre: "BALLANTINES 700ML",
    descripcion: "Whisky para disfrutar solo, en las rocas o con tu mixer favorito. Botella de tamaño estándar para compartir en la noche.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 22.75, POMASQUI: 22.75, CARCELEN: 22.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=BALLANTINES+700ML",
    tag: "destacado",
  },
  {
    id: 25,
    nombre: "BELLOWS 750ML",
    descripcion: "Whisky para disfrutar solo, en las rocas o con tu mixer favorito. Botella de tamaño estándar para compartir en la noche.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 15.50, POMASQUI: 15.50, CARCELEN: 15.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=BELLOWS+750ML",
    tag: "destacado",
  },
  {
    id: 26,
    nombre: "BLACK AND WHITE 750ML",
    descripcion: "Whisky para disfrutar solo, en las rocas o con tu mixer favorito. Botella de tamaño estándar para compartir en la noche.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 24.75, POMASQUI: 24.75, CARCELEN: 24.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=BLACK+AND+WHITE+750ML",
    tag: "destacado",
  },
  {
    id: 27,
    nombre: "BLACK CASTLE NEGRO 750ML",
    descripcion: "Whisky para disfrutar solo, en las rocas o con tu mixer favorito. Botella de tamaño estándar para compartir en la noche.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 16.00, POMASQUI: 16.00, CARCELEN: 16.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=BLACK+CASTLE+NEGRO+750ML",
    tag: "destacado",
  },
  {
    id: 28,
    nombre: "BLACK CASTLE ROJO 750ML",
    descripcion: "Whisky para disfrutar solo, en las rocas o con tu mixer favorito. Botella de tamaño estándar para compartir en la noche.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 17.00, POMASQUI: 17.00, CARCELEN: 17.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=BLACK+CASTLE+ROJO+750ML",
    tag: "destacado",
  },
  {
    id: 29,
    nombre: "BLACK KING 750ML",
    descripcion: "Whisky para disfrutar solo, en las rocas o con tu mixer favorito. Botella de tamaño estándar para compartir en la noche.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 11.50, POMASQUI: 11.50, CARCELEN: 11.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=BLACK+KING+750ML",
    tag: "destacado",
  },
  {
    id: 30,
    nombre: "BLACK OWL 750ML",
    descripcion: "Whisky para disfrutar solo, en las rocas o con tu mixer favorito. Botella de tamaño estándar para compartir en la noche.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 18.00, POMASQUI: 18.00, CARCELEN: 18.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=BLACK+OWL+750ML",
    tag: "destacado",
  },
  {
    id: 31,
    nombre: "BLACK OWL FIRE 750ML",
    descripcion: "Whisky para disfrutar solo, en las rocas o con tu mixer favorito. Botella de tamaño estándar para compartir en la noche.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 18.00, POMASQUI: 18.00, CARCELEN: 18.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=BLACK+OWL+FIRE+750ML",
    tag: "destacado",
  },
  {
    id: 32,
    nombre: "BOTELLA LT",
    descripcion: "Cerveza bien fría para acompañar la previa o la madrugada.",
    categoria: "CERVEZA",
    precios: { PUSUQUI: 0.30, POMASQUI: 0.30, CARCELEN: 0.30 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=BOTELLA+LT",
    tag: "destacado",
  },
  {
    id: 33,
    nombre: "BUCHANANS 750ML",
    descripcion: "Whisky para disfrutar solo, en las rocas o con tu mixer favorito. Botella de tamaño estándar para compartir en la noche.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 74.00, POMASQUI: 74.00, CARCELEN: 74.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=BUCHANANS+750ML",
    tag: "destacado",
  },
  {
    id: 34,
    nombre: "CANTACLARO 385ML",
    descripcion: "Aguardiente tradicional para compartir en grupo.",
    categoria: "AGUARDIENTE",
    precios: { PUSUQUI: 4.50, POMASQUI: 4.50, CARCELEN: 4.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=CANTACLARO+385ML",
    tag: "destacado",
  },
  {
    id: 35,
    nombre: "CANTACLARO 750 ML",
    descripcion: "Aguardiente tradicional para compartir en grupo. Botella de tamaño estándar para compartir en la noche.",
    categoria: "AGUARDIENTE",
    precios: { PUSUQUI: 9.25, POMASQUI: 9.25, CARCELEN: 9.25 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=CANTACLARO+750+ML",
    tag: "destacado",
  },
  {
    id: 36,
    nombre: "CARNIVAL",
    descripcion: "Cigarrillos para complementar tu noche de fiesta.",
    categoria: "CIGARRILLOS",
    precios: { PUSUQUI: 0.30, POMASQUI: 0.30, CARCELEN: 0.30 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=CARNIVAL",
    tag: "destacado",
  },
  {
    id: 37,
    nombre: "CASILLERO DEL DIABLO 750ML",
    descripcion: "Vino perfecto para acompañar comidas o una buena charla. Botella de tamaño estándar para compartir en la noche.",
    categoria: "VINO",
    precios: { PUSUQUI: 26.75, POMASQUI: 26.75, CARCELEN: 26.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=CASILLERO+DEL+DIABLO+750ML",
    tag: "destacado",
  },
  {
    id: 38,
    nombre: "CASTILLO AÑEJO 750ML",
    descripcion: "Ron ideal para preparar tragos y compartir en La Huequita. Botella de tamaño estándar para compartir en la noche.",
    categoria: "RON",
    precios: { PUSUQUI: 14.50, POMASQUI: 14.50, CARCELEN: 14.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=CASTILLO+A%C3%91EJO+750ML",
    tag: "destacado",
  },
  {
    id: 39,
    nombre: "CAÑA BLANCA 750ML",
    descripcion: "Ron ideal para preparar tragos y compartir en La Huequita. Botella de tamaño estándar para compartir en la noche.",
    categoria: "RON",
    precios: { PUSUQUI: 11.00, POMASQUI: 11.00, CARCELEN: 11.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=CA%C3%91A+BLANCA+750ML",
    tag: "destacado",
  },
  {
    id: 40,
    nombre: "CAÑA MANABITA 375ML",
    descripcion: "Aguardiente tradicional para compartir en grupo. Presentación pequeña, ideal para grupos reducidos.",
    categoria: "AGUARDIENTE",
    precios: { PUSUQUI: 6.25, POMASQUI: 6.25, CARCELEN: 6.25 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=CA%C3%91A+MANABITA+375ML",
    tag: "destacado",
  },
  {
    id: 41,
    nombre: "CAÑA MANABITA 750ML",
    descripcion: "Aguardiente tradicional para compartir en grupo. Botella de tamaño estándar para compartir en la noche.",
    categoria: "AGUARDIENTE",
    precios: { PUSUQUI: 12.00, POMASQUI: 12.00, CARCELEN: 12.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=CA%C3%91A+MANABITA+750ML",
    tag: "destacado",
  },
  {
    id: 42,
    nombre: "CERVEZA CLUB 1LT",
    descripcion: "Cerveza bien fría para acompañar la previa o la madrugada. Botella de tamaño estándar para compartir en la noche.",
    categoria: "CERVEZA",
    precios: { PUSUQUI: 2.90, POMASQUI: 2.90, CARCELEN: 2.90 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=CERVEZA+CLUB+1LT",
    tag: "destacado",
  },
  {
    id: 43,
    nombre: "CERVEZA CLUB LATA",
    descripcion: "Cerveza bien fría para acompañar la previa o la madrugada. Formato en lata, fácil de llevar y servir.",
    categoria: "CERVEZA",
    precios: { PUSUQUI: 2.00, POMASQUI: 2.00, CARCELEN: 2.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=CERVEZA+CLUB+LATA",
    tag: "destacado",
  },
  {
    id: 44,
    nombre: "CERVEZA CLUB LATA 473CC",
    descripcion: "Cerveza bien fría para acompañar la previa o la madrugada. Formato en lata, fácil de llevar y servir.",
    categoria: "CERVEZA",
    precios: { PUSUQUI: 2.50, POMASQUI: 2.50, CARCELEN: 2.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=CERVEZA+CLUB+LATA+473CC",
    tag: "destacado",
  },
  {
    id: 45,
    nombre: "CERVEZA CLUB PEQUEÑA 330CC",
    descripcion: "Cerveza bien fría para acompañar la previa o la madrugada.",
    categoria: "CERVEZA",
    precios: { PUSUQUI: 2.00, POMASQUI: 2.00, CARCELEN: 2.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=CERVEZA+CLUB+PEQUE%C3%91A+330CC",
    tag: "destacado",
  },
  {
    id: 46,
    nombre: "CERVEZA CORONA 355CC",
    descripcion: "Cerveza bien fría para acompañar la previa o la madrugada.",
    categoria: "CERVEZA",
    precios: { PUSUQUI: 2.60, POMASQUI: 2.60, CARCELEN: 2.60 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=CERVEZA+CORONA+355CC",
    tag: "destacado",
  },
  {
    id: 47,
    nombre: "CERVEZA PILSENER 1LT",
    descripcion: "Cerveza bien fría para acompañar la previa o la madrugada. Botella de tamaño estándar para compartir en la noche.",
    categoria: "CERVEZA",
    precios: { PUSUQUI: 2.85, POMASQUI: 2.85, CARCELEN: 2.85 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=CERVEZA+PILSENER+1LT",
    tag: "destacado",
  },
  {
    id: 48,
    nombre: "CERVEZA PILSENER LATA PEQUEÑA 269CC",
    descripcion: "Cerveza bien fría para acompañar la previa o la madrugada. Formato en lata, fácil de llevar y servir.",
    categoria: "CERVEZA",
    precios: { PUSUQUI: null, POMASQUI: null, CARCELEN: 1.50 },
    locales: ["CARCELEN"],
    imagen: "https://via.placeholder.com/200x260.png?text=CERVEZA+PILSENER+LATA+PEQUE%C3%91A+269CC",
    tag: "destacado",
  },
  {
    id: 49,
    nombre: "CERVEZA PILSENER LATOTA 473CC",
    descripcion: "Cerveza bien fría para acompañar la previa o la madrugada.",
    categoria: "CERVEZA",
    precios: { PUSUQUI: 2.00, POMASQUI: 2.00, CARCELEN: 2.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=CERVEZA+PILSENER+LATOTA+473CC",
    tag: "destacado",
  },
  {
    id: 50,
    nombre: "CERVEZA PILSENER PEQUEÑA 330CC",
    descripcion: "Cerveza bien fría para acompañar la previa o la madrugada.",
    categoria: "CERVEZA",
    precios: { PUSUQUI: 2.00, POMASQUI: 2.00, CARCELEN: 2.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=CERVEZA+PILSENER+PEQUE%C3%91A+330CC",
    tag: "destacado",
  },
  {
    id: 51,
    nombre: "CHIVAS REGAL 12 AÑOS 750ML",
    descripcion: "Whisky para disfrutar solo, en las rocas o con tu mixer favorito. Botella de tamaño estándar para compartir en la noche.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 59.75, POMASQUI: 59.75, CARCELEN: 59.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=CHIVAS+REGAL+12+A%C3%91OS+750ML",
    tag: "destacado",
  },
  {
    id: 52,
    nombre: "CLOSS DE PIRQUE CABERNET 1LT",
    descripcion: "Vino perfecto para acompañar comidas o una buena charla. Botella de tamaño estándar para compartir en la noche.",
    categoria: "VINO",
    precios: { PUSUQUI: 10.50, POMASQUI: 10.50, CARCELEN: 10.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=CLOSS+DE+PIRQUE+CABERNET+1LT",
    tag: "destacado",
  },
  {
    id: 53,
    nombre: "COCA COLA 1LT",
    descripcion: "Bebida sin alcohol ideal para mezclar o refrescar. Botella de tamaño estándar para compartir en la noche.",
    categoria: "BEBIDAS NO ALCOHOLICAS",
    precios: { PUSUQUI: 1.75, POMASQUI: 1.75, CARCELEN: 1.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=COCA+COLA+1LT",
    tag: "destacado",
  },
  {
    id: 54,
    nombre: "COCA COLA 500ML",
    descripcion: "Bebida sin alcohol ideal para mezclar o refrescar.",
    categoria: "BEBIDAS NO ALCOHOLICAS",
    precios: { PUSUQUI: 0.95, POMASQUI: 0.95, CARCELEN: 0.95 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=COCA+COLA+500ML",
    tag: "destacado",
  },
  {
    id: 55,
    nombre: "CONCHA Y TORO CABERNET RESERVADO 750ML",
    descripcion: "Vino perfecto para acompañar comidas o una buena charla. Botella de tamaño estándar para compartir en la noche.",
    categoria: "VINO",
    precios: { PUSUQUI: 14.50, POMASQUI: 14.50, CARCELEN: 14.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=CONCHA+Y+TORO+CABERNET+RESERVADO+750ML",
    tag: "destacado",
  },
  {
    id: 56,
    nombre: "CONCHA Y TORO MERLOT RESERVADO 750ML",
    descripcion: "Vino perfecto para acompañar comidas o una buena charla. Botella de tamaño estándar para compartir en la noche.",
    categoria: "VINO",
    precios: { PUSUQUI: 14.50, POMASQUI: 14.50, CARCELEN: 14.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=CONCHA+Y+TORO+MERLOT+RESERVADO+750ML",
    tag: "destacado",
  },
  {
    id: 57,
    nombre: "CORONITA LATA",
    descripcion: "Cerveza bien fría para acompañar la previa o la madrugada. Formato en lata, fácil de llevar y servir.",
    categoria: "CERVEZA",
    precios: { PUSUQUI: 2.00, POMASQUI: 2.00, CARCELEN: 2.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=CORONITA+LATA",
    tag: "destacado",
  },
  {
    id: 58,
    nombre: "CRISTAL 375ML",
    descripcion: "Aguardiente tradicional para compartir en grupo. Presentación pequeña, ideal para grupos reducidos.",
    categoria: "AGUARDIENTE",
    precios: { PUSUQUI: 5.75, POMASQUI: 5.75, CARCELEN: 5.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=CRISTAL+375ML",
    tag: "destacado",
  },
  {
    id: 59,
    nombre: "CRISTAL 750 ML",
    descripcion: "Aguardiente tradicional para compartir en grupo. Botella de tamaño estándar para compartir en la noche.",
    categoria: "AGUARDIENTE",
    precios: { PUSUQUI: 11.00, POMASQUI: 11.00, CARCELEN: 11.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=CRISTAL+750+ML",
    tag: "destacado",
  },
  {
    id: 60,
    nombre: "CUBATA",
    descripcion: "Vodka perfecto para cocteles fríos y shots entre amigos.",
    categoria: "VODKA",
    precios: { PUSUQUI: 3.75, POMASQUI: 3.75, CARCELEN: 3.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=CUBATA",
    tag: "destacado",
  },
  {
    id: 61,
    nombre: "CUNINGHAM 375ML",
    descripcion: "Whisky para disfrutar solo, en las rocas o con tu mixer favorito. Presentación pequeña, ideal para grupos reducidos.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 7.25, POMASQUI: 7.25, CARCELEN: 7.25 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=CUNINGHAM+375ML",
    tag: "destacado",
  },
  {
    id: 62,
    nombre: "CUNINGHAM 750ML",
    descripcion: "Whisky para disfrutar solo, en las rocas o con tu mixer favorito. Botella de tamaño estándar para compartir en la noche.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 14.00, POMASQUI: 14.00, CARCELEN: 14.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=CUNINGHAM+750ML",
    tag: "destacado",
  },
  {
    id: 63,
    nombre: "DON CASTELO 1LT",
    descripcion: "Ron ideal para preparar tragos y compartir en La Huequita. Botella de tamaño estándar para compartir en la noche.",
    categoria: "RON",
    precios: { PUSUQUI: 9.25, POMASQUI: 9.25, CARCELEN: 9.25 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=DON+CASTELO+1LT",
    tag: "destacado",
  },
  {
    id: 64,
    nombre: "ELEPHANT",
    descripcion: "Cigarrillos para complementar tu noche de fiesta.",
    categoria: "CIGARRILLOS",
    precios: { PUSUQUI: 0.25, POMASQUI: 0.25, CARCELEN: 0.25 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=ELEPHANT",
    tag: "destacado",
  },
  {
    id: 65,
    nombre: "ESTELAR NARANJILLA 750ML",
    descripcion: "Ron ideal para preparar tragos y compartir en La Huequita. Botella de tamaño estándar para compartir en la noche.",
    categoria: "RON",
    precios: { PUSUQUI: 9.00, POMASQUI: 9.00, CARCELEN: 9.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=ESTELAR+NARANJILLA+750ML",
    tag: "destacado",
  },
  {
    id: 66,
    nombre: "ESTELAR ORO 375ML",
    descripcion: "Ron ideal para preparar tragos y compartir en La Huequita. Presentación pequeña, ideal para grupos reducidos.",
    categoria: "RON",
    precios: { PUSUQUI: 6.50, POMASQUI: 6.50, CARCELEN: 6.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=ESTELAR+ORO+375ML",
    tag: "destacado",
  },
  {
    id: 67,
    nombre: "ESTELAR ORO 750ML",
    descripcion: "Ron ideal para preparar tragos y compartir en La Huequita. Botella de tamaño estándar para compartir en la noche.",
    categoria: "RON",
    precios: { PUSUQUI: 12.00, POMASQUI: 12.00, CARCELEN: 12.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=ESTELAR+ORO+750ML",
    tag: "destacado",
  },
  {
    id: 68,
    nombre: "FOSFOROS",
    descripcion: "Producto imprescindible para completar tu pedido.",
    categoria: "VARIOS",
    precios: { PUSUQUI: 0.15, POMASQUI: 0.15, CARCELEN: 0.15 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=FOSFOROS",
    tag: "destacado",
  },
  {
    id: 69,
    nombre: "FUZE TEA 1LT",
    descripcion: "Bebida sin alcohol ideal para mezclar o refrescar. Botella de tamaño estándar para compartir en la noche.",
    categoria: "BEBIDAS NO ALCOHOLICAS",
    precios: { PUSUQUI: 1.55, POMASQUI: 1.55, CARCELEN: 1.55 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=FUZE+TEA+1LT",
    tag: "destacado",
  },
  {
    id: 70,
    nombre: "GATO NEGRO 750ML",
    descripcion: "Vino perfecto para acompañar comidas o una buena charla. Botella de tamaño estándar para compartir en la noche.",
    categoria: "VINO",
    precios: { PUSUQUI: 15.50, POMASQUI: 15.50, CARCELEN: 15.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=GATO+NEGRO+750ML",
    tag: "destacado",
  },
  {
    id: 71,
    nombre: "GENIO TAPA NEGRA 750ML",
    descripcion: "Ron ideal para preparar tragos y compartir en La Huequita. Botella de tamaño estándar para compartir en la noche.",
    categoria: "RON",
    precios: { PUSUQUI: 8.25, POMASQUI: 8.25, CARCELEN: 8.25 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=GENIO+TAPA+NEGRA+750ML",
    tag: "destacado",
  },
  {
    id: 72,
    nombre: "GENIO TAPA ROJA 750ML",
    descripcion: "Ron ideal para preparar tragos y compartir en La Huequita. Botella de tamaño estándar para compartir en la noche.",
    categoria: "RON",
    precios: { PUSUQUI: 5.75, POMASQUI: 5.75, CARCELEN: 5.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=GENIO+TAPA+ROJA+750ML",
    tag: "destacado",
  },
  {
    id: 73,
    nombre: "GIN BOND 750ML",
    descripcion: "Ginebra aromática ideal para gin-tonics refrescantes. Botella de tamaño estándar para compartir en la noche.",
    categoria: "GINEBRA",
    precios: { PUSUQUI: 14.50, POMASQUI: 14.50, CARCELEN: 14.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=GIN+BOND+750ML",
    tag: "destacado",
  },
  {
    id: 74,
    nombre: "GIN UNDER LONDON DRY",
    descripcion: "Ginebra aromática ideal para gin-tonics refrescantes.",
    categoria: "GINEBRA",
    precios: { PUSUQUI: 17.00, POMASQUI: 17.00, CARCELEN: 17.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=GIN+UNDER+LONDON+DRY",
    tag: "destacado",
  },
  {
    id: 75,
    nombre: "GIN W LONDON AZUL",
    descripcion: "Ginebra aromática ideal para gin-tonics refrescantes.",
    categoria: "GINEBRA",
    precios: { PUSUQUI: 18.50, POMASQUI: 18.50, CARCELEN: 18.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=GIN+W+LONDON+AZUL",
    tag: "destacado",
  },
  {
    id: 76,
    nombre: "GRAN VANDUSH",
    descripcion: "Espumante ideal para celebraciones y brindis especiales.",
    categoria: "CHAMPAGNE",
    precios: { PUSUQUI: 8.75, POMASQUI: 8.75, CARCELEN: 8.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=GRAN+VANDUSH",
    tag: "destacado",
  },
  {
    id: 77,
    nombre: "GRAND OLD PARR 750ML",
    descripcion: "Whisky para disfrutar solo, en las rocas o con tu mixer favorito. Botella de tamaño estándar para compartir en la noche.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 62.75, POMASQUI: null, CARCELEN: 62.75 },
    locales: ["CARCELEN", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=GRAND+OLD+PARR+750ML",
    tag: "destacado",
  },
  {
    id: 78,
    nombre: "GRANTS 750ML",
    descripcion: "Whisky para disfrutar solo, en las rocas o con tu mixer favorito. Botella de tamaño estándar para compartir en la noche.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 21.75, POMASQUI: 21.75, CARCELEN: 21.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=GRANTS+750ML",
    tag: "destacado",
  },
  {
    id: 79,
    nombre: "GREEN MATE 345ML",
    descripcion: "Licor de hierbas intenso para shots o digestivo.",
    categoria: "LICOR DE HIERBAS",
    precios: { PUSUQUI: 5.00, POMASQUI: 5.00, CARCELEN: 5.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=GREEN+MATE+345ML",
    tag: "destacado",
  },
  {
    id: 80,
    nombre: "GREEN MATE 750ML",
    descripcion: "Licor de hierbas intenso para shots o digestivo. Botella de tamaño estándar para compartir en la noche.",
    categoria: "LICOR DE HIERBAS",
    precios: { PUSUQUI: 13.50, POMASQUI: 13.50, CARCELEN: 13.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=GREEN+MATE+750ML",
    tag: "destacado",
  },
  {
    id: 81,
    nombre: "GUITIG 1.5LT",
    descripcion: "Bebida sin alcohol ideal para mezclar o refrescar.",
    categoria: "BEBIDAS NO ALCOHOLICAS",
    precios: { PUSUQUI: 1.75, POMASQUI: 1.75, CARCELEN: 1.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=GUITIG+1.5LT",
    tag: "destacado",
  },
  {
    id: 82,
    nombre: "HALLS BARRA SURTIDO",
    descripcion: "Snacks dulces para picar mientras disfrutas.",
    categoria: "CONFITERIA",
    precios: { PUSUQUI: 0.80, POMASQUI: 0.80, CARCELEN: 0.80 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=HALLS+BARRA+SURTIDO",
    tag: "destacado",
  },
  {
    id: 83,
    nombre: "HALLS UNIDAD",
    descripcion: "Snacks dulces para picar mientras disfrutas.",
    categoria: "CONFITERIA",
    precios: { PUSUQUI: 0.05, POMASQUI: 0.05, CARCELEN: 0.05 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=HALLS+UNIDAD",
    tag: "destacado",
  },
  {
    id: 84,
    nombre: "JABAS VACIAS CERVEZA",
    descripcion: "Cerveza bien fría para acompañar la previa o la madrugada.",
    categoria: "CERVEZA",
    precios: { PUSUQUI: 2.60, POMASQUI: 2.60, CARCELEN: 2.60 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=JABAS+VACIAS+CERVEZA",
    tag: "destacado",
  },
  {
    id: 85,
    nombre: "JACK DANIELS N 7 750ML",
    descripcion: "Whisky para disfrutar solo, en las rocas o con tu mixer favorito. Botella de tamaño estándar para compartir en la noche.",
    categoria: "WHISKY",
    precios: { PUSUQUI: null, POMASQUI: null, CARCELEN: 77.00 },
    locales: ["CARCELEN"],
    imagen: "https://via.placeholder.com/200x260.png?text=JACK+DANIELS+N+7+750ML",
    tag: "destacado",
  },
  {
    id: 86,
    nombre: "JAGERMEISTER 1LITRO",
    descripcion: "Licor de hierbas intenso para shots o digestivo. Botella de tamaño estándar para compartir en la noche.",
    categoria: "LICOR DE HIERBAS",
    precios: { PUSUQUI: 42.00, POMASQUI: 42.00, CARCELEN: 42.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=JAGERMEISTER+1LITRO",
    tag: "destacado",
  },
  {
    id: 87,
    nombre: "JAGERMEISTER 750ML",
    descripcion: "Licor de hierbas intenso para shots o digestivo. Botella de tamaño estándar para compartir en la noche.",
    categoria: "LICOR DE HIERBAS",
    precios: { PUSUQUI: 36.00, POMASQUI: 36.00, CARCELEN: 36.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=JAGERMEISTER+750ML",
    tag: "destacado",
  },
  {
    id: 88,
    nombre: "JHON MORRIS NEGRO 1LT",
    descripcion: "Whisky para disfrutar solo, en las rocas o con tu mixer favorito. Botella de tamaño estándar para compartir en la noche.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 19.50, POMASQUI: 19.50, CARCELEN: 19.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=JHON+MORRIS+NEGRO+1LT",
    tag: "destacado",
  },
  {
    id: 89,
    nombre: "JHON MORRIS NEGRO 750ML",
    descripcion: "Whisky para disfrutar solo, en las rocas o con tu mixer favorito. Botella de tamaño estándar para compartir en la noche.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 16.50, POMASQUI: 16.50, CARCELEN: 16.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=JHON+MORRIS+NEGRO+750ML",
    tag: "destacado",
  },
  {
    id: 90,
    nombre: "JHON MORRIS ROJO 1LT",
    descripcion: "Whisky para disfrutar solo, en las rocas o con tu mixer favorito. Botella de tamaño estándar para compartir en la noche.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 18.50, POMASQUI: 18.50, CARCELEN: 18.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=JHON+MORRIS+ROJO+1LT",
    tag: "destacado",
  },
  {
    id: 91,
    nombre: "JHON MORRIS ROJO 750ML",
    descripcion: "Whisky para disfrutar solo, en las rocas o con tu mixer favorito. Botella de tamaño estándar para compartir en la noche.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 15.50, POMASQUI: 15.50, CARCELEN: 15.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=JHON+MORRIS+ROJO+750ML",
    tag: "destacado",
  },
  {
    id: 92,
    nombre: "JHONNY ROJO 750ML",
    descripcion: "Whisky para disfrutar solo, en las rocas o con tu mixer favorito. Botella de tamaño estándar para compartir en la noche.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 27.25, POMASQUI: 27.25, CARCELEN: 27.25 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=JHONNY+ROJO+750ML",
    tag: "destacado",
  },
  {
    id: 93,
    nombre: "JUGO DEL VALLE  500ML",
    descripcion: "Bebida sin alcohol ideal para mezclar o refrescar.",
    categoria: "BEBIDAS NO ALCOHOLICAS",
    precios: { PUSUQUI: 0.75, POMASQUI: 0.75, CARCELEN: 0.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=JUGO+DEL+VALLE++500ML",
    tag: "destacado",
  },
  {
    id: 94,
    nombre: "JUGO DEL VALLE 1,75LT",
    descripcion: "Bebida sin alcohol ideal para mezclar o refrescar.",
    categoria: "BEBIDAS NO ALCOHOLICAS",
    precios: { PUSUQUI: 1.75, POMASQUI: 1.75, CARCELEN: 1.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=JUGO+DEL+VALLE+1%2C75LT",
    tag: "destacado",
  },
  {
    id: 95,
    nombre: "JUGO PULP",
    descripcion: "Bebida sin alcohol ideal para mezclar o refrescar.",
    categoria: "BEBIDAS NO ALCOHOLICAS",
    precios: { PUSUQUI: 1.05, POMASQUI: null, CARCELEN: null },
    locales: ["PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=JUGO+PULP",
    tag: "destacado",
  },
  {
    id: 96,
    nombre: "LARK",
    descripcion: "Cigarrillos para complementar tu noche de fiesta.",
    categoria: "CIGARRILLOS",
    precios: { PUSUQUI: 0.60, POMASQUI: 0.60, CARCELEN: 0.60 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=LARK",
    tag: "destacado",
  },
  {
    id: 97,
    nombre: "LIDER",
    descripcion: "Cigarrillos para complementar tu noche de fiesta.",
    categoria: "CIGARRILLOS",
    precios: { PUSUQUI: 0.60, POMASQUI: 0.60, CARCELEN: 0.60 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=LIDER",
    tag: "destacado",
  },
  {
    id: 98,
    nombre: "MAIPO TINTO CABERNET 750ML",
    descripcion: "Vino perfecto para acompañar comidas o una buena charla. Botella de tamaño estándar para compartir en la noche.",
    categoria: "VINO",
    precios: { PUSUQUI: 10.50, POMASQUI: 10.50, CARCELEN: 10.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=MAIPO+TINTO+CABERNET+750ML",
    tag: "destacado",
  },
  {
    id: 99,
    nombre: "MAIPO TINTO MERLOT 750ML",
    descripcion: "Vino perfecto para acompañar comidas o una buena charla. Botella de tamaño estándar para compartir en la noche.",
    categoria: "VINO",
    precios: { PUSUQUI: 10.50, POMASQUI: 10.50, CARCELEN: 10.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=MAIPO+TINTO+MERLOT+750ML",
    tag: "destacado",
  },
  {
    id: 100,
    nombre: "MALBORO BLANCO",
    descripcion: "Cigarrillos para complementar tu noche de fiesta.",
    categoria: "CIGARRILLOS",
    precios: { PUSUQUI: 0.60, POMASQUI: 0.60, CARCELEN: 0.60 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=MALBORO+BLANCO",
    tag: "destacado",
  },
  {
    id: 101,
    nombre: "MALBORO MENTOLADO",
    descripcion: "Cigarrillos para complementar tu noche de fiesta.",
    categoria: "CIGARRILLOS",
    precios: { PUSUQUI: 0.50, POMASQUI: 0.50, CARCELEN: 0.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=MALBORO+MENTOLADO",
    tag: "destacado",
  },
  {
    id: 102,
    nombre: "MALBORO ROJO",
    descripcion: "Cigarrillos para complementar tu noche de fiesta.",
    categoria: "CIGARRILLOS",
    precios: { PUSUQUI: 0.60, POMASQUI: 0.60, CARCELEN: 0.60 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=MALBORO+ROJO",
    tag: "destacado",
  },
  {
    id: 103,
    nombre: "MENTAS",
    descripcion: "Snacks dulces para picar mientras disfrutas.",
    categoria: "CONFITERIA",
    precios: { PUSUQUI: 0.05, POMASQUI: 0.05, CARCELEN: 0.05 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=MENTAS",
    tag: "destacado",
  },
  {
    id: 104,
    nombre: "NORTEÑO 375ML",
    descripcion: "Aguardiente tradicional para compartir en grupo. Presentación pequeña, ideal para grupos reducidos.",
    categoria: "AGUARDIENTE",
    precios: { PUSUQUI: 4.75, POMASQUI: 4.75, CARCELEN: 4.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=NORTE%C3%91O+375ML",
    tag: "destacado",
  },
  {
    id: 105,
    nombre: "NORTEÑO 750ML",
    descripcion: "Aguardiente tradicional para compartir en grupo. Botella de tamaño estándar para compartir en la noche.",
    categoria: "AGUARDIENTE",
    precios: { PUSUQUI: 9.25, POMASQUI: 9.25, CARCELEN: 9.25 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=NORTE%C3%91O+750ML",
    tag: "destacado",
  },
  {
    id: 106,
    nombre: "NORTEÑO DE HIERBAS",
    descripcion: "Aguardiente tradicional para compartir en grupo.",
    categoria: "AGUARDIENTE",
    precios: { PUSUQUI: 13.00, POMASQUI: 13.00, CARCELEN: 13.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=NORTE%C3%91O+DE+HIERBAS",
    tag: "destacado",
  },
  {
    id: 107,
    nombre: "NORTEÑO GOLD",
    descripcion: "Aguardiente tradicional para compartir en grupo.",
    categoria: "AGUARDIENTE",
    precios: { PUSUQUI: 13.00, POMASQUI: 13.00, CARCELEN: 13.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=NORTE%C3%91O+GOLD",
    tag: "destacado",
  },
  {
    id: 108,
    nombre: "OLD TIME FIRE CANELA 750ML",
    descripcion: "Whisky para disfrutar solo, en las rocas o con tu mixer favorito. Botella de tamaño estándar para compartir en la noche.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 11.50, POMASQUI: 11.50, CARCELEN: 11.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=OLD+TIME+FIRE+CANELA+750ML",
    tag: "destacado",
  },
  {
    id: 109,
    nombre: "OLD TIMES  VAINILLA 750ML",
    descripcion: "Whisky para disfrutar solo, en las rocas o con tu mixer favorito. Botella de tamaño estándar para compartir en la noche.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 11.50, POMASQUI: 11.50, CARCELEN: 11.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=OLD+TIMES++VAINILLA+750ML",
    tag: "destacado",
  },
  {
    id: 110,
    nombre: "OLD TIMES MANZANA 750ML",
    descripcion: "Whisky para disfrutar solo, en las rocas o con tu mixer favorito. Botella de tamaño estándar para compartir en la noche.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 11.50, POMASQUI: 11.50, CARCELEN: 11.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=OLD+TIMES+MANZANA+750ML",
    tag: "destacado",
  },
  {
    id: 111,
    nombre: "OLD TIMES NEGRO 375ML",
    descripcion: "Whisky para disfrutar solo, en las rocas o con tu mixer favorito. Presentación pequeña, ideal para grupos reducidos.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 9.25, POMASQUI: 9.25, CARCELEN: 9.25 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=OLD+TIMES+NEGRO+375ML",
    tag: "destacado",
  },
  {
    id: 112,
    nombre: "OLD TIMES NEGRO 750ML",
    descripcion: "Whisky para disfrutar solo, en las rocas o con tu mixer favorito. Botella de tamaño estándar para compartir en la noche.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 17.00, POMASQUI: 17.00, CARCELEN: 17.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=OLD+TIMES+NEGRO+750ML",
    tag: "destacado",
  },
  {
    id: 113,
    nombre: "OLD TIMES ROJO 375ML",
    descripcion: "Whisky para disfrutar solo, en las rocas o con tu mixer favorito. Presentación pequeña, ideal para grupos reducidos.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 8.75, POMASQUI: 8.75, CARCELEN: 8.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=OLD+TIMES+ROJO+375ML",
    tag: "destacado",
  },
  {
    id: 114,
    nombre: "OLD TIMES ROJO 750ML",
    descripcion: "Whisky para disfrutar solo, en las rocas o con tu mixer favorito. Botella de tamaño estándar para compartir en la noche.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 14.50, POMASQUI: 14.50, CARCELEN: 14.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=OLD+TIMES+ROJO+750ML",
    tag: "destacado",
  },
  {
    id: 115,
    nombre: "PANCHITOS",
    descripcion: "Snacks dulces para picar mientras disfrutas.",
    categoria: "CONFITERIA",
    precios: { PUSUQUI: 0.50, POMASQUI: 0.50, CARCELEN: 0.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=PANCHITOS",
    tag: "destacado",
  },
  {
    id: 116,
    nombre: "PAPAS SIN MARCA",
    descripcion: "Snacks dulces para picar mientras disfrutas.",
    categoria: "CONFITERIA",
    precios: { PUSUQUI: 1.25, POMASQUI: 1.25, CARCELEN: 1.25 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=PAPAS+SIN+MARCA",
    tag: "destacado",
  },
  {
    id: 117,
    nombre: "PEPSI 1 LT",
    descripcion: "Bebida sin alcohol ideal para mezclar o refrescar. Botella de tamaño estándar para compartir en la noche.",
    categoria: "BEBIDAS NO ALCOHOLICAS",
    precios: { PUSUQUI: 1.00, POMASQUI: 1.00, CARCELEN: 1.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=PEPSI+1+LT",
    tag: "destacado",
  },
  {
    id: 118,
    nombre: "PEPSI 2LT",
    descripcion: "Bebida sin alcohol ideal para mezclar o refrescar.",
    categoria: "BEBIDAS NO ALCOHOLICAS",
    precios: { PUSUQUI: null, POMASQUI: 1.50, CARCELEN: null },
    locales: ["POMASQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=PEPSI+2LT",
    tag: "destacado",
  },
  {
    id: 119,
    nombre: "PIÑA COLADA 355ML",
    descripcion: "Coctel listo para servir, solo enfría y disfruta.",
    categoria: "COCTEL",
    precios: { PUSUQUI: 2.00, POMASQUI: 2.00, CARCELEN: 2.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=PI%C3%91A+COLADA+355ML",
    tag: "destacado",
  },
  {
    id: 120,
    nombre: "PIÑA COLADA ZHUMIR 750ML",
    descripcion: "Coctel listo para servir, solo enfría y disfruta. Botella de tamaño estándar para compartir en la noche.",
    categoria: "COCTEL",
    precios: { PUSUQUI: 14.00, POMASQUI: 14.00, CARCELEN: null },
    locales: ["POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=PI%C3%91A+COLADA+ZHUMIR+750ML",
    tag: "destacado",
  },
  {
    id: 121,
    nombre: "PON PON 375ML",
    descripcion: "Ron ideal para preparar tragos y compartir en La Huequita. Presentación pequeña, ideal para grupos reducidos.",
    categoria: "RON",
    precios: { PUSUQUI: 3.25, POMASQUI: 3.25, CARCELEN: 3.25 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=PON+PON+375ML",
    tag: "destacado",
  },
  {
    id: 122,
    nombre: "PON PON 750ML",
    descripcion: "Ron ideal para preparar tragos y compartir en La Huequita. Botella de tamaño estándar para compartir en la noche.",
    categoria: "RON",
    precios: { PUSUQUI: 6.25, POMASQUI: 6.25, CARCELEN: 6.25 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=PON+PON+750ML",
    tag: "destacado",
  },
  {
    id: 123,
    nombre: "POWERADE MARACUYA",
    descripcion: "Bebida sin alcohol ideal para mezclar o refrescar.",
    categoria: "BEBIDAS NO ALCOHOLICAS",
    precios: { PUSUQUI: 1.60, POMASQUI: 1.60, CARCELEN: 1.60 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=POWERADE+MARACUYA",
    tag: "destacado",
  },
  {
    id: 124,
    nombre: "POWERADE MORAZUL",
    descripcion: "Bebida sin alcohol ideal para mezclar o refrescar.",
    categoria: "BEBIDAS NO ALCOHOLICAS",
    precios: { PUSUQUI: 1.60, POMASQUI: 1.60, CARCELEN: 1.60 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=POWERADE+MORAZUL",
    tag: "destacado",
  },
  {
    id: 125,
    nombre: "POWERADE MZN CLEAR",
    descripcion: "Bebida sin alcohol ideal para mezclar o refrescar.",
    categoria: "BEBIDAS NO ALCOHOLICAS",
    precios: { PUSUQUI: 1.60, POMASQUI: 1.60, CARCELEN: 1.60 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=POWERADE+MZN+CLEAR",
    tag: "destacado",
  },
  {
    id: 126,
    nombre: "POWERADE ROJO",
    descripcion: "Bebida sin alcohol ideal para mezclar o refrescar.",
    categoria: "BEBIDAS NO ALCOHOLICAS",
    precios: { PUSUQUI: 1.60, POMASQUI: 1.60, CARCELEN: 1.60 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=POWERADE+ROJO",
    tag: "destacado",
  },
  {
    id: 127,
    nombre: "POZO 250ML",
    descripcion: "Aguardiente tradicional para compartir en grupo.",
    categoria: "AGUARDIENTE",
    precios: { PUSUQUI: 1.25, POMASQUI: 1.25, CARCELEN: 1.25 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=POZO+250ML",
    tag: "destacado",
  },
  {
    id: 128,
    nombre: "QUINDIANO 350 ML",
    descripcion: "Aguardiente tradicional para compartir en grupo. Presentación pequeña, ideal para grupos reducidos.",
    categoria: "AGUARDIENTE",
    precios: { PUSUQUI: 4.50, POMASQUI: 4.50, CARCELEN: 4.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=QUINDIANO+350+ML",
    tag: "destacado",
  },
  {
    id: 129,
    nombre: "QUINDIANO 750 Ml",
    descripcion: "Aguardiente tradicional para compartir en grupo. Botella de tamaño estándar para compartir en la noche.",
    categoria: "AGUARDIENTE",
    precios: { PUSUQUI: 9.00, POMASQUI: 9.00, CARCELEN: 9.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=QUINDIANO+750+Ml",
    tag: "destacado",
  },
  {
    id: 130,
    nombre: "RON FLOR DE CAÑA BLANCO",
    descripcion: "Ron ideal para preparar tragos y compartir en La Huequita.",
    categoria: "RON",
    precios: { PUSUQUI: 21.75, POMASQUI: 21.75, CARCELEN: 21.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=RON+FLOR+DE+CA%C3%91A+BLANCO",
    tag: "destacado",
  },
  {
    id: 131,
    nombre: "RONERO 750ML",
    descripcion: "Ron ideal para preparar tragos y compartir en La Huequita. Botella de tamaño estándar para compartir en la noche.",
    categoria: "RON",
    precios: { PUSUQUI: 9.25, POMASQUI: 9.25, CARCELEN: 9.25 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=RONERO+750ML",
    tag: "destacado",
  },
  {
    id: 132,
    nombre: "RUSSKAYA 750ML",
    descripcion: "Vodka perfecto para cocteles fríos y shots entre amigos. Botella de tamaño estándar para compartir en la noche.",
    categoria: "VODKA",
    precios: { PUSUQUI: 14.50, POMASQUI: 14.50, CARCELEN: 14.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=RUSSKAYA+750ML",
    tag: "destacado",
  },
  {
    id: 133,
    nombre: "SAN MIGUEL ORO 750ML",
    descripcion: "Ron ideal para preparar tragos y compartir en La Huequita. Botella de tamaño estándar para compartir en la noche.",
    categoria: "RON",
    precios: { PUSUQUI: 13.50, POMASQUI: 13.50, CARCELEN: 13.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=SAN+MIGUEL+ORO+750ML",
    tag: "destacado",
  },
  {
    id: 134,
    nombre: "SAN MIGUEL SILVER PLATA 750ML",
    descripcion: "Ron ideal para preparar tragos y compartir en La Huequita. Botella de tamaño estándar para compartir en la noche. Formato en lata, fácil de llevar y servir.",
    categoria: "RON",
    precios: { PUSUQUI: 13.50, POMASQUI: 13.50, CARCELEN: 13.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=SAN+MIGUEL+SILVER+PLATA+750ML",
    tag: "destacado",
  },
  {
    id: 135,
    nombre: "SANGRIA FIESTA BRAVA 1LT",
    descripcion: "Coctel listo para servir, solo enfría y disfruta. Botella de tamaño estándar para compartir en la noche.",
    categoria: "COCTEL",
    precios: { PUSUQUI: 6.70, POMASQUI: 6.70, CARCELEN: 6.70 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=SANGRIA+FIESTA+BRAVA+1LT",
    tag: "destacado",
  },
  {
    id: 136,
    nombre: "SKY 750ML",
    descripcion: "Vodka perfecto para cocteles fríos y shots entre amigos. Botella de tamaño estándar para compartir en la noche.",
    categoria: "VODKA",
    precios: { PUSUQUI: 20.75, POMASQUI: 20.75, CARCELEN: 20.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=SKY+750ML",
    tag: "destacado",
  },
  {
    id: 137,
    nombre: "SMIRNOFF ROJA 750ML",
    descripcion: "Vodka perfecto para cocteles fríos y shots entre amigos. Botella de tamaño estándar para compartir en la noche.",
    categoria: "VODKA",
    precios: { PUSUQUI: 21.00, POMASQUI: 21.00, CARCELEN: 21.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=SMIRNOFF+ROJA+750ML",
    tag: "destacado",
  },
  {
    id: 138,
    nombre: "SOMETHING SPECIAL 750ML",
    descripcion: "Whisky para disfrutar solo, en las rocas o con tu mixer favorito. Botella de tamaño estándar para compartir en la noche.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 25.00, POMASQUI: 25.00, CARCELEN: 25.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=SOMETHING+SPECIAL+750ML",
    tag: "destacado",
  },
  {
    id: 139,
    nombre: "SPRITE  1.35LT",
    descripcion: "Bebida sin alcohol ideal para mezclar o refrescar.",
    categoria: "BEBIDAS NO ALCOHOLICAS",
    precios: { PUSUQUI: 1.60, POMASQUI: 1.60, CARCELEN: 1.60 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=SPRITE++1.35LT",
    tag: "destacado",
  },
  {
    id: 140,
    nombre: "SWITCH",
    descripcion: "Vodka perfecto para cocteles fríos y shots entre amigos.",
    categoria: "VODKA",
    precios: { PUSUQUI: 3.75, POMASQUI: 3.75, CARCELEN: 3.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=SWITCH",
    tag: "destacado",
  },
  {
    id: 141,
    nombre: "TEQUILA AZTECA BLANCO 750ML",
    descripcion: "Tequila perfecto para shots con sal y limón o cocteles. Botella de tamaño estándar para compartir en la noche.",
    categoria: "TEQUILA",
    precios: { PUSUQUI: 20.50, POMASQUI: 20.50, CARCELEN: 20.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=TEQUILA+AZTECA+BLANCO+750ML",
    tag: "destacado",
  },
  {
    id: 142,
    nombre: "TEQUILA CANIJO",
    descripcion: "Tequila perfecto para shots con sal y limón o cocteles.",
    categoria: "TEQUILA",
    precios: { PUSUQUI: 25.00, POMASQUI: 25.00, CARCELEN: 25.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=TEQUILA+CANIJO",
    tag: "destacado",
  },
  {
    id: 143,
    nombre: "TEQUILA COYOTE",
    descripcion: "Tequila perfecto para shots con sal y limón o cocteles.",
    categoria: "TEQUILA",
    precios: { PUSUQUI: 16.50, POMASQUI: 16.50, CARCELEN: 16.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=TEQUILA+COYOTE",
    tag: "destacado",
  },
  {
    id: 144,
    nombre: "TEQUILA EL CHARRO 750ML",
    descripcion: "Tequila perfecto para shots con sal y limón o cocteles. Botella de tamaño estándar para compartir en la noche.",
    categoria: "TEQUILA",
    precios: { PUSUQUI: 21.75, POMASQUI: 21.75, CARCELEN: 21.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=TEQUILA+EL+CHARRO+750ML",
    tag: "destacado",
  },
  {
    id: 145,
    nombre: "TEQUILA EL GRAN MALO 750ML",
    descripcion: "Tequila perfecto para shots con sal y limón o cocteles. Botella de tamaño estándar para compartir en la noche.",
    categoria: "TEQUILA",
    precios: { PUSUQUI: 45.00, POMASQUI: 45.00, CARCELEN: 45.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=TEQUILA+EL+GRAN+MALO+750ML",
    tag: "destacado",
  },
  {
    id: 146,
    nombre: "TRANSPPRTE",
    descripcion: "Producto imprescindible para completar tu pedido.",
    categoria: "VARIOS",
    precios: { PUSUQUI: 0.05, POMASQUI: 0.05, CARCELEN: null },
    locales: ["POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=TRANSPPRTE",
    tag: "destacado",
  },
  {
    id: 147,
    nombre: "TRIDENT UNIDAD",
    descripcion: "Snacks dulces para picar mientras disfrutas.",
    categoria: "CONFITERIA",
    precios: { PUSUQUI: 0.15, POMASQUI: 0.15, CARCELEN: 0.15 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=TRIDENT+UNIDAD",
    tag: "destacado",
  },
  {
    id: 148,
    nombre: "TRIDENT X3 SURTIDO",
    descripcion: "Snacks dulces para picar mientras disfrutas.",
    categoria: "CONFITERIA",
    precios: { PUSUQUI: 0.40, POMASQUI: 0.40, CARCELEN: 0.40 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=TRIDENT+X3+SURTIDO",
    tag: "destacado",
  },
  {
    id: 149,
    nombre: "TRIDENT X6 SURTIDO",
    descripcion: "Snacks dulces para picar mientras disfrutas.",
    categoria: "CONFITERIA",
    precios: { PUSUQUI: 0.75, POMASQUI: 0.75, CARCELEN: 0.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=TRIDENT+X6+SURTIDO",
    tag: "destacado",
  },
  {
    id: 150,
    nombre: "TROPICO 375ML",
    descripcion: "Aguardiente tradicional para compartir en grupo. Presentación pequeña, ideal para grupos reducidos.",
    categoria: "AGUARDIENTE",
    precios: { PUSUQUI: 4.75, POMASQUI: 4.75, CARCELEN: 4.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=TROPICO+375ML",
    tag: "destacado",
  },
  {
    id: 151,
    nombre: "TROPICO 750ML",
    descripcion: "Aguardiente tradicional para compartir en grupo. Botella de tamaño estándar para compartir en la noche.",
    categoria: "AGUARDIENTE",
    precios: { PUSUQUI: 9.25, POMASQUI: 9.25, CARCELEN: 9.25 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=TROPICO+750ML",
    tag: "destacado",
  },
  {
    id: 152,
    nombre: "TUMIX SANDIA",
    descripcion: "Snacks dulces para picar mientras disfrutas.",
    categoria: "CONFITERIA",
    precios: { PUSUQUI: 0.40, POMASQUI: null, CARCELEN: 0.40 },
    locales: ["CARCELEN", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=TUMIX+SANDIA",
    tag: "destacado",
  },
  {
    id: 153,
    nombre: "V220",
    descripcion: "Bebida sin alcohol ideal para mezclar o refrescar.",
    categoria: "BEBIDAS NO ALCOHOLICAS",
    precios: { PUSUQUI: 1.60, POMASQUI: 1.60, CARCELEN: 1.60 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=V220",
    tag: "destacado",
  },
  {
    id: 154,
    nombre: "V220 330ML",
    descripcion: "Bebida sin alcohol ideal para mezclar o refrescar.",
    categoria: "BEBIDAS NO ALCOHOLICAS",
    precios: { PUSUQUI: null, POMASQUI: 0.75, CARCELEN: null },
    locales: ["POMASQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=V220+330ML",
    tag: "destacado",
  },
  {
    id: 155,
    nombre: "VAT 69 750ML",
    descripcion: "Whisky para disfrutar solo, en las rocas o con tu mixer favorito. Botella de tamaño estándar para compartir en la noche.",
    categoria: "WHISKY",
    precios: { PUSUQUI: 18.00, POMASQUI: 18.00, CARCELEN: 18.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=VAT+69+750ML",
    tag: "destacado",
  },
  {
    id: 156,
    nombre: "VENETTO",
    descripcion: "Coctel listo para servir, solo enfría y disfruta.",
    categoria: "COCTEL",
    precios: { PUSUQUI: 3.50, POMASQUI: 3.50, CARCELEN: 3.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=VENETTO",
    tag: "destacado",
  },
  {
    id: 157,
    nombre: "VIEJO DE CALDAS 750ML",
    descripcion: "Ron ideal para preparar tragos y compartir en La Huequita. Botella de tamaño estándar para compartir en la noche.",
    categoria: "RON",
    precios: { PUSUQUI: 17.50, POMASQUI: 17.50, CARCELEN: 17.50 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=VIEJO+DE+CALDAS+750ML",
    tag: "destacado",
  },
  {
    id: 158,
    nombre: "VINO MIRAFLORES",
    descripcion: "Vino perfecto para acompañar comidas o una buena charla.",
    categoria: "VINO",
    precios: { PUSUQUI: 9.00, POMASQUI: 9.00, CARCELEN: 9.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=VINO+MIRAFLORES",
    tag: "destacado",
  },
  {
    id: 159,
    nombre: "VINO SAVIONE",
    descripcion: "Vino perfecto para acompañar comidas o una buena charla.",
    categoria: "VINO",
    precios: { PUSUQUI: 10.50, POMASQUI: null, CARCELEN: null },
    locales: ["PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=VINO+SAVIONE",
    tag: "destacado",
  },
  {
    id: 160,
    nombre: "VODKA 40 750ML",
    descripcion: "Vodka perfecto para cocteles fríos y shots entre amigos. Botella de tamaño estándar para compartir en la noche.",
    categoria: "VODKA",
    precios: { PUSUQUI: 6.25, POMASQUI: null, CARCELEN: null },
    locales: ["PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=VODKA+40+750ML",
    tag: "destacado",
  },
  {
    id: 161,
    nombre: "VODKA ROMANOSKI",
    descripcion: "Vodka perfecto para cocteles fríos y shots entre amigos.",
    categoria: "VODKA",
    precios: { PUSUQUI: 13.00, POMASQUI: 13.00, CARCELEN: 13.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=VODKA+ROMANOSKI",
    tag: "destacado",
  },
  {
    id: 162,
    nombre: "WILD SEX ON THE BEACH",
    descripcion: "Coctel listo para servir, solo enfría y disfruta.",
    categoria: "COCTEL",
    precios: { PUSUQUI: 2.00, POMASQUI: 2.00, CARCELEN: 2.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=WILD+SEX+ON+THE+BEACH",
    tag: "destacado",
  },
  {
    id: 163,
    nombre: "ZHUMIR AGUARDIENTE 700ML",
    descripcion: "Clásico Zhumir ecuatoriano para tragos dulces y shots. Botella de tamaño estándar para compartir en la noche.",
    categoria: "ZHUMIR",
    precios: { PUSUQUI: 11.00, POMASQUI: 11.00, CARCELEN: 11.00 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=ZHUMIR+AGUARDIENTE+700ML",
    tag: "destacado",
  },
  {
    id: 164,
    nombre: "ZHUMIR CITRUS PINK 700ML",
    descripcion: "Clásico Zhumir ecuatoriano para tragos dulces y shots. Botella de tamaño estándar para compartir en la noche.",
    categoria: "ZHUMIR",
    precios: { PUSUQUI: 8.25, POMASQUI: 8.25, CARCELEN: 8.25 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=ZHUMIR+CITRUS+PINK+700ML",
    tag: "destacado",
  },
  {
    id: 165,
    nombre: "ZHUMIR COCO 700ML",
    descripcion: "Clásico Zhumir ecuatoriano para tragos dulces y shots. Botella de tamaño estándar para compartir en la noche.",
    categoria: "ZHUMIR",
    precios: { PUSUQUI: 8.25, POMASQUI: 8.25, CARCELEN: 8.25 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=ZHUMIR+COCO+700ML",
    tag: "destacado",
  },
  {
    id: 166,
    nombre: "ZHUMIR DURAZNO 375ML",
    descripcion: "Clásico Zhumir ecuatoriano para tragos dulces y shots. Presentación pequeña, ideal para grupos reducidos.",
    categoria: "ZHUMIR",
    precios: { PUSUQUI: 4.75, POMASQUI: 4.75, CARCELEN: 4.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=ZHUMIR+DURAZNO+375ML",
    tag: "destacado",
  },
  {
    id: 167,
    nombre: "ZHUMIR DURAZNO 700ML",
    descripcion: "Clásico Zhumir ecuatoriano para tragos dulces y shots. Botella de tamaño estándar para compartir en la noche.",
    categoria: "ZHUMIR",
    precios: { PUSUQUI: 8.25, POMASQUI: 8.25, CARCELEN: 8.25 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=ZHUMIR+DURAZNO+700ML",
    tag: "destacado",
  },
  {
    id: 168,
    nombre: "ZHUMIR MANGO 700ML",
    descripcion: "Clásico Zhumir ecuatoriano para tragos dulces y shots. Botella de tamaño estándar para compartir en la noche.",
    categoria: "ZHUMIR",
    precios: { PUSUQUI: 8.25, POMASQUI: 8.25, CARCELEN: 8.25 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=ZHUMIR+MANGO+700ML",
    tag: "destacado",
  },
  {
    id: 169,
    nombre: "ZHUMIR NARANJILLA 375ML",
    descripcion: "Clásico Zhumir ecuatoriano para tragos dulces y shots. Presentación pequeña, ideal para grupos reducidos.",
    categoria: "ZHUMIR",
    precios: { PUSUQUI: 4.75, POMASQUI: 4.75, CARCELEN: 4.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=ZHUMIR+NARANJILLA+375ML",
    tag: "destacado",
  },
  {
    id: 170,
    nombre: "ZHUMIR NARANJILLA 750",
    descripcion: "Clásico Zhumir ecuatoriano para tragos dulces y shots. Botella de tamaño estándar para compartir en la noche.",
    categoria: "ZHUMIR",
    precios: { PUSUQUI: 8.25, POMASQUI: 8.25, CARCELEN: 8.25 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=ZHUMIR+NARANJILLA+750",
    tag: "destacado",
  },
  {
    id: 171,
    nombre: "ZHUMIR SANDIA PINK 750ML",
    descripcion: "Clásico Zhumir ecuatoriano para tragos dulces y shots. Botella de tamaño estándar para compartir en la noche.",
    categoria: "ZHUMIR",
    precios: { PUSUQUI: 11.50, POMASQUI: null, CARCELEN: 11.50 },
    locales: ["CARCELEN", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=ZHUMIR+SANDIA+PINK+750ML",
    tag: "destacado",
  },
  {
    id: 172,
    nombre: "ZHUMIR SECO 350ML",
    descripcion: "Clásico Zhumir ecuatoriano para tragos dulces y shots. Presentación pequeña, ideal para grupos reducidos.",
    categoria: "ZHUMIR",
    precios: { PUSUQUI: 4.75, POMASQUI: 4.75, CARCELEN: 4.75 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=ZHUMIR+SECO+350ML",
    tag: "destacado",
  },
  {
    id: 173,
    nombre: "ZHUMIR SECO 700ML",
    descripcion: "Clásico Zhumir ecuatoriano para tragos dulces y shots. Botella de tamaño estándar para compartir en la noche.",
    categoria: "ZHUMIR",
    precios: { PUSUQUI: 8.25, POMASQUI: 8.25, CARCELEN: 8.25 },
    locales: ["CARCELEN", "POMASQUI", "PUSUQUI"],
    imagen: "https://via.placeholder.com/200x260.png?text=ZHUMIR+SECO+700ML",
    tag: "destacado",
  }
];


// Utilidades
function getLocalLabel(id) {
  const loc = LOCALES.find(l => l.id === id);
  return loc ? loc.label : id;
}

function openWhatsapp() {
  const text = encodeURIComponent(
    "Hola, vengo de la web de La Huequita Quiteña y quiero hacer un pedido 🍾"
  );
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
}

// Chatbot
function toggleChatbot() {
  const win = document.getElementById("chatbot-window");
  if (!win) return;
  win.style.display = (win.style.display === "flex") ? "none" : "flex";
}

function sendChatbotForm(event) {
  event.preventDefault();
  const nombre = document.getElementById("cb-nombre")?.value.trim() || "";
  const tel    = document.getElementById("cb-whatsapp")?.value.trim() || "";
  const msg    = document.getElementById("cb-mensaje")?.value.trim() || "";

  if (!tel || !msg) {
    alert("Por favor ingresa al menos tu número de WhatsApp y tu mensaje 🙏");
    return false;
  }

  const texto = encodeURIComponent(
    `Hola, soy ${nombre || "cliente"} y te escribo desde el chat de la web de La Huequita:
` +
    `Whatsapp: ${tel}
` +
    `Mensaje: ${msg}`
  );
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${texto}`, "_blank");
  return false;
}

// Locales
function populateLocalesSelect(selectEl) {
  if (!selectEl) return;
  selectEl.innerHTML = "";
  LOCALES.forEach(loc => {
    const opt = document.createElement("option");
    opt.value = loc.id;
    opt.textContent = loc.label;
    selectEl.appendChild(opt);
  });
  selectEl.value = activeLocal;
}

// Categorías
function getCategories() {
  const set = new Set(products.map(p => p.categoria));
  return ["Todos", ...Array.from(set)];
}

function renderCategories() {
  categoriesContainer.innerHTML = "";
  getCategories().forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "category-chip" + (cat === activeCategory ? " active" : "");
    btn.textContent = cat;
    btn.dataset.category = cat;

    btn.addEventListener("click", () => {
      // 👉 Al hacer click en una categoría, navegamos a "otra página"
      const newUrl = `${window.location.pathname}?categoria=${encodeURIComponent(cat)}`;
      window.location.href = newUrl; // recarga desde arriba, parece otro módulo
    });

    categoriesContainer.appendChild(btn);
  });
}


// Render de productos
function renderProducts() {
  const productsGrid = document.getElementById("products-grid");
  const searchBox = document.getElementById("search-box");
  if (!productsGrid) return;

  const search = (searchBox?.value || "").trim().toLowerCase();
  productsGrid.innerHTML = "";

  const filtered = products.filter(p => {
    const matchesLocal = !p.locales || p.locales.includes(activeLocal);
    const matchesCategory = activeCategory === "Todos" || p.categoria === activeCategory;
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

  filtered.forEach(p => {
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
    let priceText = priceForLocal ? `$ ${priceForLocal.toFixed(2)}` : "No disponible";

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
        `Hola, quiero hacer un pedido en *La Huequita Quiteña* (${getLocalLabel(activeLocal)}):\n` +
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

// Popup edad
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

// Exponer funciones globales para el HTML
window.acceptAge = acceptAge;
window.rejectAge = rejectAge;
window.toggleChatbot = toggleChatbot;
window.sendChatbotForm = sendChatbotForm;
window.openWhatsapp = openWhatsapp;

// Init
function initHuequita() {
  const localSelectToolbar = document.getElementById("local-select");
  const storeSelectPopup = document.getElementById("store-select");
  const searchBox = document.getElementById("search-box");
  const tabs = document.querySelectorAll(".section-tab");
  const yearSpan = document.getElementById("year");
  const cartPill = document.getElementById("cart-pill");
  const mainWhatsappBtn = document.getElementById("main-whatsapp-btn");

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  if (localSelectToolbar) {
    populateLocalesSelect(localSelectToolbar);
    localSelectToolbar.addEventListener("change", () => {
      activeLocal = localSelectToolbar.value;
      localStorage.setItem("huequita_local", activeLocal);
      if (storeSelectPopup) storeSelectPopup.value = activeLocal;
      renderProducts();
    });
  }

  if (storeSelectPopup) {
    populateLocalesSelect(storeSelectPopup);
  }

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

  if (mainWhatsappBtn) {
    mainWhatsappBtn.addEventListener("click", openWhatsapp);
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      activeTabFilter = tab.dataset.filterTab;
      renderProducts();
    });
  });

  renderCategories();
  renderProducts();
}

document.addEventListener("DOMContentLoaded", initHuequita);

