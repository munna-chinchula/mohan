import fs from 'node:fs';
export function renderPage(){
 const names=['hero','selected-works','journey','life-beyond-screen','footer'];
 let html=fs.readFileSync(new URL('./page.html',import.meta.url),'utf8');
 html=html.replace('{{navigation}}',fs.readFileSync(new URL('./sections/hero/navigation.html',import.meta.url),'utf8'));
 for(const name of names){
  let section=fs.readFileSync(new URL('./sections/'+name+'/index.html',import.meta.url),'utf8');
  if(name==='selected-works'){
   const projects=JSON.parse(fs.readFileSync(new URL('./sections/selected-works/projects.json',import.meta.url),'utf8'));
   for(const {folder}of projects)section=section.replace('{{card:'+folder+'}}',fs.readFileSync(new URL('./sections/selected-works/'+folder+'/card.html',import.meta.url),'utf8'));
  }
  html=html.replace('{{'+name+'}}',section);
 }
 return html;
}
