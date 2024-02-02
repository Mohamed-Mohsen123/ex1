let move='x';
const rows=[];
console.log(move);




function typeMove(id){
  const squareValue=document.getElementById(id);

  if(move==='x'&&squareValue.innerHTML===''){
    move='o';
    squareValue.innerHTML='X';
  }else if(move==='o'&&squareValue.innerHTML===''){
    move='x'
    squareValue.innerHTML='O'
  }
    
  winner();
}




function winner(){

 for(let i=1;i<10;i++){
  rows[i]=document.getElementById('square'+i).innerHTML;
 }


 if(rows[1]===rows[2]&&rows[2]===rows[3]&&rows[1]!=''){
  showResult(1,2,3);
 }else if(rows[4]===rows[5]&&rows[5]===rows[6]&&rows[5]!=''){
  showResult(4,5,6);
 }else if(rows[7]===rows[8]&&rows[8]===rows[9]&&rows[7]!=''){
  showResult(7,8,9);
 }else if(rows[1]===rows[4]&&rows[4]===rows[7]&&rows[1]!=''){
  showResult(1,4,7);
 }else if(rows[2]===rows[5]&&rows[5]===rows[8]&&rows[5]!=''){
  showResult(2,5,8);
 }else if(rows[3]===rows[6]&&rows[6]===rows[9]&&rows[3]!=''){
  showResult(3,6,9);
 }else if (rows[1]===rows[5]&&rows[5]===rows[9]&&rows[1]!=''){
  showResult(1,5,9);
 }else if(rows[3]===rows[5]&&rows[5]===rows[7]&&rows[3]!=''){
  showResult(3,5,7);
 }else{
  let checkDie=0;
  for(let i=1;i<10;i++){
    if(rows[i]!=''){
      checkDie++;
    }
   }
   if(checkDie===9){
    setTimeout(()=>{
      location.reload();
    },100);
   }
 }


}
function showResult(index1,index2,index3){
  
  document.getElementById('square'+index1).classList.toggle('blinking');
  document.getElementById('square'+index2).classList.toggle('blinking');
  document.getElementById('square'+index3).classList.toggle('blinking');

  setTimeout(()=>{
    location.reload();
  },3000);
  
  
}
//iam high at sky
//iam high on the ground