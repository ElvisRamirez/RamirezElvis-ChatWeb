# WebChat - Proyecto de Chat en Tiempo Real
# Nombre:Elvis Alexander Ramirez Quishpe

## Introducción

WebChat es una aplicación de chat en tiempo real desarrollada como parte del curso de Socket.io. El objetivo principal es permitir la comunicación instantánea entre usuarios a través de una interfaz web moderna y sencilla, utilizando tecnologías como Node.js, Express y Socket.io.

## Propósito

El propósito de este proyecto es aprender y demostrar el uso de WebSockets para la comunicación bidireccional en tiempo real, así como la integración de middleware, manejo de sesiones y diseño responsivo con Bootstrap.
**⚙️ Implementación del Proyecto**s
📁 Estructura del código
**El proyecto está compuesto por:**

index.html: Interfaz principal del chat.

register.html: Página de registro para ingresar el nombre de usuario.

js/script.js: Controla el envío y recepción de mensajes vía Socket.IO.

js/register.js: Guarda el nombre de usuario en localStorage y redirige al chat.

server.js: Archivo backend con Express y Socket.IO.

css/style.css: Estilos generales.

css/Chat.css y css/register.css: Estilos específicos para cada vista.

**🎨 Mejoras al diseño**
Se integró Bootstrap 5 para una mejor apariencia y responsividad.

Se añadieron Bootstrap Icons.

Se mejoró la estructura con el sistema de grid y flex de Bootstrap.

Se aplicaron márgenes, paddings y colores más modernos.

## Instrucciones para ejecutar el proyecto localmente

1. **Clona el repositorio:**
   ```sh
   git clone https://github.com/paulosk8/webChat.git
   cd webChat
 **Instala las dependencias:**
   npm install

**Ejecuta el servidor:**

El servidor estará disponible en http://localhost:3000.

**Accede a la aplicación:**

Abre tu navegador y visita http://localhost:3000.
Regístrate con un nombre de usuario para acceder al chat.
**Mejoras al diseño y características adicionales**
**Diseño Moderno:** Se implementó Bootstrap y Bootstrap Icons para una interfaz atractiva y responsiva.
**Validación de Usuario:** Se utiliza un middleware para asegurar que solo usuarios registrados puedan acceder al chat.
**Gestión de Sesiones:** El nombre de usuario se almacena en cookies para mantener la sesión activa.
**Mensajería en Tiempo Real:** Integración completa con Socket.io para enviar y recibir mensajes instantáneamente.
**Componentes Visuales Mejorados:** Uso de tarjetas, botones personalizados y estilos CSS para mejorar la experiencia de usuario.
**Notificaciones de Error:** Al intentar ingresar sin nombre de usuario, se muestra una alerta amigable.

Capturas de Funcionalidad


**Conclusiones**
Este proyecto permitió comprender el funcionamiento de los WebSockets y su integración en aplicaciones web modernas. Se reforzaron conceptos de middleware, manejo de sesiones y diseño responsivo. Además, se mejoró la experiencia de usuario mediante la personalización de la interfaz y la validación de datos.


## Conclusiones

Este proyecto permitió comprender el funcionamiento de los WebSockets y su integración en aplicaciones web modernas. Se reforzaron conceptos de middleware, manejo de sesiones y diseño responsivo. Además, se mejoró la experiencia de usuario mediante la personalización de la interfaz y la validación de datos.

## Referencias

- [Documentación de Socket.io](https://socket.io/docs/)
- [Express.js](https://expressjs.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Node.js](https://nodejs.org/)
- [Repositorio del proyecto](https://github.com/paulosk8/webChat)
```



