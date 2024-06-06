var http = require("http");
const fs = require("fs");
const url = require("url");

const messages = {
  588327: [],
  588328: [],
  588329: [],
  1: [],
};

const users = {
  588327: [],
  588328: [],
  588329: [],
  1: [],
};

const page = fs.readFileSync("./index.html", "utf-8");

function addMessage(roomId, user, text, recipient) {
  messages[roomId].push({ user, text, recipient });
}

function addUser(roomId, user) {
  users[roomId].push({ user });
}

http
  .createServer(function (req, res) {
    const query = url.parse(req.url, true).query;
    const roomId = parseInt(query.roomId);
    if (req.url.startsWith("/getMessages") && roomId) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(messages[roomId] || []));
    } else if (req.url.startsWith("/getUsers") && roomId) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(users[roomId] || []));
    } else if (req.url === "/addMessage" && req.method === "POST") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        const { user, text, recipient, roomId } = JSON.parse(body);
        addMessage(roomId, user, text, recipient);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ status: "Message added" }));
      });
    } else if (req.url === "/addUser" && req.method === "POST") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        const { user, roomId } = JSON.parse(body);
        addUser(roomId, user);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ status: "User added" }));
      });
    } else if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      return res.end(page);
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      return res.end("404 Page Not Found");
    }
  })
  .listen(8080);
