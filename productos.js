// ===============================
// CONFIGURACIÓN BÁSICA
// ===============================
const WHATSAPP_NUMBER = "593982230393"; // 593 + 0982230393 sin el 0

const LOCALES = [
  { id: "PUSUQUI", label: "La Huequita – Pusuqui" },
  { id: "POMASQUI", label: "La Huequita – Pomasqui" },
  { id: "CARCELEN", label: "La Huequita – Carcelen" },
];

let activeLocal = localStorage.getItem("huequita_local") || "PUSUQUI";

// ===============================
// DATA DE PRODUCTOS (AUTOGENERADO DESDE TUS EXCEL)
// ===============================
const products = [
  {
    "id": 1,
    "nombre": "100 FUEGOS 375ML",
    "descripcion": "100 Fuegos 375Ml de la categoría Ron, disponible en La Huequita.",
    "categoria": "RON",
    "precios": {
      "PUSUQUI": 9.25,
      "POMASQUI": 9.25,
      "CARCELEN": 9.25
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=100+FUEGOS+375ML",
    "tag": "destacado"
  },
  {
    "id": 2,
    "nombre": "100 FUEGOS 750ML",
    "descripcion": "100 Fuegos 750Ml de la categoría Ron, disponible en La Huequita.",
    "categoria": "RON",
    "precios": {
      "PUSUQUI": 16.5,
      "POMASQUI": 16.5,
      "CARCELEN": 16.5
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=100+FUEGOS+750ML",
    "tag": "destacado"
  },
  {
    "id": 3,
    "nombre": "100 FUEGOS LATA 350ML",
    "descripcion": "100 Fuegos Lata 350Ml de la categoría Ron, disponible en La Huequita.",
    "categoria": "RON",
    "precios": {
      "PUSUQUI": 2.5,
      "POMASQUI": 2.5,
      "CARCELEN": 2.5
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=100+FUEGOS+LATA+350ML",
    "tag": "destacado"
  },
  {
    "id": 4,
    "nombre": "ABUELO 375ML",
    "descripcion": "Abuelo 375Ml de la categoría Ron, disponible en La Huequita.",
    "categoria": "RON",
    "precios": {
      "PUSUQUI": 8.25,
      "POMASQUI": 8.25,
      "CARCELEN": 8.25
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=ABUELO+375ML",
    "tag": "destacado"
  },
  {
    "id": 5,
    "nombre": "ABUELO 750ML",
    "descripcion": "Abuelo 750Ml de la categoría Ron, disponible en La Huequita.",
    "categoria": "RON",
    "precios": {
      "PUSUQUI": 16.0,
      "POMASQUI": 16.0,
      "CARCELEN": 16.0
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=ABUELO+750ML",
    "tag": "destacado"
  },
  {
    "id": 6,
    "nombre": "AGOGO MENTA COOL GRANDE",
    "descripcion": "Agogo Menta Cool Grande de la categoría Confiteria, disponible en La Huequita.",
    "categoria": "CONFITERIA",
    "precios": {
      "PUSUQUI": 0.4,
      "POMASQUI": 0.4,
      "CARCELEN": 0.4
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=AGOGO+MENTA+COOL+GRANDE",
    "tag": "destacado"
  },
  {
    "id": 7,
    "nombre": "AGOGO MENTA COOL PEQUEÑO",
    "descripcion": "Agogo Menta Cool Pequeño de la categoría Confiteria, disponible en La Huequita.",
    "categoria": "CONFITERIA",
    "precios": {
      "PUSUQUI": 0.25,
      "CARCELEN": 0.25
    },
    "locales": [
      "PUSUQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=AGOGO+MENTA+COOL+PEQUE%C3%91O",
    "tag": "destacado"
  },
  {
    "id": 8,
    "nombre": "AGUA CIELO 1LT",
    "descripcion": "Agua Cielo 1Lt de la categoría Bebidas No Alcoholicas, disponible en La Huequita.",
    "categoria": "BEBIDAS NO ALCOHOLICAS",
    "precios": {
      "PUSUQUI": 1.0,
      "POMASQUI": 1.0,
      "CARCELEN": 1.0
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=AGUA+CIELO+1LT",
    "tag": "destacado"
  },
  {
    "id": 9,
    "nombre": "AGUA CIELO PEQUEÑA",
    "descripcion": "Agua Cielo Pequeña de la categoría Bebidas No Alcoholicas, disponible en La Huequita.",
    "categoria": "BEBIDAS NO ALCOHOLICAS",
    "precios": {
      "PUSUQUI": 0.5,
      "POMASQUI": 0.5,
      "CARCELEN": 0.5
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=AGUA+CIELO+PEQUE%C3%91A",
    "tag": "destacado"
  },
  {
    "id": 10,
    "nombre": "AGUARDIENTE AMARILLO",
    "descripcion": "Aguardiente Amarillo de la categoría Aguardiente, disponible en La Huequita.",
    "categoria": "AGUARDIENTE",
    "precios": {
      "PUSUQUI": 20.0,
      "POMASQUI": 20.0,
      "CARCELEN": 20.0
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=AGUARDIENTE+AMARILLO",
    "tag": "destacado"
  },
  {
    "id": 11,
    "nombre": "AGUARDIENTE AMARILLO 1LT",
    "descripcion": "Aguardiente Amarillo 1Lt de la categoría Aguardiente, disponible en La Huequita.",
    "categoria": "AGUARDIENTE",
    "precios": {
      "PUSUQUI": 25.0,
      "POMASQUI": 25.0,
      "CARCELEN": 25.0
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=AGUARDIENTE+AMARILLO+1LT",
    "tag": "destacado"
  },
  {
    "id": 12,
    "nombre": "AGUARDIENTE DON COCO",
    "descripcion": "Aguardiente Don Coco de la categoría Aguardiente, disponible en La Huequita.",
    "categoria": "AGUARDIENTE",
    "precios": {
      "PUSUQUI": 11.0,
      "POMASQUI": 11.0,
      "CARCELEN": 11.0
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=AGUARDIENTE+DON+COCO",
    "tag": "destacado"
  },
  {
    "id": 13,
    "nombre": "AGUARDIENTE MEDALLO",
    "descripcion": "Aguardiente Medallo de la categoría Aguardiente, disponible en La Huequita.",
    "categoria": "AGUARDIENTE",
    "precios": {
      "PUSUQUI": 14.0,
      "POMASQUI": 14.0,
      "CARCELEN": 14.0
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=AGUARDIENTE+MEDALLO",
    "tag": "destacado"
  },
  {
    "id": 14,
    "nombre": "AGUARDIENTE POZO 350ML",
    "descripcion": "Aguardiente Pozo 350Ml de la categoría Aguardiente, disponible en La Huequita.",
    "categoria": "AGUARDIENTE",
    "precios": {
      "PUSUQUI": 2.5,
      "POMASQUI": 2.5,
      "CARCELEN": 2.5
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=AGUARDIENTE+POZO+350ML",
    "tag": "destacado"
  },
  {
    "id": 15,
    "nombre": "AGUA TONICA",
    "descripcion": "Agua Tonica de la categoría Bebidas No Alcoholicas, disponible en La Huequita.",
    "categoria": "BEBIDAS NO ALCOHOLICAS",
    "precios": {
      "PUSUQUI": 3.25,
      "POMASQUI": 3.25,
      "CARCELEN": 3.25
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=AGUA+TONICA",
    "tag": "destacado"
  },
  {
    "id": 16,
    "nombre": "AMPER",
    "descripcion": "Amper de la categoría Bebidas No Alcoholicas, disponible en La Huequita.",
    "categoria": "BEBIDAS NO ALCOHOLICAS",
    "precios": {
      "PUSUQUI": 1.7,
      "POMASQUI": 1.7,
      "CARCELEN": 1.7
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=AMPER",
    "tag": "destacado"
  },
  {
    "id": 17,
    "nombre": "ANTHONY FRESA 750ML",
    "descripcion": "Anthony Fresa 750Ml de la categoría Vino, disponible en La Huequita.",
    "categoria": "VINO",
    "precios": {
      "PUSUQUI": 10.5,
      "POMASQUI": 10.5,
      "CARCELEN": 10.5
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=ANTHONY+FRESA+750ML",
    "tag": "destacado"
  },
  {
    "id": 18,
    "nombre": "ANTHONY LATA",
    "descripcion": "Anthony Lata de la categoría Vino, disponible en La Huequita.",
    "categoria": "VINO",
    "precios": {
      "PUSUQUI": 2.5,
      "POMASQUI": 2.5,
      "CARCELEN": 2.5
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=ANTHONY+LATA",
    "tag": "destacado"
  },
  {
    "id": 19,
    "nombre": "ANTIOQUEÑO 1LT",
    "descripcion": "Antioqueño 1Lt de la categoría Aguardiente, disponible en La Huequita.",
    "categoria": "AGUARDIENTE",
    "precios": {
      "PUSUQUI": 25.7,
      "POMASQUI": 25.7,
      "CARCELEN": 25.7
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=ANTIOQUE%C3%91O+1LT",
    "tag": "destacado"
  },
  {
    "id": 20,
    "nombre": "ANTIOQUEÑO 375ML",
    "descripcion": "Antioqueño 375Ml de la categoría Aguardiente, disponible en La Huequita.",
    "categoria": "AGUARDIENTE",
    "precios": {
      "PUSUQUI": 12.5,
      "POMASQUI": 12.5,
      "CARCELEN": 12.5
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=ANTIOQUE%C3%91O+375ML",
    "tag": "destacado"
  },
  {
    "id": 21,
    "nombre": "ANTIOQUEÑO 750ML",
    "descripcion": "Antioqueño 750Ml de la categoría Aguardiente, disponible en La Huequita.",
    "categoria": "AGUARDIENTE",
    "precios": {
      "PUSUQUI": 20.75,
      "POMASQUI": 20.75,
      "CARCELEN": 20.75
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=ANTIOQUE%C3%91O+750ML",
    "tag": "destacado"
  },
  {
    "id": 22,
    "nombre": "BACARDI BLANCO 980ML",
    "descripcion": "Bacardi Blanco 980Ml de la categoría Ron, disponible en La Huequita.",
    "categoria": "RON",
    "precios": {
      "PUSUQUI": 22.75,
      "POMASQUI": 22.75,
      "CARCELEN": 22.75
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=BACARDI+BLANCO+980ML",
    "tag": "destacado"
  },
  {
    "id": 23,
    "nombre": "BALDORE  DURAZNO BAG IN BOX 600ML",
    "descripcion": "Baldore  Durazno Bag In Box 600Ml de la categoría Vino, disponible en La Huequita.",
    "categoria": "VINO",
    "precios": {
      "PUSUQUI": 3.0,
      "POMASQUI": 3.0,
      "CARCELEN": 3.0
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=BALDORE++DURAZNO+BAG+IN+BOX+600ML",
    "tag": "destacado"
  },
  {
    "id": 24,
    "nombre": "BALLANTINES 700ML",
    "descripcion": "Ballantines 700Ml de la categoría Whisky, disponible en La Huequita.",
    "categoria": "WHISKY",
    "precios": {
      "PUSUQUI": 22.75,
      "POMASQUI": 22.75,
      "CARCELEN": 22.75
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=BALLANTINES+700ML",
    "tag": "destacado"
  },
  {
    "id": 25,
    "nombre": "BELLOWS 750ML",
    "descripcion": "Bellows 750Ml de la categoría Whisky, disponible en La Huequita.",
    "categoria": "WHISKY",
    "precios": {
      "PUSUQUI": 15.5,
      "POMASQUI": 15.5,
      "CARCELEN": 15.5
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=BELLOWS+750ML",
    "tag": "destacado"
  },
  {
    "id": 26,
    "nombre": "BLACK AND WHITE 750ML",
    "descripcion": "Black And White 750Ml de la categoría Whisky, disponible en La Huequita.",
    "categoria": "WHISKY",
    "precios": {
      "PUSUQUI": 24.75,
      "POMASQUI": 24.75,
      "CARCELEN": 24.75
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=BLACK+AND+WHITE+750ML",
    "tag": "destacado"
  },
  {
    "id": 27,
    "nombre": "BLACK CASTLE NEGRO 750ML",
    "descripcion": "Black Castle Negro 750Ml de la categoría Whisky, disponible en La Huequita.",
    "categoria": "WHISKY",
    "precios": {
      "PUSUQUI": 16.0,
      "POMASQUI": 16.0,
      "CARCELEN": 16.0
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=BLACK+CASTLE+NEGRO+750ML",
    "tag": "destacado"
  },
  {
    "id": 28,
    "nombre": "BLACK CASTLE ROJO 750ML",
    "descripcion": "Black Castle Rojo 750Ml de la categoría Whisky, disponible en La Huequita.",
    "categoria": "WHISKY",
    "precios": {
      "PUSUQUI": 17.0,
      "POMASQUI": 17.0,
      "CARCELEN": 17.0
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=BLACK+CASTLE+ROJO+750ML",
    "tag": "destacado"
  },
  {
    "id": 29,
    "nombre": "BLACK KING 750ML",
    "descripcion": "Black King 750Ml de la categoría Whisky, disponible en La Huequita.",
    "categoria": "WHISKY",
    "precios": {
      "PUSUQUI": 11.5,
      "POMASQUI": 11.5,
      "CARCELEN": 11.5
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=BLACK+KING+750ML",
    "tag": "destacado"
  },
  {
    "id": 30,
    "nombre": "BLACK OWL 750ML",
    "descripcion": "Black Owl 750Ml de la categoría Whisky, disponible en La Huequita.",
    "categoria": "WHISKY",
    "precios": {
      "PUSUQUI": 18.0,
      "POMASQUI": 18.0,
      "CARCELEN": 18.0
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=BLACK+OWL+750ML",
    "tag": "destacado"
  },
  {
    "id": 31,
    "nombre": "BLACK OWL FIRE 750ML",
    "descripcion": "Black Owl Fire 750Ml de la categoría Whisky, disponible en La Huequita.",
    "categoria": "WHISKY",
    "precios": {
      "PUSUQUI": 18.0,
      "POMASQUI": 18.0,
      "CARCELEN": 18.0
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=BLACK+OWL+FIRE+750ML",
    "tag": "destacado"
  },
  {
    "id": 32,
    "nombre": "BOTELLA LT",
    "descripcion": "Botella Lt de la categoría Cerveza, disponible en La Huequita.",
    "categoria": "CERVEZA",
    "precios": {
      "PUSUQUI": 0.3,
      "POMASQUI": 0.3,
      "CARCELEN": 0.3
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=BOTELLA+LT",
    "tag": "destacado"
  },
  {
    "id": 33,
    "nombre": "BUCHANANS 750ML",
    "descripcion": "Buchanans 750Ml de la categoría Whisky, disponible en La Huequita.",
    "categoria": "WHISKY",
    "precios": {
      "PUSUQUI": 74.0,
      "POMASQUI": 74.0,
      "CARCELEN": 74.0
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=BUCHANANS+750ML",
    "tag": "destacado"
  },
  {
    "id": 34,
    "nombre": "CAÑA BLANCA 750ML",
    "descripcion": "Caña Blanca 750Ml de la categoría Ron, disponible en La Huequita.",
    "categoria": "RON",
    "precios": {
      "PUSUQUI": 11.0,
      "POMASQUI": 11.0,
      "CARCELEN": 11.0
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=CA%C3%91A+BLANCA+750ML",
    "tag": "destacado"
  },
  {
    "id": 35,
    "nombre": "CAÑA MANABITA 375ML",
    "descripcion": "Caña Manabita 375Ml de la categoría Aguardiente, disponible en La Huequita.",
    "categoria": "AGUARDIENTE",
    "precios": {
      "PUSUQUI": 6.25,
      "POMASQUI": 6.25,
      "CARCELEN": 6.25
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=CA%C3%91A+MANABITA+375ML",
    "tag": "destacado"
  },
  {
    "id": 36,
    "nombre": "CAÑA MANABITA 750ML",
    "descripcion": "Caña Manabita 750Ml de la categoría Aguardiente, disponible en La Huequita.",
    "categoria": "AGUARDIENTE",
    "precios": {
      "PUSUQUI": 12.0,
      "POMASQUI": 12.0,
      "CARCELEN": 12.0
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=CA%C3%91A+MANABITA+750ML",
    "tag": "destacado"
  },
  {
    "id": 37,
    "nombre": "CANTACLARO 385ML",
    "descripcion": "Cantaclaro 385Ml de la categoría Aguardiente, disponible en La Huequita.",
    "categoria": "AGUARDIENTE",
    "precios": {
      "PUSUQUI": 4.5,
      "POMASQUI": 4.5,
      "CARCELEN": 4.5
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=CANTACLARO+385ML",
    "tag": "destacado"
  },
  {
    "id": 38,
    "nombre": "CANTACLARO 750 ML",
    "descripcion": "Cantaclaro 750 Ml de la categoría Aguardiente, disponible en La Huequita.",
    "categoria": "AGUARDIENTE",
    "precios": {
      "PUSUQUI": 9.25,
      "POMASQUI": 9.25,
      "CARCELEN": 9.25
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=CANTACLARO+750+ML",
    "tag": "destacado"
  },
  {
    "id": 39,
    "nombre": "CARNIVAL",
    "descripcion": "Carnival de la categoría Cigarrillos, disponible en La Huequita.",
    "categoria": "CIGARRILLOS",
    "precios": {
      "PUSUQUI": 0.3,
      "POMASQUI": 0.3,
      "CARCELEN": 0.3
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=CARNIVAL",
    "tag": "destacado"
  },
  {
    "id": 40,
    "nombre": "CASILLERO DEL DIABLO 750ML",
    "descripcion": "Casillero Del Diablo 750Ml de la categoría Vino, disponible en La Huequita.",
    "categoria": "VINO",
    "precios": {
      "PUSUQUI": 26.75,
      "POMASQUI": 26.75,
      "CARCELEN": 26.75
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=CASILLERO+DEL+DIABLO+750ML",
    "tag": "destacado"
  },
  {
    "id": 41,
    "nombre": "CASTILLO AÑEJO 750ML",
    "descripcion": "Castillo Añejo 750Ml de la categoría Ron, disponible en La Huequita.",
    "categoria": "RON",
    "precios": {
      "PUSUQUI": 14.5,
      "POMASQUI": 14.5,
      "CARCELEN": 14.5
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=CASTILLO+A%C3%91EJO+750ML",
    "tag": "destacado"
  },
  {
    "id": 42,
    "nombre": "CERVEZA CLUB 1LT",
    "descripcion": "Cerveza Club 1Lt de la categoría Cerveza, disponible en La Huequita.",
    "categoria": "CERVEZA",
    "precios": {
      "PUSUQUI": 2.9,
      "POMASQUI": 2.9,
      "CARCELEN": 2.9
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=CERVEZA+CLUB+1LT",
    "tag": "destacado"
  },
  {
    "id": 43,
    "nombre": "CERVEZA CLUB LATA",
    "descripcion": "Cerveza Club Lata de la categoría Cerveza, disponible en La Huequita.",
    "categoria": "CERVEZA",
    "precios": {
      "PUSUQUI": 2.0,
      "POMASQUI": 2.0,
      "CARCELEN": 2.0
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=CERVEZA+CLUB+LATA",
    "tag": "destacado"
  },
  {
    "id": 44,
    "nombre": "CERVEZA CLUB LATA 473CC",
    "descripcion": "Cerveza Club Lata 473Cc de la categoría Cerveza, disponible en La Huequita.",
    "categoria": "CERVEZA",
    "precios": {
      "PUSUQUI": 2.5,
      "POMASQUI": 2.5,
      "CARCELEN": 2.5
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=CERVEZA+CLUB+LATA+473CC",
    "tag": "destacado"
  },
  {
    "id": 45,
    "nombre": "CERVEZA CLUB PEQUEÑA 330CC",
    "descripcion": "Cerveza Club Pequeña 330Cc de la categoría Cerveza, disponible en La Huequita.",
    "categoria": "CERVEZA",
    "precios": {
      "PUSUQUI": 2.0,
      "POMASQUI": 2.0,
      "CARCELEN": 2.0
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=CERVEZA+CLUB+PEQUE%C3%91A+330CC",
    "tag": "destacado"
  },
  {
    "id": 46,
    "nombre": "CERVEZA CORONA 355CC",
    "descripcion": "Cerveza Corona 355Cc de la categoría Cerveza, disponible en La Huequita.",
    "categoria": "CERVEZA",
    "precios": {
      "PUSUQUI": 2.6,
      "POMASQUI": 2.6,
      "CARCELEN": 2.6
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=CERVEZA+CORONA+355CC",
    "tag": "destacado"
  },
  {
    "id": 47,
    "nombre": "CERVEZA PILSENER 1LT",
    "descripcion": "Cerveza Pilsener 1Lt de la categoría Cerveza, disponible en La Huequita.",
    "categoria": "CERVEZA",
    "precios": {
      "PUSUQUI": 2.85,
      "POMASQUI": 2.85,
      "CARCELEN": 2.85
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=CERVEZA+PILSENER+1LT",
    "tag": "destacado"
  },
  {
    "id": 48,
    "nombre": "CERVEZA PILSENER LATOTA 473CC",
    "descripcion": "Cerveza Pilsener Latota 473Cc de la categoría Cerveza, disponible en La Huequita.",
    "categoria": "CERVEZA",
    "precios": {
      "PUSUQUI": 2.0,
      "POMASQUI": 2.0,
      "CARCELEN": 2.0
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=CERVEZA+PILSENER+LATOTA+473CC",
    "tag": "destacado"
  },
  {
    "id": 49,
    "nombre": "CERVEZA PILSENER PEQUEÑA 330CC",
    "descripcion": "Cerveza Pilsener Pequeña 330Cc de la categoría Cerveza, disponible en La Huequita.",
    "categoria": "CERVEZA",
    "precios": {
      "PUSUQUI": 2.0,
      "POMASQUI": 2.0,
      "CARCELEN": 2.0
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=CERVEZA+PILSENER+PEQUE%C3%91A+330CC",
    "tag": "destacado"
  },
  {
    "id": 50,
    "nombre": "CHIVAS REGAL 12 AÑOS 750ML",
    "descripcion": "Chivas Regal 12 Años 750Ml de la categoría Whisky, disponible en La Huequita.",
    "categoria": "WHISKY",
    "precios": {
      "PUSUQUI": 59.75,
      "POMASQUI": 59.75,
      "CARCELEN": 59.75
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=CHIVAS+REGAL+12+A%C3%91OS+750ML",
    "tag": "destacado"
  },
  {
    "id": 51,
    "nombre": "CLOSS DE PIRQUE CABERNET 1LT",
    "descripcion": "Closs De Pirque Cabernet 1Lt de la categoría Vino, disponible en La Huequita.",
    "categoria": "VINO",
    "precios": {
      "PUSUQUI": 10.5,
      "POMASQUI": 10.5,
      "CARCELEN": 10.5
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=CLOSS+DE+PIRQUE+CABERNET+1LT",
    "tag": "destacado"
  },
  {
    "id": 52,
    "nombre": "COCA COLA 1LT",
    "descripcion": "Coca Cola 1Lt de la categoría Bebidas No Alcoholicas, disponible en La Huequita.",
    "categoria": "BEBIDAS NO ALCOHOLICAS",
    "precios": {
      "PUSUQUI": 1.75,
      "POMASQUI": 1.75,
      "CARCELEN": 1.75
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=COCA+COLA+1LT",
    "tag": "destacado"
  },
  {
    "id": 53,
    "nombre": "COCA COLA 500ML",
    "descripcion": "Coca Cola 500Ml de la categoría Bebidas No Alcoholicas, disponible en La Huequita.",
    "categoria": "BEBIDAS NO ALCOHOLICAS",
    "precios": {
      "PUSUQUI": 0.95,
      "POMASQUI": 0.95,
      "CARCELEN": 0.95
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=COCA+COLA+500ML",
    "tag": "destacado"
  },
  {
    "id": 54,
    "nombre": "CONCHA Y TORO CABERNET RESERVADO 750ML",
    "descripcion": "Concha Y Toro Cabernet Reservado 750Ml de la categoría Vino, disponible en La Huequita.",
    "categoria": "VINO",
    "precios": {
      "PUSUQUI": 14.5,
      "POMASQUI": 14.5,
      "CARCELEN": 14.5
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=CONCHA+Y+TORO+CABERNET+RESERVADO+750ML",
    "tag": "destacado"
  },
  {
    "id": 55,
    "nombre": "CONCHA Y TORO MERLOT RESERVADO 750ML",
    "descripcion": "Concha Y Toro Merlot Reservado 750Ml de la categoría Vino, disponible en La Huequita.",
    "categoria": "VINO",
    "precios": {
      "PUSUQUI": 14.5,
      "POMASQUI": 14.5,
      "CARCELEN": 14.5
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=CONCHA+Y+TORO+MERLOT+RESERVADO+750ML",
    "tag": "destacado"
  },
  {
    "id": 56,
    "nombre": "CORONITA LATA",
    "descripcion": "Coronita Lata de la categoría Cerveza, disponible en La Huequita.",
    "categoria": "CERVEZA",
    "precios": {
      "PUSUQUI": 2.0,
      "POMASQUI": 2.0,
      "CARCELEN": 2.0
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=CORONITA+LATA",
    "tag": "destacado"
  },
  {
    "id": 57,
    "nombre": "CRISTAL 375ML",
    "descripcion": "Cristal 375Ml de la categoría Aguardiente, disponible en La Huequita.",
    "categoria": "AGUARDIENTE",
    "precios": {
      "PUSUQUI": 5.75,
      "POMASQUI": 5.75,
      "CARCELEN": 5.75
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=CRISTAL+375ML",
    "tag": "destacado"
  },
  {
    "id": 58,
    "nombre": "CRISTAL 750 ML",
    "descripcion": "Cristal 750 Ml de la categoría Aguardiente, disponible en La Huequita.",
    "categoria": "AGUARDIENTE",
    "precios": {
      "PUSUQUI": 11.0,
      "POMASQUI": 11.0,
      "CARCELEN": 11.0
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=CRISTAL+750+ML",
    "tag": "destacado"
  },
  {
    "id": 59,
    "nombre": "CUBATA",
    "descripcion": "Cubata de la categoría Vodka, disponible en La Huequita.",
    "categoria": "VODKA",
    "precios": {
      "PUSUQUI": 3.75,
      "POMASQUI": 3.75,
      "CARCELEN": 3.75
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=CUBATA",
    "tag": "destacado"
  },
  {
    "id": 60,
    "nombre": "CUNINGHAM 375ML",
    "descripcion": "Cuningham 375Ml de la categoría Whisky, disponible en La Huequita.",
    "categoria": "WHISKY",
    "precios": {
      "PUSUQUI": 7.25,
      "POMASQUI": 7.25,
      "CARCELEN": 7.25
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=CUNINGHAM+375ML",
    "tag": "destacado"
  },
  {
    "id": 61,
    "nombre": "CUNINGHAM 750ML",
    "descripcion": "Cuningham 750Ml de la categoría Whisky, disponible en La Huequita.",
    "categoria": "WHISKY",
    "precios": {
      "PUSUQUI": 14.0,
      "POMASQUI": 14.0,
      "CARCELEN": 14.0
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=CUNINGHAM+750ML",
    "tag": "destacado"
  },
  {
    "id": 62,
    "nombre": "DON CASTELO 1LT",
    "descripcion": "Don Castelo 1Lt de la categoría Ron, disponible en La Huequita.",
    "categoria": "RON",
    "precios": {
      "PUSUQUI": 9.25,
      "POMASQUI": 9.25,
      "CARCELEN": 9.25
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=DON+CASTELO+1LT",
    "tag": "destacado"
  },
  {
    "id": 63,
    "nombre": "ELEPHANT",
    "descripcion": "Elephant de la categoría Cigarrillos, disponible en La Huequita.",
    "categoria": "CIGARRILLOS",
    "precios": {
      "PUSUQUI": 0.25,
      "POMASQUI": 0.25,
      "CARCELEN": 0.25
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=ELEPHANT",
    "tag": "destacado"
  },
  {
    "id": 64,
    "nombre": "ESTELAR NARANJILLA 750ML",
    "descripcion": "Estelar Naranjilla 750Ml de la categoría Ron, disponible en La Huequita.",
    "categoria": "RON",
    "precios": {
      "PUSUQUI": 9.0,
      "POMASQUI": 9.0,
      "CARCELEN": 9.0
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=ESTELAR+NARANJILLA+750ML",
    "tag": "destacado"
  },
  {
    "id": 65,
    "nombre": "ESTELAR ORO 375ML",
    "descripcion": "Estelar Oro 375Ml de la categoría Ron, disponible en La Huequita.",
    "categoria": "RON",
    "precios": {
      "PUSUQUI": 6.5,
      "POMASQUI": 6.5,
      "CARCELEN": 6.5
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=ESTELAR+ORO+375ML",
    "tag": "destacado"
  },
  {
    "id": 66,
    "nombre": "ESTELAR ORO 750ML",
    "descripcion": "Estelar Oro 750Ml de la categoría Ron, disponible en La Huequita.",
    "categoria": "RON",
    "precios": {
      "PUSUQUI": 12.0,
      "POMASQUI": 12.0,
      "CARCELEN": 12.0
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=ESTELAR+ORO+750ML",
    "tag": "destacado"
  },
  {
    "id": 67,
    "nombre": "FOSFOROS",
    "descripcion": "Fosforos de la categoría Varios, disponible en La Huequita.",
    "categoria": "VARIOS",
    "precios": {
      "PUSUQUI": 0.15,
      "POMASQUI": 0.15,
      "CARCELEN": 0.15
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=FOSFOROS",
    "tag": "destacado"
  },
  {
    "id": 68,
    "nombre": "FUZE TEA 1LT",
    "descripcion": "Fuze Tea 1Lt de la categoría Bebidas No Alcoholicas, disponible en La Huequita.",
    "categoria": "BEBIDAS NO ALCOHOLICAS",
    "precios": {
      "PUSUQUI": 1.55,
      "POMASQUI": 1.55,
      "CARCELEN": 1.55
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=FUZE+TEA+1LT",
    "tag": "destacado"
  },
  {
    "id": 69,
    "nombre": "GATO NEGRO 750ML",
    "descripcion": "Gato Negro 750Ml de la categoría Vino, disponible en La Huequita.",
    "categoria": "VINO",
    "precios": {
      "PUSUQUI": 15.5,
      "POMASQUI": 15.5,
      "CARCELEN": 15.5
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=GATO+NEGRO+750ML",
    "tag": "destacado"
  },
  {
    "id": 70,
    "nombre": "GENIO TAPA NEGRA 750ML",
    "descripcion": "Genio Tapa Negra 750Ml de la categoría Ron, disponible en La Huequita.",
    "categoria": "RON",
    "precios": {
      "PUSUQUI": 8.25,
      "POMASQUI": 8.25,
      "CARCELEN": 8.25
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=GENIO+TAPA+NEGRA+750ML",
    "tag": "destacado"
  },
  {
    "id": 71,
    "nombre": "GENIO TAPA ROJA 750ML",
    "descripcion": "Genio Tapa Roja 750Ml de la categoría Ron, disponible en La Huequita.",
    "categoria": "RON",
    "precios": {
      "PUSUQUI": 5.75,
      "POMASQUI": 5.75,
      "CARCELEN": 5.75
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=GENIO+TAPA+ROJA+750ML",
    "tag": "destacado"
  },
  {
    "id": 72,
    "nombre": "GIN BOND 750ML",
    "descripcion": "Gin Bond 750Ml de la categoría Ginebra, disponible en La Huequita.",
    "categoria": "GINEBRA",
    "precios": {
      "PUSUQUI": 14.5,
      "POMASQUI": 14.5,
      "CARCELEN": 14.5
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=GIN+BOND+750ML",
    "tag": "destacado"
  },
  {
    "id": 73,
    "nombre": "GIN UNDER LONDON DRY",
    "descripcion": "Gin Under London Dry de la categoría Ginebra, disponible en La Huequita.",
    "categoria": "GINEBRA",
    "precios": {
      "PUSUQUI": 17.0,
      "POMASQUI": 17.0,
      "CARCELEN": 17.0
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=GIN+UNDER+LONDON+DRY",
    "tag": "destacado"
  },
  {
    "id": 74,
    "nombre": "GIN W LONDON AZUL",
    "descripcion": "Gin W London Azul de la categoría Ginebra, disponible en La Huequita.",
    "categoria": "GINEBRA",
    "precios": {
      "PUSUQUI": 18.5,
      "POMASQUI": 18.5,
      "CARCELEN": 18.5
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=GIN+W+LONDON+AZUL",
    "tag": "destacado"
  },
  {
    "id": 75,
    "nombre": "GRAND OLD PARR 750ML",
    "descripcion": "Grand Old Parr 750Ml de la categoría Whisky, disponible en La Huequita.",
    "categoria": "WHISKY",
    "precios": {
      "PUSUQUI": 62.75,
      "CARCELEN": 62.75
    },
    "locales": [
      "PUSUQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=GRAND+OLD+PARR+750ML",
    "tag": "destacado"
  },
  {
    "id": 76,
    "nombre": "GRANTS 750ML",
    "descripcion": "Grants 750Ml de la categoría Whisky, disponible en La Huequita.",
    "categoria": "WHISKY",
    "precios": {
      "PUSUQUI": 21.75,
      "POMASQUI": 21.75,
      "CARCELEN": 21.75
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=GRANTS+750ML",
    "tag": "destacado"
  },
  {
    "id": 77,
    "nombre": "GRAN VANDUSH",
    "descripcion": "Gran Vandush de la categoría Champagne, disponible en La Huequita.",
    "categoria": "CHAMPAGNE",
    "precios": {
      "PUSUQUI": 8.75,
      "POMASQUI": 8.75,
      "CARCELEN": 8.75
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=GRAN+VANDUSH",
    "tag": "destacado"
  },
  {
    "id": 78,
    "nombre": "GREEN MATE 345ML",
    "descripcion": "Green Mate 345Ml de la categoría Licor De Hierbas, disponible en La Huequita.",
    "categoria": "LICOR DE HIERBAS",
    "precios": {
      "PUSUQUI": 5.0,
      "POMASQUI": 5.0,
      "CARCELEN": 5.0
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=GREEN+MATE+345ML",
    "tag": "destacado"
  },
  {
    "id": 79,
    "nombre": "GREEN MATE 750ML",
    "descripcion": "Green Mate 750Ml de la categoría Licor De Hierbas, disponible en La Huequita.",
    "categoria": "LICOR DE HIERBAS",
    "precios": {
      "PUSUQUI": 13.5,
      "POMASQUI": 13.5,
      "CARCELEN": 13.5
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=GREEN+MATE+750ML",
    "tag": "destacado"
  },
  {
    "id": 80,
    "nombre": "GUITIG 1.5LT",
    "descripcion": "Guitig 1.5Lt de la categoría Bebidas No Alcoholicas, disponible en La Huequita.",
    "categoria": "BEBIDAS NO ALCOHOLICAS",
    "precios": {
      "PUSUQUI": 1.75,
      "POMASQUI": 1.75,
      "CARCELEN": 1.75
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=GUITIG+1.5LT",
    "tag": "destacado"
  },
  {
    "id": 81,
    "nombre": "HALLS BARRA SURTIDO",
    "descripcion": "Halls Barra Surtido de la categoría Confiteria, disponible en La Huequita.",
    "categoria": "CONFITERIA",
    "precios": {
      "PUSUQUI": 0.8,
      "POMASQUI": 0.8,
      "CARCELEN": 0.8
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=HALLS+BARRA+SURTIDO",
    "tag": "destacado"
  },
  {
    "id": 82,
    "nombre": "HALLS UNIDAD",
    "descripcion": "Halls Unidad de la categoría Confiteria, disponible en La Huequita.",
    "categoria": "CONFITERIA",
    "precios": {
      "PUSUQUI": 0.05,
      "POMASQUI": 0.05,
      "CARCELEN": 0.05
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=HALLS+UNIDAD",
    "tag": "destacado"
  },
  {
    "id": 83,
    "nombre": "JABAS VACIAS CERVEZA",
    "descripcion": "Jabas Vacias Cerveza de la categoría Cerveza, disponible en La Huequita.",
    "categoria": "CERVEZA",
    "precios": {
      "PUSUQUI": 2.6,
      "POMASQUI": 2.6,
      "CARCELEN": 2.6
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=JABAS+VACIAS+CERVEZA",
    "tag": "destacado"
  },
  {
    "id": 84,
    "nombre": "JAGERMEISTER 1LITRO",
    "descripcion": "Jagermeister 1Litro de la categoría Licor De Hierbas, disponible en La Huequita.",
    "categoria": "LICOR DE HIERBAS",
    "precios": {
      "PUSUQUI": 42.0,
      "POMASQUI": 42.0,
      "CARCELEN": 42.0
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=JAGERMEISTER+1LITRO",
    "tag": "destacado"
  },
  {
    "id": 85,
    "nombre": "JAGERMEISTER 750ML",
    "descripcion": "Jagermeister 750Ml de la categoría Licor De Hierbas, disponible en La Huequita.",
    "categoria": "LICOR DE HIERBAS",
    "precios": {
      "PUSUQUI": 36.0,
      "POMASQUI": 36.0,
      "CARCELEN": 36.0
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=JAGERMEISTER+750ML",
    "tag": "destacado"
  },
  {
    "id": 86,
    "nombre": "JHON MORRIS NEGRO 1LT",
    "descripcion": "Jhon Morris Negro 1Lt de la categoría Whisky, disponible en La Huequita.",
    "categoria": "WHISKY",
    "precios": {
      "PUSUQUI": 19.5,
      "POMASQUI": 19.5,
      "CARCELEN": 19.5
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=JHON+MORRIS+NEGRO+1LT",
    "tag": "destacado"
  },
  {
    "id": 87,
    "nombre": "JHON MORRIS NEGRO 750ML",
    "descripcion": "Jhon Morris Negro 750Ml de la categoría Whisky, disponible en La Huequita.",
    "categoria": "WHISKY",
    "precios": {
      "PUSUQUI": 16.5,
      "POMASQUI": 16.5,
      "CARCELEN": 16.5
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=JHON+MORRIS+NEGRO+750ML",
    "tag": "destacado"
  },
  {
    "id": 88,
    "nombre": "JHON MORRIS ROJO 1LT",
    "descripcion": "Jhon Morris Rojo 1Lt de la categoría Whisky, disponible en La Huequita.",
    "categoria": "WHISKY",
    "precios": {
      "PUSUQUI": 18.5,
      "POMASQUI": 18.5,
      "CARCELEN": 18.5
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=JHON+MORRIS+ROJO+1LT",
    "tag": "destacado"
  },
  {
    "id": 89,
    "nombre": "JHON MORRIS ROJO 750ML",
    "descripcion": "Jhon Morris Rojo 750Ml de la categoría Whisky, disponible en La Huequita.",
    "categoria": "WHISKY",
    "precios": {
      "PUSUQUI": 15.5,
      "POMASQUI": 15.5,
      "CARCELEN": 15.5
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=JHON+MORRIS+ROJO+750ML",
    "tag": "destacado"
  },
  {
    "id": 90,
    "nombre": "JHONNY ROJO 750ML",
    "descripcion": "Jhonny Rojo 750Ml de la categoría Whisky, disponible en La Huequita.",
    "categoria": "WHISKY",
    "precios": {
      "PUSUQUI": 27.25,
      "POMASQUI": 27.25,
      "CARCELEN": 27.25
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=JHONNY+ROJO+750ML",
    "tag": "destacado"
  },
  {
    "id": 91,
    "nombre": "JUGO DEL VALLE 1,75LT",
    "descripcion": "Jugo Del Valle 1,75Lt de la categoría Bebidas No Alcoholicas, disponible en La Huequita.",
    "categoria": "BEBIDAS NO ALCOHOLICAS",
    "precios": {
      "PUSUQUI": 1.75,
      "POMASQUI": 1.75,
      "CARCELEN": 1.75
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=JUGO+DEL+VALLE+1%2C75LT",
    "tag": "destacado"
  },
  {
    "id": 92,
    "nombre": "JUGO DEL VALLE  500ML",
    "descripcion": "Jugo Del Valle  500Ml de la categoría Bebidas No Alcoholicas, disponible en La Huequita.",
    "categoria": "BEBIDAS NO ALCOHOLICAS",
    "precios": {
      "PUSUQUI": 0.75,
      "POMASQUI": 0.75,
      "CARCELEN": 0.75
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=JUGO+DEL+VALLE++500ML",
    "tag": "destacado"
  },
  {
    "id": 93,
    "nombre": "JUGO PULP",
    "descripcion": "Jugo Pulp de la categoría Bebidas No Alcoholicas, disponible en La Huequita.",
    "categoria": "BEBIDAS NO ALCOHOLICAS",
    "precios": {
      "PUSUQUI": 1.05
    },
    "locales": [
      "PUSUQUI"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=JUGO+PULP",
    "tag": "destacado"
  },
  {
    "id": 94,
    "nombre": "LARK",
    "descripcion": "Lark de la categoría Cigarrillos, disponible en La Huequita.",
    "categoria": "CIGARRILLOS",
    "precios": {
      "PUSUQUI": 0.6,
      "POMASQUI": 0.6,
      "CARCELEN": 0.6
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=LARK",
    "tag": "destacado"
  },
  {
    "id": 95,
    "nombre": "LIDER",
    "descripcion": "Lider de la categoría Cigarrillos, disponible en La Huequita.",
    "categoria": "CIGARRILLOS",
    "precios": {
      "PUSUQUI": 0.6,
      "POMASQUI": 0.6,
      "CARCELEN": 0.6
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=LIDER",
    "tag": "destacado"
  },
  {
    "id": 96,
    "nombre": "MAIPO TINTO CABERNET 750ML",
    "descripcion": "Maipo Tinto Cabernet 750Ml de la categoría Vino, disponible en La Huequita.",
    "categoria": "VINO",
    "precios": {
      "PUSUQUI": 10.5,
      "POMASQUI": 10.5,
      "CARCELEN": 10.5
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=MAIPO+TINTO+CABERNET+750ML",
    "tag": "destacado"
  },
  {
    "id": 97,
    "nombre": "MAIPO TINTO MERLOT 750ML",
    "descripcion": "Maipo Tinto Merlot 750Ml de la categoría Vino, disponible en La Huequita.",
    "categoria": "VINO",
    "precios": {
      "PUSUQUI": 10.5,
      "POMASQUI": 10.5,
      "CARCELEN": 10.5
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=MAIPO+TINTO+MERLOT+750ML",
    "tag": "destacado"
  },
  {
    "id": 98,
    "nombre": "MALBORO BLANCO",
    "descripcion": "Malboro Blanco de la categoría Cigarrillos, disponible en La Huequita.",
    "categoria": "CIGARRILLOS",
    "precios": {
      "PUSUQUI": 0.6,
      "POMASQUI": 0.6,
      "CARCELEN": 0.6
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=MALBORO+BLANCO",
    "tag": "destacado"
  },
  {
    "id": 99,
    "nombre": "MALBORO MENTOLADO",
    "descripcion": "Malboro Mentolado de la categoría Cigarrillos, disponible en La Huequita.",
    "categoria": "CIGARRILLOS",
    "precios": {
      "PUSUQUI": 0.5,
      "POMASQUI": 0.5,
      "CARCELEN": 0.5
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=MALBORO+MENTOLADO",
    "tag": "destacado"
  },
  {
    "id": 100,
    "nombre": "MALBORO ROJO",
    "descripcion": "Malboro Rojo de la categoría Cigarrillos, disponible en La Huequita.",
    "categoria": "CIGARRILLOS",
    "precios": {
      "PUSUQUI": 0.6,
      "POMASQUI": 0.6,
      "CARCELEN": 0.6
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=MALBORO+ROJO",
    "tag": "destacado"
  },
  {
    "id": 101,
    "nombre": "MENTAS",
    "descripcion": "Mentas de la categoría Confiteria, disponible en La Huequita.",
    "categoria": "CONFITERIA",
    "precios": {
      "PUSUQUI": 0.05,
      "POMASQUI": 0.05,
      "CARCELEN": 0.05
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=MENTAS",
    "tag": "destacado"
  },
  {
    "id": 102,
    "nombre": "NORTEÑO 375ML",
    "descripcion": "Norteño 375Ml de la categoría Aguardiente, disponible en La Huequita.",
    "categoria": "AGUARDIENTE",
    "precios": {
      "PUSUQUI": 4.75,
      "POMASQUI": 4.75,
      "CARCELEN": 4.75
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=NORTE%C3%91O+375ML",
    "tag": "destacado"
  },
  {
    "id": 103,
    "nombre": "NORTEÑO 750ML",
    "descripcion": "Norteño 750Ml de la categoría Aguardiente, disponible en La Huequita.",
    "categoria": "AGUARDIENTE",
    "precios": {
      "PUSUQUI": 9.25,
      "POMASQUI": 9.25,
      "CARCELEN": 9.25
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=NORTE%C3%91O+750ML",
    "tag": "destacado"
  },
  {
    "id": 104,
    "nombre": "NORTEÑO DE HIERBAS",
    "descripcion": "Norteño De Hierbas de la categoría Aguardiente, disponible en La Huequita.",
    "categoria": "AGUARDIENTE",
    "precios": {
      "PUSUQUI": 13.0,
      "POMASQUI": 13.0,
      "CARCELEN": 13.0
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=NORTE%C3%91O+DE+HIERBAS",
    "tag": "destacado"
  },
  {
    "id": 105,
    "nombre": "NORTEÑO GOLD",
    "descripcion": "Norteño Gold de la categoría Aguardiente, disponible en La Huequita.",
    "categoria": "AGUARDIENTE",
    "precios": {
      "PUSUQUI": 13.0,
      "POMASQUI": 13.0,
      "CARCELEN": 13.0
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=NORTE%C3%91O+GOLD",
    "tag": "destacado"
  },
  {
    "id": 106,
    "nombre": "OLD TIME FIRE CANELA 750ML",
    "descripcion": "Old Time Fire Canela 750Ml de la categoría Whisky, disponible en La Huequita.",
    "categoria": "WHISKY",
    "precios": {
      "PUSUQUI": 11.5,
      "POMASQUI": 11.5,
      "CARCELEN": 11.5
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=OLD+TIME+FIRE+CANELA+750ML",
    "tag": "destacado"
  },
  {
    "id": 107,
    "nombre": "OLD TIMES MANZANA 750ML",
    "descripcion": "Old Times Manzana 750Ml de la categoría Whisky, disponible en La Huequita.",
    "categoria": "WHISKY",
    "precios": {
      "PUSUQUI": 11.5,
      "POMASQUI": 11.5,
      "CARCELEN": 11.5
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=OLD+TIMES+MANZANA+750ML",
    "tag": "destacado"
  },
  {
    "id": 108,
    "nombre": "OLD TIMES NEGRO 375ML",
    "descripcion": "Old Times Negro 375Ml de la categoría Whisky, disponible en La Huequita.",
    "categoria": "WHISKY",
    "precios": {
      "PUSUQUI": 9.25,
      "POMASQUI": 9.25,
      "CARCELEN": 9.25
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=OLD+TIMES+NEGRO+375ML",
    "tag": "destacado"
  },
  {
    "id": 109,
    "nombre": "OLD TIMES NEGRO 750ML",
    "descripcion": "Old Times Negro 750Ml de la categoría Whisky, disponible en La Huequita.",
    "categoria": "WHISKY",
    "precios": {
      "PUSUQUI": 17.0,
      "POMASQUI": 17.0,
      "CARCELEN": 17.0
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=OLD+TIMES+NEGRO+750ML",
    "tag": "destacado"
  },
  {
    "id": 110,
    "nombre": "OLD TIMES ROJO 375ML",
    "descripcion": "Old Times Rojo 375Ml de la categoría Whisky, disponible en La Huequita.",
    "categoria": "WHISKY",
    "precios": {
      "PUSUQUI": 8.75,
      "POMASQUI": 8.75,
      "CARCELEN": 8.75
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=OLD+TIMES+ROJO+375ML",
    "tag": "destacado"
  },
  {
    "id": 111,
    "nombre": "OLD TIMES ROJO 750ML",
    "descripcion": "Old Times Rojo 750Ml de la categoría Whisky, disponible en La Huequita.",
    "categoria": "WHISKY",
    "precios": {
      "PUSUQUI": 14.5,
      "POMASQUI": 14.5,
      "CARCELEN": 14.5
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=OLD+TIMES+ROJO+750ML",
    "tag": "destacado"
  },
  {
    "id": 112,
    "nombre": "OLD TIMES  VAINILLA 750ML",
    "descripcion": "Old Times  Vainilla 750Ml de la categoría Whisky, disponible en La Huequita.",
    "categoria": "WHISKY",
    "precios": {
      "PUSUQUI": 11.5,
      "POMASQUI": 11.5,
      "CARCELEN": 11.5
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=OLD+TIMES++VAINILLA+750ML",
    "tag": "destacado"
  },
  {
    "id": 113,
    "nombre": "PANCHITOS",
    "descripcion": "Panchitos de la categoría Confiteria, disponible en La Huequita.",
    "categoria": "CONFITERIA",
    "precios": {
      "PUSUQUI": 0.5,
      "POMASQUI": 0.5,
      "CARCELEN": 0.5
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=PANCHITOS",
    "tag": "destacado"
  },
  {
    "id": 114,
    "nombre": "PAPAS SIN MARCA",
    "descripcion": "Papas Sin Marca de la categoría Confiteria, disponible en La Huequita.",
    "categoria": "CONFITERIA",
    "precios": {
      "PUSUQUI": 1.25,
      "POMASQUI": 1.25,
      "CARCELEN": 1.25
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=PAPAS+SIN+MARCA",
    "tag": "destacado"
  },
  {
    "id": 115,
    "nombre": "PEPSI 1 LT",
    "descripcion": "Pepsi 1 Lt de la categoría Bebidas No Alcoholicas, disponible en La Huequita.",
    "categoria": "BEBIDAS NO ALCOHOLICAS",
    "precios": {
      "PUSUQUI": 1.0,
      "POMASQUI": 1.0,
      "CARCELEN": 1.0
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=PEPSI+1+LT",
    "tag": "destacado"
  },
  {
    "id": 116,
    "nombre": "PIÑA COLADA 355ML",
    "descripcion": "Piña Colada 355Ml de la categoría Coctel, disponible en La Huequita.",
    "categoria": "COCTEL",
    "precios": {
      "PUSUQUI": 2.0,
      "POMASQUI": 2.0,
      "CARCELEN": 2.0
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=PI%C3%91A+COLADA+355ML",
    "tag": "destacado"
  },
  {
    "id": 117,
    "nombre": "PIÑA COLADA ZHUMIR 750ML",
    "descripcion": "Piña Colada Zhumir 750Ml de la categoría Coctel, disponible en La Huequita.",
    "categoria": "COCTEL",
    "precios": {
      "PUSUQUI": 14.0,
      "POMASQUI": 14.0
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=PI%C3%91A+COLADA+ZHUMIR+750ML",
    "tag": "destacado"
  },
  {
    "id": 118,
    "nombre": "PON PON 375ML",
    "descripcion": "Pon Pon 375Ml de la categoría Ron, disponible en La Huequita.",
    "categoria": "RON",
    "precios": {
      "PUSUQUI": 3.25,
      "POMASQUI": 3.25,
      "CARCELEN": 3.25
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=PON+PON+375ML",
    "tag": "destacado"
  },
  {
    "id": 119,
    "nombre": "PON PON 750ML",
    "descripcion": "Pon Pon 750Ml de la categoría Ron, disponible en La Huequita.",
    "categoria": "RON",
    "precios": {
      "PUSUQUI": 6.25,
      "POMASQUI": 6.25,
      "CARCELEN": 6.25
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=PON+PON+750ML",
    "tag": "destacado"
  },
  {
    "id": 120,
    "nombre": "POWERADE MARACUYA",
    "descripcion": "Powerade Maracuya de la categoría Bebidas No Alcoholicas, disponible en La Huequita.",
    "categoria": "BEBIDAS NO ALCOHOLICAS",
    "precios": {
      "PUSUQUI": 1.6,
      "POMASQUI": 1.6,
      "CARCELEN": 1.6
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=POWERADE+MARACUYA",
    "tag": "destacado"
  },
  {
    "id": 121,
    "nombre": "POWERADE MORAZUL",
    "descripcion": "Powerade Morazul de la categoría Bebidas No Alcoholicas, disponible en La Huequita.",
    "categoria": "BEBIDAS NO ALCOHOLICAS",
    "precios": {
      "PUSUQUI": 1.6,
      "POMASQUI": 1.6,
      "CARCELEN": 1.6
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=POWERADE+MORAZUL",
    "tag": "destacado"
  },
  {
    "id": 122,
    "nombre": "POWERADE MZN CLEAR",
    "descripcion": "Powerade Mzn Clear de la categoría Bebidas No Alcoholicas, disponible en La Huequita.",
    "categoria": "BEBIDAS NO ALCOHOLICAS",
    "precios": {
      "PUSUQUI": 1.6,
      "POMASQUI": 1.6,
      "CARCELEN": 1.6
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=POWERADE+MZN+CLEAR",
    "tag": "destacado"
  },
  {
    "id": 123,
    "nombre": "POWERADE ROJO",
    "descripcion": "Powerade Rojo de la categoría Bebidas No Alcoholicas, disponible en La Huequita.",
    "categoria": "BEBIDAS NO ALCOHOLICAS",
    "precios": {
      "PUSUQUI": 1.6,
      "POMASQUI": 1.6,
      "CARCELEN": 1.6
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=POWERADE+ROJO",
    "tag": "destacado"
  },
  {
    "id": 124,
    "nombre": "POZO 250ML",
    "descripcion": "Pozo 250Ml de la categoría Aguardiente, disponible en La Huequita.",
    "categoria": "AGUARDIENTE",
    "precios": {
      "PUSUQUI": 1.25,
      "POMASQUI": 1.25,
      "CARCELEN": 1.25
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=POZO+250ML",
    "tag": "destacado"
  },
  {
    "id": 125,
    "nombre": "QUINDIANO 350 ML",
    "descripcion": "Quindiano 350 Ml de la categoría Aguardiente, disponible en La Huequita.",
    "categoria": "AGUARDIENTE",
    "precios": {
      "PUSUQUI": 4.5,
      "POMASQUI": 4.5,
      "CARCELEN": 4.5
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=QUINDIANO+350+ML",
    "tag": "destacado"
  },
  {
    "id": 126,
    "nombre": "QUINDIANO 750 Ml",
    "descripcion": "Quindiano 750 Ml de la categoría Aguardiente, disponible en La Huequita.",
    "categoria": "AGUARDIENTE",
    "precios": {
      "PUSUQUI": 9.0,
      "POMASQUI": 9.0,
      "CARCELEN": 9.0
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=QUINDIANO+750+Ml",
    "tag": "destacado"
  },
  {
    "id": 127,
    "nombre": "RONERO 750ML",
    "descripcion": "Ronero 750Ml de la categoría Ron, disponible en La Huequita.",
    "categoria": "RON",
    "precios": {
      "PUSUQUI": 9.25,
      "POMASQUI": 9.25,
      "CARCELEN": 9.25
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=RONERO+750ML",
    "tag": "destacado"
  },
  {
    "id": 128,
    "nombre": "RON FLOR DE CAÑA BLANCO",
    "descripcion": "Ron Flor De Caña Blanco de la categoría Ron, disponible en La Huequita.",
    "categoria": "RON",
    "precios": {
      "PUSUQUI": 21.75,
      "POMASQUI": 21.75,
      "CARCELEN": 21.75
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=RON+FLOR+DE+CA%C3%91A+BLANCO",
    "tag": "destacado"
  },
  {
    "id": 129,
    "nombre": "RUSSKAYA 750ML",
    "descripcion": "Russkaya 750Ml de la categoría Vodka, disponible en La Huequita.",
    "categoria": "VODKA",
    "precios": {
      "PUSUQUI": 14.5,
      "POMASQUI": 14.5,
      "CARCELEN": 14.5
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=RUSSKAYA+750ML",
    "tag": "destacado"
  },
  {
    "id": 130,
    "nombre": "SANGRIA FIESTA BRAVA 1LT",
    "descripcion": "Sangria Fiesta Brava 1Lt de la categoría Coctel, disponible en La Huequita.",
    "categoria": "COCTEL",
    "precios": {
      "PUSUQUI": 6.7,
      "POMASQUI": 6.7,
      "CARCELEN": 6.7
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=SANGRIA+FIESTA+BRAVA+1LT",
    "tag": "destacado"
  },
  {
    "id": 131,
    "nombre": "SAN MIGUEL ORO 750ML",
    "descripcion": "San Miguel Oro 750Ml de la categoría Ron, disponible en La Huequita.",
    "categoria": "RON",
    "precios": {
      "PUSUQUI": 13.5,
      "POMASQUI": 13.5,
      "CARCELEN": 13.5
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=SAN+MIGUEL+ORO+750ML",
    "tag": "destacado"
  },
  {
    "id": 132,
    "nombre": "SAN MIGUEL SILVER PLATA 750ML",
    "descripcion": "San Miguel Silver Plata 750Ml de la categoría Ron, disponible en La Huequita.",
    "categoria": "RON",
    "precios": {
      "PUSUQUI": 13.5,
      "POMASQUI": 13.5,
      "CARCELEN": 13.5
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=SAN+MIGUEL+SILVER+PLATA+750ML",
    "tag": "destacado"
  },
  {
    "id": 133,
    "nombre": "SKY 750ML",
    "descripcion": "Sky 750Ml de la categoría Vodka, disponible en La Huequita.",
    "categoria": "VODKA",
    "precios": {
      "PUSUQUI": 20.75,
      "POMASQUI": 20.75,
      "CARCELEN": 20.75
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=SKY+750ML",
    "tag": "destacado"
  },
  {
    "id": 134,
    "nombre": "SMIRNOFF ROJA 750ML",
    "descripcion": "Smirnoff Roja 750Ml de la categoría Vodka, disponible en La Huequita.",
    "categoria": "VODKA",
    "precios": {
      "PUSUQUI": 21.0,
      "POMASQUI": 21.0,
      "CARCELEN": 21.0
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=SMIRNOFF+ROJA+750ML",
    "tag": "destacado"
  },
  {
    "id": 135,
    "nombre": "SOMETHING SPECIAL 750ML",
    "descripcion": "Something Special 750Ml de la categoría Whisky, disponible en La Huequita.",
    "categoria": "WHISKY",
    "precios": {
      "PUSUQUI": 25.0,
      "POMASQUI": 25.0,
      "CARCELEN": 25.0
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=SOMETHING+SPECIAL+750ML",
    "tag": "destacado"
  },
  {
    "id": 136,
    "nombre": "SPRITE  1.35LT",
    "descripcion": "Sprite  1.35Lt de la categoría Bebidas No Alcoholicas, disponible en La Huequita.",
    "categoria": "BEBIDAS NO ALCOHOLICAS",
    "precios": {
      "PUSUQUI": 1.6,
      "POMASQUI": 1.6,
      "CARCELEN": 1.6
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=SPRITE++1.35LT",
    "tag": "destacado"
  },
  {
    "id": 137,
    "nombre": "SWITCH",
    "descripcion": "Switch de la categoría Vodka, disponible en La Huequita.",
    "categoria": "VODKA",
    "precios": {
      "PUSUQUI": 3.75,
      "POMASQUI": 3.75,
      "CARCELEN": 3.75
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=SWITCH",
    "tag": "destacado"
  },
  {
    "id": 138,
    "nombre": "TEQUILA AZTECA BLANCO 750ML",
    "descripcion": "Tequila Azteca Blanco 750Ml de la categoría Tequila, disponible en La Huequita.",
    "categoria": "TEQUILA",
    "precios": {
      "PUSUQUI": 20.5,
      "POMASQUI": 20.5,
      "CARCELEN": 20.5
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=TEQUILA+AZTECA+BLANCO+750ML",
    "tag": "destacado"
  },
  {
    "id": 139,
    "nombre": "TEQUILA CANIJO",
    "descripcion": "Tequila Canijo de la categoría Tequila, disponible en La Huequita.",
    "categoria": "TEQUILA",
    "precios": {
      "PUSUQUI": 25.0,
      "POMASQUI": 25.0,
      "CARCELEN": 25.0
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=TEQUILA+CANIJO",
    "tag": "destacado"
  },
  {
    "id": 140,
    "nombre": "TEQUILA COYOTE",
    "descripcion": "Tequila Coyote de la categoría Tequila, disponible en La Huequita.",
    "categoria": "TEQUILA",
    "precios": {
      "PUSUQUI": 16.5,
      "POMASQUI": 16.5,
      "CARCELEN": 16.5
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=TEQUILA+COYOTE",
    "tag": "destacado"
  },
  {
    "id": 141,
    "nombre": "TEQUILA EL CHARRO 750ML",
    "descripcion": "Tequila El Charro 750Ml de la categoría Tequila, disponible en La Huequita.",
    "categoria": "TEQUILA",
    "precios": {
      "PUSUQUI": 21.75,
      "POMASQUI": 21.75,
      "CARCELEN": 21.75
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=TEQUILA+EL+CHARRO+750ML",
    "tag": "destacado"
  },
  {
    "id": 142,
    "nombre": "TEQUILA EL GRAN MALO 750ML",
    "descripcion": "Tequila El Gran Malo 750Ml de la categoría Tequila, disponible en La Huequita.",
    "categoria": "TEQUILA",
    "precios": {
      "PUSUQUI": 45.0,
      "POMASQUI": 45.0,
      "CARCELEN": 45.0
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=TEQUILA+EL+GRAN+MALO+750ML",
    "tag": "destacado"
  },
  {
    "id": 143,
    "nombre": "TRANSPPRTE",
    "descripcion": "Transpprte de la categoría Varios, disponible en La Huequita.",
    "categoria": "VARIOS",
    "precios": {
      "PUSUQUI": 0.05,
      "POMASQUI": 0.05
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=TRANSPPRTE",
    "tag": "destacado"
  },
  {
    "id": 144,
    "nombre": "TRIDENT UNIDAD",
    "descripcion": "Trident Unidad de la categoría Confiteria, disponible en La Huequita.",
    "categoria": "CONFITERIA",
    "precios": {
      "PUSUQUI": 0.15,
      "POMASQUI": 0.15,
      "CARCELEN": 0.15
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=TRIDENT+UNIDAD",
    "tag": "destacado"
  },
  {
    "id": 145,
    "nombre": "TRIDENT X3 SURTIDO",
    "descripcion": "Trident X3 Surtido de la categoría Confiteria, disponible en La Huequita.",
    "categoria": "CONFITERIA",
    "precios": {
      "PUSUQUI": 0.4,
      "POMASQUI": 0.4,
      "CARCELEN": 0.4
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=TRIDENT+X3+SURTIDO",
    "tag": "destacado"
  },
  {
    "id": 146,
    "nombre": "TRIDENT X6 SURTIDO",
    "descripcion": "Trident X6 Surtido de la categoría Confiteria, disponible en La Huequita.",
    "categoria": "CONFITERIA",
    "precios": {
      "PUSUQUI": 0.75,
      "POMASQUI": 0.75,
      "CARCELEN": 0.75
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=TRIDENT+X6+SURTIDO",
    "tag": "destacado"
  },
  {
    "id": 147,
    "nombre": "TROPICO 375ML",
    "descripcion": "Tropico 375Ml de la categoría Aguardiente, disponible en La Huequita.",
    "categoria": "AGUARDIENTE",
    "precios": {
      "PUSUQUI": 4.75,
      "POMASQUI": 4.75,
      "CARCELEN": 4.75
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=TROPICO+375ML",
    "tag": "destacado"
  },
  {
    "id": 148,
    "nombre": "TROPICO 750ML",
    "descripcion": "Tropico 750Ml de la categoría Aguardiente, disponible en La Huequita.",
    "categoria": "AGUARDIENTE",
    "precios": {
      "PUSUQUI": 9.25,
      "POMASQUI": 9.25,
      "CARCELEN": 9.25
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=TROPICO+750ML",
    "tag": "destacado"
  },
  {
    "id": 149,
    "nombre": "TUMIX SANDIA",
    "descripcion": "Tumix Sandia de la categoría Confiteria, disponible en La Huequita.",
    "categoria": "CONFITERIA",
    "precios": {
      "PUSUQUI": 0.4,
      "CARCELEN": 0.4
    },
    "locales": [
      "PUSUQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=TUMIX+SANDIA",
    "tag": "destacado"
  },
  {
    "id": 150,
    "nombre": "V220",
    "descripcion": "V220 de la categoría Bebidas No Alcoholicas, disponible en La Huequita.",
    "categoria": "BEBIDAS NO ALCOHOLICAS",
    "precios": {
      "PUSUQUI": 1.6,
      "POMASQUI": 1.6,
      "CARCELEN": 1.6
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=V220",
    "tag": "destacado"
  },
  {
    "id": 151,
    "nombre": "VAT 69 750ML",
    "descripcion": "Vat 69 750Ml de la categoría Whisky, disponible en La Huequita.",
    "categoria": "WHISKY",
    "precios": {
      "PUSUQUI": 18.0,
      "POMASQUI": 18.0,
      "CARCELEN": 18.0
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=VAT+69+750ML",
    "tag": "destacado"
  },
  {
    "id": 152,
    "nombre": "VENETTO",
    "descripcion": "Venetto de la categoría Coctel, disponible en La Huequita.",
    "categoria": "COCTEL",
    "precios": {
      "PUSUQUI": 3.5,
      "POMASQUI": 3.5,
      "CARCELEN": 3.5
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=VENETTO",
    "tag": "destacado"
  },
  {
    "id": 153,
    "nombre": "VIEJO DE CALDAS 750ML",
    "descripcion": "Viejo De Caldas 750Ml de la categoría Ron, disponible en La Huequita.",
    "categoria": "RON",
    "precios": {
      "PUSUQUI": 17.5,
      "POMASQUI": 17.5,
      "CARCELEN": 17.5
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=VIEJO+DE+CALDAS+750ML",
    "tag": "destacado"
  },
  {
    "id": 154,
    "nombre": "VINO MIRAFLORES",
    "descripcion": "Vino Miraflores de la categoría Vino, disponible en La Huequita.",
    "categoria": "VINO",
    "precios": {
      "PUSUQUI": 9.0,
      "POMASQUI": 9.0,
      "CARCELEN": 9.0
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=VINO+MIRAFLORES",
    "tag": "destacado"
  },
  {
    "id": 155,
    "nombre": "VINO SAVIONE",
    "descripcion": "Vino Savione de la categoría Vino, disponible en La Huequita.",
    "categoria": "VINO",
    "precios": {
      "PUSUQUI": 10.5
    },
    "locales": [
      "PUSUQUI"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=VINO+SAVIONE",
    "tag": "destacado"
  },
  {
    "id": 156,
    "nombre": "VODKA 40 750ML",
    "descripcion": "Vodka 40 750Ml de la categoría Vodka, disponible en La Huequita.",
    "categoria": "VODKA",
    "precios": {
      "PUSUQUI": 6.25
    },
    "locales": [
      "PUSUQUI"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=VODKA+40+750ML",
    "tag": "destacado"
  },
  {
    "id": 157,
    "nombre": "VODKA ROMANOSKI",
    "descripcion": "Vodka Romanoski de la categoría Vodka, disponible en La Huequita.",
    "categoria": "VODKA",
    "precios": {
      "PUSUQUI": 13.0,
      "POMASQUI": 13.0,
      "CARCELEN": 13.0
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=VODKA+ROMANOSKI",
    "tag": "destacado"
  },
  {
    "id": 158,
    "nombre": "WILD SEX ON THE BEACH",
    "descripcion": "Wild Sex On The Beach de la categoría Coctel, disponible en La Huequita.",
    "categoria": "COCTEL",
    "precios": {
      "PUSUQUI": 2.0,
      "POMASQUI": 2.0,
      "CARCELEN": 2.0
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=WILD+SEX+ON+THE+BEACH",
    "tag": "destacado"
  },
  {
    "id": 159,
    "nombre": "ZHUMIR AGUARDIENTE 700ML",
    "descripcion": "Zhumir Aguardiente 700Ml de la categoría Zhumir, disponible en La Huequita.",
    "categoria": "ZHUMIR",
    "precios": {
      "PUSUQUI": 11.0,
      "POMASQUI": 11.0,
      "CARCELEN": 11.0
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=ZHUMIR+AGUARDIENTE+700ML",
    "tag": "destacado"
  },
  {
    "id": 160,
    "nombre": "ZHUMIR CITRUS PINK 700ML",
    "descripcion": "Zhumir Citrus Pink 700Ml de la categoría Zhumir, disponible en La Huequita.",
    "categoria": "ZHUMIR",
    "precios": {
      "PUSUQUI": 8.25,
      "POMASQUI": 8.25,
      "CARCELEN": 8.25
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=ZHUMIR+CITRUS+PINK+700ML",
    "tag": "destacado"
  },
  {
    "id": 161,
    "nombre": "ZHUMIR COCO 700ML",
    "descripcion": "Zhumir Coco 700Ml de la categoría Zhumir, disponible en La Huequita.",
    "categoria": "ZHUMIR",
    "precios": {
      "PUSUQUI": 8.25,
      "POMASQUI": 8.25,
      "CARCELEN": 8.25
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=ZHUMIR+COCO+700ML",
    "tag": "destacado"
  },
  {
    "id": 162,
    "nombre": "ZHUMIR DURAZNO 375ML",
    "descripcion": "Zhumir Durazno 375Ml de la categoría Zhumir, disponible en La Huequita.",
    "categoria": "ZHUMIR",
    "precios": {
      "PUSUQUI": 4.75,
      "POMASQUI": 4.75,
      "CARCELEN": 4.75
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=ZHUMIR+DURAZNO+375ML",
    "tag": "destacado"
  },
  {
    "id": 163,
    "nombre": "ZHUMIR DURAZNO 700ML",
    "descripcion": "Zhumir Durazno 700Ml de la categoría Zhumir, disponible en La Huequita.",
    "categoria": "ZHUMIR",
    "precios": {
      "PUSUQUI": 8.25,
      "POMASQUI": 8.25,
      "CARCELEN": 8.25
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=ZHUMIR+DURAZNO+700ML",
    "tag": "destacado"
  },
  {
    "id": 164,
    "nombre": "ZHUMIR MANGO 700ML",
    "descripcion": "Zhumir Mango 700Ml de la categoría Zhumir, disponible en La Huequita.",
    "categoria": "ZHUMIR",
    "precios": {
      "PUSUQUI": 8.25,
      "POMASQUI": 8.25,
      "CARCELEN": 8.25
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=ZHUMIR+MANGO+700ML",
    "tag": "destacado"
  },
  {
    "id": 165,
    "nombre": "ZHUMIR NARANJILLA 375ML",
    "descripcion": "Zhumir Naranjilla 375Ml de la categoría Zhumir, disponible en La Huequita.",
    "categoria": "ZHUMIR",
    "precios": {
      "PUSUQUI": 4.75,
      "POMASQUI": 4.75,
      "CARCELEN": 4.75
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=ZHUMIR+NARANJILLA+375ML",
    "tag": "destacado"
  },
  {
    "id": 166,
    "nombre": "ZHUMIR NARANJILLA 750",
    "descripcion": "Zhumir Naranjilla 750 de la categoría Zhumir, disponible en La Huequita.",
    "categoria": "ZHUMIR",
    "precios": {
      "PUSUQUI": 8.25,
      "POMASQUI": 8.25,
      "CARCELEN": 8.25
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=ZHUMIR+NARANJILLA+750",
    "tag": "destacado"
  },
  {
    "id": 167,
    "nombre": "ZHUMIR SANDIA PINK 750ML",
    "descripcion": "Zhumir Sandia Pink 750Ml de la categoría Zhumir, disponible en La Huequita.",
    "categoria": "ZHUMIR",
    "precios": {
      "PUSUQUI": 11.5,
      "CARCELEN": 11.5
    },
    "locales": [
      "PUSUQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=ZHUMIR+SANDIA+PINK+750ML",
    "tag": "destacado"
  },
  {
    "id": 168,
    "nombre": "ZHUMIR SECO 350ML",
    "descripcion": "Zhumir Seco 350Ml de la categoría Zhumir, disponible en La Huequita.",
    "categoria": "ZHUMIR",
    "precios": {
      "PUSUQUI": 4.75,
      "POMASQUI": 4.75,
      "CARCELEN": 4.75
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=ZHUMIR+SECO+350ML",
    "tag": "destacado"
  },
  {
    "id": 169,
    "nombre": "ZHUMIR SECO 700ML",
    "descripcion": "Zhumir Seco 700Ml de la categoría Zhumir, disponible en La Huequita.",
    "categoria": "ZHUMIR",
    "precios": {
      "PUSUQUI": 8.25,
      "POMASQUI": 8.25,
      "CARCELEN": 8.25
    },
    "locales": [
      "PUSUQUI",
      "POMASQUI",
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=ZHUMIR+SECO+700ML",
    "tag": "destacado"
  },
  {
    "id": 170,
    "nombre": "PEPSI 2LT",
    "descripcion": "Pepsi 2Lt de la categoría Bebidas No Alcoholicas, disponible en La Huequita.",
    "categoria": "BEBIDAS NO ALCOHOLICAS",
    "precios": {
      "POMASQUI": 1.5
    },
    "locales": [
      "POMASQUI"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=PEPSI+2LT",
    "tag": "destacado"
  },
  {
    "id": 171,
    "nombre": "V220 330ML",
    "descripcion": "V220 330Ml de la categoría Bebidas No Alcoholicas, disponible en La Huequita.",
    "categoria": "BEBIDAS NO ALCOHOLICAS",
    "precios": {
      "POMASQUI": 0.75
    },
    "locales": [
      "POMASQUI"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=V220+330ML",
    "tag": "destacado"
  },
  {
    "id": 172,
    "nombre": "CERVEZA PILSENER LATA PEQUEÑA 269CC",
    "descripcion": "Cerveza Pilsener Lata Pequeña 269Cc de la categoría Cerveza, disponible en La Huequita.",
    "categoria": "CERVEZA",
    "precios": {
      "CARCELEN": 1.5
    },
    "locales": [
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=CERVEZA+PILSENER+LATA+PEQUE%C3%91A+269CC",
    "tag": "destacado"
  },
  {
    "id": 173,
    "nombre": "JACK DANIELS N 7 750ML",
    "descripcion": "Jack Daniels N 7 750Ml de la categoría Whisky, disponible en La Huequita.",
    "categoria": "WHISKY",
    "precios": {
      "CARCELEN": 77.0
    },
    "locales": [
      "CARCELEN"
    ],
    "imagen": "https://via.placeholder.com/200x260?text=JACK+DANIELS+N+7+750ML",
    "tag": "destacado"
  }
]
;

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
    `Hola, soy *${nombre || "cliente"}*.
` +
      `Mi número de WhatsApp: ${whatsapp}

` +
      `Mensaje desde el chatbot de La Huequita:
` +
      `${mensaje}`
  );

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");

  if (cbMensaje) cbMensaje.value = "";
  toggleChatbot();

  return false;
}

window.toggleChatbot = toggleChatbot;
window.sendChatbotForm = sendChatbotForm;

// ===============================
// POPUP EDAD (SIEMPRE)
// ===============================
function acceptAge() {
  if (storeSelectPopup) {
    activeLocal = storeSelectPopup.value;
  }

  localStorage.setItem("huequita_local", activeLocal);

  if (localSelectToolbar) {
    localSelectToolbar.value = activeLocal;
  }

  if (ageModal) {
    ageModal.style.display = "none";
  }

  renderProducts();
}

function rejectAge() {
  alert("Lo sentimos, debes ser mayor de edad para ingresar 🍾");
  window.location.href = "https://google.com";
}

window.acceptAge = acceptAge;
window.rejectAge = rejectAge;

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
    if (p.tag === "masvendidos") badgeText = "MÁS VENDIDO";
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

    const actions = document.createElement("div");
    actions.className = "product-actions";

    const btnWp = document.createElement("button");
    btnWp.className = "btn btn-primary";
    btnWp.innerHTML = "<span>💬</span> Pedir por WhatsApp";
    btnWp.addEventListener("click", () => {
      const text = encodeURIComponent(
        "Hola, quiero hacer un pedido en *La Huequita Quiteña* (" +
          getLocalLabel(activeLocal) +
          "):\n" +
          "• Producto: " +
          p.nombre +
          "\n" +
          "• Precio en tienda: " +
          priceText +
          "\n" +
          "¿Me ayudas con disponibilidad y delivery?"
      );
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    });

    const btnInfo = document.createElement("button");
    btnInfo.className = "btn btn-ghost";
    btnInfo.textContent = "Detalle / info";
    btnInfo.addEventListener("click", () => {
      alert(
        "Producto: " +
          p.nombre +
          "\n" +
          "Sucursal: " +
          getLocalLabel(activeLocal) +
          "\n" +
          "Categoría: " +
          p.categoria +
          "\n" +
          "Precio en tienda: " +
          priceText
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

// ===============================
// EVENTOS INICIALES
// ===============================
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

// selects de locales
if (localSelectToolbar) {
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

// Render inicial
renderCategories();
renderProducts();

