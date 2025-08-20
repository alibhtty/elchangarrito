const alergenosIcons = {
    frutosSecos: "../assets/icons/alergenos/frutos-secos.svg",
    gluten: "../assets/icons/alergenos/gluten.svg",
    lacteos: "../assets/icons/alergenos/lacteos.svg",
    alcohol: "../assets/icons/alergenos/alcohol.svg",
    huevo: "../assets/icons/alergenos/huevo.svg",
  };
  
const menuItems = {
    entradas: [
      {
        img: '../assets/img/carta/nachos.png',
        nombre: 'Wantan Frito',
        descripcion: 'Crujientes totopos de maíz con frijoles negros, queso fundido y guacamole por encima.',
        precio: '12.00€',
        alergenos: ["gluten", "lacteos"],
      },
      {
        img: '../assets/img/carta/guacamole.png',
        nombre: 'Rollitos de Primavera',
        descripcion: 'Crujientes totopos de maíz con frijoles negros, queso fundido y guacamole por encima.',
        precio: '8.00€',
      },
      {
        img: '../assets/img/carta/sincronizada.png',
        nombre: 'Nabo incurtido',
        descripcion: 'Tortillas de trigo con jamón York, queso fundido y pico de gallo.',
        precio: '12.00€',
        alergenos: ["lacteos"]
      },
      {
        img: '../assets/img/carta/ensalada-de-nopales.png',
        nombre: 'Empanaditas Chinas',
        descripcion: 'Nopalitos frescos con cebolla, jitomate, cilantro, queso fresco y aceite de oliva.',
        precio: '8.00€',
        alergenos: ["lacteos"]
      },
      {
        img: '../assets/img/carta/sincronizada.png',
        nombre: 'Sopa Wantan',
        descripcion: 'Tortillas de trigo con jamón York, queso fundido y pico de gallo.',
        precio: '12.00€',
        alergenos: ["lacteos"]
      },
      {
        img: '../assets/img/carta/ensalada-de-nopales.png',
        nombre: 'Caldo con Verduras',
        descripcion: 'Nopalitos frescos con cebolla, jitomate, cilantro, queso fresco y aceite de oliva.',
        precio: '8.00€',
        alergenos: ["lacteos"]
      },
      {
        img: '../assets/img/carta/ensalada-de-nopales.png',
        nombre: 'Caldo con Kion',
        descripcion: 'Nopalitos frescos con cebolla, jitomate, cilantro, queso fresco y aceite de oliva.',
        precio: '8.00€',
        alergenos: ["lacteos"]
      },
    ],
    segundos: [
      {
        img: '../assets/img/carta/taco-de-tinga-de-pollo.png',
        nombre: 'Segundo de Pollo',
        descripcion: 'Pechuga de pollo desmenuzada en salsa de casa.',
        precio: '2.50€',
      },
      {
        img: '../assets/img/carta/taco-de-cochinita-pibil.png',
        nombre: 'Taco de Cochinita Pibil',
        descripcion: 'Carne de cerdo en salsa pibil con cebolla morada encurtida en limón por encima.',
        precio: '2.50€',
      },
      {
        img: '../assets/img/carta/taco-al-pastor.png',
        nombre: 'Taco al Pastor',
        descripcion: 'Cerdo adobado en salsa pastor, a la plancha y servido con cebollita, cilantro y limón.',
        precio: '2.50€',
      },
      {
        img: '../assets/img/carta/taco-de-mole-verde.png',
        nombre: 'Taco de Mole Verde',
        descripcion: 'Pechuga de pollo desmenuzada en una salsa prehispánica de hierbas mexicanas.',
        precio: '2.50€',
        alergenos: ["lacteos"]
      },
      {
        img: '../assets/img/carta/taco-de-carne.png',
        nombre: 'Taco de Carne',
        descripcion: 'Ternera desmenuzada en salsa de jitomate y cebolla.',
        precio: '2.50€',
      },
      {
        img: '../assets/img/carta/taco-de-papa-con-chorizo.png',
        nombre: 'Taco de Papa con Chorizo',
        descripcion: 'Patata con chorizo.',
        precio: '2.50€',
      },
    ],
    "caldos y sopas": [
      {
        img: '../assets/img/carta/taco-de-tinga-de-pollo.png',
        nombre: 'Tinga de Pollo',
        descripcion: 'Pechuga de pollo desmenuzada en salsa de casa.',
        precio: '2.50€',
      },
      {
        img: '../assets/img/carta/taco-de-cochinita-pibil.png',
        nombre: 'Taco de Cochinita Pibil',
        descripcion: 'Carne de cerdo en salsa pibil con cebolla morada encurtida en limón por encima.',
        precio: '2.50€',
      },
      {
        img: '../assets/img/carta/taco-al-pastor.png',
        nombre: 'Taco al Pastor',
        descripcion: 'Cerdo adobado en salsa pastor, a la plancha y servido con cebollita, cilantro y limón.',
        precio: '2.50€',
      },
      {
        img: '../assets/img/carta/taco-de-mole-verde.png',
        nombre: 'Taco de Mole Verde',
        descripcion: 'Pechuga de pollo desmenuzada en una salsa prehispánica de hierbas mexicanas.',
        precio: '2.50€',
        alergenos: ["lacteos"]
      },
      {
        img: '../assets/img/carta/taco-de-carne.png',
        nombre: 'Taco de Carne',
        descripcion: 'Ternera desmenuzada en salsa de jitomate y cebolla.',
        precio: '2.50€',
      },
      {
        img: '../assets/img/carta/taco-de-papa-con-chorizo.png',
        nombre: 'Taco de Papa con Chorizo',
        descripcion: 'Patata con chorizo.',
        precio: '2.50€',
      },
    ],
    pescados: [
        {
          img: '../assets/img/carta/tacos-dorados.png',
          nombre: 'Tacos Dorados',
          descripcion: 'Pollo o ternera envuelta en crujientes tortillas de maíz con lechuga, cebolla, jitomate, crema agria y queso fresco por encima.',
          precio: '10.00€',
          alergenos: ["lacteos"]
        },
        {
          img: '../assets/img/carta/enchiladas-verdes.png',
          nombre: 'Enchiladas Verdes',
          descripcion: 'Pechuga de pollo envuelta en tortillas de maíz y bañadas con salsa verde asada y con cebolla, queso fresco y crema agria.',
          precio: '10.00€',
          alergenos: ["lacteos"]
        },
        {
          img: '../assets/img/carta/choriqueso.png',
          nombre: 'Choriqueso',
          descripcion: 'Cerdo adobado en salsa pastor, a la plancha y servido con cebollita, cilantro y limón.',
          precio: '10.00€',
          alergenos: ["lacteos"]
        },
        {
          img: '../assets/img/carta/champiqueso.png',
          nombre: 'Champiqueso',
          descripcion: 'Champiñones, cebolla y queso fundido a la plancha y acompañado con cuatro tortillasde trigo.',
          precio: '10.00€',
          alergenos: ["lacteos"]
        },
        {
          img: '../assets/img/carta/alambre.png',
          nombre: 'Alambre',
          descripcion: 'Ternera o pollo, pimiento verde y rojo, cebolla y queso fundido.',
          precio: '10.00€',
          alergenos: ["lacteos"]
        },
    ],
    "arroz chaufa": [
      {
        img: '../assets/img/carta/tacos-dorados.png',
        nombre: 'Tacos Dorados',
        descripcion: 'Pollo o ternera envuelta en crujientes tortillas de maíz con lechuga, cebolla, jitomate, crema agria y queso fresco por encima.',
        precio: '10.00€',
        alergenos: ["lacteos"]
      },
      {
        img: '../assets/img/carta/enchiladas-verdes.png',
        nombre: 'Enchiladas Verdes',
        descripcion: 'Pechuga de pollo envuelta en tortillas de maíz y bañadas con salsa verde asada y con cebolla, queso fresco y crema agria.',
        precio: '10.00€',
        alergenos: ["lacteos"]
      },
      {
        img: '../assets/img/carta/choriqueso.png',
        nombre: 'Choriqueso',
        descripcion: 'Cerdo adobado en salsa pastor, a la plancha y servido con cebollita, cilantro y limón.',
        precio: '10.00€',
        alergenos: ["lacteos"]
      },
      {
        img: '../assets/img/carta/champiqueso.png',
        nombre: 'Champiqueso',
        descripcion: 'Champiñones, cebolla y queso fundido a la plancha y acompañado con cuatro tortillasde trigo.',
        precio: '10.00€',
        alergenos: ["lacteos"]
      },
      {
        img: '../assets/img/carta/alambre.png',
        nombre: 'Alambre',
        descripcion: 'Ternera o pollo, pimiento verde y rojo, cebolla y queso fundido.',
        precio: '10.00€',
        alergenos: ["lacteos"]
      },
    ],
    "platos especiales": [
    {
      img: '../assets/img/carta/tacos-dorados.png',
      nombre: 'Tacos Dorados',
      descripcion: 'Pollo o ternera envuelta en crujientes tortillas de maíz con lechuga, cebolla, jitomate, crema agria y queso fresco por encima.',
      precio: '10.00€',
      alergenos: ["lacteos"]
    },
    {
      img: '../assets/img/carta/enchiladas-verdes.png',
      nombre: 'Enchiladas Verdes',
      descripcion: 'Pechuga de pollo envuelta en tortillas de maíz y bañadas con salsa verde asada y con cebolla, queso fresco y crema agria.',
      precio: '10.00€',
      alergenos: ["lacteos"]
    },
    {
      img: '../assets/img/carta/choriqueso.png',
      nombre: 'Choriqueso',
      descripcion: 'Cerdo adobado en salsa pastor, a la plancha y servido con cebollita, cilantro y limón.',
      precio: '10.00€',
      alergenos: ["lacteos"]
    },
    {
      img: '../assets/img/carta/champiqueso.png',
      nombre: 'Champiqueso',
      descripcion: 'Champiñones, cebolla y queso fundido a la plancha y acompañado con cuatro tortillasde trigo.',
      precio: '10.00€',
      alergenos: ["lacteos"]
    },
    {
      img: '../assets/img/carta/alambre.png',
      nombre: 'Alambre',
      descripcion: 'Ternera o pollo, pimiento verde y rojo, cebolla y queso fundido.',
      precio: '10.00€',
      alergenos: ["lacteos"]
    },
    ],
    tortillas: [
      {
        img: '../assets/img/carta/tres-leches.png',
        nombre: 'Tartita Tres Leches',
        descripcion: 'Bañada con tres leches.',
        precio: '4.00€',
        alergenos: ["huevo", "lacteos"]
      },
      {
        img: '../assets/img/carta/chocoflan.png',
        nombre: 'Chocoflán',
        descripcion: 'Esponjoso y cremoso.',
        precio: '4.00€',
        alergenos: ["huevo", "lacteos"]
      },
      {
        img: '../assets/img/carta/chocoflan.png',
        nombre: 'Borrachito Catalán',
        descripcion: 'Bizcocho bañado en almíbar, brandy y relleno de crema catalana.',
        precio: '4.00€',
        alergenos: ["huevo", "lacteos"]
      },
    ],
    postres: [
      {
        img: '../assets/img/carta/tres-leches.png',
        nombre: 'Tartita Tres Leches',
        descripcion: 'Bañada con tres leches.',
        precio: '4.00€',
        alergenos: ["huevo", "lacteos"]
      },
      {
        img: '../assets/img/carta/chocoflan.png',
        nombre: 'Chocoflán',
        descripcion: 'Esponjoso y cremoso.',
        precio: '4.00€',
        alergenos: ["huevo", "lacteos"]
      },
      {
        img: '../assets/img/carta/chocoflan.png',
        nombre: 'Borrachito Catalán',
        descripcion: 'Bizcocho bañado en almíbar, brandy y relleno de crema catalana.',
        precio: '4.00€',
        alergenos: ["huevo", "lacteos"]
      },
    ],
    bebidas: [
      {
        img: '../assets/img/carta/aguas-frescas.png',
        nombre: 'Zumo de frutas natural',
        descripcion: 'Zumo natural de naranja, papaya o fresa.',
        precio: '4.00€',
      },
      {
        img: '../assets/img/carta/agua.png',
        nombre: 'Agua',
        descripcion: 'Agua 33cl, 50cl.',
        precio: '2.50€',
      },
      {
        img: '../assets/img/carta/coca-cola.png',
        nombre: 'Coca-Cola',
        descripcion: 'Coca-Cola.',
        precio: '2.50€',
      },
      {
        img: '../assets/img/carta/coca-cola-zero.png',
        nombre: 'Coca-Cola Zero',
        descripcion: 'Coca-Cola Zero.',
        precio: '2.50€',
      },
      {
        img: '../assets/img/carta/nestea.png',
        nombre: 'Nestea',
        descripcion: 'Nestea.',
        precio: '3.00€',
      },
      {
        img: '../assets/img/carta/aquarius.png',
        nombre: 'Aquarius',
        descripcion: 'Aquarius.',
        precio: '3.00€',
      },
      {
        img: '../assets/img/carta/fanta-naranja.png',
        nombre: 'Fanta Naranja',
        descripcion: 'Fanta Naranja.',
        precio: '2.50€',
      },
      {
        img: '../assets/img/carta/agua-con-gas.png',
        nombre: 'Agua con Gas',
        descripcion: 'Agua con Gas Malavella.',
        precio: '3.00€',
      },
    ],
    tallarines: [
      {
        img: '../assets/img/carta/stela-artois.png',
        nombre: 'Estela Artois',
        descripcion: 'Fría y directa del barril.',
        precio: '2.50€',
        alergenos: ["alcohol"],
        especial: true
      },
      {
        img: '../assets/img/carta/corona.png',
        nombre: 'Corona',
        descripcion: 'Coronita en España.',
        precio: '3.00€',
        alergenos: ["alcohol"]
      },
      {
        img: '../assets/img/carta/clara.png',
        nombre: 'Clara sin Alcohol',
        descripcion: 'Amstel.',
        precio: '2.50€',
      },
      {
        img: '../assets/img/carta/free-damm.png',
        nombre: 'Cerveza sin Alcohol',
        descripcion: 'Free Damm.',
        precio: '2.50€',
      }      
    ],
    brunch: [
      {
        img: '../assets/img/carta/margarita.png',
        nombre: 'Margarita Frozen',
        descripcion: 'Tequila José Cuervo, limón natural, licor de naranja y azúcar, con textura de sorbete.',
        precio: '6.50€',
        alergenos: ["alcohol"]
      },
      {
        img: '../assets/img/carta/coctail-fresa-picosa.png',
        nombre: 'Fresa Picosa',
        descripcion: 'Tequila José Cuervo Fresa Picosa combinado con Sprite.',
        precio: '6.50€',
        alergenos: ["alcohol"]
      },
      {
        img: '../assets/img/carta/coctail-cuervo-lemon.png',
        nombre: 'Cuervo Lemon',
        descripcion: 'Tequila José Cuervo Especial Blanco, con fanta limón.',
        precio: '6.50€',
        alergenos: ["alcohol"]
      },
      {
        img: '../assets/img/carta/margarita.png',
        nombre: 'Margarita Shake',
        descripcion: 'Tequila, limón natural, licor de naranja, azúcar y mezclado en coctelera.',
        precio: '6.50€',
        alergenos: ["alcohol"]
      },
      {
        img: '../assets/img/carta/margarita-de-tamarindo.png',
        nombre: 'Margarita de Tamarindo',
        descripcion: 'Tequila José Cuervo, tamarindo natural, licor de naranja, azúcar y mezclado en coctelera.',
        precio: '6.50€',
        alergenos: ["alcohol"]
      },
    ],
    combinados: [
      {
        img: '../assets/img/carta/vino-la-bestia-blanca.png',
        nombre: 'La Bestia Blanca',
        descripcion: 'Vino Blanco <br> Silvestre, Suave, Elegante.',
        precio: '12.00€',
        alergenos: ["alcohol"]
      },
      {
        img: '../assets/img/carta/vino-la-dansada.png',
        nombre: 'La Dansada',
        descripcion: 'Vino Blanco <br> Fresco, Persistente, Mineral.',
        precio: '8.00€',
        alergenos: ["alcohol"]
      },
      {
        img: '../assets/img/carta/vino-lagar-d-cervera.png',
        nombre: 'Lagar D Cervera',
        descripcion: 'Vino Blanco <br> Fresco, Elegante, Cautivador.',
        precio: '8.00€',
        alergenos: ["alcohol"]
      },
      {
        img: '../assets/img/carta/vino-petit-sios.png',
        nombre: 'Petit Siós',
        descripcion: 'Vino Tinto <br> Afrutado, fresco, directo y desenfadado.',
        precio: '8.00€',
        alergenos: ["alcohol"]
      },
      {
        img: '../assets/img/carta/vino-cau-del-gat.png',
        nombre: 'Siós Cau del Gat',
        descripcion: 'Vino tinto <br> Estructura, fruta y frescura.',
        precio: '12.00€',
        alergenos: ["alcohol"]
      },
      {
        img: '../assets/img/carta/vino-finca-san-martin.png',
        nombre: 'Finca San Martín',
        descripcion: 'Vino Tinto <br> Frescura, Vivacidad, Potencia y Frutosidad.',
        precio: '8.00€',
        alergenos: ["alcohol"]
      },
      {
        img: '../assets/img/carta/vino-finca-martelo.png',
        nombre: 'Finca Montello',
        descripcion: 'Vino Tinto <br> Finura, rusticidad, terruño, fruta y golosura.',
        precio: '8.00€',
        alergenos: ["alcohol"]
      }
    ],
    "a la plancha": [
      {
        img: '../assets/img/carta/tres-leches.png',
        nombre: 'Tartita Tres Leches',
        descripcion: 'Bañada con tres leches.',
        precio: '4.00€',
        alergenos: ["huevo", "lacteos"]
      },
      {
        img: '../assets/img/carta/chocoflan.png',
        nombre: 'Chocoflán',
        descripcion: 'Esponjoso y cremoso.',
        precio: '4.00€',
        alergenos: ["huevo", "lacteos"]
      },
      {
        img: '../assets/img/carta/chocoflan.png',
        nombre: 'Borrachito Catalán',
        descripcion: 'Bizcocho bañado en almíbar, brandy y relleno de crema catalana.',
        precio: '4.00€',
        alergenos: ["huevo", "lacteos"]
      },
    ],
  };