// const http = require("http");
// const { Mutex } = require("async-mutex");

// let requestCount = 0;
// const mutex = new Mutex();

// const server = http.createServer((request, response) => {
//   mutex.runExclusive(async () => {
//     requestCount++;

//     switch (request.url) {
//       case "/students":
//         response.write("student");
//         break;
//       case "/":
//       case "/courses":
//         response.write("FRONT + BACK");
//         break;
//       default:
//         response.write("404 not found");
//     }

//     response.write(" IT-KAMASUTRA " + requestCount);
//     response.end();
//   });
// });

// server.listen(3003);

const http = require("http");

const server = http.createServer((request, response) => {
  switch (request.url) {
    case "/home": {
      const data = "best free online course";
      response.write(data);
      response.end();
      break;
    }
    default: {
      response.write("404 not found");
      response.end();
    }
  }
});

server.listen(3003);
