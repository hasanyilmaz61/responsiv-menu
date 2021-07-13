let nav=document.getElementById("navi");
let aelelment=document.getElementsByTagName("a");

let esauf=false;

function add(){


if(esauf == false){

for (let i= 0; i < aelelment.length; i++) {
    aelelment[i].style.display="block";

    
}

esauf=true;

}
else{
    for (let i= 0; i < aelelment.length; i++) {
        aelelment[i].style.display="none";
    
        
    }

esauf=false;

}






}

