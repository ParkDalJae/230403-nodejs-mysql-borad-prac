const http = require("http")
const url = require("url")
const fs = require("fs")
const path = require("path")

class Server {
  constructor(port){
    this.port = port;
  }
  start(){
    http.createServer((req,res)=>{
      
      const parsedUrl = url.parse(req.url, true)
      /*
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: null,
  query: [Object: null prototype] {},
  pathname: '/',
  path: '/',
  href: '/'
}
*/
      const pathName = parsedUrl.pathname
      const method = req.method

      switch(method){
        case "GET":
          console.log(method,"일때")
          switch(pathName){
            case "/":
              console.log(method,"이고", pathName,'일때')
              this.handleGetRequest(req,res,"index.html")
              // this.handleGetRequest(req,res,"index.html")
              break;
            case "/result":
              console.log(method,"이고", pathName,'일때')
              this.handleGetRequest(req,res,"result.html")
              // this.handleGetRequest(req,res,"index.html")
              break;
            case "/favicon.ico":
              console.log("파비콘")
              break;
            // case "/login":
            //   this.handleGetRequest(req,res)
            //   break;
          }
          break
        case "POST":
          this.handlePostRequest(req,res);
          break;
          
      }

      // if(method === 'GET' && pathName === '/'){
      //   this.handleGetRequest(req,res)
      // } else if(method ==='POST'&&pathName==='/'){
      //   this.handlePostRequest(req,res);
      // }
    }).listen(this.port,()=>{
      console.log(`Server running on port ${this.port}`)
    })
  }
  
  handleGetRequest(req,res,htmlPath) {
    fs.readFile(htmlPath,(err,data)=>{
      if (err){
        res.writeHead(500,{'Content-Type' : `text/html; charset=utf-8`})
        res.end(`500 error 서버에 문제가 있습니다.`)
      }else{
        res.writeHead(200,{'Content-Type' : 'text/html; charset=utf-8'})
        res.write(data)
        res.end()
      }
    })
  }
  
  handlePostRequest(req,res){
    let body = ''
    req.on('data',chunk =>{
      body+=chunk.toString();
    })
    req.on('end',()=>{
      console.log(body)
      res.writeHead(200,{'Content-Type' : 'text/html; charset=utf-8'})
      // res.write(`<h1>${body}</h1>`)
      res.write(`<h1>${body}</h1>`)
      res.end()
    })
  }
}
const server = new Server(2080)
server.start();
