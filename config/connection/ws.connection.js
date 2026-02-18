import { Server } from "socket.io";
import handleSocket from "../../controllers/ws.controller.js";

const wsConnection = (httpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: "http://13.51.64.58:5173", // Replace with the frontend origin
      methods: ["GET", "POST"],
      credentials: true,
    },
  });

  io.on("connection", (socket) => handleSocket(socket, io)); // ✅ pass both
};

export default wsConnection;
