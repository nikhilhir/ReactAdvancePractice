let arr=[6,5,2,4,1]

selectionSort(arr);

function selectionSort(arr){  

for(var i=0; i<arr.length-1; i++){
      let min=i
   for(var j=i+1; j<arr.length; j++){
      
        if(arr[j] < arr[min]){
           
            min=j;
        }
         
    }
    // var temp = arr[i]
    // arr[i]=arr[min]
    // arr[min]=temp
    [arr[i], arr[min]] =[ arr[min], arr[i]];
   
}
console.log(arr.join(" "));
}

