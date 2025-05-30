const socket = io();

const send = document.querySelector("#send-message");
const allMessages = document.querySelector("#all-messages");

// Nuevo: referencia al contenedor de usuarios conectados
const usersList = document.querySelector("#users-list");

send.addEventListener("click", () => {
  const message = document.querySelector("#message");
  if(message.value.trim() === "") return; // evitar enviar vacío
  socket.emit("message", message.value);
  message.value = "";
});

socket.on("message", ({ user, message }) => {
  const msg = document.createRange().createContextualFragment(`
    <div class="message">
      <div class="image-container">
          <img src="/img/perfil.jpg" alt="User image">
      </div>
      <div class="message-body">
          <div class="user-info">
              <span class="username">${user}</span>
              <span class="time">Hace 1 minuto</span>
          </div>
          <p>${message}</p>
      </div>
    </div>
  `);
  allMessages.append(msg);
});

// Mostrar lista de usuarios conectados
socket.on("users-list", (users) => {
  usersList.innerHTML = ""; // limpiar lista
  users.forEach(user => {
    const li = document.createElement("li");
    li.textContent = user;
    usersList.appendChild(li);
  });
});
