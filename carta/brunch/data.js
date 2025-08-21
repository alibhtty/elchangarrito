const alergenosIcons = {
  frutosSecos: "../../assets/icons/alergenos/frutos-secos.svg",
  gluten: "../../assets/icons/alergenos/gluten.svg",
  lacteos: "../../assets/icons/alergenos/lacteos.svg",
  alcohol: "../../assets/icons/alergenos/alcohol.svg",
  huevo: "../../assets/icons/alergenos/huevo.svg",
};

const menuItems = {
  Batidos: [
    {
      img: '../../assets/img/carta/brunch/batido-de-fresa.png',
      nombre: 'Batido de Fresa',
      descripcion: 'Fresas frescas, yogur natural y un toque de miel.',
      precio: '4.50€',
      alergenos: ["lacteos"]
    },
    {
      img: '../../assets/img/carta/brunch/aguas-frescas.png',
      //img: '../../assets/img/carta/batido-platano.png',
      nombre: 'Batido de Plátano y Avena',
      descripcion: 'Plátano maduro, leche vegetal, avena y canela.',
      precio: '4.80€',
      alergenos: ["gluten"]
    },
    {
      img: '../../assets/img/carta/brunch/batido-verde.png',
      nombre: 'Batido Verde Detox',
      descripcion: 'Espinaca, manzana verde, pepino y jengibre.',
      precio: '5.00€'
    },
    {
      img: '../../assets/img/carta/brunch/batido-cacao.png',
      nombre: 'Batido de Cacao y Almendra',
      descripcion: 'Leche de almendra, cacao puro y dátiles.',
      precio: '5.20€',
      alergenos: ["frutosSecos"]
    }
  ],
  Huevos: [
    {
      img: '../../assets/img/carta/brunch/huevos-benedict.png',
      nombre: 'Huevos Benedict',
      descripcion: 'Huevos escalfados sobre pan brioche con jamón y salsa holandesa.',
      precio: '7.50€',
      alergenos: ["gluten", "huevo", "lacteos"]
    },
    {
      img: '../../assets/img/carta/brunch/huevos-revueltos.png',
      nombre: 'Huevos Revueltos con Aguacate',
      descripcion: 'Huevos cremosos con aguacate sobre pan integral.',
      precio: '6.80€',
      alergenos: ["huevo", "gluten"]
    },
    {
      img: '../../assets/img/carta/brunch/tortilla-espinacas.png',
      nombre: 'Tortilla de Espinacas y Queso',
      descripcion: 'Tortilla francesa con espinacas frescas y queso feta.',
      precio: '6.50€',
      alergenos: ["huevo", "lacteos"]
    }
  ],
  Tostas: [
    {
      img: '../../assets/img/carta/brunch/tosta-aguacate.png',
      nombre: 'Tosta de Aguacate y Huevo',
      descripcion: 'Pan de masa madre con aguacate, huevo poché y semillas.',
      precio: '6.90€',
      alergenos: ["gluten", "huevo"]
    },
    {
      img: '../../assets/img/carta/brunch/tosta-salmon.png',
      nombre: 'Tosta de Salmón Ahumado',
      descripcion: 'Salmón ahumado, queso crema y eneldo sobre pan integral.',
      precio: '7.20€',
      alergenos: ["gluten", "lacteos"]
    },
    {
      img: '../../assets/img/carta/tosta-hummus.png',
      nombre: 'Tosta de Hummus y Tomate Seco',
      descripcion: 'Hummus casero, rúcula y tomate seco sobre pan de centeno.',
      precio: '6.50€',
      alergenos: ["gluten"]
    }
  ],
  Ensaladas: [
    {
      img: '../../assets/img/carta/brunch/ensalada-quinoa.png',
      nombre: 'Ensalada de Quinoa',
      descripcion: 'Quinoa, pepino, tomate cherry, menta y limón.',
      precio: '7.50€'
    },
    {
      img: '../../assets/img/carta/brunch/ensalada-caprese.png',
      nombre: 'Ensalada Caprese',
      descripcion: 'Tomate, mozzarella fresca, albahaca y aceite de oliva virgen.',
      precio: '6.80€',
      alergenos: ["lacteos"]
    },
    {
      img: '../../assets/img/carta/brunch/ensalada-pollo.png',
      nombre: 'Ensalada César con Pollo',
      descripcion: 'Lechuga romana, pollo a la plancha, croutons y parmesano.',
      precio: '8.20€',
      alergenos: ["gluten", "lacteos"]
    },
    {
      img: '../../assets/img/carta/brunch/ensalada-frutas.png',
      nombre: 'Ensalada de Frutas Frescas',
      descripcion: 'Mezcla de frutas de temporada con menta fresca.',
      precio: '5.00€'
    }
  ]
};
