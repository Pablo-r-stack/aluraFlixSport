- [Aluraflix Sports](#aluraflix-sports)
  - [Características](#características)
  - [Tecnologías Utilizadas](#tecnologías-utilizadas)
  - [Estructura del Proyecto](#estructura-del-proyecto)
  - [Instalación](#instalación)
  - [Rutas](#rutas)
  - [Licencia](#licencia)
  - [INFORMACION EXTRA](#informacion-extra)
  - [Contacto](#contacto)


# Aluraflix Sports

Aluraflix Sports es una plataforma diseñada para gestionar vídeos deportivos, con funcionalidades como listar, registrar, actualizar y eliminar videos. Este proyecto te ayudará a poner en práctica y reforzar tus conocimientos en React, utilizando técnicas como componentización, uso de hooks, consumo de API, rutas y más.

## Características

- **Listar Videos**: Ver todos los videos disponibles organizados por diferentes disciplinas deportivas.
- **Registrar Videos**: Agregar nuevos videos a la plataforma.
- **Actualizar Videos**: Editar la información de videos existentes.
- **Eliminar Videos**: Borrar videos que ya no son necesarios.
- **Página 404 Personalizada**: Muestra un mensaje amigable cuando se navega a una ruta no existente.

## Tecnologías Utilizadas

- **React**: Librería principal para construir la interfaz de usuario.
- **Vite**: Herramienta de desarrollo rápida y ligera para proyectos de React.
- **JSON Server**: Mock de servidor para simular una API RESTful.
- **React Router**: Manejo de rutas dentro de la aplicación.
- **React Icons**: Implementación de iconos en los componentes.

## Estructura del Proyecto

```plaintext
src/
|-- public/        # Imágenes y otros recursos estáticos
|-- components/    # Componentes reutilizables de React
|-- pages/         # Componentes de página
|-- services/      # Servicios para interactuar con APIs
|-- App.jsx        # Componente principal de la aplicación
|-- main.jsx       # Punto de entrada de la aplicación
```

## Instalación

- Clonar el Repositorio:
    git clone https://github.com/Pablo-r-stack/aluraFlixSport.git

    cd aluraflix-sports

- Instalar Dependencias:
    npm i

-Iniciar el servidor de desarrollo:
    npm run dev

-Para Json server local deberás instalar json server y usar el db.json ubicado en la carpeta 
    ~~~ /public/data ~~~

-En caso de trabajar con Json server local, Modificar la API_URL en el archivo apiService ubicado en:
    /services/apiService.js

-Abre el navegador y navega por el localhost para ver la aplicación.

## Rutas
    -HomePage ('/') -> muestra landing page inicial con carga de componentes y cartas de video.
    -NewVideo ('/newVideo) -> formulario de carga de video
    -WatchVideo ('/watch/:id) -> visualiza el video deseado en un iframe
    -NotFound ('*') -> pagina 404 personalizada


## Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

## INFORMACION EXTRA
todo lo desarrollado fue hecho con fines didacticos y educativos, basado en los requerimientos del programa 'One' de Alura latam y Oracle.

algunos iconos e imagenes fueron sacados de freepik.

<a href="https://www.freepik.com/search">Icon by riajulislam</a>

## Contacto
Para preguntas o comentarios, puedes contactarme en:

GitHub: pablo-r-stack

