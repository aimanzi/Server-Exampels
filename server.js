const { log } = require("console");
const http = require("http");
const port = 3000;

const server = http.createServer((request, response) => {
    if (request.url == "/") {
        response.end(`<b>wellcome to home page</b>`)
    } else {
        if (request.url == "/page1") {
            response.end(`<b>wellcome to page 1</b>`)
            response.statusCode = 200;
        } else {
            if (request.url == "/page2") {
                response.end(`<b>wellcom to page 2</b>`)
                response.statusCode = 200;
            } else {
                response.statusCode = 404;
                response.end("<b>Page not found</b>")
            }
        }
    }

});

server.listen(port, () => {
    console.log(`the server listen to ${port}`);
});

