import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import {renderPage} from './render-page.mjs';
const root=process.cwd();const types={'.html':'text/html','.css':'text/css','.js':'text/javascript','.svg':'image/svg+xml','.png':'image/png','.woff2':'font/woff2'};
http.createServer((req,res)=>{let file=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));if(!file.startsWith(root+path.sep)&&file!==root){res.writeHead(403).end();return;}if(file===root||fs.existsSync(file)&&fs.statSync(file).isDirectory())file=path.join(file,'index.html');if(path.basename(file)==='index.html'&&path.dirname(file)===root){res.writeHead(200,{'Content-Type':'text/html'}).end(renderPage());return;}fs.readFile(file,(error,data)=>{if(error){res.writeHead(404).end('Not found');return;}res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream'});res.end(data);});}).listen(5173,'127.0.0.1',()=>console.log('Portfolio: http://localhost:5173'));

