let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function sorter (nums, mode){
    let holder=0;
    mode.toLowerCase();
    switch (mode){
        case 'crescent':
            for (let c=0; c<nums.length-1; c++){
                for (let i=0; i<nums.length-c;i++){
                    if (nums[i]>nums[i+1]){
                        holder=nums[i+1];
                        nums[i+1]=nums[i];
                        nums[i]=holder;
                    }
                }
            }
        break;
        case 'decrescent':
            for (let c=0; c<nums.length-1; c++){
                for (let i=0; i<nums.length-c;i++){
                    if (nums[i]<nums[i+1]){
                        holder=nums[i+1];
                        nums[i+1]=nums[i];
                        nums[i]=holder;
                    }
                }
            }
        break;
        default:
            console.log('Mode not provided as second argument. Insert "crescent" or "decrescent". ');
    }
    return nums;
}
function calculation (nums){
    let arr=[];
    for (let i=0; i<nums.length-1; i++){
        arr.push(nums[i]*nums[i+1]);
    }
    arr.push(nums[nums.length-1]*2);
    return arr;
}
console.log(calculation(numbers));
console.log(sorter(numbers, 'crescent'));



