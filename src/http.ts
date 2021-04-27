import express from 'express';
import { createServer } from 'http';
import SocketIO from 'socket.io';
import { Server, Socket } from 'socket.io';
import path from 'path';

import './database';
import { routes } from './routes';

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (req, res) => {
    return res.render("html/client.html")
})

const http = createServer(app); // Criando protocolo http
const io = new Server(http); // Criando protocolo ws

/*
    * GET = Buscas
    * POST = Criação
    * PUT = Alteração
    * DELETE = Deletar
    * PATCH = Alterar uma informação específica
*/

io.on("connection", (socket: Socket) => { // primeiro acesso do user
    console.log('Se conectou', socket.id);
})

app.use(express.json());

app.use(routes);

export { http, io };