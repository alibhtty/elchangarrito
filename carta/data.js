const alergenosIcons = {
    frutosSecos: "../assets/icons/alergenos/frutos-secos.svg",
    gluten: "../assets/icons/alergenos/gluten.svg",
    lacteos: "../assets/icons/alergenos/lacteos.svg",
    alcohol: "../assets/icons/alergenos/alcohol.svg",
    huevo: "../assets/icons/alergenos/huevo.svg",
  };
  
const menuItems = {
    /* brunch: [
      {
        img: '../assets/img/carta/nachos.png',
        nombre: '',
        descripcion: '',
        precio: '',
        alergenos: ["gluten", "lacteos"],
      }
    ], */
    botanas: [
      {
        img: '../assets/img/carta/nachos.png',
        nombre: 'Nachos con Guacamole',
        descripcion: 'Crujientes totopos de maíz con frijoles negros, queso fundido y guacamole por encima.',
        precio: '',
        alergenos: ["gluten", "lacteos"],
      },
      {
        img: '../assets/img/carta/guacamole.png',
        nombre: 'Guacamole',
        descripcion: 'Aguacate martajado al momento con jitomate, cebolla, cilantro y acompañado de totopos.',
        precio: '',
      },
      {
        img: '../assets/img/carta/sincronizada.png',
        nombre: 'Sincronizada',
        descripcion: 'Tortillas de trigo con jamón York, queso fundido y pico de gallo.',
        precio: '',
        alergenos: ["lacteos"]
      },
      {
        img: '../assets/img/carta/ensalada-de-nopales.png',
        nombre: 'Ensalada de Nopales',
        descripcion: 'Nopalitos frescos con cebolla, jitomate, cilantro, queso fresco y aceite de oliva.',
        precio: '',
        alergenos: ["lacteos"]
      },
      {
        img: '../assets/img/carta/frijoles-de-la-olla.png',
        nombre: 'Frijoles de la Olla',
        descripcion: 'Frijoles negros de la olla con cebolla, cilantro, queso fresco, y acompañados con totopos.',
        precio: '',
        alergenos: ["lacteos"]
      },
    ],
    tacos: [
      {
        img: '../assets/img/carta/taco-de-tinga-de-pollo.png',
        nombre: 'Taco de Tinga de Pollo',
        descripcion: 'Pechuga de pollo desmenuzada en salsa de casa.',
        precio: '',
      },
      {
        img: '../assets/img/carta/taco-de-cochinita-pibil.png',
        nombre: 'Taco de Cochinita Pibil',
        descripcion: 'Carne de cerdo en salsa pibil con cebolla morada encurtida en limón por encima.',
        precio: '',
      },
      {
        img: '../assets/img/carta/taco-al-pastor.png',
        nombre: 'Taco al Pastor',
        descripcion: 'Cerdo adobado en salsa pastor, a la plancha y servido con cebollita, cilantro y limón.',
        precio: '',
      },
      {
        img: '../assets/img/carta/taco-de-mole-verde.png',
        nombre: 'Taco de Mole Verde',
        descripcion: 'Pechuga de pollo desmenuzada en una salsa prehispánica de hierbas mexicanas.',
        precio: '',
        alergenos: ["lacteos"]
      },
      {
        img: '../assets/img/carta/taco-de-mole-poblano.png',
        nombre: 'Taco de Mole Poblano',
        descripcion: 'Pechuga de pollo desmenuzada en una salsa prehispánica de chiles, frutos secos y cacao.',
        precio: '',
        alergenos: ["frutosSecos"]
      },
      {
        img: '../assets/img/carta/taco-de-papa-con-frijol.png',
        nombre: 'Taco de Papa con frijol',
        descripcion: 'Patata con frijoles negros de la olla.',
        precio: '',
      },
      {
        img: '../assets/img/carta/taco-de-carne.png',
        nombre: 'Taco de Carne',
        descripcion: 'Ternera desmenuzada en salsa de jitomate y cebolla.',
        precio: '',
      },
      {
        img: '../assets/img/carta/taco-de-papa-con-chorizo.png',
        nombre: 'Taco de Papa con Chorizo',
        descripcion: 'Patata con chorizo.',
        precio: '',
      },
      {
        img: '../assets/img/carta/taco-de-queso-panela.png',
        nombre: 'Taco de Queso Panela',
        descripcion: 'Queso fresco mexicano y frijoles negros de la olla.',
        precio: '',
        alergenos: ["lacteos"]
      },
    ],
    "quesadillas": [
      {
        img: '../assets/img/carta/q-flor-de-calabaza.png',
        nombre: 'Quesadilla de Flor de Calabaza',
        descripcion: 'Flores de calabaza con queso fundido.',
        precio: '',
        alergenos: ['gluten', 'lacteos']
      },
      {
        img: '../assets/img/carta/q-de-huitlacoche.png',
        nombre: 'Quesadilla de Huitlacoche',
        descripcion: 'Hongo de maíz con queso fundido.',
        precio: '',
        alergenos: ['gluten', 'lacteos']
      },
      {
        img: '../assets/img/carta/q-rajas-con-queso.png',
        nombre: 'Quesadilla de Rajas con Queso',
        descripcion: 'Tiras de chile poblano, papa y queso fundido.',
        precio: '',
        alergenos: ['gluten', 'lacteos']
      },
      {
        img: '../assets/img/carta/q-de-huevo-trufa.png',
        nombre: 'Quesadilla de Huevo Trufa',
        descripcion: 'Huevo frito con crema de trufa negra y queso fundido.',
        precio: '',
        alergenos: ['gluten', 'huevo', 'lacteos']
      },
      {
        img: '../assets/img/carta/q-de-cochinita.png',
        nombre: 'Quesadilla de Cochinita Pibil',
        descripcion: 'Carne de cerdo en salsa pibil y queso fundido.',
        precio: '',
        alergenos: ['gluten', 'lacteos']
      },
      {
        img: '../assets/img/carta/q-de-champiñones-al-ajillo.png',
        nombre: 'Quesadilla de Champiñones al Ajillo',
        descripcion: 'Champiñones a la mexicana con queso fundido.',
        precio: '',
        alergenos: ['gluten', 'lacteos']
      },
      {
        img: '../assets/img/carta/q-carne.png',
        nombre: 'Quesadilla de Carne',
        descripcion: 'Ternera desmenuzada en salsa de jitomate, cebolla y con queso fundido.',
        precio: '',
        alergenos: ['gluten', 'lacteos']
      }
    ],
    especialidades: [
        {
          img: '../assets/img/carta/tacos-dorados.png',
          nombre: 'Tacos Dorados',
          descripcion: 'Pollo o ternera envuelta en crujientes tortillas de maíz con lechuga, cebolla, jitomate, crema agria y queso fresco por encima.',
          precio: '',
          alergenos: ["lacteos"]
        },
        {
          img: '../assets/img/carta/enchiladas-verdes.png',
          nombre: 'Enchiladas Verdes',
          descripcion: 'Pechuga de pollo envuelta en tortillas de maíz y bañadas con salsa verde asada y con cebolla, queso fresco y crema agria.',
          precio: '',
          alergenos: ["lacteos"]
        },
        {
          img: '../assets/img/carta/choriqueso.png',
          nombre: 'Choriqueso',
          descripcion: 'Chorizo a la plancha con queso fundido y acompañado con cuatro tortillas de trigo.',
          precio: '',
          alergenos: ["lacteos"]
        },
        {
          img: '../assets/img/carta/champiqueso.png',
          nombre: 'Champiqueso',
          descripcion: 'Champiñones, cebolla y queso fundido a la plancha y acompañado con cuatro tortillasde trigo.',
          precio: '',
          alergenos: ["lacteos"]
        },
        {
          img: '../assets/img/carta/alambre.png',
          nombre: 'Alambre',
          descripcion: 'Ternera o pollo, pimiento verde y rojo, cebolla, queso fundido y acompañado con cuatro tortillas de trigo.',
          precio: '',
          alergenos: ["lacteos"]
        },
    ],
    postres: [
      {
        img: '../assets/img/carta/tres-leches.png',
        nombre: 'Tartita Tres Leches',
        descripcion: 'Bañada con tres leches.',
        precio: '',
        alergenos: ["huevo", "lacteos"]
      },
      {
        img: '../assets/img/carta/chocoflan.png',
        nombre: 'Chocoflán',
        descripcion: 'Esponjoso y cremoso.',
        precio: '',
        alergenos: ["huevo", "lacteos"]
      }
    ],
    "bebidas": [
      {
        img: '../assets/img/carta/aguas-frescas.png',
        nombre: 'Aguas de frutos naturales',
        descripcion: 'Aguas de frutas como fresa, papaya, mango, melón, lima, jamaica o tamarindo.',
        precio: ''
      },
      {
        img: '../assets/img/carta/agua.png',
        nombre: 'Agua',
        descripcion: 'Agua 33cl, 50cl',
        precio: ''
      },
      {
        img: '../assets/img/carta/coca-cola.png',
        nombre: 'Coca-Cola',
        descripcion: 'Coca-Cola',
        precio: ''
      },
      {
        img: '../assets/img/carta/coca-cola-zero.png',
        nombre: 'Coca-Cola Zero',
        descripcion: 'Coca-Cola Zero',
        precio: ''
      },
      {
        img: '../assets/img/carta/cortado.png',
        nombre: 'Cortado',
        descripcion: 'Café cortado',
        precio: ''
      },
      {
        img: '../assets/img/carta/cafe-con-leche.png',
        nombre: 'Café con leche',
        descripcion: 'Café con leche',
        precio: ''
      },
      {
        img: '../assets/img/carta/nestea.png',
        nombre: 'Nestea',
        descripcion: 'Nestea',
        precio: ''
      },
      {
        img: '../assets/img/carta/aquarius.png',
        nombre: 'Aquarius',
        descripcion: 'Aquarius',
        precio: ''
      },
      {
        img: '../assets/img/carta/fanta-naranja.png',
        nombre: 'Fanta Naranja',
        descripcion: 'Fanta Naranja',
        precio: ''
      },
      {
        img: '../assets/img/carta/agua-con-gas.png',
        nombre: 'Agua con gas',
        descripcion: 'Malavella.',
        precio: ''
      },
      {
        img: '../assets/img/carta/cafe-americano.png',
        nombre: 'Café Americano',
        descripcion: 'Café americano.',
        precio: ''
      },
      {
        img: '../assets/img/carta/cafe-expreso.png',
        nombre: 'Café Expreso',
        descripcion: 'Café Expreso.',
        precio: ''
      }
    ],
    "chelas": [
      {
        img: '../assets/img/carta/corona.png',
        nombre: 'Corona',
        descripcion: 'Coronita en España.',
        precio: '',
        alergenos: ['alcohol']
      },
      {
        img: '../assets/img/carta/negra-modelo.png',
        nombre: 'Negra Modelo',
        descripcion: 'La crema de la cerveza.',
        precio: '',
        alergenos: ['alcohol']
      },
      {
        img: '../assets/img/carta/modelo-especial.png',
        nombre: 'Modelo Especial',
        descripcion: 'La especial.',
        precio: '',
        alergenos: ['alcohol']
      },
      {
        img: '../assets/img/carta/pacifico.png',
        nombre: 'Pacífico',
        descripcion: 'La norteña.',
        precio: '',
        alergenos: ['alcohol']
      },
      {
        img: '../assets/img/carta/clara.png',
        nombre: 'Clara',
        descripcion: 'Amstel.',
        precio: '',
        alergenos: ['alcohol']
      },
      {
        img: '../assets/img/carta/ocho-reales-trio.png',
        nombre: 'Ocho Reales',
        descripcion: 'La artesana mexicana sin gluten. Clara, rubia y negra.',
        precio: '',
        alergenos: ['alcohol']
      },
      {
        img: '../assets/img/carta/stela-artois.png',
        nombre: 'Estela Artois',
        descripcion: 'Fría y directa del barril.',
        precio: '',
        alergenos: ['alcohol']
      },
      {
        img: '../assets/img/carta/sol.png',
        nombre: 'Sol',
        descripcion: 'El auténtico espíritu de México.',
        precio: '',
        alergenos: ['alcohol']
      },
      {
        img: '../assets/img/carta/free-damm.png',
        nombre: 'Cerveza sin Alcohol',
        descripcion: 'Free Damm',
        precio: ''
      }
    ],
    "cócteles": [
      {
        img: '../assets/img/carta/michelada.png',
        nombre: 'Michelada',
        descripcion: 'Jugo de tomate natural, jugo de ostras, salsa inglesa, jugo de limón, sal, chile y pimienta. Con cervezas Mexicanas 1.00€ extra.',
        precio: '',
        alergenos: ['alcohol']
      },
      {
        img: '../assets/img/carta/chelada.png',
        nombre: 'Chelada',
        descripcion: 'Copa escarchada con sal, jugo de limón natural y cerveza de barril. Con cervezas Mexicanas 1.00€ extra.',
        precio: '',
        alergenos: ['alcohol']
      },
      {
        img: '../assets/img/carta/margarita.png',
        nombre: 'Margarita Shake',
        descripcion: 'Tequila José Cuervo Especial Silver, limón natural, licor de naranja, azúcar y mezclado en coctelera.',
        precio: '',
        alergenos: ['alcohol']
      },
      {
        img: '../assets/img/carta/margarita-de-tamarindo.png',
        nombre: 'Margarita de Tamarindo',
        descripcion: 'Tequila José Cuervo Especial Silver, tamarindo natural, licor de naranja, azúcar y mezclado en coctelera.',
        precio: '',
        alergenos: ['alcohol']
      },
      {
        img: '../assets/img/carta/margarita.png',
        nombre: 'Margarita Frozen',
        descripcion: 'Tequila José Cuervo Especial Silver, limón natural, licor de naranja y azúcar, con textura de sorbete.',
        precio: '',
        alergenos: ['alcohol']
      },
      {
        img: '../assets/img/carta/coctail-fresa-picosa.png',
        nombre: 'Fresa Picosa',
        descripcion: 'Tequila José Cuervo Fresa Picosa combinado con Sprite.',
        precio: '',
        alergenos: ['alcohol']
      },
      {
        img: '../assets/img/carta/coctail-cuervo-lemon.png',
        nombre: 'Cuervo Lemon',
        descripcion: 'Tequila José Cuervo Especial Blanco, con fanta limón.',
        precio: '',
        alergenos: ['alcohol']
      },
      {
        img: '../assets/img/carta/margarita.png',
        nombre: 'Mezcalita',
        descripcion: 'Mezcal 400 Conejos Joven, jugo de limón natural y mezclado en cóctelera.',
        precio: '',
        alergenos: ['alcohol']
      },
      {
        img: '../assets/img/carta/paloma.png',
        nombre: 'Paloma 1800',
        descripcion: 'Tequila 1800 Silver, jugo de limón natural y refresco de pomelo.',
        precio: '',
        alergenos: ['alcohol']
      },
      {
        img: '../assets/img/carta/coctail-sunrise.png',
        nombre: 'Sunrise',
        descripcion: 'Tequila José Cuervo, granadina y jugo de naranja natural.',
        precio: '',
        alergenos: ['alcohol']
      }
    ],
    "tequilas Y Mezcales": [
      {
        img: '../assets/img/carta/tequila-jose-cuervo.png',
        nombre: 'José Cuervo',
        tipo: 'Tequila',
        descripcion: 'Reposado',
        precio: '',
        alergenos: ['alcohol'],
        especial: true
      },
      {
        img: '../assets/img/carta/tequila-jose-cuervo-fresa-picosa.png',
        nombre: 'José Cuervo Fresa Picosa',
        tipo: 'Tequila',
        descripcion: 'Reposado',
        precio: '',
        alergenos: ['alcohol'],
        especial: true
      },
      {
        img: '../assets/img/carta/tequila-jose-cuervo-tradicional.png',
        nombre: 'José Cuervo Tradicional',
        tipo: 'Tequila',
        descripcion: 'Reposado',
        precio: '',
        alergenos: ['alcohol'],
        especial: true
      },
      {
        img: '../assets/img/carta/tequila-1800.png',
        nombre: '1800',
        tipo: 'Tequila',
        descripcion: 'Blanco',
        precio: '',
        alergenos: ['alcohol'],
        especial: true
      },
      {
        img: '../assets/img/carta/tequila-1800-reposado.png',
        nombre: '1800',
        tipo: 'Tequila',
        descripcion: 'Reposado',
        precio: '',
        alergenos: ['alcohol'],
        especial: true
      },
      {
        img: '../assets/img/carta/tequila-1800-anejo.png',
        nombre: '1800',
        tipo: 'Tequila',
        descripcion: 'Añejo Reposado',
        precio: '',
        alergenos: ['alcohol'],
        especial: true
      },
      {
        img: '../assets/img/carta/tequila-cristalino.png',
        nombre: 'Tequila Cristalino',
        tipo: 'Tequila',
        descripcion: 'Reposado',
        precio: '',
        alergenos: ['alcohol'],
        especial: true
      },
      {
        img: '../assets/img/carta/tequila-silver.png',
        nombre: 'Tequila Silver',
        tipo: 'Tequila',
        descripcion: 'Silver',
        precio: '',
        alergenos: ['alcohol']
      },
      {
        img: '../assets/img/carta/tequila-99000.png',
        nombre: 'Corralejo 99000',
        tipo: 'Tequila',
        descripcion: 'Reposado',
        precio: '',
        alergenos: ['alcohol']
      },
      {
        img: '../assets/img/carta/tequila-clase-azul.png',
        nombre: 'Clase Azúl',
        tipo: 'Tequila',
        descripcion: 'Reposado',
        precio: '',
        alergenos: ['alcohol']
      },
      {
        img: '../assets/img/carta/tequila-corralejo-reposado.png',
        nombre: 'Corralejo Reposado',
        tipo: 'Tequila',
        descripcion: 'Reposado',
        precio: '',
        alergenos: ['alcohol']
      },
      {
        img: '../assets/img/carta/tequila-patron.png',
        nombre: 'Patrón',
        tipo: 'Tequila',
        descripcion: 'Reposado',
        precio: '',
        alergenos: ['alcohol']
      },
      {
        img: '../assets/img/carta/tequila-herradura.png',
        nombre: 'Herradura',
        tipo: 'Tequila',
        descripcion: 'Reposado',
        precio: '',
        alergenos: ['alcohol']
      },
      {
        img: '../assets/img/carta/tequila-don-julio.png',
        nombre: 'Don Julio',
        tipo: 'Tequila',
        descripcion: 'Reposado',
        precio: '',
        alergenos: ['alcohol']
      },
      {
        img: '../assets/img/carta/400azul.png',
        nombre: '400 Conejos',
        tipo: 'Mezcal',
        descripcion: 'Espadín',
        precio: '',
        alergenos: ['alcohol'],
        especial: true
      },
      {
        img: '../assets/img/carta/400verde.png',
        nombre: '400 Conejos',
        tipo: 'Mezcal',
        descripcion: 'Reposado',
        precio: '',
        alergenos: ['alcohol'],
        especial: true
      },
      {
        img: '../assets/img/carta/400morado.png',
        nombre: '400 Conejos',
        tipo: 'Mezcal',
        descripcion: 'Tobalá',
        precio: '',
        alergenos: ['alcohol'],
        especial: true
      },
      {
        img: '../assets/img/carta/400rojo.png',
        nombre: '400 Conejos',
        tipo: 'Mezcal',
        descripcion: 'Cuishe',
        precio: '',
        alergenos: ['alcohol'],
        especial: true
      },
      {
        img: '../assets/img/carta/mezcal-picaflor.png',
        nombre: 'Picaflor',
        tipo: 'Mezcal',
        descripcion: 'Espadín. Maestro mezcalero: Virgilio Velasco (San Luis Del Río Oaxaca)',
        precio: '',
        alergenos: ['alcohol']
      },
      {
        img: '../assets/img/carta/mezcal-alipus.png',
        nombre: 'Alipús',
        tipo: 'Mezcal',
        descripcion: 'Espadín. San Juan - Oaxaca',
        precio: '',
        alergenos: ['alcohol']
      }
    ],
    "vinos": [
      {
        img: '../assets/img/carta/vino-la-bestia-blanca.png',
        nombre: 'La Bestia Blanca',
        tipo: 'Vino Blanco',
        descripcion: 'Silvestre, Suave, Elegante.',
        precio: '',
        alergenos: ['alcohol']
      },
      {
        img: '../assets/img/carta/vino-la-dansada.png',
        nombre: 'La Dansada',
        tipo: 'Vino Blanco',
        descripcion: 'Fresco, Persistente, Mineral.',
        precio: '',
        alergenos: ['alcohol']
      },
      {
        img: '../assets/img/carta/vino-lagar-d-cervera.png',
        nombre: 'Lagar D Cervera',
        tipo: 'Vino Blanco',
        descripcion: 'Fresco, Elegante, Cautivador.',
        precio: '',
        alergenos: ['alcohol']
      },
      {
        img: '../assets/img/carta/vino-petit-sios.png',
        nombre: 'Petit Siós',
        tipo: 'Vino Tinto',
        descripcion: 'Afrutado, fresco, directo y desenfadado.',
        precio: '',
        alergenos: ['alcohol']
      },
      {
        img: '../assets/img/carta/vino-cau-del-gat.png',
        nombre: 'Siós Cau del Gat',
        tipo: 'Vino Tinto',
        descripcion: 'Estructura, fruta y frescura.',
        precio: '',
        alergenos: ['alcohol']
      },
      {
        img: '../assets/img/carta/vino-finca-san-martin.png',
        nombre: 'Finca San Martín',
        tipo: 'Vino Tinto',
        descripcion: 'Frescura, Vivacidad, Potencia y Frutosidad.',
        precio: '',
        alergenos: ['alcohol']
      }
    ]
  };