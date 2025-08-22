const alergenosIcons = {
    frutosSecos: "../../assets/icons/alergenos/frutos-secos.svg",
    gluten: "../../assets/icons/alergenos/gluten.svg",
    lacteos: "../../assets/icons/alergenos/lacteos.svg",
    alcohol: "../../assets/icons/alergenos/alcohol.svg",
    huevo: "../../assets/icons/alergenos/huevo.svg",
  };
  
const menuItems = {
    aperitius: [
      {
        img: '../../assets/img/carta/nachos.png',
        nombre: 'Nachos amb Guacamole',
        descripcion: 'Cruixents totopos de blat de moro amb fesols negres, formatge fos, bec de gall i guacamole per sobre.',
        precio: '€13.00',
        alergenos: ["gluten", "lacteos"],
      },
      {
        img: '../../assets/img/carta/guacamole.png',
        nombre: 'Guacamole',
        descripcion: 'Alvocat martejat al moment amb jitomate, ceba, coriandre i acompanyat de totopos.',
        precio: '€9.90',
      },
      {
        img: '../../assets/img/carta/sincronizada.png',
        nombre: 'Sincronitzada',
        descripcion: 'Truites de blat amb pernil York, formatge fos i bec de gall.',
        precio: '€7.50',
        alergenos: ["lacteos"]
      },
      {
        img: '../../assets/img/carta/ensalada-de-nopales.png',
        nombre: 'Nopales Salad',
        descripcion: 'Nopalitos frescos amb ceba, jitomate, coriandre, formatge fresc i oli d\'oliva.',
        precio: '€9.90',
        alergenos: ["lacteos"]
      },
      {
        img: '../../assets/img/carta/frijoles-de-la-olla.png',
        nombre: 'Fesols de l\'Olla',
        descripcion: 'Fesols negres de l\'olla amb ceba, coriandre, formatge fresc, i acompanyats amb totopos.',
        precio: '€7.90',
        alergenos: ["lacteos"]
      },
    ],
    tacs: [
      {
        img: '../../assets/img/carta/taco-de-tinga-de-pollo.png',
        nombre: 'Tac de Tinga de Pollastre',
        descripcion: 'Pit de pollastre esmicolat amb salsa de casa.',
        precio: '2.50€ und.',
      },
      {
        img: '../../assets/img/carta/taco-de-cochinita-pibil.png',
        nombre: 'Tac de Cochinita Pibil',
        descripcion: 'Carn de porc amb salsa pibil amb ceba morada adobada en llimona per sobre.',
        precio: '2.50€ und.',
      },
      {
        img: '../../assets/img/carta/taco-al-pastor.png',
        nombre: 'Tac al Pastor',
        descripcion: 'Porc adobat amb salsa pastor, a la planxa i servit amb cebeta, coriandre i llimona.',
        precio: '2.50€ und.',
      },
      {
        img: '../../assets/img/carta/taco-de-mole-verde.png',
        nombre: 'Tac de Mola Verda',
        descripcion: 'Pit de pollastre esmicolat en una salsa prehispànica d\'herbes mexicanes.',
        precio: '2.50€ und.',
        alergenos: ["lacteos"]
      },
      {
        img: '../../assets/img/carta/taco-de-mole-poblano.png',
        nombre: 'Tac de Mole Poblano',
        descripcion: 'Pit de pollastre esmicolat en una salsa prehispànica de chiles, fruits secs i cacau.',
        precio: '2.50€ und.',
        alergenos: ["frutosSecos"]
      },
      {
        img: '../../assets/img/carta/taco-de-papa-con-frijol.png',
        nombre: 'Tac de Papa amb Frijol',
        descripcion: 'Patata amb fesols negres de l\'olla.',
        precio: '2.50€ und.',
      },
      {
        img: '../../assets/img/carta/taco-de-carne.png',
        nombre: 'Tac de Carn',
        descripcion: 'Vedella esmicolada amb salsa de jitomate i ceba.',
        precio: '2.50€ und.',
      },
      {
        img: '../../assets/img/carta/taco-de-papa-con-chorizo.png',
        nombre: 'Tac de Papa amb Xoriço',
        descripcion: 'Patata amb xoriço.',
        precio: '2.50€ und.',
      },
      {
        img: '../../assets/img/carta/taco-de-queso-panela.png',
        nombre: 'Tac de Formatge Panel·la',
        descripcion: 'Formatge fresc mexicà i fesols negres de l\'olla.',
        precio: '2.50€ und.',
        alergenos: ["lacteos"]
      },
    ],
    quesadilles: [
      {
        img: '../../assets/img/carta/q-flor-de-calabaza.png',
        nombre: 'Quesadilla de Flor de Carabassa',
        descripcion: 'Flors de carbassa amb formatge fos.',
        precio: '€3.50',
        alergenos: ['gluten', 'lacteos']
      },
      {
        img: '../../assets/img/carta/q-de-huitlacoche.png',
        nombre: 'Quesadilla de Huitlacoche',
        descripcion: 'Fong de blat de moro amb formatge fos.',
        precio: '€3.50',
        alergenos: ['gluten', 'lacteos']
      },
      {
        img: '../../assets/img/carta/q-rajas-con-queso.png',
        nombre: 'Quesadilla de Rajas amb Formatge',
        descripcion: 'Tires de Xile poblano, papa i formatge fos.',
        precio: '€3.50',
        alergenos: ['gluten', 'lacteos']
      },
      {
        img: '../../assets/img/carta/q-de-huevo-trufa.png',
        nombre: "Quesadilla d'Ou Trufa",
        descripcion: "Ou fregit amb crema de tòfona negra i formatge fos.",
        precio: '€3.50',
        alergenos: ['gluten', 'huevo', 'lacteos']
      },
      {
        img: '../../assets/img/carta/q-de-cochinita.png',
        nombre: 'Quesadilla de Cochinita Pibil',
        descripcion: 'Carn de porc amb salsa pibil i formatge fos.',
        precio: '€3.50',
        alergenos: ['gluten', 'lacteos']
      },
      {
        img: '../../assets/img/carta/q-de-champiñones-al-ajillo.png',
        nombre: "Quesadilla de Xampinyons a l'Aixillo",
        descripcion: 'Xampinyons a la mexicana amb formatge fos.',
        precio: '€3.50',
        alergenos: ['gluten', 'lacteos']
      },
      {
        img: '../../assets/img/carta/q-carne.png',
        nombre: 'Quesadilla de Carn',
        descripcion: 'Vedella esmicolada amb salsa de jitomate, ceba i amb formatge fos.',
        precio: '€3.50',
        alergenos: ['gluten', 'lacteos']
      }
    ],
    especialitats: [
      {
        img: '../../assets/img/carta/tacos-dorados.png',
        nombre: 'Tacs Daurats',
        descripcion: 'Pollastre o vedella embolicada amb cruixents truites de blat de moro amb enciam, ceba, jitomate, crema agra i formatge fresc per sobre.',
        precio: '15.95€',
        alergenos: ["lacteos"]
      },
      {
        img: '../../assets/img/carta/enchiladas-verdes.png',
        nombre: 'Enchiladas Verdes',
        descripcion: 'Pit de pollastre embolicada amb truites de blat de moro i banyades amb salsa verda rostida i amb ceba, formatge fresc i crema agra.',
        precio: '15.95€',
        alergenos: ["lacteos"]
      },
      {
        img: '../../assets/img/carta/choriqueso.png',
        nombre: 'Xoriquès',
        descripcion: 'Xoriço a la planxa amb formatge fos i acompanyat amb quatre truites de blat.',
        precio: '15.95€',
        alergenos: ["lacteos"]
      },
      {
        img: '../../assets/img/carta/champiqueso.png',
        nombre: 'Xampicàs',
        descripcion: 'Xampinyons a la planxa amb formatge fos i acompanyat amb quatre truites de blat.',
        precio: '15.95€',
        alergenos: ["lacteos"]
      },
      {
        img: '../../assets/img/carta/alambre.png',
        nombre: 'Filferro',
        descripcion: 'Vedella o pollastre, pebrot verd i vermell, ceba, formatge fos i acompanyat de quatre truites de blat.',
        precio: '15.95€',
        alergenos: ["lacteos"]
      }
    ],
    postres: [
      {
        img: '../../assets/img/carta/tres-leches.png',
        nombre: 'Tarteta Tres Llets',
        descripcion: 'Banyada amb tres llets.',
        precio: '€6.00',
        alergenos: ["huevo", "lacteos"]
      },
      {
        img: '../../assets/img/carta/chocoflan.png',
        nombre: 'Xocoflà',
        descripcion: 'Esponjós i cremós.',
        precio: '€6.00',
        alergenos: ["huevo", "lacteos"]
      },
    ],
    begudes: [
      {
        img: '../../assets/img/carta/aguas-frescas.png',
        nombre: 'Aigües de fruits naturals',
        descripcion: 'Aigües de fruites com maduixa, papaia, mango, meló, llima, jamaica o tamarinde.',
        precio: '€5.50'
      },
      {
        img: '../../assets/img/carta/agua.png',
        nombre: 'Aigua',
        descripcion: 'Aigua 33cl, 50cl',
        precio: '€2.80, €3.00'
      },
      {
        img: '../../assets/img/carta/coca-cola.png',
        nombre: 'Coca-Cola',
        descripcion: 'Coca-Cola',
        precio: '€2.80'
      },
      {
        img: '../../assets/img/carta/coca-cola-zero.png',
        nombre: 'Coca-Cola Zero',
        descripcion: 'Coca-Cola Zero',
        precio: '€2.80'
      },
      {
        img: '../../assets/img/carta/cortado.png',
        nombre: 'Tallat',
        descripcion: 'Cafè tallat',
        precio: '€1.80'
      },
      {
        img: '../../assets/img/carta/cafe-con-leche.png',
        nombre: 'Cafè amb llet',
        descripcion: 'Cafè amb llet',
        precio: '€1.80'
      },
      {
        img: '../../assets/img/carta/nestea.png',
        nombre: 'Nestea',
        descripcion: 'Nestea',
        precio: '€2.80'
      },
      {
        img: '../../assets/img/carta/aquarius.png',
        nombre: 'Aquarius',
        descripcion: 'Aquarius',
        precio: '€2.80'
      },
      {
        img: '../../assets/img/carta/fanta-naranja.png',
        nombre: 'Fanta Taronja',
        descripcion: 'Fanta Taronja',
        precio: '€2.80'
      },
      {
        img: '../../assets/img/carta/agua-con-gas.png',
        nombre: 'Aigua amb gas',
        descripcion: 'Malavella.',
        precio: '€2.80'
      },
      {
        img: '../../assets/img/carta/cafe-americano.png',
        nombre: 'Cafè Americà',
        descripcion: 'Cafè americà.',
        precio: '€1.80'
      },
      {
        img: '../../assets/img/carta/cafe-expreso.png',
        nombre: 'Cafè Exprés',
        descripcion: 'Cafè exprés.',
        precio: '€1.80'
      }
    ],
    cerveses: [
      {
        img: '../../assets/img/carta/corona.png',
        nombre: 'Corona',
        descripcion: 'Coroneta a Espanya.',
        precio: '€4.50',
        alergenos: ['alcohol']
      },
      {
        img: '../../assets/img/carta/negra-modelo.png',
        nombre: 'Negra Modelo',
        descripcion: 'La crema de la cervesa.',
        precio: '€4.50',
        alergenos: ['alcohol']
      },
      {
        img: '../../assets/img/carta/modelo-especial.png',
        nombre: 'Modelo Especial',
        descripcion: "L'especial.",
        precio: '€4.50',
        alergenos: ['alcohol']
      },
      {
        img: '../../assets/img/carta/pacifico.png',
        nombre: 'Pacífico',
        descripcion: 'La del nord.',
        precio: '€4.50',
        alergenos: ['alcohol']
      },
      {
        img: '../../assets/img/carta/clara.png',
        nombre: 'Clara',
        descripcion: 'Amstel.',
        precio: '€2.60',
        alergenos: ['alcohol']
      },
      {
        img: '../../assets/img/carta/ocho-reales-trio.png',
        nombre: 'Ocho Reales',
        descripcion: "L'artesana mexicana sense gluten. Clara, rubia y negra.",
        precio: '€4.90',
        alergenos: ['alcohol']
      },
      {
        img: '../../assets/img/carta/stela-artois.png',
        nombre: 'Estela Artois',
        descripcion: 'Freda i directa del barril.',
        precio: '€2.60',
        alergenos: ['alcohol']
      },
      {
        img: '../../assets/img/carta/sol.png',
        nombre: 'Sol',
        descripcion: "L'autèntic esperit de Mèxic.",
        precio: '€4.50',
        alergenos: ['alcohol']
      },
      {
        img: '../../assets/img/carta/free-damm.png',
        nombre: 'Cervesa sense alcohol',
        descripcion: 'Free Damm',
        precio: '€2.60'
      }
    ],
    còctels: [
      {
        img: '../../assets/img/carta/michelada.png',
        nombre: 'Michelada',
        descripcion: "Suc de tomàquet natural, suc d'ostres, salsa anglesa, suc de llimona, sal, Xile i pimineta. Amb cerveses Mexicanes 1.00€ extra.",
        precio: '€6.00',
        alergenos: ['alcohol']
      },
      {
        img: '../../assets/img/carta/chelada.png',
        nombre: 'Chelada',
        descripcion: "Copa gebrada amb sal, i suc de llimona natural i cervesa de barril. Amb cerveses Mexicanes 1.00€ extra.",
        precio: '€6.00',
        alergenos: ['alcohol']
      },
      {
        img: '../../assets/img/carta/margarita.png',
        nombre: 'Margarita Shake',
        descripcion: 'Tequila José Cuervo, llimona natural, licor de taronja, sucre i barrejat amb coctelera.',
        precio: '€10.00',
        alergenos: ['alcohol']
      },
      {
        img: '../../assets/img/carta/margarita-de-tamarindo.png',
        nombre: 'Margarita de Tamarindo',
        descripcion: 'Tequila José Cuervo, tamarinde natural, licor de taronja, sucre i barrejat amb coctelera.',
        precio: '€12.00',
        alergenos: ['alcohol']
      },
      {
        img: '../../assets/img/carta/margarita.png',
        nombre: 'Margarita Frozen',
        descripcion: 'Tequila José Cuervo, llimona natural, licor de taronja i sucre, amb textura de sorbet.',
        precio: '€10.00',
        alergenos: ['alcohol']
      },
      {
        img: '../../assets/img/carta/coctail-fresa-picosa.png',
        nombre: 'Fresa Picosa',
        descripcion: 'Tequila José Cuervo Fresa Picosa combinat amb Sprite.',
        precio: '€10.00',
        alergenos: ['alcohol']
      },
      {
        img: '../../assets/img/carta/coctail-cuervo-lemon.png',
        nombre: 'Cuervo Lemon',
        descripcion: 'Tequila José Cuervo Especial Blanco, amb Fanta llimona.',
        precio: '€10.00',
        alergenos: ['alcohol']
      },
      {
        img: '../../assets/img/carta/margarita.png',
        nombre: 'Mezcalita',
        descripcion: 'Mescal 400 Conejos Jove, suc de llimona natural i barrejat en còctelera.',
        precio: '€12.00',
        alergenos: ['alcohol']
      },
      {
        img: '../../assets/img/carta/paloma.png',
        nombre: 'Paloma 1800',
        descripcion: 'Tequila 1800 Silver, suc de llimona natural i refresc de pomelo.',
        precio: '€12.00',
        alergenos: ['alcohol']
      },
      {
        img: '../../assets/img/carta/coctail-sunrise.png',
        nombre: 'Sunrise',
        descripcion: "Tequila José Cuervo, granadina i suc de taronja natural.",
        precio: '€10.00',
        alergenos: ['alcohol']
      }
    ],
    "Tequiles i Mezcals": [
      {
        img: '../../assets/img/carta/tequila-jose-cuervo.png',
        nombre: 'José Cuervo',
        tipo: 'Tequila',
        descripcion: 'Reposado',
        precio: '€5.00',
        alergenos: ['alcohol'],
        especial: true
      },
      {
        img: '../../assets/img/carta/tequila-jose-cuervo-fresa-picosa.png',
        nombre: 'José Cuervo Fresa Picosa',
        tipo: 'Tequila',
        descripcion: 'Reposado',
        precio: '€6.00',
        alergenos: ['alcohol'],
        especial: true
      },
      {
        img: '../../assets/img/carta/tequila-jose-cuervo-tradicional.png',
        nombre: 'José Cuervo Tradicional',
        tipo: 'Tequila',
        descripcion: 'Reposado',
        precio: '€6.00',
        alergenos: ['alcohol'],
        especial: true
      },
      {
        img: '../../assets/img/carta/tequila-1800.png',
        nombre: '1800',
        tipo: 'Tequila',
        descripcion: 'Blanco',
        precio: '€6.50',
        alergenos: ['alcohol'],
        especial: true
      },
      {
        img: '../../assets/img/carta/tequila-1800-reposado.png',
        nombre: '1800',
        tipo: 'Tequila',
        descripcion: 'Reposado',
        precio: '€7.00',
        alergenos: ['alcohol'],
        especial: true
      },
      {
        img: '../../assets/img/carta/tequila-1800-anejo.png',
        nombre: '1800',
        tipo: 'Tequila',
        descripcion: 'Añejo Reposado',
        precio: '€9.00',
        alergenos: ['alcohol'],
        especial: true
      },
      {
        img: '../../assets/img/carta/tequila-cristalino.png',
        nombre: 'Tequila Cristalino',
        tipo: 'Tequila',
        descripcion: 'Reposado',
        precio: '€9.00',
        alergenos: ['alcohol'],
        especial: true
      },
      {
        img: '../../assets/img/carta/tequila-silver.png',
        nombre: 'Tequila Silver',
        tipo: 'Tequila',
        descripcion: 'Silver',
        precio: '€6.50',
        alergenos: ['alcohol']
      },
      {
        img: '../../assets/img/carta/tequila-99000.png',
        nombre: 'Corralejo 99000',
        tipo: 'Tequila',
        descripcion: 'Reposado',
        precio: '€9.00',
        alergenos: ['alcohol']
      },
      {
        img: '../../assets/img/carta/tequila-clase-azul.png',
        nombre: 'Clase Azúl',
        tipo: 'Tequila',
        descripcion: 'Reposado',
        precio: '€20.00🍷',
        alergenos: ['alcohol']
      },
      {
        img: '../../assets/img/carta/tequila-corralejo-reposado.png',
        nombre: 'Corralejo Reposado',
        tipo: 'Tequila',
        descripcion: 'Reposado',
        precio: '€6.50',
        alergenos: ['alcohol']
      },
      {
        img: '../../assets/img/carta/tequila-patron.png',
        nombre: 'Patrón',
        tipo: 'Tequila',
        descripcion: 'Reposado',
        precio: '€7.00',
        alergenos: ['alcohol']
      },
      {
        img: '../../assets/img/carta/tequila-herradura.png',
        nombre: 'Herradura',
        tipo: 'Tequila',
        descripcion: 'Reposado',
        precio: '€6.50',
        alergenos: ['alcohol']
      },
      {
        img: '../../assets/img/carta/tequila-don-julio.png',
        nombre: 'Don Julio',
        tipo: 'Tequila',
        descripcion: 'Reposado',
        precio: '€6.50',
        alergenos: ['alcohol']
      },
      {
        img: '../../assets/img/carta/400azul.png',
        nombre: '400 Conejos',
        tipo: 'Mezcal',
        descripcion: 'Espadín',
        precio: '€6.50',
        alergenos: ['alcohol'],
        especial: true
      },
      {
        img: '../../assets/img/carta/400verde.png',
        nombre: '400 Conejos',
        tipo: 'Mezcal',
        descripcion: 'Reposado',
        precio: '€8.00',
        alergenos: ['alcohol'],
        especial: true
      },
      {
        img: '../../assets/img/carta/400morado.png',
        nombre: '400 Conejos',
        tipo: 'Mezcal',
        descripcion: 'Tobalá',
        precio: '€9.00',
        alergenos: ['alcohol'],
        especial: true
      },
      {
        img: '../../assets/img/carta/400rojo.png',
        nombre: '400 Conejos',
        tipo: 'Mezcal',
        descripcion: 'Cuishe',
        precio: '€9.00',
        alergenos: ['alcohol'],
        especial: true
      },
      {
        img: '../../assets/img/carta/mezcal-picaflor.png',
        nombre: 'Picaflor',
        tipo: 'Mezcal',
        descripcion: 'Espadín. Maestro mezcalero: Virgilio Velasco (San Luis Del Río Oaxaca)',
        precio: '€6.50',
        alergenos: ['alcohol']
      },
      {
        img: '../../assets/img/carta/mezcal-alipus.png',
        nombre: 'Alipús',
        tipo: 'Mezcal',
        descripcion: 'Espadín. San Juan - Oaxaca',
        precio: '€6.50',
        alergenos: ['alcohol']
      }
    ],
    vins: [
      {
        img: '../../assets/img/carta/vino-la-bestia-blanca.png',
        nombre: 'La Bestia Blanca',
        tipo: 'Vi Blanc',
        descripcion: 'Silvestre, Suau, Elegant.',
        precio: '€4.30🍷 / €20.00🍾',
        alergenos: ['alcohol']
      },
      {
        img: '../../assets/img/carta/vino-la-dansada.png',
        nombre: 'La Dansada',
        tipo: 'Vi Blanc',
        descripcion: 'Fresc, Persistent, Mineral.',
        precio: '€20.00🍾',
        alergenos: ['alcohol']
      },
      {
        img: '../../assets/img/carta/vino-lagar-d-cervera.png',
        nombre: 'Lagar D Cervera',
        tipo: 'Vi Blanc',
        descripcion: 'Fresc, Elegant, Captivador.',
        precio: '€23.00🍾',
        alergenos: ['alcohol']
      },
      {
        img: '../../assets/img/carta/vino-petit-sios.png',
        nombre: 'Petit Siós',
        tipo: 'Vi Negre',
        descripcion: 'Afruitat, fresc, directe i desenfadat.',
        precio: '€20.00🍾',
        alergenos: ['alcohol']
      },
      {
        img: '../../assets/img/carta/vino-cau-del-gat.png',
        nombre: 'Siós Cau del Gat',
        tipo: 'Vi Negre',
        descripcion: 'Estructura, fruita i frescor.',
        precio: '€23.00🍾',
        alergenos: ['alcohol']
      },
      {
        img: '../../assets/img/carta/vino-finca-san-martin.png',
        nombre: 'Finca San Martín',
        tipo: 'Vi Negre',
        descripcion: 'Frescor, Vivacitat, Potència i Frutositat.',
        precio: '€4.30🍷 / €20.00🍾',
        alergenos: ['alcohol']
      }
    ],
    'extras': [
      {
        img: '../../../assets/img/carta/extras/pico-de-gallo.png',
        nombre: 'Pico de gallo',
        descripcion: 'Barreja fresca de tomàquet, ceba i coriandre.',
        precio: '€1.50',
        alergenos: []
      },
      {
        img: '../../../assets/img/carta/extras/crema-agria.png',
        nombre: 'Crema agra',
        descripcion: 'Suau i lleugerament àcida, ideal per a tacos.',
        precio: '€2.00',
        alergenos: ['lacteos']
      },
      {
        img: '../../../assets/img/carta/extras/limas.png',
        nombre: 'Llimones',
        descripcion: 'Rodes de llima per donar un toc cítric.',
        precio: '€1.00',
        alergenos: []
      },
      {
        img: '../../../assets/img/carta/extras/cebolla-cilantro.png',
        nombre: 'Ceba i coriandre',
        descripcion: 'Frescos i picats, el clàssic topping mexicà.',
        precio: '€1.50',
        alergenos: []
      },
      {
        img: '../../../assets/img/carta/extras/queso-fundido.png',
        nombre: 'Formatge fos',
        descripcion: 'Formatge fos, perfecte per a nachos o tacos.',
        precio: '€1.50',
        alergenos: ['lacteos']
      },
      {
        img: '../../../assets/img/carta/extras/queso-panela.png',
        nombre: 'Formatge panela',
        descripcion: 'Formatge blanc suau, ideal per acompanyar plats.',
        precio: '€2.00',
        alergenos: ['lacteos']
      },
      {
        img: '../../../assets/img/carta/extras/aguacate.png',
        nombre: 'Alvocat',
        descripcion: 'Cremós i fresc, tallat en làmines.',
        precio: '€3.80',
        alergenos: []
      },
      {
        img: '../../../assets/img/carta/extras/trio-toppings.png',
        nombre: 'Trio de toppings',
        descripcion: 'Nopals, mongetes i guacamole en una sola ració.',
        precio: '€6.50',
        alergenos: []
      },
      {
        img: '../../../assets/img/carta/extras/totopos.png',
        nombre: 'Totopos',
        descripcion: 'Xips de blat de moro cruixents, perfectes per a salses.',
        precio: '€1.50',
        alergenos: []
      },
      {
        img: '../../../assets/img/carta/extras/tortillas.png',
        nombre: 'Tortillas',
        descripcion: 'Tortillas de blat de moro suaus, acabades de fer.',
        precio: '€0.40',
        alergenos: []
      },
      {
        img: '../../../assets/img/carta/extras/salsas.png',
        nombre: 'Salses',
        descripcion: 'Varietat de salses mexicanes: verda, vermella i habanero.',
        precio: '€2.00',
        alergenos: []
      },
      {
        img: '../../../assets/img/carta/extras/cilantro.png',
        nombre: 'Coriandre',
        descripcion: 'Coriandre fresc, ideal per a qualsevol plat.',
        precio: '€1.00',
        alergenos: []
      },
      {
        img: '../../../assets/img/carta/extras/cebolla.png',
        nombre: 'Ceba',
        descripcion: 'Ceba blanca picada, cruixent i saborosa.',
        precio: '€1.00',
        alergenos: []
      }
    ],
    /* brunch: [
      {
        img: '../../assets/img/carta/nachos.png',
        nombre: '',
        descripcion: '',
        precio: '',
        alergenos: ["gluten", "lacteos"],
      }
    ], */
  };