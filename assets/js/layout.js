/* =========================================================
   PROTECH ARGENTINA - Partes comunes de todas las páginas
   ---------------------------------------------------------
   El header, el footer y el botón flotante de WhatsApp se
   escriben UNA sola vez acá y se insertan en cada página.

   En el HTML se usan así:
     <div data-incluir="header"></div>
     <div data-incluir="whatsapp" data-link="https://wa.link/xxxx"></div>
     <div data-incluir="footer"></div>

   Opciones (atributos data-*):
     header   -> data-variante="clasico"  (header viejo, sin foto de fondo)
                 data-logo="..."          (solo variante clásica)
                 data-telefono="..."
     footer   -> data-titulo="..."  data-telefono="..."
     whatsapp -> data-link="..."
   ========================================================= */

const DATOS = {
    email: 'rodillos.protech.ros@gmail.com',
    telefono: '3416899880',
    facebook: 'https://web.facebook.com/ProTech.Argentina.ar',
    instagram: 'https://www.instagram.com/protech.argentina',
    tiendaOnline: 'https://protechargentina.mitiendanube.com/',
};


/* ---------- Barra superior (mail, teléfono y redes) ---------- */

function barraSuperior(telefono) {
    return `
    <nav class="navbar navbar-expand-lg navbar-light d-none d-lg-block" id="templatemo_nav_top">
        <div class="container text-light">
            <div class="w-100 d-flex justify-content-between">
                <div>
                    <i class="fa fa-envelope mx-2"></i>
                    <a class="navbar-sm-brand text-light text-decoration-none" href="mailto:${DATOS.email}">${DATOS.email}</a>
                    <i class="fa fa-phone mx-2"></i>
                    <a class="navbar-sm-brand text-light text-decoration-none" href="tel:${telefono}">${telefono}</a>
                </div>
                <div>
                    <a class="text-light" href="${DATOS.facebook}" target="_blank" rel="sponsored">
                        <i class="fab fa-facebook-f fa-sm fa-fw me-2"></i>
                    </a>
                    <a class="text-light" href="${DATOS.instagram}" target="_blank">
                        <i class="fab fa-instagram fa-sm fa-fw me-2"></i>
                    </a>
                </div>
            </div>
        </div>
    </nav>`;
}


/* ---------- Barra principal (logo + menú) ---------- */

function barraPrincipal(logoHTML, itemsMenu) {
    return `
    <nav class="navbar navbar-expand-lg navbar-light shadow">
        <div class="container d-flex justify-content-between align-items-center Contenedortitulo">
            <div class="containera" id="intro">
                <div class="box">
                    ${logoHTML}
                </div>
            </div>

            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
                data-bs-target="#templatemo_main_nav" aria-label="Abrir menú">
                <i class="fas fa-bars"></i>
            </button>

            <div class="align-self-center collapse navbar-collapse flex-fill d-lg-flex justify-content-lg-between p-1"
                id="templatemo_main_nav">
                <div class="flex-fill">
                    <ul class="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                        ${itemsMenu}
                    </ul>
                </div>
            </div>
        </div>
    </nav>`;
}

function itemMenu(texto, href) {
    return `<li class="nav-item"><a class="nav-link" href="${href}">${texto}</a></li>`;
}

function menuProductos(productos) {
    const links = productos
        .map(([texto, href]) => `<li><a class="dropdown-item" href="${href}">${texto}</a></li>`)
        .join('\n');

    return `
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
            PRODUCTOS
        </a>
        <ul class="dropdown-menu">${links}</ul>
    </li>`;
}


/* ---------- Header nuevo (con foto de fondo) ---------- */

function headerNuevo() {
    const logo = `<img src="./assets/img/general/LOGOPROTECH.png" alt="Logo Protech" class="imagenLogo tituloprimera">`;

    const menu = [
        itemMenu('INICIO', 'index.html'),
        menuProductos([
            ['RODILLOS', 'rodillos.html'],
            ['SOPORTES', 'soportes.html'],
            ['ACCESORIOS', 'index.html'],
        ]),
        itemMenu('CONTACTO', 'contacto.html'),
        itemMenu('NOSOTROS', 'nosotros.html'),
        itemMenu('PUNTOS DE VENTA', 'puntoventa.html'),
        `<li class="tienda">
            <a href="${DATOS.tiendaOnline}">
                <h3>Compras Online</h3>
                <img src="./assets/img/general/CARRITO.png" alt="Tienda online">
            </a>
        </li>`,
    ].join('\n');

    return `
    <header class="header-fondo">
        ${barraSuperior(DATOS.telefono)}
        ${barraPrincipal(logo, menu)}
    </header>`;
}


