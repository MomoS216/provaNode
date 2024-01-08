//require è la stessa cosa dell'import
let http=require("http");

http.createServer(function(request,response){
    response.writeHead(200,{'Content-type':"text/plain"});
    response.end("hello world funziona \n");
}).listen(8081);

console.log("Server running on port 8081");