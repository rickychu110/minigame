//document.querySelectorAll(".box").onclick = function(event){
//    console.log("this is click");
//}
let turn=0
let boxitems = document.querySelectorAll(".box");
for(let boxitem of boxitems){
        boxitem.addEventListener('click',(event)=>{
        if(boxitem.innerHTML =='' && turn%2==0){     
    
         boxitem.innerHTML = 'X';
         return turn=turn+1;
         
         
         
        }else if(boxitem.innerHTML =='' && turn%2!==0){
         boxitem.innerHTML = 'O';
         return turn=turn+1;

        }
        
        
    })
}


let winPattern = [
        [0,1,2]
        [3,4,5]
        [6,7,8]
        [0,3,6]
        [1,4,7]
        [2,5,8]
        [0,4,8]
        [2,4,6]
    
];
let gameboard=[0,0,0,0,0,0,0,0,0]
function updategameboard(idx){
        gameboard[idx] = turn%2==0 ?1:2;
}
 
//true=available  false => occupy
function checkavailable(idx){
        return gameboard[0] ==0;

}
function checkwin(){
    let iswin =false;
    let idx = 0;
    while (!iswin){
        
    }
}

let bb=[0,0,0,0,0,0,0,0,0]
bb[0]=document.getElementById('b0').innerHTML
bb[1]=document.getElementById('b1').innerHTML
bb[2]=document.getElementById('b2').innerHTML
bb[3]=document.getElementById('b3').innerHTML
bb[4]=document.getElementById('b4').innerHTML
bb[5]=document.getElementById('b5').innerHTML
bb[6]=document.getElementById('b6').innerHTML
bb[7]=document.getElementById('b7').innerHTML
bb[8]=document.getElementById('b8').innerHTML



if(bb[0]==bb[1]==bb[2] || bb[0]==bb[3]==bb[6]
        || bb[4]==bb[0]==bb[8] || bb[1]==bb[4]==bb[7]
        || bb[8]==bb[5]==bb[2] || bb[6]==bb[4]==bb[2]
        || bb[3]==bb[4]==bb[5] || bb[6]==bb[7]==bb[8]){
            const p = document.getElementsByTagName('p');
            p[0].innerHTML = 'hello World'
} 







