var curr=0;
function update(){
    document.getElementById('num').innerText=curr;
}
function decrease(){
   curr--;
   if(curr<0){
    curr=0; 
   }
   update();
}
function increase(){
curr++;
update();
}
function reset(){
curr=0;
update();
}
document.getElementById('dec').addEventListener('click',decrease);
document.getElementById('inc').addEventListener('click',increase);
document.getElementById('res').addEventListener('click',reset);
//var, let, const