/* ---------- Header clásico (jersey y r2r) ---------- */

function headerClasico({ logo, telefono }) {
    const logos = `
        <img src="${logo}" alt="imagenInicio" class="remeralogo tituloprimera">
        <img src="./assets/img/general/logo.png" alt="Logo Protech" class="imagenLogo tituloprimera">`;

    const menu = [
        itemMenu('INICIO', 'index.html'),
        menuProductos([
            ['RODILLOS', 'rodillos.html'],
            ['SOPORTES', 'soportes.html'],
            ['JERSEY', 'jersey.html'],
        ]),
        itemMenu('CONTACTO', 'contacto.html'),
        itemMenu('PUNTOS DE VENTA', 'puntoventa.html'),
        `<li>
            <a href="r2r.html" class="nav-banner">
                <img src="./assets/img/general/nuevo_banner.jpg" alt="Ir a Ready to Ride">
            </a>
        </li>`,
    ].join('\n');

    return barraSuperior(telefono) + barraPrincipal(logos, menu);
}


/* ---------- Footer ---------- */

function footer({ titulo, telefono }) {
    return `
    <footer class="bg-dark" id="tempaltemo_footer">
        <div class="container">
            <div class="row">
                <div class="col-md-4 pt-5">
                    <h2 class="h2 text-success border-bottom pb-3 border-light logo">${titulo}</h2>
                    <ul class="list-unstyled text-light footer-link-list">
                        <li>
                            <i class="fa fa-phone fa-fw"></i>
                            <a class="text-decoration-none" href="tel:${telefono}">${telefono}</a>
                        </li>
                        <li>
                            <i class="fa fa-envelope fa-fw"></i>
                            <a class="text-decoration-none" href="mailto:${DATOS.email}">${DATOS.email}</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="row text-light mb-4">
                <div class="col-12 mb-3">
                    <div class="w-100 my-3 border-top border-light"></div>
                </div>
                <div class="col-auto me-auto">
                    <ul class="list-inline text-left footer-icons">
                        <li class="list-inline-item border border-light rounded-circle text-center">
                            <a class="text-light text-decoration-none" target="_blank" href="${DATOS.facebook}"><i class="fab fa-facebook-f fa-lg fa-fw"></i></a>
                        </li>
                        <li class="list-inline-item border border-light rounded-circle text-center">
                            <a class="text-light text-decoration-none" target="_blank" href="${DATOS.instagram}"><i class="fab fa-instagram fa-lg fa-fw"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="w-100 bg-black py-3">
            <div class="container">
                <div class="row pt-2">
                    <div class="col-12">
                        <p class="text-left text-light">
                            Copyright &copy; 2024 ProtechArgentina
                            | Designed by <a rel="sponsored" href="https://www.digitalnest.com.ar/" target="_blank">DigitalNest</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>`;
}


/* ---------- Botón flotante de WhatsApp ---------- */

function botonWhatsapp({ link }) {
    return `
    <a href="${link}" class="whatsapp-button" target="_blank">
        <img src="./assets/img/general/whatsapp.png" alt="WhatsApp">
    </a>`;
}


/* ---------- Insertar todo en la página ---------- */

const COMPONENTES = {
    header: (d) => (d.variante === 'clasico'
        ? headerClasico({ logo: d.logo, telefono: d.telefono || DATOS.telefono })
        : headerNuevo()),
    footer: (d) => footer({
        titulo: d.titulo || 'Protech Argentina',
        telefono: d.telefono || DATOS.telefono,
    }),
    whatsapp: (d) => botonWhatsapp({ link: d.link }),
};

document.querySelectorAll('[data-incluir]').forEach((lugar) => {
    const crear = COMPONENTES[lugar.dataset.incluir];
    if (crear) {
        lugar.outerHTML = crear(lugar.dataset);
    }
});
