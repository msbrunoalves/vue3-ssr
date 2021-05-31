const chalk = require("chalk");
const http = require("http");
var https = require("https");
const app = require("./app");
var fs = require("fs");

var privateKey = fs.readFileSync(__dirname + "/certs/selfsigned.key", "utf8");
var certificate = fs.readFileSync(__dirname + "/certs/selfsigned.crt", "utf8");

var credentials = { key: privateKey, cert: certificate };

const server = http.createServer(app);
var httpsServer = https.createServer(credentials, app);
const port = 8080;
const portHttps = 8443;

function onListening() {
  console.log(
    chalk.green(
      `Server started at http://localhost:${port} and https://localhost:${portHttps}`,
    ),
  );
}

function onError(error) {
  switch (error.code) {
    case "EACCES":
      console.log(`Port ${port} requires elevated privileges`);
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.log(`Port ${port} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

server.listen(port);
httpsServer.listen(portHttps);

server.on("listening", onListening);
server.on("error", onError);
