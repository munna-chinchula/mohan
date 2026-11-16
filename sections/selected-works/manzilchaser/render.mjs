import fs from 'node:fs';

const here=new URL('./',import.meta.url);
const read=file=>fs.readFileSync(new URL(file,here),'utf8');

export function renderStudy(){
  let page=read('page.html');
  const sections=JSON.parse(read('sections.json'));
  for(const {folder} of sections){
    let html=read('sections/'+folder+'/index.html');
    if(folder==='08-design-evolution'){
      html=html.replace('{{exploration}}',read('sections/'+folder+'/exploration.html'));
    }
    page=page.replace('{{'+folder+'}}',html);
  }
  return page;
}
