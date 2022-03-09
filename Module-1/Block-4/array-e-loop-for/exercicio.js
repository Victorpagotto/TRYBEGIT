let nums = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let count=0;
function sumUp (nums){
    let sumUp=null;
    for (let i=0; i<nums.length;i++){
        sumUp+=nums[i];
    }
    return sumUp;
}

function exercicio_1 (nums){
    for (let i=0; i<nums.length; i++){
        console.log(nums[i]);
    }
}

function exercicio_2 (nums){
    console.log(sumUp(nums));
}
function exercicio_3 (nums){
    let ave=sumUp(nums)/nums.length;
    return ave;
}

function exercicio_4 (nums) {
    if (exercicio_3(nums)>20){
        console.log('Bigger than 20.');
    }else{
        console.log('Smaller than 20.');
    }
}
function exercicio_5 (nums){
    bigOne=nums[0];
    for (let i=0; i<nums.length;i++){
        if (bigOne<nums[i]){
            bigOne=nums[i];
        }
    }
    return bigOne;
}
function exercicio_6 (nums){
    let count=0;
    for (let i=0; i<nums.length;i++){
        if (nums[i]%2!==0){
            count++;
        }
    }
    if (count>0){
        return count;
    }else{
        return 'No odd numbers.'
    }
}
function exercicio_7 (nums){
    smallOne=nums[0];
    for (let i=0; i<nums.length;i++){
        if (smallOne>nums[i]){
            smallOne=nums[i];
        }
    }
    return smallOne;
}
function exercicio_8 (count){
    let arr=[];
    for (let i=1;i<=count;i++){
        arr.push(i);
    }
    return arr;
}
function exercicio_9(count){
    let arr=exercicio_8(count);
    let arrBy2=[];
    for (let i=0; i<arr.length; i++){
        arrBy2.push(arr[i]/2);
    }
    return arrBy2;
}

console.log('------------1------------');
exercicio_1(nums);
console.log('------------2------------');
exercicio_2(nums);
console.log('------------3------------');
console.log(exercicio_3(nums));
console.log('------------4------------');
exercicio_4(nums);
console.log('------------5------------');
console.log(exercicio_5(nums));
console.log('------------6------------');
console.log(exercicio_6(nums));
console.log('------------7------------');
console.log(exercicio_7(nums));
console.log('------------8------------');
console.log(exercicio_8(25));
console.log('------------9------------');
console.log(exercicio_9(25));
console.log('-------------------------');