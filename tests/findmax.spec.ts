import { test, expect } from '@playwright/test'; 
function findMax(...args: number[]): number {
    let  max = args[0];
    for (let num of args){
        if (num > max){
            max = num;
        }   
    }
    return max;

}
console.log(findMax(3, 5, 1, 8, 2)); // Output: 8
console.log(findMax(-1, -5, -3)); // Output: -1




