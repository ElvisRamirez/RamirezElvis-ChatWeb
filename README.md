Título del proyecto: Chat en Tiempo Real con Socket.IO

Nombre completo del estudiante: Elvis Alexander Ramirez Quishpe

Fecha de entrega: 30 de mayo de 2025

📘 Introducción
WebChat es una aplicación de chat en tiempo real desarrollada como parte del curso de Socket.IO. El objetivo principal es permitir la comunicación instantánea entre usuarios a través de una interfaz web moderna y sencilla, utilizando tecnologías como Node.js, Express y Socket.IO.

✅ Requisitos del Proyecto
Funcionalidades requeridas:
Comunicación en tiempo real entre múltiples usuarios.

Mostrar la lista de usuarios conectados.

Diseño moderno y responsivo del chat.

Herramientas y tecnologías utilizadas:
Node.js

Express

Socket.IO

HTML/CSS

Bootstrap
Implementación del Proyecto
Estructura del código:
src/views/index.html: Interfaz principal del chat.

src/views/register.html: Página de registro para nuevos usuarios.

src/public/js/script.js: Lógica del cliente para la comunicación en tiempo real.

src/public/js/register.js: Manejo del registro de usuarios.

src/public/css/chat.css y style.css: Estilos personalizados para el chat.

src/realTimeServer.js: Servidor principal que gestiona las conexiones de Socket.IO.

Funcionalidades implementadas:
Registro de usuarios con nombre de usuario único.

Envío y recepción de mensajes en tiempo real.

Visualización de la lista de usuarios conectados.

Diseño responsivo adaptado a diferentes dispositivos.

La interfaz de registro de usuarios.

El chat en funcionamiento con múltiples usuarios.

La lista de usuarios conectados.

El diseño responsivo en diferentes dispositivos.

 Instrucciones de Ejecución
Clonar el repositorio:

bash
Copiar
Editar
git clone https://github.com/ElvisRamirez/RamirezElvis-ChatWeb.git
cd RamirezElvis-ChatWeb
Instalar las dependencias:

bash
Copiar
Editar
npm install
Iniciar el servidor:

bash
Copiar
Editar
node src/realTimeServer.js
Acceder a la aplicación:

Abre tu navegador y navega a http://localhost:3000 para utilizar el chat.
💬 Conclusiones
Durante el desarrollo de este proyecto, se fortalecieron los conocimientos sobre aplicaciones en tiempo real y la utilización de WebSockets mediante Socket.IO. Se enfrentaron desafíos relacionados con la gestión de múltiples conexiones y la sincronización de mensajes, los cuales fueron superados mediante la implementación de eventos personalizados y el manejo adecuado del estado de los usuarios.
## Referencias

- [Documentación de Socket.io](https://socket.io/docs/)
- [Express.js](https://expressjs.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Node.js](https://nodejs.org/)
- [Repositorio del proyecto](https://github.com/paulosk8/webChat)
```



