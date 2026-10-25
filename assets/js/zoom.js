(function(){
var Z=document.getElementById('zoom'),ZI=document.getElementById('zoomImg'),ZW=document.getElementById('zoomWrap'),ZL=document.getElementById('zoomLabel'),lvl=1,last=null;
function setLvl(n){lvl=Math.max(1,Math.min(4,n));ZL.textContent=lvl+'\u00d7';
 if(lvl===1){ZW.style.display='flex';ZW.style.height='100%';ZI.style.width='auto';ZI.style.maxWidth='100%';ZI.style.maxHeight='100%';}
 else{ZW.style.display='block';ZW.style.height='auto';ZI.style.width=(lvl*100)+'%';ZI.style.maxWidth='none';ZI.style.maxHeight='none';}}
document.querySelectorAll('[data-zoom]').forEach(function(b){b.addEventListener('click',function(){
 last=b;ZI.src=b.getAttribute('data-zoom');ZI.alt=b.getAttribute('data-zoom-title');
 document.getElementById('zoomTitle').textContent=b.getAttribute('data-zoom-title');
 Z.hidden=false;Z.style.display='flex';document.body.style.overflow='hidden';setLvl(1);document.getElementById('zoomClose').focus();});});
function closeZ(){Z.hidden=true;Z.style.display='none';document.body.style.overflow='';if(last)last.focus();}
document.getElementById('zoomClose').addEventListener('click',closeZ);
document.getElementById('zoomIn').addEventListener('click',function(){setLvl(lvl+1)});
document.getElementById('zoomOut').addEventListener('click',function(){setLvl(lvl-1)});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!Z.hidden)closeZ();});
Z.style.display='none';
var T=document.querySelector('.to-top');if(T){var u=function(){var s=window.scrollY>600;T.style.opacity=s?1:0;T.style.pointerEvents=s?'auto':'none';};window.addEventListener('scroll',u,{passive:true});u();}
})();
