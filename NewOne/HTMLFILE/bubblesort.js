

let arr = [6, 5, 2, 4, 1];

BubbleSort(arr);

function BubbleSort(arr) {
 
    for(var i=0;i < arr.length -1;i++){

        for(var j=0; j < arr.length-i-1;j++){
            
            if(arr[j] > arr[j+1]){

                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }

    }

    console.log(arr.join(" "));
}
