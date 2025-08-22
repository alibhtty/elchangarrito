const alergenosIcons = {
    frutosSecos: "../../../assets/icons/alergenos/frutos-secos.svg",
    gluten: "../../../assets/icons/alergenos/gluten.svg",
    lacteos: "../../../assets/icons/alergenos/lacteos.svg",
    alcohol: "../../../assets/icons/alergenos/alcohol.svg",
    huevo: "../../../assets/icons/alergenos/huevo.svg",
  };
  
const menuItems = {
    Snacks: [
      {
        img: '../../../assets/img/carta/nachos.png',
        nombre: 'Nachos with Guacamole',
        descripcion: 'Crispy corn chips with black beans, melted cheese and guacamole on top.',
        precio: '€13.00',
        alergenos: ['gluten', 'lacteos']
      },
      {
        img: '../../../assets/img/carta/guacamole.png',
        nombre: 'Guacamole',
        descripcion: 'Avocado mashed at the moment with tomato, onion, cilantro and accompanied by tortilla chips.',
        precio: '€9.90'
      },
      {
        img: '../../../assets/img/carta/ensalada-de-nopales.png',
        nombre: 'Nopales Salad',
        descripcion: 'Fresh nopalitos with onion, tomato, cilantro, fresh cheese and olive oil.',
        precio: '€7.50',
        alergenos: ['lacteos']
      },
      {
        img: '../../../assets/img/carta/sincronizada.png',
        nombre: 'Synchronized',
        descripcion: 'Wheat tortillas with York ham, melted cheese and pico de gallo.',
        precio: '€9.90',
        alergenos: ['lacteos']
      },
      {
        img: '../../../assets/img/carta/frijoles-de-la-olla.png',
        nombre: 'Frijoles de la Olla',
        descripcion: 'Black beans from the pot with onion, cilantro, fresh cheese, and accompanied with tortilla chips.',
        precio: '€7.90',
        alergenos: ['lacteos']
      }
    ],
    tacos: [
      {
        img: '../../../assets/img/carta/taco-de-tinga-de-pollo.png',
        nombre: 'Chicken Tinga Taco',
        descripcion: 'Shredded chicken breast in house sauce.',
        precio: '€2.50 und.'
      },
      {
        img: '../../../assets/img/carta/taco-de-cochinita-pibil.png',
        nombre: 'Cochinita Pibil Taco',
        descripcion: 'Pork in pibil sauce with red onion pickled in lemon on top.',
        precio: '€2.50 und.'
      },
      {
        img: '../../../assets/img/carta/taco-al-pastor.png',
        nombre: 'Taco al Pastor',
        descripcion: 'Marinated pork in pastor sauce, grilled and served with onion, cilantro and lime.',
        precio: '€2.50 und.'
      },
      {
        img: '../../../assets/img/carta/taco-de-mole-verde.png',
        nombre: 'Green Mole Taco',
        descripcion: 'Shredded chicken breast in a pre-Hispanic sauce of Mexican herbs.',
        precio: '€2.50 und.',
        alergenos: ['lacteos']
      },
      {
        img: '../../../assets/img/carta/taco-de-mole-poblano.png',
        nombre: 'Mole Poblano Taco',
        descripcion: 'Shredded chicken breast in a pre-Hispanic sauce of chiles, nuts and cocoa.',
        precio: '€2.50 und.',
        alergenos: ['frutosSecos']
      },
      {
        img: '../../../assets/img/carta/taco-de-papa-con-frijol.png',
        nombre: 'Potato Taco with Beans',
        descripcion: 'Potato with black beans from the pot.',
        precio: '€2.50 und.',
      },
      {
        img: '../../../assets/img/carta/taco-de-carne.png',
        nombre: 'Meat Taco',
        descripcion: 'Shredded beef in tomato and onion sauce.',
        precio: '€2.50 und.'
      },
      {
        img: '../../../assets/img/carta/taco-de-papa-con-chorizo.png',
        nombre: 'Potato Taco with Chorizo',
        descripcion: 'Potato with sausage.',
        precio: '€2.50 und.'
      },
      {
        img: '../../../assets/img/carta/taco-de-queso-panela.png',
        nombre: 'Panela Cheese Taco',
        descripcion: 'Mexican fresh cheese and black beans from the pot.',
        precio: '€2.50 und.',
        alergenos: ['lacteos']
      }
    ],
    'quesadillas': [
      {
        img: '../../../assets/img/carta/q-flor-de-calabaza.png',
        nombre: 'Pumpkin Flower Quesadilla',
        descripcion: 'Pumpkin flowers with melted cheese.',
        precio: '€3.50',
        alergenos: ['gluten', 'lacteos']
      },
      {
        img: '../../../assets/img/carta/q-de-huitlacoche.png',
        nombre: 'Huitlacoche Quesadilla',
        descripcion: 'Corn mushroom with melted cheese.',
        precio: '€3.50',
        alergenos: ['gluten', 'lacteos']
      },
      {
        img: '../../../assets/img/carta/q-rajas-con-queso.png',
        nombre: 'Rajas Quesadilla with Cheese',
        descripcion: 'Poblano chili strips, potato and melted cheese.',
        precio: '€3.50',
        alergenos: ['gluten', 'lacteos']
      },
      {
        img: '../../../assets/img/carta/q-de-huevo-trufa.png',
        nombre: 'Truffle Egg Quesadilla',
        descripcion: 'Fried egg with black truffle cream and melted cheese.',
        precio: '€3.50',
        alergenos: ['gluten', 'huevo', 'lacteos']
      },
      {
        img: '../../../assets/img/carta/q-de-cochinita.png',
        nombre: 'Cochinita Pibil Quesadilla',
        descripcion: 'Pork meat in pibil sauce and melted cheese.',
        precio: '€3.50',
        alergenos: ['gluten', 'lacteos']
      },
      {
        img: '../../../assets/img/carta/q-de-champiñones-al-ajillo.png',
        nombre: 'Garlic Mushroom Quesadilla',
        descripcion: 'Mexican mushrooms with melted cheese.',
        precio: '€3.50',
        alergenos: ['gluten', 'lacteos']
      },
      {
        img: '../../../assets/img/carta/q-carne.png',
        nombre: 'Meat Quesadilla',
        descripcion: 'Shredded beef in tomato sauce, onion and melted cheese.',
        precio: '€3.50',
        alergenos: ['gluten', 'lacteos']
      }
    ],
    specialties: [
      {
        img: '../../../assets/img/carta/tacos-dorados.png',
        nombre: 'Golden Tacos',
        descripcion: 'Chicken or beef wrapped in crispy corn tortillas with lettuce, onion, tomato, sour cream and fresh cheese on top.',
        precio: '€15.95',
        alergenos: ['lacteos']
      },
      {
        img: '../../../assets/img/carta/enchiladas-verdes.png',
        nombre: 'Green Enchiladas',
        descripcion: 'Chicken breast wrapped in corn tortillas and topped with grilled green sauce and onion, fresh cheese and sour cream.',
        precio: '€15.95',
        alergenos: ['lacteos']
      },
      {
        img: '../../../assets/img/carta/choriqueso.png',
        nombre: 'Choriqueso',
        descripcion: 'Grilled chorizo with melted cheese and served with four wheat tortillas.',
        precio: '€15.95',
        alergenos: ['lacteos']
      },
      {
        img: '../../../assets/img/carta/champiqueso.png',
        nombre: 'Champiqueso',
        descripcion: 'Grilled mushrooms, onion and melted cheese accompanied by four wheat tortillas.',
        precio: '€15.95',
        alergenos: ['lacteos']
      },
      {
        img: '../../../assets/img/carta/alambre.png',
        nombre: 'Alambre',
        descripcion: 'Beef or chicken, green and red pepper, onion and melted cheese accompanied by four wheat tortillas.',
        precio: '€15.95',
        alergenos: ['lacteos']
      }
    ],
    desserts: [
      {
        img: '../../../assets/img/carta/tres-leches.png',
        nombre: 'Three milk cake',
        descripcion: 'Bathed with three milks.',
        precio: '6.00€',
        alergenos: ["huevo", "lacteos"]
      },
      {
        img: '../../../assets/img/carta/chocoflan.png',
        nombre: 'Chocoflán',
        descripcion: 'Fluffy and creamy.',
        precio: '6.00€',
        alergenos: ["huevo", "lacteos"]
      }
    ],
    drinks: [
      {
        img: '../../../assets/img/carta/aguas-frescas.png',
        nombre: 'Natural fruit waters',
        descripcion: 'Fruit waters such as strawberry, papaya, mango, melon, lime, jamaica or tamarind.',
        precio: '€5.50'
      },
      {
        img: '../../../assets/img/carta/agua.png',
        nombre: 'Water',
        descripcion: 'Water 33cl, 50cl',
        precio: '€2.80, €3.00'
      },
      {
        img: '../../../assets/img/carta/coca-cola.png',
        nombre: 'Coca-Cola',
        descripcion: 'Coca-Cola',
        precio: '€2.80'
      },
      {
        img: '../../../assets/img/carta/coca-cola-zero.png',
        nombre: 'Coca-Cola Zero',
        descripcion: 'Coca-Cola Zero',
        precio: '€2.80'
      },
      {
        img: '../../../assets/img/carta/cortado.png',
        nombre: 'Cortado',
        descripcion: 'Café cortado',
        precio: '€1.80'
      },
      {
        img: '../../../assets/img/carta/cafe-con-leche.png',
        nombre: 'Café con leche',
        descripcion: 'Café con leche',
        precio: '€1.80'
      },
      {
        img: '../../../assets/img/carta/nestea.png',
        nombre: 'Nestea',
        descripcion: 'Nestea',
        precio: '€2.80'
      },
      {
        img: '../../../assets/img/carta/aquarius.png',
        nombre: 'Aquarius',
        descripcion: 'Aquarius',
        precio: '€2.80'
      },
      {
        img: '../../../assets/img/carta/fanta-naranja.png',
        nombre: 'Fanta Naranja',
        descripcion: 'Fanta Naranja',
        precio: '€2.80'
      },
      {
        img: '../../../assets/img/carta/agua-con-gas.png',
        nombre: 'Agua con gas',
        descripcion: 'Malavella.',
        precio: '€2.80'
      },
      {
        img: '../../../assets/img/carta/cafe-americano.png',
        nombre: 'Café Americano',
        descripcion: 'Café americano.',
        precio: '€1.80'
      },
      {
        img: '../../../assets/img/carta/cafe-expreso.png',
        nombre: 'Café Expreso',
        descripcion: 'Café Expreso.',
        precio: '€1.80'
      }
    ],
    beers: [
      {
        img: '../../../assets/img/carta/corona.png',
        nombre: 'Corona',
        descripcion: 'Coronita in Spain.',
        precio: '€4.50',
        alergenos: ['alcohol']
      },
      {
        img: '../../../assets/img/carta/negra-modelo.png',
        nombre: 'Black Modelo',
        descripcion: 'La crema de la cerveza.',
        precio: '€4.50',
        alergenos: ['alcohol']
      },
      {
        img: '../../../assets/img/carta/modelo-especial.png',
        nombre: 'Modelo Special',
        descripcion: 'The special.',
        precio: '€4.50',
        alergenos: ['alcohol']
      },
      {
        img: '../../../assets/img/carta/pacifico.png',
        nombre: 'Pacífico',
        descripcion: 'the northern.',
        precio: '€4.50',
        alergenos: ['alcohol']
      },
      {
        img: '../../../assets/img/carta/clara.png',
        nombre: 'Clara',
        descripcion: 'Amstel.',
        precio: '€2.80',
        alergenos: ['alcohol']
      },
      {
        img: '../../../assets/img/carta/ocho-reales-trio.png',
        nombre: 'Ocho Reales',
        descripcion: 'The gluten-free Mexican artisan.',
        precio: '€4.90',
        alergenos: ['alcohol']
      },
      {
        img: '../../../assets/img/carta/stela-artois.png',
        nombre: 'Estela Artois',
        descripcion: 'Cold and straight from the barrel.',
        precio: '€2.80',
        alergenos: ['alcohol']
      },
      {
        img: '../../../assets/img/carta/sol.png',
        nombre: 'Sol',
        descripcion: 'The authentic spirit of México.',
        precio: '€4.50',
        alergenos: ['alcohol']
      },
      {
        img: '../../../assets/img/carta/free-damm.png',
        nombre: 'Alcohol-free beer',
        descripcion: 'Free Damm',
        precio: '€2.80'
      }
    ],
    cocktails: [
      {
        img: '../../../assets/img/carta/michelada.png',
        nombre: 'Michelada',
        descripcion: 'Natural tomato juice, oyster juice, Worcestershire sauce, lemon juice, salt, chili and pepper. With Mexican beers €1.00 extra.',
        precio: '€6.00',
        alergenos: ['alcohol']
      },
      {
        img: '../../../assets/img/carta/chelada.png',
        nombre: 'Chelada',
        descripcion: 'Frosted glass with salt, and natural lemon juice and draft beer. With Mexican beers €1.00 extra.',
        precio: '€6.00',
        alergenos: ['alcohol']
      },
      {
        img: '../../../assets/img/carta/margarita.png',
        nombre: 'Margarita Shake',
        descripcion: 'Tequila José Cuervo Especial Silver, limón natural, licor de naranja, azúcar y mezclado en coctelera.',
        precio: '€10.00',
        alergenos: ['alcohol']
      },
      {
        img: '../../../assets/img/carta/margarita-de-tamarindo.png',
        nombre: 'Margarita de Tamarindo',
        descripcion: 'Tequila José Cuervo, natural tamarind, orange liqueur, sugar and mixed in a shaker',
        precio: '€12.00',
        alergenos: ['alcohol']
      },
      {
        img: '../../../assets/img/carta/margarita.png',
        nombre: 'Margarita Frozen',
        descripcion: 'Tequila José Cuervo, natural lemon, orange liqueur and sugar, with a sorbet texture.',
        precio: '€10.00',
        alergenos: ['alcohol']
      },
      {
        img: '../../../assets/img/carta/coctail-fresa-picosa.png',
        nombre: 'Fresa Picosa',
        descripcion: 'José Cuervo Strawberry Spicy Tequila combined with Sprite.',
        precio: '€10.00',
        alergenos: ['alcohol']
      },
      {
        img: '../../../assets/img/carta/coctail-cuervo-lemon.png',
        nombre: 'Cuervo Lemon',
        descripcion: 'José Cuervo Especial White Tequila, with fanta lemon.',
        precio: '€10.00',
        alergenos: ['alcohol']
      },
      {
        img: '../../../assets/img/carta/margarita.png',
        nombre: 'Mezcalita',
        descripcion: 'Mezcal 400 Conejos Joven, natural lemon juice and mixed in a cocktail shaker.',
        precio: '€12.00',
        alergenos: ['alcohol']
      },
      {
        img: '../../../assets/img/carta/paloma.png',
        nombre: 'Paloma 1800',
        descripcion: 'Tequila 1800 Silver, grenadine and natural orange juice.',
        precio: '€12.00',
        alergenos: ['alcohol']
      },
      {
        img: '../../../assets/img/carta/coctail-sunrise.png',
        nombre: 'Sunrise',
        descripcion: 'Tequila José Cuervo, natural lemon juice and grapefruit soda.',
        precio: '€10.00',
        alergenos: ['alcohol']
      }
    ],
    "tequilas & Mezcals": [
      {
        img: '../../../assets/img/carta/tequila-jose-cuervo.png',
        nombre: 'José Cuervo',
        tipo: 'Tequila',
        descripcion: 'Reposado',
        precio: '€5.00',
        alergenos: ['alcohol'],
        especial: true
      },
      {
        img: '../../../assets/img/carta/tequila-jose-cuervo-fresa-picosa.png',
        nombre: 'José Cuervo Fresa Picosa',
        tipo: 'Tequila',
        descripcion: 'Reposado',
        precio: '€6.00',
        alergenos: ['alcohol'],
        especial: true
      },
      {
        img: '../../../assets/img/carta/tequila-jose-cuervo-tradicional.png',
        nombre: 'José Cuervo Tradicional',
        tipo: 'Tequila',
        descripcion: 'Reposado',
        precio: '€6.00',
        alergenos: ['alcohol'],
        especial: true
      },
      {
        img: '../../../assets/img/carta/tequila-1800.png',
        nombre: '1800',
        tipo: 'Tequila',
        descripcion: 'Blanco',
        precio: '€6.50',
        alergenos: ['alcohol'],
        especial: true
      },
      {
        img: '../../../assets/img/carta/tequila-1800-reposado.png',
        nombre: '1800',
        tipo: 'Tequila',
        descripcion: 'Reposado',
        precio: '€7.00',
        alergenos: ['alcohol'],
        especial: true
      },
      {
        img: '../../../assets/img/carta/tequila-1800-anejo.png',
        nombre: '1800',
        tipo: 'Tequila',
        descripcion: 'Añejo Reposado',
        precio: '€9.00',
        alergenos: ['alcohol'],
        especial: true
      },
      {
        img: '../../../assets/img/carta/tequila-cristalino.png',
        nombre: 'Tequila Cristalino',
        tipo: 'Tequila',
        descripcion: 'Reposado',
        precio: '€9.00',
        alergenos: ['alcohol'],
        especial: true
      },
      {
        img: '../../../assets/img/carta/tequila-silver.png',
        nombre: 'Tequila Silver',
        tipo: 'Tequila',
        descripcion: 'Silver',
        precio: '€6.50',
        alergenos: ['alcohol']
      },
      {
        img: '../../../assets/img/carta/tequila-99000.png',
        nombre: 'Corralejo 99000',
        tipo: 'Tequila',
        descripcion: 'Reposado',
        precio: '€9.00',
        alergenos: ['alcohol']
      },
      {
        img: '../../../assets/img/carta/tequila-clase-azul.png',
        nombre: 'Clase Azúl',
        tipo: 'Tequila',
        descripcion: 'Reposado',
        precio: '€20.00🍷',
        alergenos: ['alcohol']
      },
      {
        img: '../../../assets/img/carta/tequila-corralejo-reposado.png',
        nombre: 'Corralejo Reposado',
        tipo: 'Tequila',
        descripcion: 'Reposado',
        precio: '€6.50',
        alergenos: ['alcohol']
      },
      {
        img: '../../../assets/img/carta/tequila-patron.png',
        nombre: 'Patrón',
        tipo: 'Tequila',
        descripcion: 'Reposado',
        precio: '€7.00',
        alergenos: ['alcohol']
      },
      {
        img: '../../../assets/img/carta/tequila-herradura.png',
        nombre: 'Herradura',
        tipo: 'Tequila',
        descripcion: 'Reposado',
        precio: '€6.50',
        alergenos: ['alcohol']
      },
      {
        img: '../../../assets/img/carta/tequila-don-julio.png',
        nombre: 'Don Julio',
        tipo: 'Tequila',
        descripcion: 'Reposado',
        precio: '€6.50',
        alergenos: ['alcohol']
      },
      {
        img: '../../../assets/img/carta/400azul.png',
        nombre: '400 Conejos',
        tipo: 'Mezcal',
        descripcion: 'Espadín',
        precio: '€6.50',
        alergenos: ['alcohol'],
        especial: true
      },
      {
        img: '../../../assets/img/carta/400verde.png',
        nombre: '400 Conejos',
        tipo: 'Mezcal',
        descripcion: 'Reposado',
        precio: '€8.00',
        alergenos: ['alcohol'],
        especial: true
      },
      {
        img: '../../../assets/img/carta/400morado.png',
        nombre: '400 Conejos',
        tipo: 'Mezcal',
        descripcion: 'Tobalá',
        precio: '€9.00',
        alergenos: ['alcohol'],
        especial: true
      },
      {
        img: '../../../assets/img/carta/400rojo.png',
        nombre: '400 Conejos',
        tipo: 'Mezcal',
        descripcion: 'Cuishe',
        precio: '€9.00',
        alergenos: ['alcohol'],
        especial: true
      },
      {
        img: '../../../assets/img/carta/mezcal-picaflor.png',
        nombre: 'Picaflor',
        tipo: 'Mezcal',
        descripcion: 'Espadín. Maestro mezcalero: Virgilio Velasco (San Luis Del Río Oaxaca)',
        precio: '€6.50',
        alergenos: ['alcohol']
      },
      {
        img: '../../../assets/img/carta/mezcal-alipus.png',
        nombre: 'Alipús',
        tipo: 'Mezcal',
        descripcion: 'Espadín. San Juan - Oaxaca',
        precio: '€6.50',
        alergenos: ['alcohol']
      }
    ],
    wines: [
      {
        img: '../../../assets/img/carta/vino-la-bestia-blanca.png',
        nombre: 'La Bestia Blanca',
        tipo: 'Vino Blanco',
        descripcion: 'Wild, Gentle, Elegant.',
        precio: '€4.30🍷 / €20.00🍾',
        alergenos: ['alcohol']
      },
      {
        img: '../../../assets/img/carta/vino-la-dansada.png',
        nombre: 'La Dansada',
        tipo: 'Vino Blanco',
        descripcion: 'Fresh, Persistent, Mineral.',
        precio: '€20.00🍾',
        alergenos: ['alcohol']
      },
      {
        img: '../../../assets/img/carta/vino-lagar-d-cervera.png',
        nombre: 'Lagar D Cervera',
        tipo: 'Vino Blanco',
        descripcion: 'Fresh, Elegant, Captivating.',
        precio: '€23.00🍾',
        alergenos: ['alcohol']
      },
      {
        img: '../../../assets/img/carta/vino-petit-sios.png',
        nombre: 'Petit Siós',
        tipo: 'Vino Tinto',
        descripcion: 'Fruity, fresh, direct and carefree.',
        precio: '€20.00🍾',
        alergenos: ['alcohol']
      },
      {
        img: '../../../assets/img/carta/vino-cau-del-gat.png',
        nombre: 'Siós Cau del Gat',
        tipo: 'Vino Tinto',
        descripcion: 'Structure, fruit and freshness.',
        precio: '€23.00🍾',
        alergenos: ['alcohol']
      },
      {
        img: '../../../assets/img/carta/vino-finca-san-martin.png',
        nombre: 'Finca San Martín',
        tipo: 'Vino Tinto',
        descripcion: 'Freshness, Vivacity, Power and Fruitiness.',
        precio: '€4.30🍷 / €20.00🍾',
        alergenos: ['alcohol']
      }
    ],
    'extras': [
      {
        img: '../../../assets/img/carta/extras/pico-de-gallo.png',
        nombre: 'Pico de gallo',
        descripcion: 'Fresh mix of tomato, onion, and cilantro.',
        precio: '€1.50',
        alergenos: []
      },
      {
        img: '../../../assets/img/carta/extras/crema-agria.png',
        nombre: 'Sour cream',
        descripcion: 'Smooth and slightly tangy, ideal for tacos.',
        precio: '€2.00',
        alergenos: ['lacteos']
      },
      {
        img: '../../../assets/img/carta/extras/limas.png',
        nombre: 'Limes',
        descripcion: 'Lime slices to add a citrus touch.',
        precio: '€1.00',
        alergenos: []
      },
      {
        img: '../../../assets/img/carta/extras/cebolla-cilantro.png',
        nombre: 'Onion and cilantro',
        descripcion: 'Freshly chopped, the classic Mexican topping.',
        precio: '€1.50',
        alergenos: []
      },
      {
        img: '../../../assets/img/carta/extras/queso-fundido.png',
        nombre: 'Melted cheese',
        descripcion: 'Melted cheese, perfect for nachos or tacos.',
        precio: '€1.50',
        alergenos: ['lacteos']
      },
      {
        img: '../../../assets/img/carta/extras/queso-panela.png',
        nombre: 'Panela cheese',
        descripcion: 'Soft white cheese, ideal to accompany dishes.',
        precio: '€2.00',
        alergenos: ['lacteos']
      },
      {
        img: '../../../assets/img/carta/extras/aguacate.png',
        nombre: 'Avocado',
        descripcion: 'Creamy and fresh, sliced thin.',
        precio: '€3.80',
        alergenos: []
      },
      {
        img: '../../../assets/img/carta/extras/trio-toppings.png',
        nombre: 'Toppings trio',
        descripcion: 'Nopales, beans, and guacamole in a single portion.',
        precio: '€6.50',
        alergenos: []
      },
      {
        img: '../../../assets/img/carta/extras/totopos.png',
        nombre: 'Totopos',
        descripcion: 'Crunchy corn chips, perfect for dipping sauces.',
        precio: '€1.50',
        alergenos: []
      },
      {
        img: '../../../assets/img/carta/extras/tortillas.png',
        nombre: 'Tortillas',
        descripcion: 'Soft corn tortillas, freshly made.',
        precio: '€0.40',
        alergenos: []
      },
      {
        img: '../../../assets/img/carta/extras/salsas.png',
        nombre: 'Salsas',
        descripcion: 'Variety of Mexican sauces: green, red, and habanero.',
        precio: '€2.00',
        alergenos: []
      },
      {
        img: '../../../assets/img/carta/extras/cilantro.png',
        nombre: 'Cilantro',
        descripcion: 'Fresh cilantro, perfect for any dish.',
        precio: '€1.00',
        alergenos: []
      },
      {
        img: '../../../assets/img/carta/extras/cebolla.png',
        nombre: 'Onion',
        descripcion: 'Chopped white onion, crunchy and flavorful.',
        precio: '€1.00',
        alergenos: []
      }
    ],
    /* brunch: [
      {
        img: '../../../assets/img/carta/nachos.png',
        nombre: '',
        descripcion: '',
        precio: '',
        alergenos: ["gluten", "lacteos"],
      }
    ], */
  };