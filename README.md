# PlaylistChallenge

Se solicita desarrollar una aplicación que permita reproducir un listado de temas de un álbum determinado y la adición de nuevos temas.

## Listado de álbumes
Mostrar los álbumes disponibles en base al diseño solicitado con los datos de la API provista. Esta pantalla se debe mostrar inicialmente.

**API**: [https://62ec30ee818ab252b6f9352d.mockapi.io/albums](https://62ec30ee818ab252b6f9352d.mockapi.io/albums) (GET)

## Nueva canción
Crear un formulario que permita cargar una nueva canción de un álbum determinado con las siguientes validaciones:

- **Nombre**: requerido y máximo de 20 caracteres.
- **Duración**: requerido, control de tipo rango que permita valores entre 1 y 300. Mostrar el valor actual en una etiqueta aparte.
- **Orden**: requerido, numérico. Se usará luego en el reproductor.
- **Fecha**: requerido.
- **Usuario**: usuario por el cual se debe filtrar para evitar problemas de concurrencia.

**API**: [https://62ec30ee818ab252b6f9352d.mockapi.io/albums/ID_ALBUM/songs](https://62ec30ee818ab252b6f9352d.mockapi.io/albums/ID_ALBUM/songs) (POST)

## Reproductor
Desarrollar una página que simule un reproductor. El reproductor debe:

- Iniciar la reproducción mostrando la duración y cuánto tiempo lleva reproduciendo.
- Permitir pausar (botón **Stop**) y reanudar la reproducción (botón **Play**).
- Al abrir el reproductor, debe reproducirse la primera canción según el orden.
- Incluir una opción para avanzar a la siguiente canción (según el orden).
  - Si no hay ninguna canción luego de la actual, no se debe mostrar la opción de avanzar.
- Incluir una opción para cerrar el reproductor y volver al listado de álbumes.

Para filtrar la API por campos, se deben proveer parámetros por query string al final de la URL. Tener en cuenta que la respuesta siempre será un listado de datos, incluso si solo se encuentra un elemento.

**API**: [https://62ec30ee818ab252b6f9352d.mockapi.io/albums/ID_ALBUM/songs](https://62ec30ee818ab252b6f9352d.mockapi.io/albums/ID_ALBUM/songs) (GET)

## Consideraciones
- Utilizar **routing** o servicios con **Observables** para resolver la visualización de los distintos componentes.
- Implementar la comunicación con la API proporcionada. También pueden replicar la misma API con una cuenta personal de **Mock API**.
