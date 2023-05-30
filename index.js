// Code your solutions in this file
function writeCards(array, event){
    let newarr = [];
    for (let i=0; i< array.length; i++){
        newarr.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);

    }
return newarr;
}

function countDown(integer){
    while(integer>=0){
        console.log(integer);
        integer--;
    }
}