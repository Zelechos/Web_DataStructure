'use strict'

const p1 = `<h3>Texto de Prueba</h3>
<p>
    Lorem Ipsum es simplemente un texto ficticio de la industria de impresión y composición tipográfica. Lorem Ipsum ha sido el texto ficticio estándar de la industria desde el año 1500, cuando una impresora desconocida tomó una galera de tipo y la revolvió para hacer un libro de muestras. Ha sobrevivido no solo cinco siglos, sino también el salto a la composición electrónica, permaneciendo esencialmente sin cambios. Se popularizó en la década de 1960 con el lanzamiento de las hojas de Letraset que contienen pasajes de Lorem Ipsum, y más recientemente con software de publicación de escritorio como Aldus PageMaker que incluye versiones de Lorem Ipsum.
¿Por qué lo usamos?
Es un hecho establecido desde hace mucho tiempo que un lector se distraerá con el contenido legible de una página al mirar su diseño. El punto de usar Lorem Ipsum es que tiene una distribución de letras más o menos normal, en lugar de usar 'Contenido aquí, contenido aquí', lo que hace que parezca un inglés legible. Muchos paquetes de edición de escritorio y editores de páginas web ahora usan Lorem Ipsum como su texto modelo predeterminado, y una búsqueda de 'lorem ipsum' descubrirá muchos sitios web aún en su infancia. Varias versiones han evolucionado a lo largo de los años, a veces por accidente, a veces a propósito (humor inyectado y similares).
¿De dónde viene?
</p>`;
const p2 = `<h3>Texto de Prueba</h3>
<p>
estoy en el tres 
</p>
<img src="./Img/IconoOfficial.png" alt="">`;

const p3 = `<h3>Texto de Prueba</h3>
<p>
ultima pagina
</p>`;



function EventNav(Cont){
    let Content = document.querySelector("#contenido1");
    let Contenido = [p1,p2,p3];

    Content.innerHTML = Contenido[Cont];
}