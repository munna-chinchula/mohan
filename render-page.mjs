import fs from 'node:fs';
export function renderPage(){
 const names=['hero','selected-works','journey','life-beyond-screen','footer'];
 let html=fs.readFileSync(new URL('./page.html',import.meta.url),'utf8');
 html=html.replace('{{navigation}}',fs.readFileSync(new URL('./sections/hero/navigation.html',import.meta.url),'utf8'));
 for(const name of names)html=html.replace('{{'+name+'}}',fs.readFileSync(new URL('./sections/'+name+'/index.html',import.meta.url),'utf8'));
 return html;
}
