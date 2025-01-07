const FirstOccurence = (arr)=>{
    let n = arr.length;
    for(let i = 0;i<n;i++)
    {
        if(arr[i]===1)
        {
            return i;
        }
    }
    return 0;


}

console.log(FirstOccurence([0,0,0,1,1,1,1,1,1]))