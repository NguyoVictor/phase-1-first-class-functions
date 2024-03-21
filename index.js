
function receivesAFunction(otherFunction){
    return otherFunction()
}
function returnsANamedFunction() {
    return function age() {
        return "Ths is age"
    }
}
function returnsAnAnonymousFunction() {
    return () => "This is an anonymous function"
}