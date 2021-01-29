const replaceNums = (nums, replaceWith) => {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]%3===0){
            nums[i]=replaceWith;
        }
    }
    return nums;
}


let x = [1, 2, 3];
console.log(replaceNums(x, 'foo'));