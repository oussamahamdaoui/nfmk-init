const path = require('path');
const ncp = require('ncp').ncp;
const { spawn } = require("child_process");
const liveServer = require("live-server");

const sourceDir = path.resolve(__dirname, 'defaults');
const destinationDir = process.cwd();

var P = ["\\", "|", "/", "-"];
var x = 0;

if (process.argv[2] === '--watch') {

  spawn('npm', ['run', 'watch'], {
    cwd: destinationDir,
  });

  var params = {
    port: 8181, // Set the server port. Defaults to 8080.
    host: "0.0.0.0", // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
    root: "build", // Set root directory that's being served. Defaults to cwd.
    open: true, // When false, it won't load your browser by default.
    ignore: 'src', // comma-separated string for paths to ignore
    file: "build/index.html", // When set, serve this file (server root relative) for every 404 (useful for single-page applications)
    wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec.
    logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
    middleware: [function (req, res, next) { next(); }] // Takes an array of Connect-compatible middleware that are injected into the server middleware stack
  };
  liveServer.start(params);
} else if (process.argv[2] === '--init') {
  ncp(sourceDir, destinationDir, function (err) {
    if (err) {
      return console.error(err);
    }

    const install = spawn('npm', ['i'], {
      cwd: destinationDir,
    });

    install.stdout.on('data', (data) => {
      process.stdout.write("\r" + P[x++]);
      x &= 3;
    });

    install.on('close', (code) => {
      process.stdout.write("\r" + 'Done!');
    });

  });

}

