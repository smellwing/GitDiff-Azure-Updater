# Integración de Git Diff, Gemini y Azure

Este proyecto te permite automatizar la actualización de tareas en Azure basándote en los cambios detectados en tu repositorio Git. Utiliza el poder de Gemini, un modelo de lenguaje de gran escala, para interpretar los resultados de `git diff` y generar instrucciones claras para Azure. Además, el script genera un correo electrónico resumen para mantenerte informado sobre las acciones realizadas.

## Características

* **Análisis de `git diff`**: Lee y procesa la salida de `git diff` para identificar los cambios relevantes en tu código.
* **Prompt de Gemini**: Construye un prompt inteligente que proporciona a Gemini el contexto necesario para entender los cambios y generar las acciones apropiadas en Azure.
* **Actualización de Azure**: Utiliza la API de Azure (requiere implementación) para llevar a cabo las actualizaciones en tus tareas, basándose en las instrucciones de Gemini.
* **Generación de correo electrónico**: Crea un correo electrónico resumen que detalla las modificaciones realizadas en Azure, facilitando el seguimiento de tu flujo de trabajo.
* **Flexibilidad**: Incluye scripts tanto para PowerShell/bash como para Node.js, adaptándose a tu entorno de desarrollo preferido.

## Requisitos

* **Acceso a Gemini**: Necesitarás un token de acceso válido para la API de Gemini.
* **Credenciales de Azure**: Asegúrate de tener las credenciales necesarias para interactuar con la API de Azure.
* **Node.js (opcional)**: Si planeas utilizar la versión del script en Node.js, asegúrate de tener Node.js y las dependencias `dotenv` y `node-fetch` instaladas.

## Configuración

1. **Clona el repositorio**: 
   ```bash
   git clone [se quitó una URL no válida]
   Variables de entorno:

    Crea un archivo .env en la raíz del proyecto y añade tu token de acceso a Gemini:

    TU_TOKEN_GEMINI=tu_token_de_gemini

    (Opcional) Si usas la versión de Node.js, también puedes añadir tus credenciales de Azure en el archivo .env.

2. **Implementación de Azure**:

    Reemplaza los comentarios en los scripts con el código necesario para interactuar con la API de Azure y actualizar tus tareas.
## Uso

    PowerShell/bash:
        Ejecuta chmod +x script_azure.sh para dar permisos de ejecución al script.
        Ejecuta ./script_azure.sh.

    Node.js:
        Ejecuta npm install para instalar las dependencias.
        Ejecuta node script_azure.js.

Notas importantes
- Manejo de errores: Los scripts proporcionados son básicos y no incluyen un manejo de errores robusto. Te recomendamos añadirlo para una mejor experiencia.-
- Seguridad: Nunca almacenes tokens o credenciales directamente en el código. Utiliza variables de entorno o mecanismos de almacenamiento seguro.
- Adaptación: Este proyecto es un punto de partida. Siéntete libre de personalizarlo y ampliarlo según tus necesidades específicas.

¡Esperamos que esta herramienta te ayude a optimizar tu flujo de trabajo y a mantener tus tareas de Azure sincronizadas con tus cambios en Git! Si tienes alguna pregunta o sugerencia, no dudes en abrir un issue o enviar un pull request.

**¡Feliz codificación!**
