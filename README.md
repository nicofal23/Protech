# Protech Argentina - Sitio web

## Estructura

```
index.html          Inicio
rodillos.html       Productos: rodillos
soportes.html       Productos: soportes
jersey.html         Productos: jersey y remeras
r2r.html            Ready to Ride
contacto.html       Formulario de contacto (EmailJS)
nosotros.html       Quiénes somos
puntoventa.html     Puntos de venta
work.html           Página "en construcción" (no está enlazada)

assets/
  css/
    bootstrap.min.css   Librería Bootstrap
    templatemo.css      Estilos base de la plantilla
    estilos.css         Estilos propios del sitio (ordenados por sección)
    animaciones.css     Animaciones
    work.css            Estilos de work.html
  js/
    layout.js           Header, footer y botón de WhatsApp (comunes a todas las páginas)
    productos.js        Modales "Ver más" con carrusel de fotos
    contacto.js         Envío del formulario de contacto
    animaciones.js      Animaciones al hacer scroll
    bootstrap.bundle.min.js
  img/
    general/ inicio/ rodillos/ soportes/ jersey/ r2r/ puntos-venta/
  webfonts/
    SerpentineDBol.ttf  Fuente del sitio
```

## Cambiar el teléfono, mail, redes o el menú

Todo está en `assets/js/layout.js` (objeto `DATOS` y funciones `headerNuevo` / `headerClasico`).
Se cambia una sola vez y se actualiza en todas las páginas.

## Agregar un producto

1. Copiá una tarjeta en la página (bloque `<!-- NOMBRE -->`) y cambiá foto, nombre, descripción y link de WhatsApp.
2. En el botón "Ver más" poné un id nuevo: `data-abrir-modal="modal-mi-producto"`.
3. Copiá un modal (bloque `<!-- Modal: NOMBRE -->`), poné `id="modal-mi-producto"` y las fotos dentro de `carousel-images`.

No hace falta tocar ningún archivo JavaScript.
