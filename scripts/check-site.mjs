import fs from 'node:fs';
import path from 'node:path';
const projects=['manzilchaser','vasthra-shree','academic-app','parkease'];
const pages=['index.html','sections/selected-works/manzilchaser/index.html'];
let count=0;
for(const file of pages){
 const html=fs.readFileSync(file,'utf8');
 if(/\{\{[^}]+\}\}/.test(html))throw Error('Unresolved template in '+file);
 for(const match of html.matchAll(/(?:src|href|srcset)="([^"#]+)"/g)){
  const ref=match[1];if(/^(https?:|mailto:)/.test(ref))continue;
  const target=path.resolve(path.dirname(file),ref.split('#')[0]);
  if(!fs.existsSync(target)||!fs.statSync(target).size)throw Error('Missing asset: '+target);
  count++;
 }
}
for(const mode of ['laptop','tablet','mobile'])for(const project of projects){
 const base=`sections/selected-works/${project}/${mode}`;
 const html=fs.readFileSync(base+'/card.html','utf8');
 if(!fs.statSync(base+'/card.css').size)throw Error('Missing card styles: '+base);
 if(project==='academic-app'&&!html.includes('>_ACADEMIC APP_</p>'))throw Error('Incorrect Academic App label: '+mode);
 if(!html.includes(project==='manzilchaser'?'href=':'data-missing='))throw Error('Missing card action: '+base);
 if(/style=\{\{/.test(html))throw Error('Unconverted style: '+base);
}
console.log(`Verified ${count} local references and all 12 responsive cards.`);
