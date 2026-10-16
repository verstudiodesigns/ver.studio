/* ==========================================================================
   VER STUDIO · LISTA DE PROYECTOS
   Este es el ÚNICO archivo que se edita para agregar, quitar u ordenar proyectos.
   Cada proyecto es un bloque { ... } y sus archivos viven en  media/<carpeta>/

   · El orden de esta lista es el orden de "Todos los proyectos": pegá los nuevos ARRIBA.
   · Para sacar un proyecto sin borrarlo: agregale   visible:false,
   · Para agregar uno nuevo: usá agregar-proyecto.html (genera el bloque ya armado).
   · Cada bloque termina con una coma, menos que sea el último. Las comillas siempre rectas ' '.

   CAMPOS
     carpeta      (obligatorio) nombre de la carpeta dentro de media/, sin espacios ni tildes
     titulo       (obligatorio)
     categorias   (obligatorio) botones del filtro. Ej: ['Motion Graphics']. También es el texto que aparece sobre el título en la ficha
     descripcion  (obligatorio) texto breve de la ficha
     inspiracion  opcional: nombre del referente. Se muestra como "Inspirado en …" bajo el título
     subtitulo    opcional: texto libre bajo el título (si hay inspiracion, se usa esa)
     proceso      opcional, lista de pasos del "Proceso de trabajo"
     portada      opcional, imagen de la tarjeta (por defecto: cover.jpg)
     vista        opcional, clip corto y mudo para la home y las tarjetas (por defecto: preview.mp4)
     contenido    videos (con sonido) y fotos de la ficha, en orden:
                  { archivo:'video-1.mp4', titulo:'Texto opcional', poster:'imagen-opcional.jpg' }
                  { archivo:'foto-1.jpg', titulo:'Texto opcional' }
     horizontal   video 16:9 debajo del proceso de trabajo:
                  { archivo:'proceso.mp4', poster:'proceso.jpg', titulo:'Así se hizo' }
                  Sin "archivo" muestra el espacio con "próximamente"; borrá la línea para ocultarlo.
   ========================================================================== */

/* Categorías oficiales. En "Todos los proyectos" aparecen como botones de filtro, en orden alfabético,
   pero SOLO las que tengan al menos un proyecto (por ejemplo "Comunicación Visual" aparece recién
   cuando cargues un proyecto con esa categoría). Para sumar una categoría nueva, agregala acá. */
window.VER_CATEGORIAS=['Branding','Comunicación Visual','Diseño Digital','Motion Graphics','Representación Técnica'];

/* Si reemplazás un archivo por otro con el MISMO nombre, subí este número en 1
   para que los visitantes vean el cambio y no la versión guardada en su navegador. */
window.VER_VERSION='4';

