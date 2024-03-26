// Code your solution in this file!
function receivesAFunction(callback) {
    callback()
}
function returnsANamedFunction(){
    return function named(){
        console.log()
    }
}
function returnsAnAnonymousFunction(){
    return function(){
        console.log
    }
}