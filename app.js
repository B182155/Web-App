const output=document.querySelector('.output');
const UTFDecoder=function(){
    let text=document.querySelector('input').value;
    text=text.substring(text.indexOf("arn"));
    const UTF=new Map([['%3A',':'],['%2F','/'],['%20',' ']]);
    const UTFarr=[...UTF];
    for(let i=0;i<UTFarr.length;i++){
        text=text.replaceAll(UTFarr[i][0],UTFarr[i][1]);
    }
    output.textContent=text;
}
const submitBtn=document.querySelector(".submitBtn").addEventListener('click',UTFDecoder);
window.addEventListener('keypress',function(e){
    if(e.key=='Enter')
        UTFDecoder();
})