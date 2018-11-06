// var process = {
//     argv: ['node', 'C:progectsandboxlearnyounode',1 ,2 ,3 ],
// };
function summ(arr) {
    let rezult = 0;
    for (let i = 2; i < arr.length; i++){
        rezult += Number(arr[i]);
    }
    return rezult;
}


console.log(summ(process.argv));
//console.log(summ(process.argv));