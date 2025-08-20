// Función para generar dinámicamente los tabs de categorías
/* function generarSelectores() {
    const menuTab = document.getElementById('myTab');
    Object.keys(menuItems).forEach((categoria, index) => {
        const li = document.createElement('li');
        li.className = 'nav-item';
        
        li.innerHTML = `
            <a class="nav-link ${index === 0 ? 'active' : ''}" id="${categoria}-tab" data-bs-toggle="tab" href="#${categoria}-content" role="tab" data-categoria="${categoria}">
                ${categoria}
            </a>`;
        
        // Agregar el evento de clic al enlace de la categoría
        li.querySelector('a').addEventListener('click', (e) => {
            e.preventDefault(); // Evitar el comportamiento por defecto
            const categoriaSeleccionada = e.target.getAttribute('data-categoria');
            
            // Comprobar si la categoría es "menu"
            if (categoriaSeleccionada === 'brunch') {
                window.location.href = './brunch/'; // Redirigir a la ruta ./menu/
            } else {
                cambiarCategoria(categoriaSeleccionada); // Cambiar el contenido del menú
            }
        });

        menuTab.appendChild(li);
    });
} */

function generarSelectores() {
    const menuTab = document.getElementById('myTab');
    Object.keys(menuItems).forEach((categoria, index) => {
        const li = document.createElement('li');
        li.className = 'nav-item';

        // Verifica si es brunch para aplicar clase especial
        const claseExtra = categoria === 'brunch' ? 'selector-brunch' : '';

        li.innerHTML = `
            <a class="nav-link ${index === 0 ? 'active' : ''} ${claseExtra}" 
               id="${categoria}-tab" 
               data-bs-toggle="tab" 
               href="#${categoria}-content" 
               role="tab" 
               data-categoria="${categoria}">
                ${categoria}
            </a>`;

        // Evento de clic
        li.querySelector('a').addEventListener('click', (e) => {
            e.preventDefault();
            const categoriaSeleccionada = e.target.getAttribute('data-categoria');

            if (categoriaSeleccionada === 'brunch') {
                window.location.href = './brunch/';
            } else {
                cambiarCategoria(categoriaSeleccionada);
            }
        });

        menuTab.appendChild(li);
    });
}


// Función para generar el contenido del menú para una categoría
function generarMenu(categoria) {
    const container = document.getElementById('myTabContent');
    
    // Agregar clase fade-out para iniciar la animación de salida
    container.classList.remove('fade-in');
    container.classList.add('fade-out');
    
    // Esperar a que la animación de salida se complete antes de cambiar el contenido
    setTimeout(() => {
        container.innerHTML = ''; // Limpiar el contenido previo
        
        // Verificar si la categoría existe en menuItems
        if (menuItems[categoria]) {
            menuItems[categoria].forEach((item, index) => {
                const div = document.createElement('div');
                div.className = 'col-md-6';

                const alergenosHTML = item.alergenos ? item.alergenos.map(alergeno => {
                    const iconUrl = alergenosIcons[alergeno];
                    return iconUrl ? `<img loading="lazy" class="alergeno-icon" data-alergeno="${alergeno}" src="${iconUrl}" alt="${alergeno}">` : '';
                }).join('') : '';

                div.innerHTML = `
                    <div class="box ${item.especial ? 'especial' : ''}">
                        <div class="single_menu">
                            <div class="food-img">
                                <img loading="lazy" src="${item.img}" alt="${item.nombre}">
                            </div>
                            <div class="menu_content">
                                <div class="top-names">
                                    <p class="nombre">${item.nombre}</p>
                                    <div class="alergenos">
                                        ${alergenosHTML}
                                    </div>
                                </div>
                                <div class="low-content">
                                    <p>${item.descripcion}</p>
                                    <span>${item.precio}</span>
                                </div>
                            </div>
                        </div>
                    </div>`;
                
                // Agregar el elemento al contenedor
                container.appendChild(div);

                // Agregar la clase fade-in después de un pequeño retraso
                setTimeout(() => {
                    div.classList.add('fade-in');
                }, index * 300); // Delay incrementando para cada elemento
            });
        } else {
            console.warn(`La categoría "${categoria}" no existe en menuItems.`);
        }

        // Después de actualizar el contenido, aplicar el fade-in
        container.classList.remove('fade-out');
        container.classList.add('fade-in');
        
    }, 400); // Tiempo de espera para el fade-out antes de cambiar el contenido
}

// Función para cambiar la categoría activa
function cambiarCategoria(categoria) {
    localStorage.setItem('categoriaSeleccionada', categoria); // Guardar la categoría seleccionada
    generarMenu(categoria);

    // Cambiar la clase active del tab
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active'); // Eliminar active de todos los tabs
    });

    const tabSeleccionado = document.querySelector(`[data-categoria="${categoria}"]`);
    if (tabSeleccionado) {
        tabSeleccionado.classList.add('active'); // Añadir active al tab seleccionado
    }
}

// Generar todo el contenido al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    generarSelectores(); // Generar los tabs de categorías

    // Cargar la categoría inicial
    const categoriaInicial = cargarCategoriaInicial();
    cambiarCategoria(categoriaInicial); // Asegura que se llame para activar una categoría

    // Añadir evento a los tabs (esto se hace dentro de generarSelectores ahora)
});

// Función para cargar la categoría seleccionada
function cargarCategoriaInicial() {
    // Aquí puedes seleccionar manualmente una categoría para que esté activa al cargar la página
    // En este caso, simplemente seleccionamos la primera categoría
    return Object.keys(menuItems)[0]; 
}