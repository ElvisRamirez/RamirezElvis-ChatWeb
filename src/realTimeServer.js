module.exports = (httpServer) => {
  const { Server } = require("socket.io");
  const io = new Server(httpServer);

  // Lista para usuarios conectados (usernames únicos)
  const users = new Set();

  io.on("connection", (socket) => {
    const cookie = socket.handshake.headers.cookie || "";
    const user = cookie.split("username=").pop().split(";")[0] || "Anon";

    // Agregamos el usuario a la lista
    users.add(user);

    // Emitimos la lista actualizada a todos
    io.emit("users-list", Array.from(users));

    // Cuando alguien envía un mensaje
    socket.on("message", (message) => {
      io.emit("message", { user, message });
    });

    // Cuando un usuario se desconecta
    socket.on("disconnect", () => {
      users.delete(user);
      io.emit("users-list", Array.from(users));
    });
  });
};