window.VER_PROJECTS=[
     {
    carpeta:'logo-artemis',
    titulo:'Logo Artemis',
    inspiracion:'Mauro Arredondo',
    categorias:['Motion Graphics'],
    descripcion:'Artemis de la Nasa tuvo como objetivo llevar a la primera mujer y a la próxima persona de color a la Luna. Misión histórica que establece la presencia humana sostenible en el satélite natural como base para futuras misiones tripuladas a Marte.',
    proceso:['Conceptualización y bocetaje', 'Desarrollo de Activos y Rigging de elementos, vectores y texturas.', 'Animación y renderizado en alta calidad.'],
    contenido:[
      { archivo:'reel.mp4' },
      { archivo:'foto-1.jpg' }
    ],
    horizontal:{ archivo:'proceso-16x9.mp4', poster:'proceso-16x9.jpg', titulo:'Así se hizo' }
  },

     {
    carpeta:'reel-motivacional-messi',
    titulo:'Reel Motivacional Messi',
    inspiracion:'Mauro Arredondo',
    categorias:['Diseño Digital'],
    descripcion:'Reel vertical de Leo Messi, jugador numero 10 de la Selección Argentina y el Numero 1 del Mundo. Corto motivacional e inspirador para cada Argentino.',
    proceso:['Selección de contenido y planteo visual.', 'Diseño de pantallas e interfaces.', 'Animación de tipografías, elementos y transiciones del proyecto.'],
    contenido:[
      { archivo:'reel.mp4' }
    ],
    horizontal:{ archivo:'proceso-16x9.mp4', poster:'proceso-16x9.jpg', titulo:'Así se hizo' }
  },

  {
    carpeta:'reel-animado-3d',
    titulo:'Reel Animado 3D',
    inspiracion:'Mauro Arredondo',
    categorias:['Motion Graphics'],
    descripcion:'Reel vertical animado que presenta tres aplicaciones para organizar el trabajo (Trello, monday.com y Notion), combinando tipografía en movimiento, interfaces animadas y transiciones dinámicas, con un estilo inspirado en Mauro Arredondo.',
    proceso:['Selección del contenido y planteo visual del reel.','Diseño de las pantallas e interfaces de cada aplicación.','Animación de tipografía, elementos y transiciones, y ajuste del ritmo.'],
    contenido:[
      { archivo:'reel.mp4', titulo:'Reel completo' }
    ],
    horizontal:{ archivo:'proceso-16x9.mp4', poster:'proceso-16x9.jpg', titulo:'Así se hizo: el proceso de animación' }
  },

  {
    carpeta:'branding',
    titulo:'Branding',
    inspiracion:'Nombre del referente',
    categorias:['Branding'],
    descripcion:'Desarrollo de una identidad visual pensada para darle personalidad a una marca y mantener una comunicación coherente en todos sus puntos de contacto.',
    proceso:['Definición del concepto y la personalidad de marca.','Exploración de recursos gráficos, tipografía y paleta cromática.','Aplicación de la identidad en piezas visuales.'],
    portada:'branding.jpg',
    vista:'branding.mp4',
    contenido:[
      { archivo:'branding.mp4', poster:'branding.jpg', titulo:'Video completo' }
    ],
    // Cuando tengas el video 16:9, agregá dentro de horizontal:  archivo:'proceso-16x9.mp4', poster:'proceso-16x9.jpg',
    horizontal:{ titulo:'Así se hizo: el proceso' }
  },

  {
    carpeta:'motion',
    titulo:'Motion Graphics',
    inspiracion:'Nombre del referente',
    categorias:['Motion Graphics'],
    descripcion:'Una pieza audiovisual que combina movimiento, ritmo y recursos gráficos para comunicar una idea de forma dinámica y captar la atención.',
    proceso:['Organización de la idea y la secuencia visual.','Diseño de elementos y composición de escenas.','Animación, transiciones y ajuste del ritmo audiovisual.'],
    portada:'motion-graphics.jpg',
    vista:'motion-graphics.mp4',
    contenido:[
      { archivo:'motion-graphics.mp4', poster:'motion-graphics.jpg', titulo:'Video completo' }
    ],
    // Cuando tengas el video 16:9, agregá dentro de horizontal:  archivo:'proceso-16x9.mp4', poster:'proceso-16x9.jpg',
    horizontal:{ titulo:'Así se hizo: el proceso' }
  },

  {
    carpeta:'social',
    titulo:'Flyer Parallax 3d It ',
    inspiracion:'Mauro Arredondo',
    categorias:['Diseño Digital'],
    descripcion:'Sistema de piezas gráficas para redes sociales, con una línea visual consistente y formatos pensados para comunicar de manera clara en entornos digitales.',
    proceso:['Definición de la línea visual y los formatos.','Diseño de piezas para feed e historias.','Adaptación de los recursos para mantener coherencia entre publicaciones.'],
    portada:'social-media.jpg',
    vista:'social-media.mp4',
    contenido:[
      { archivo:'social-media.mp4', poster:'social-media.jpg', titulo:'Video completo' }
    ],
    // Cuando tengas el video 16:9, agregá dentro de horizontal:  archivo:'proceso-16x9.mp4', poster:'proceso-16x9.jpg',
    horizontal:{ titulo:'Así se hizo: el proceso' }
  },

  {
    carpeta:'planos',
    titulo:'Representación Técnica',
    inspiracion:'Nombre del referente',
    categorias:['Representación Técnica'],
    descripcion:'Representación técnica orientada a organizar información espacial y constructiva mediante planos claros, jerarquías visuales y detalles de lectura precisa.',
    proceso:['Revisión y organización de la información disponible.','Elaboración de vistas, cortes y detalles necesarios.','Jerarquización gráfica para facilitar la lectura de la documentación.'],
    portada:'planos-tecnicos.jpg',
    vista:'planos-tecnicos.mp4',
    contenido:[
      { archivo:'planos-tecnicos.mp4', poster:'planos-tecnicos.jpg', titulo:'Video completo' }
    ],
    // Cuando tengas el video 16:9, agregá dentro de horizontal:  archivo:'proceso-16x9.mp4', poster:'proceso-16x9.jpg',
    horizontal:{ titulo:'Así se hizo: el proceso' }
  }

];
