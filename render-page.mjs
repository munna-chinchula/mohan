import fs from 'node:fs';
export function renderPage(){
 const names=['hero','selected-works','journey','life-beyond-screen','footer'];
 let html=fs.readFileSync(new URL('./page.html',import.meta.url),'utf8');
 html=html.replace('{{navigation}}',fs.readFileSync(new URL('./sections/hero/navigation.html',import.meta.url),'utf8'));
 for(const name of names){
  let section=fs.readFileSync(new URL('./sections/'+name+'/index.html',import.meta.url),'utf8');
  if(name==='selected-works'){
   for(const mode of ['laptop','tablet','mobile'])section=section.replace('{{layout:'+mode+'}}',fs.readFileSync(new URL('./sections/selected-works/'+mode+'/index.html',import.meta.url),'utf8'));
   const projects=JSON.parse(fs.readFileSync(new URL('./sections/selected-works/projects.json',import.meta.url),'utf8'));
   for(const {folder}of projects)for(const mode of ['laptop','tablet','mobile'])section=section.replace('{{card-'+mode+':'+folder+'}}',fs.readFileSync(new URL('./sections/selected-works/'+folder+'/'+(mode+'/card.html'),import.meta.url),'utf8'));
  }
  html=html.replace('{{'+name+'}}',section);
 }
 return html;
}
