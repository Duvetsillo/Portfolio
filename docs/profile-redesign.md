# Portfolio personal — revisión local, 17 de octubre de 2026

## Revisar y comparar

Repositorio: `C:\Users\Dayve\Documents\GitHub\Portfolio`.
Rama local: `portfolio/perfil-personal-20261017`.
Nueva versión: `http://127.0.0.1:5180/`.
Anterior, preservada desde `0dba23e`: `http://127.0.0.1:5180/anterior.html`.
Servidor: `python -m http.server 5180 --bind 127.0.0.1`, desde el repositorio.

No se hizo commit, push, publicación ni cambio en GitHub o LinkedIn. Para recuperar el diseño anterior no es necesario borrar nada: `anterior.html` conserva el HTML original y sus CSS y JS siguen intactos. La rama main apunta al mismo commit anterior. No cambiar de rama sobre archivos modificados sin guardar primero esta propuesta.

## Contenido y decisiones

- El usuario pidió su perfil completo: hardware, soporte y proyectos de IA. Aprobó portada personal con foto y construcción directa para revisar la web local.
- Se reemplazó el título aspiracional «System Architect & AI Pioneer» por una descripción concreta del perfil y de los estudios en curso.
- Se distinguieron experiencia profesional, proyectos de software propios e implementaciones personales de servicios de terceros. Jellyfin, Homarr y Proxmox no se presentan como software creado por Dayver.
- CV nuevo de una página; conserva los antecedentes proporcionados y añade los proyectos y la universidad corroborados. No incluye teléfonos de referencias, escalas de habilidad sin fundamento, números inventados ni titulaciones universitarias completadas.
- Dos certificados públicos derivados, con cédula y QR eliminados de la imagen antes de generar PDF. No conservan texto oculto del documento original. Los originales de Downloads no se modificaron. Las imágenes de firmas y entidades se conservan; estas copias no se presentan como originales digitales verificables.
- Insignia de Liderazgo colaborativo: datos del JSON aportado, no una verificación criptográfica independiente. Se usa el nombre, fecha, competencias y arte de la insignia. No se publica el JSON con identificadores internos.
- Datos de formación de LinkedIn y CV difieren en APEC/CENAPEC y en fechas de formación artística; no se infirieron equivalencias. La nueva versión conserva CENAPEC y 2024 del CV y añade O&M, corroborada por ambas fuentes públicas.

## Fuentes consultadas

- [GitHub de Dayver](https://github.com/Duvetsillo) y API pública de repositorios: cinco repositorios públicos; se enlazan proyectos publicados, sin inventar URLs para herramientas locales.
- [LinkedIn](https://www.linkedin.com/in/dayver-moreta-501771419/), secciones Acerca de, Educación y Proyectos, consultadas mediante la sesión existente. O&M: Ingeniería de Sistemas, agosto 2026 a actualidad. Aetherion, Karen, homelab y Jellyfin aparecen en Proyectos. No se modificó el perfil.
- README de Local_AI_Benchmark y repositorios locales en Documents/GitHub: Hardware-Inventory-Automator, Tailscale-AutoConfig, Home-Assistant-Notifier, Home-Ops-Dashboard, Local-LLM-Prompt-Library.
- CV y dos certificados PDF suministrados por el usuario. Las duraciones se comprobaron visualmente, porque la extracción también contiene texto residual de plantilla de 60 horas que no es el texto visible final.
- JSON de la insignia aportado por el usuario: Liderazgo colaborativo, emitida el 17 de septiembre de 2026.

## Verificación

Ver `profile-verification.json`. Comprobados: referencias locales, PDF de una página, presencia de insignia en el CV, preservación del HTML original, sintaxis JavaScript y `git diff --check`. En navegador: ES/EN, apertura y avance de galería, Escape y devolución del foco, menú móvil. Imágenes de documentos y PDF final revisados visualmente.

La captura completa móvil corresponde al panel del usuario (~472 px). Se pudo verificar además la portada de escritorio a 1280 px usando una URL local de revisión independiente: `preview-desktop.png`. Las capturas de página completa en el tab de escritorio fallaron; las secciones inferiores de escritorio se revisaron en código. No se afirma validación visual completa a 1440 px.

El revisor independiente emitió `SHIP for local review` tras comprobar en código las dos correcciones pedidas: contraste del logo al pasar el cursor y metadatos de proyectos colocados después del título. Confirmó además los indicadores de foco por superficie y las etiquetas bilingües de enlaces a certificados. Su alcance visual fue móvil completo, portada de escritorio y CV renderizado, no todas las secciones de escritorio.

## Archivos

`index.html`, `perfil.css` y `perfil.js` implementan la propuesta; `anterior.html` conserva el diseño anterior. `showcase.js` y los recursos antiguos no cambian. `assets/documents/` contiene las copias públicas; `output/pdf/` contiene el CV de entrega. El original de cada documento permanece en Downloads.
