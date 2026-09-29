const {chromium}=require('playwright');const fs=require('fs');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1512,height:1050}});
const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.emulateMedia({media:'print'});
await p.setContent(fs.readFileSync('print.html','utf8'));await p.evaluate(()=>window.__draw());
await p.pdf({path:'out.pdf',preferCSSPageSize:true,printBackground:true,displayHeaderFooter:true,headerTemplate:'<span></span>',
 footerTemplate:'<div style="font-size:8px;width:100%;text-align:center;color:#777;font-family:DejaVu Sans">صفحة <span class="pageNumber"></span> / <span class="totalPages"></span></div>'});
console.log(errs);await b.close();})();
