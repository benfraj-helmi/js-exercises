document.getElementById('rest').onclick=function(){
  document.getElementById('counter').textContent=0;
}

document.getElementById('dec').onclick=function(){
  let f=document.getElementById('counter').textContent;
  f=Number(f);
  f--;
  document.getElementById('counter').textContent=f;
}
document.getElementById('inc').onclick=function(){
  let f=document.getElementById('counter').textContent;
  f=Number(f);
  f++;
  document.getElementById('counter').textContent=f;
}
